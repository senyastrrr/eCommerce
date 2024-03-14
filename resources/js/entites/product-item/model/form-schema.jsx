import * as z from "zod"

export const formSchema = z.object({
    id: z.number().optional().nullable(),
    color_id: z.nullable(z.string()),
    product_id: z.nullable(z.string()),
    SKU: z.string(),
    image: z.string().min(1),
});