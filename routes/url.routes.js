import express from "express"
// import { Router } from "express";
import { shortenPostRequestBodySchema } from "../utils/request.validation";

const router = express.Router()

router.post("/shorten" , async function (req,res) {
    const userId = req.user.id;


    if(!userId)
        return res.status(401).json({error: "You must be logged in to access this resoure"})

    const validationResult = await shortenPostRequestBodySchema.safeParseAsync(req.body);
    

})

export default router;