import {z} from "zod"

export const userToken = z.object({
    id: z.string()
})