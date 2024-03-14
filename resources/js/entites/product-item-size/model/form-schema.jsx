import * as z from "zod"

export const formSchema = z.object({
    id: z.number().optional().nullable(),
    size_id: z.coerce.number().min(1),
    product_id: z.coerce.number().min(1),
    qty: z.coerce.number().min(1),
});