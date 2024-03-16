import * as z from "zod"

export const formSchema = z.object({
    id: z.number().optional().nullable(),
    status: z.string().min(1),
});