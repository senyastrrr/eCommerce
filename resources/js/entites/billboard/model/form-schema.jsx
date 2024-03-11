import * as z from "zod"

export const formSchema = z.object({
    content: z.string().min(1),
    image: z.string().min(1),
    isActual: z.number().max(1),
});