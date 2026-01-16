import db from "../db/index.js";
import { usersTable } from "../models/users.model.js";
import { eq } from "drizzle-orm";


export async function getUserEmail(email) {
    const [existingUser] = await db
          .select({ id: usersTable.id ,
            firstName: usersTable.firstName,
            lastName: usersTable.lastName,
            email: usersTable.email, 
            salt: usersTable.salt,
            password: usersTable.password
           })
          .from(usersTable)
          .where(eq(usersTable.email, email));
    
        return existingUser;
}