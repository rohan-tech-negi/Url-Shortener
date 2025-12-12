import express from "express"
import {db } from "../db/index.js"
import { usersTable } from "../models/users.model.js"
import { createHmac, randomBytes } from "crypto"
const router = express.Router()


router.post("/sign-up",async (req,res)=>{
    const {firstname, lastname, email, password} = req.body()

    const [existingUser] = await db.select({
        id:usersTable.id
    }).from(existingUser).
        where(eq(usersTable.email, email))
})

if(existingUser) return res.status(400).json({message:`user with this ${email} already existed`})

    const salt = randomBytes(256).toString('hex')
    const hashedPassword= createHmac('sha256', salt).update(password).digest('hex')
    const [user] = await db.insert(usersTable).values({
        email, 
        lastname,
        firstname,
        salt,
        password:hashedPassword
    }).returning({id: usersTable.id})

    return res.status(200).json({data :{userId: user.id}});


export default router;