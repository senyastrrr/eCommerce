import * as z from "zod"

export const formSchema = z.object({
    id: z.number().optional().nullable(),
    parent_id: z.nullable(z.string()),
    name: z.string().min(1),
    description: z.string().min(1),
});