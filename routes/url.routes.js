import express from "express"
// import { Router } from "express";
import { shortenPostRequestBodySchema } from "../utils/request.validation.js";
// import { error } from "console";
import db from "../db/index.js"
import {urlsTable} from "../models/index.js"
import { nanoid } from "nanoid";
import { ensureAuthenticated } from "../middlewares/auth.middleware.js";

const router = express.Router()

router.get('/:shortCode', async function (req,res) {
  const code = req.params.shortCode
  await db.select.from()
})

router.post("/shorten" ,ensureAuthenticated,  async function (req,res) {
    

    const validationResult = await shortenPostRequestBodySchema.safeParseAsync(req.body);
console.log(req.body);
    if(validationResult.error){
        return res.status(400).json({error: validationResult.error})
    }

    const { url, shortCode } = validationResult.data;
const finalShortCode = shortCode ?? nanoid(6);


    const [result] = await db
  .insert(urlsTable)
  .values({
  shortCode: finalShortCode,
  targetURL: url,
  userId: req.user.id,
})

  .returning({
    id: urlsTable.id,
    shortCode: urlsTable.shortCode,
    targetURL: urlsTable.targetURL,
  });


    return res.status(201).json({id: result.id, shortCode: result.shortCode, targetURL: result.targetURL})

})

export default router;