import * as z from "zod"

export const formSchema = z.object({
    id: z.number().int().nonnegative(),
    content: z.string().min(1),
    image: z.string().min(1),
    isActual: z.boolean(),
});