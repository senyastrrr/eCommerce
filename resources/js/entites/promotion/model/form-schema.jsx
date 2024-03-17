import * as z from "zod"

export const formSchema = z.object({
    id: z.number().optional().nullable(),
    name: z.string().min(1),
    description: z.string().min(1),
    discount_rate: z.coerce.number().min(1),
    start_date: z.coerce.date(),
    end_date: z.coerce.date(),
});