import * as z from "zod"

export const formSchema = z.object({
    id: z.number().optional().nullable(),
    product_id: z.nullable(z.string()),
    attribute_id: z.nullable(z.string()),
    value: z.string().min(1),
});