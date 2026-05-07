import { z } from "zod";

export const waitlistSchema = z.object({
  nome: z
    .string()
    .min(2, "Digite seu nome.")
    .max(120, "Use um nome mais curto."),
  email: z
    .string()
    .min(1, "Digite seu email.")
    .email("Digite um email válido."),
});

export type WaitlistInput = z.infer<typeof waitlistSchema>;
