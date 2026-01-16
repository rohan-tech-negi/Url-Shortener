<!--  in this project we are creating a url shortner  -->
<!-- as in the process of making this url shortner  -->

<!-- some steps to be included to setup everything -->

<!-- at first  -->
we just make the basic setup of the project via drizzle ORM and the docker 

<!-- setting up the file system as -->
models and the db and the main index.js 

<!-- we setup zod for the validation of the input in the database models  -->
for zod when we use the zod in anyother file we use 2 methods to just use the validation stuff into the file
import jwt from "jsonwebtoken"
import { userToken } from "./token.validation";

const JWT_SECRET = process.env.JWT_SECRET

export async function createUserToken(payload){
    const validationResult = await userToken.safeParseAsync(payload) //like here we use the safeparseasync
    const token = jwt.sign(payload, JWT_SECRET)
    return token;
}  