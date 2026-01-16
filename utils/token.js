import jwt from "jsonwebtoken"
import { userToken } from "./token.validation";

const JWT_SECRET = process.env.JWT_SECRET

export async function createUserToken(payload){
    const validationResult = await userToken.safeParseAsync(payload)

    if(validationResult.error) throw new Error(validationResult.error.message)

        const payloadValidationData = validationResult.data;
    const token = jwt.sign(payload, JWT_SECRET)
    return token;
}