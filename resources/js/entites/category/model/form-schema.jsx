import * as z from "zod"

export const formSchema = z.object({
    id: z.number().optional().nullable(),
    parent_id: z.coerce.number(),
    name: z.string().min(1),
    description: z.string().min(1),
    discount: z.coerce.number().optional().nullable(),
});