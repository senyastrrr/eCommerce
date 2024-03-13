import * as z from "zod"

export const formSchema = z.object({
    id: z.number().optional().nullable(),
    name: z.string().min(1),
    hex: z.string().length(4).startsWith('#'),
});