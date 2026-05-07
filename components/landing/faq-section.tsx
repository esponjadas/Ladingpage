"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Reveal } from "./reveal";

const faqItems = [
  {
    question: "Quando lança?",
    answer:
      "O Kerso está em desenvolvimento e terá acesso antecipado para os primeiros usuários da lista.",
  },
  {
    question: "Vai ter iOS?",
    answer:
      "A intenção é levar o Kerso para iOS e Android. Os primeiros usuários serão avisados pela lista de espera.",
  },
  {
    question: "O app será gratuito?",
    answer:
      "Estamos estudando o melhor modelo para manter o Kerso simples, acessível e sustentável.",
  },
  {
    question: "Meus dados ficam seguros?",
    answer:
      "A segurança e a privacidade fazem parte da base do Kerso. Nenhum dado será vendido a terceiros.",
  },
];

type FaqSectionProps = {
  onWaitlistClick: () => void;
};

export function FaqSection({ onWaitlistClick }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="section-shell relative py-20 md:py-32">
      <div className="pointer-events-none absolute left-[6%] top-[18%] h-40 w-40 rounded-full bg-white/[0.025] blur-[90px]" />
      <div className="pointer-events-none absolute right-[10%] top-[22%] h-60 w-60 ambient-green opacity-55" />

      <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
        <Reveal>
          <div className="max-w-[28rem]">
            <p className="hero-kicker text-[0.72rem] font-medium text-white/44">
              Dúvidas comuns
            </p>
            <h2 className="mt-5 font-display text-[2.55rem] font-[780] leading-[1.02] tracking-[-0.07em] text-white sm:text-[3.2rem] md:text-[4.1rem]">
              Tudo o que você precisa saber antes do lançamento.
            </h2>
            <p className="mt-6 text-[1.02rem] leading-[1.84] text-white/62 md:text-lg">
              Estamos construindo o Kerso com calma, precisão e foco em quem
              quer uma relação melhor com o próprio dinheiro.
            </p>

            <button
              className="premium-button mt-10 inline-flex min-h-11 rounded-full bg-signal px-7 py-4 text-sm font-bold text-black shadow-[0_18px_32px_rgba(59,207,125,0.12)]"
              onClick={onWaitlistClick}
            >
              <span className="relative z-10">Quero entrar na lista</span>
            </button>
          </div>
        </Reveal>

        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <Reveal key={item.question} delay={index * 0.06}>
                <motion.div
                  whileHover={{ y: -2 }}
                  className="premium-panel group rounded-[1.85rem] transition-colors duration-500 hover:border-white/10"
                >
                  <div className="pointer-events-none absolute inset-0 rounded-[1.85rem] bg-[radial-gradient(circle_at_100%_0%,rgba(59,207,125,0.08),transparent_34%)] opacity-0 transition duration-500 group-hover:opacity-100" />
                  <button
                    className="relative flex w-full items-center justify-between gap-4 px-6 py-5 text-left md:px-7"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-[1.2rem] font-[740] tracking-[-0.03em] text-white md:text-[1.35rem]">
                      {item.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <ChevronDown className="text-white/58 transition group-hover:text-signal" size={20} />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="relative px-6 pb-6 text-[1rem] leading-[1.82] text-white/62 md:px-7">
                          {item.answer}
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
