import { createSupabaseServerClient } from "./supabase/server";
import { waitlistSchema, type WaitlistInput } from "./waitlist-schema";

type WaitlistResult =
  | { ok: true }
  | { ok: false; type: "duplicate" | "validation" | "unknown"; message: string };

export async function insertWaitlistLead(input: WaitlistInput): Promise<WaitlistResult> {
  const parsed = waitlistSchema.safeParse(input);

  if (!parsed.success) {
    return {
      ok: false,
      type: "validation",
      message: parsed.error.issues[0]?.message ?? "Dados inválidos.",
    };
  }

  const supabase = createSupabaseServerClient();
  const { error } = await supabase.from("waitlist").insert({
    nome: parsed.data.nome,
    email: parsed.data.email.toLowerCase(),
    source: "landing",
  });

  if (!error) {
    return { ok: true };
  }

  if (error.code === "23505") {
    return {
      ok: false,
      type: "duplicate",
      message: "Esse email já está na lista de espera.",
    };
  }

  return {
    ok: false,
    type: "unknown",
    message: "Não foi possível enviar agora. Tente novamente.",
  };
}
