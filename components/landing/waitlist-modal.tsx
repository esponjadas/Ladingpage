"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, ShieldCheck, X } from "lucide-react";
import { FormEvent, useState } from "react";

type WaitlistModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            aria-label="Fechar modal"
            className="absolute inset-0 bg-black/72 backdrop-blur-xl"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="premium-panel relative z-10 w-full max-w-[34rem] rounded-[2rem] p-6 sm:p-8"
          >
            <div className="pointer-events-none absolute right-[-8%] top-[-8%] h-40 w-40 rounded-full ambient-green opacity-80" />

            <div className="relative flex items-start justify-between gap-4">
              <div>
                <p className="hero-kicker text-[0.72rem] font-medium text-white/48">
                  Acesso antecipado
                </p>
                <h3 className="mt-4 font-display text-[2.2rem] font-[780] leading-[1.02] tracking-[-0.06em] text-white">
                  Entre na lista de espera do Kerso
                </h3>
                <p className="mt-4 max-w-[28rem] text-[1rem] leading-[1.8] text-white/64">
                  Receba prioridade no lançamento, novidades do produto e acesso
                  às primeiras vagas.
                </p>
              </div>

              <button
                className="rounded-full border border-white/10 bg-white/[0.03] p-3 text-white/68 transition hover:text-white"
                onClick={onClose}
              >
                <X size={18} />
              </button>
            </div>

            {submitted ? (
              <div className="relative mt-8 rounded-[1.6rem] border border-white/8 bg-black/24 p-6">
                <div className="flex items-center gap-3 text-signal">
                  <Check size={20} />
                  <p className="text-lg font-semibold text-white">
                    Cadastro confirmado
                  </p>
                </div>
                <p className="mt-3 text-[1rem] leading-[1.75] text-white/62">
                  Você agora está na lista do Kerso. Avisaremos quando o acesso
                  antecipado for liberado.
                </p>
                <button
                  className="premium-button mt-6 inline-flex rounded-full bg-signal px-6 py-3.5 text-sm font-bold text-black"
                  onClick={onClose}
                >
                  <span className="relative z-10">Fechar</span>
                </button>
              </div>
            ) : (
              <form className="relative mt-8 space-y-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="space-y-2">
                    <span className="text-sm text-white/58">Nome</span>
                    <input
                      required
                      type="text"
                      placeholder="Seu nome"
                      className="w-full rounded-[1rem] border border-white/8 bg-black/26 px-4 py-3.5 text-white outline-none transition focus:border-signal/40"
                    />
                  </label>
                  <label className="space-y-2">
                    <span className="text-sm text-white/58">E-mail</span>
                    <input
                      required
                      type="email"
                      placeholder="voce@email.com"
                      className="w-full rounded-[1rem] border border-white/8 bg-black/26 px-4 py-3.5 text-white outline-none transition focus:border-signal/40"
                    />
                  </label>
                </div>

                <label className="space-y-2">
                  <span className="text-sm text-white/58">O que você quer resolver primeiro?</span>
                  <textarea
                    rows={4}
                    placeholder="Ex.: organizar gastos, criar reservas, entender meu saldo real..."
                    className="w-full resize-none rounded-[1rem] border border-white/8 bg-black/26 px-4 py-3.5 text-white outline-none transition focus:border-signal/40"
                  />
                </label>

                <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3 text-sm text-white/50">
                    <ShieldCheck size={16} className="text-signal" />
                    Seus dados ficam protegidos.
                  </div>

                  <button
                    type="submit"
                    className="premium-button inline-flex rounded-full bg-signal px-7 py-3.5 text-sm font-bold text-black shadow-[0_18px_32px_rgba(59,207,125,0.12)]"
                  >
                    <span className="relative z-10">Entrar na lista</span>
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
