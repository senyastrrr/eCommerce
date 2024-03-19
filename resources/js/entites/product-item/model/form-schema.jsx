import * as z from "zod"

export const formSchema = z.object({
    id: z.number().optional().nullable(),
    color_id: z.coerce.number(),
    product_id: z.coerce.number(),
    SKU: z.string(),
    image: z.string().min(1),
});