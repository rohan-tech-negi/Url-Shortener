import express from "express";
import db from "../db/index.js"
import { usersTable } from "../models/users.model.js";
import { createHmac, randomBytes } from "crypto";
import { eq } from "drizzle-orm"; // Ensure you import 'eq'
import signupPostRequestBodySchema from "../utils/request.validation.js";

const router = express.Router();

router.post("/sign-up", async (req, res) => {
    // 1. Fix: Use req.body (not res.body)
    const validationResult = await signupPostRequestBodySchema.safeParseAsync(req.body);
    
    if (!validationResult.success) {
        return res.status(400).json({ error: validationResult.error.format() });
    }

    const { firstname, lastname, email, password } = validationResult.data;

    // 2. Fix: Corrected Drizzle query syntax
    const [existingUser] = await db.select({
        id: usersTable.id
    })
    .from(usersTable) // Fix: Select from the table, not the variable existingUser
    .where(eq(usersTable.email, email));

    // 3. Logic: This MUST be inside the async function
    if (existingUser) {
        return res.status(400).json({ message: `user with this ${email} already existed` });
    }

    // --- Salting Logic ---
    const salt = randomBytes(16).toString('hex'); // 16-32 bytes is usually plenty
    const hashedPassword = createHmac('sha256', salt)
        .update(password)
        .digest('hex');

    const [user] = await db.insert(usersTable).values({
        email,
        lastname,
        firstname,
        salt,
        password: hashedPassword
    }).returning({ id: usersTable.id });

    return res.status(200).json({ data: { userId: user.id } });
}); // <-- This closing brace must be here

export default router;