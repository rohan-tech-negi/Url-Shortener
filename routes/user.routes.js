import express from "express"
import {db } from "../db/index.js"
import { usersTable } from "../models/users.model.js"
const router = express.Router()


router.post("/sign-up",(req,res)=>{
    const {firstname, lastname, email, password} = req.body()

    const existingUser = db;
})

export default router;