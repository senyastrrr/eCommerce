import * as z from "zod"

export const formSchema = z.object({
    id: z.number().optional().nullable(),
    category_id: z.coerce.number(),
    title: z.string().min(1),
    name: z.string().min(1),
    image: z.string().min(1),
    price: z.coerce.number().min(1),
    description: z.string().min(1),
    discount: z.coerce.number().optional().nullable(),
});