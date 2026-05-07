"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { Check, LoaderCircle, Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ModalShell } from "@/components/ui/modal-shell";
import { useToast } from "@/components/ui/toast-provider";
import { trackEvent } from "@/lib/analytics";
import { waitlistSchema, type WaitlistInput } from "@/lib/waitlist-schema";

type WaitlistModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type RequestState = "idle" | "success";

export function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const { pushToast } = useToast();
  const [requestState, setRequestState] = useState<RequestState>("idle");
  const [queuePosition, setQueuePosition] = useState<number | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<WaitlistInput>({
    resolver: zodResolver(waitlistSchema),
    mode: "onChange",
  });

  useEffect(() => {
    if (!isOpen) {
      setRequestState("idle");
      setQueuePosition(null);
      reset();
    }
  }, [isOpen, reset]);

  async function onSubmit(values: WaitlistInput) {
    trackEvent("waitlist_submit", { source: "landing_modal" });

    const response = await fetch("/api/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    const data = (await response.json()) as {
      ok: boolean;
      message?: string;
      queuePosition?: number;
      type?: "duplicate" | "validation" | "unknown";
    };

    if (!response.ok || !data.ok) {
      if (data.type === "duplicate") {
        setError("email", {
          type: "manual",
          message: "Esse email já está na lista de espera.",
        });
        pushToast({
          tone: "info",
          title: "Esse email já está na lista de espera.",
        });
        return;
      }

      pushToast({
        tone: "error",
        title: "Não foi possível enviar agora.",
        description: "Tente novamente em instantes.",
      });
      return;
    }

    setQueuePosition(data.queuePosition ?? null);
    setRequestState("success");
    pushToast({
      tone: "success",
      title: "Você entrou para a fila.",
      description: "Você será avisado quando o acesso antecipado estiver disponível.",
    });
  }

  return (
    <ModalShell isOpen={isOpen} onClose={onClose} titleId="waitlist-modal-title">
      <div className="pointer-events-none absolute right-[-8%] top-[-8%] h-40 w-40 rounded-full ambient-green opacity-70" />

      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className="hero-kicker text-[0.72rem] font-medium text-white/48">
            Acesso antecipado
          </p>
          <h3
            id="waitlist-modal-title"
            className="mt-4 font-display text-[2rem] font-[760] leading-[1.03] tracking-[-0.06em] text-white md:text-[2.1rem]"
          >
            Entre para o acesso antecipado
          </h3>
          <p className="mt-4 max-w-[28rem] text-[1rem] leading-[1.8] text-white/64">
            Receba novidades e seja um dos primeiros a testar o Kerso.
          </p>
        </div>

        <button
          className="rounded-full border border-white/10 bg-white/[0.03] p-3 text-white/68 transition hover:text-white"
          onClick={onClose}
          aria-label="Fechar modal"
        >
          <X size={18} />
        </button>
      </div>

      <AnimatePresence mode="wait">
        {requestState === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            className="relative mt-8 overflow-hidden rounded-[1.6rem] border border-white/8 bg-black/28 p-6"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(59,207,125,0.16),transparent_30%),radial-gradient(circle_at_82%_28%,rgba(255,255,255,0.08),transparent_20%)]" />

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.08, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex h-14 w-14 items-center justify-center rounded-full border border-signal/25 bg-signal/12 text-signal shadow-[0_14px_34px_rgba(59,207,125,0.16)]"
            >
              <Check size={24} />
              <motion.span
                className="absolute inset-0 rounded-full border border-signal/25"
                animate={{ scale: [1, 1.16], opacity: [0.55, 0] }}
                transition={{ duration: 1.4, repeat: Number.POSITIVE_INFINITY, ease: "easeOut" }}
              />
            </motion.div>

            <div className="relative mt-5">
              <p className="text-lg font-semibold text-white">Você entrou para a fila.</p>
              <p className="mt-3 text-[1rem] leading-[1.75] text-white/62">
                Você será avisado quando o acesso antecipado estiver disponível.
              </p>

              {queuePosition ? (
                <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/72">
                  <Sparkles size={14} className="text-signal" />
                  <span>Posição estimada: #{queuePosition}</span>
                </div>
              ) : null}
            </div>

            <button
              className="premium-button mt-6 inline-flex rounded-full bg-signal px-6 py-3.5 text-sm font-bold text-black"
              onClick={onClose}
            >
              <span className="relative z-10">Fechar</span>
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative mt-8 space-y-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2">
                <span className="text-sm text-white/58">Nome</span>
                <input
                  {...register("nome")}
                  type="text"
                  placeholder="Seu nome"
                  className="w-full rounded-[1rem] border border-white/8 bg-black/26 px-4 py-3.5 text-white outline-none transition focus:border-signal/40"
                />
                {errors.nome ? (
                  <span className="text-sm text-[#ff7c7c]">{errors.nome.message}</span>
                ) : null}
              </label>

              <label className="space-y-2">
                <span className="text-sm text-white/58">Email</span>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="voce@email.com"
                  className="w-full rounded-[1rem] border border-white/8 bg-black/26 px-4 py-3.5 text-white outline-none transition focus:border-signal/40"
                />
                {errors.email ? (
                  <span className="text-sm text-[#ff7c7c]">{errors.email.message}</span>
                ) : null}
              </label>
            </div>

            <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-white/50">Nenhum dado será vendido a terceiros.</p>

              <button
                type="submit"
                className="premium-button inline-flex min-h-11 items-center justify-center rounded-full bg-signal px-7 py-3.5 text-sm font-bold text-black shadow-[0_18px_32px_rgba(59,207,125,0.12)]"
                disabled={isSubmitting}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {isSubmitting ? <LoaderCircle size={16} className="animate-spin" /> : null}
                  {isSubmitting ? "Entrando..." : "Entrar na fila"}
                </span>
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </ModalShell>
  );
}
