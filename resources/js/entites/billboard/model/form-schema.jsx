import * as z from "zod"

export const formSchema = z.object({
    id: z.number().optional(),
    content: z.string().min(1),
    image: z.string().min(1),
    isActual: z.boolean(),
});