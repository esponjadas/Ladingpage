"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Check, LoaderCircle, X } from "lucide-react";
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

    setRequestState("success");
    pushToast({
      tone: "success",
      title: "Você entrou para a lista.",
      description: "Quando o Kerso estiver pronto, você será avisado primeiro.",
    });
  }

  return (
    <ModalShell isOpen={isOpen} onClose={onClose} titleId="waitlist-modal-title">
      <div className="pointer-events-none absolute right-[-8%] top-[-8%] h-40 w-40 rounded-full ambient-green opacity-80" />

      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className="hero-kicker text-[0.72rem] font-medium text-white/48">
            Acesso antecipado
          </p>
          <h3
            id="waitlist-modal-title"
            className="mt-4 font-display text-[2.1rem] font-[780] leading-[1.02] tracking-[-0.06em] text-white"
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
        >
          <X size={18} />
        </button>
      </div>

      {requestState === "success" ? (
        <div className="relative mt-8 rounded-[1.6rem] border border-white/8 bg-black/24 p-6">
          <div className="flex items-center gap-3 text-signal">
            <Check size={20} />
            <p className="text-lg font-semibold text-white">Você entrou para a lista.</p>
          </div>
          <p className="mt-3 text-[1rem] leading-[1.75] text-white/62">
            Quando o Kerso estiver pronto, você será avisado primeiro.
          </p>
          <button
            className="premium-button mt-6 inline-flex rounded-full bg-signal px-6 py-3.5 text-sm font-bold text-black"
            onClick={onClose}
          >
            <span className="relative z-10">Fechar</span>
          </button>
        </div>
      ) : (
        <form className="relative mt-8 space-y-4" onSubmit={handleSubmit(onSubmit)}>
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
                {isSubmitting ? "Entrando..." : "Entrar na lista"}
              </span>
            </button>
          </div>
        </form>
      )}
    </ModalShell>
  );
}
