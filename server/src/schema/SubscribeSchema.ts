import { z } from "zod";

export const subscribeSchema = z.object({
    name: z.string().min(5).max(30),
    email: z.string().email()
});

export const idSchema = z.string().length(24);