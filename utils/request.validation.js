import {z} from "zod";

const signupPostRequestBodySchema = z.object({
    firstname: z.string(),
    lastname: z.string().optional(),
    email: z.string().email(),
    password: z.string().min(3)
})

export default signupPostRequestBodySchema