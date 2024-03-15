import * as z from "zod"

export const formSchema = z.object({
    id: z.number().optional().nullable(),
    name: z.string().min(1),
    role_id: z.coerce.number(),
    email: z.string().min(1),
});