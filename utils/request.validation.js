import { z } from "zod";

const signupPostRequestBodySchema = z.object({
  firstname: z.string().min(1).trim(),
  lastname: z.string().trim().optional(),
  email: z.string().email().trim(),
  password: z.string().min(6),
});

export default signupPostRequestBodySchema;
