import express from "express";
import db from "../db/index.js";
import { usersTable } from "../models/users.model.js";
import jwt from "jsonwebtoken"


import {signupPostRequestBodySchema, loginPostRequestBodySchema} from "../utils/request.validation.js";
import { hashedPasswordWithSalt } from "../utils/hash.js";
import { getUserEmail } from "../services/user.service.js";

import { createUserToken } from "../utils/token.js";

const router = express.Router();

router.post("/sign-up", async (req, res) => {
  try {
    const validationResult =
      await signupPostRequestBodySchema.safeParseAsync(req.body);

    if (!validationResult.success) {
      return res.status(400).json({
        error: validationResult.error.flatten(),
      });
    }

    const {
      firstname: firstName,
      lastname: lastName,
      email,
      password,
    } = validationResult.data;

    const existingUser = await  getUserEmail(email)

    if (existingUser) {
          return res.status(409).json({
            message: "User already exists",
          });
        }

    const {salt, password:hashedPassword } = hashedPasswordWithSalt(password)

    const [user] = await db
      .insert(usersTable)
      .values({
        firstName,
        lastName,
        email,
        password: hashedPassword,
        salt,
      })
      .returning({ id: usersTable.id });

    return res.status(201).json({
      userId: user.id,
    });
  } catch (err) {
    console.error("Signup error:", err);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
});

router.post("/login", async(req,res)=>{
  const validationPassword = await loginPostRequestBodySchema.safeParseAsync(req.body)

  if(validationPassword.error){
    res.status(404).json({message:"Validation failed"})
  }

  const {email, password } = validationPassword.data

  const user = await getUserEmail(email)

  if(!user){
    res.status(404).json({message: `user with this ${email} does not exist`})
  }


  const {password: hashedPassword} = hashedPasswordWithSalt(
    password, 
    user.salt
  )

  if(user.password !== hashedPassword){
    return res.status(400).json({error: "invalid password"})
  }

  const token = await createUserToken({id: user.id})



  return res.json({token})
})

export default router;
