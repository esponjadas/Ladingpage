"use client";

import { motion } from "framer-motion";
import { ArrowRight, CircleDollarSign, Receipt, TvMinimalPlay } from "lucide-react";
import { Reveal } from "./reveal";

const beforeItems = [
  { label: "Fatura Cartão", value: "- R$ 2.450,00", tilt: "-rotate-[4deg]" },
  { label: "Pix desconhecido", value: "- R$ 120,00", tilt: "rotate-[1.5deg]" },
  { label: "Assinaturas", value: "- R$ 89,90", tilt: "-rotate-[1.25deg]" },
];

const afterItems = [
  {
    icon: CircleDollarSign,
    title: "Essenciais",
    subtitle: "Dentro do limite",
    value: "R$ 2.450,00",
    active: true,
  },
  {
    icon: TvMinimalPlay,
    title: "Lazer",
    subtitle: "Atenção",
    value: "R$ 120,00",
    active: false,
  },
  {
    icon: Receipt,
    title: "Assinaturas",
    subtitle: "Organizado",
    value: "R$ 89,90",
    active: false,
  },
];

export function TransformationSection() {
  return (
    <section className="section-shell relative overflow-hidden py-20 md:py-32">
      <div className="pointer-events-none absolute left-[8%] top-[26%] h-[18rem] w-[18rem] ambient-red opacity-80" />
      <div className="pointer-events-none absolute right-[6%] top-[18%] h-[24rem] w-[24rem] ambient-green opacity-80" />

      <div className="grid gap-12 xl:grid-cols-[1fr_auto_1fr] xl:items-center xl:gap-10">
        <Reveal>
          <div className="relative">
            <p className="mb-8 text-[1.75rem] font-bold tracking-[-0.04em] text-white/55 md:text-[2rem]">
              Antes
            </p>
            <div className="space-y-6">
              {beforeItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.08 * index,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`premium-panel ${item.tilt} rounded-[24px] px-6 py-6 ${index === 1 ? "ml-5 md:ml-10" : ""} ${index === 2 ? "ml-2 md:ml-5" : ""}`}
                >
                  <p className="text-lg text-white/46">{item.label}</p>
                  <p className="mt-1 font-display text-[2rem] font-extrabold tracking-[-0.06em] text-white">
                    {item.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="hidden xl:block">
          <div className="relative flex h-[26rem] items-center justify-center">
            <div className="absolute h-full w-px bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.12),transparent)]" />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
              className="glass-panel grid h-16 w-16 place-items-center rounded-full"
            >
              <ArrowRight className="text-white/80" />
            </motion.div>
          </div>
        </Reveal>

        <Reveal delay={0.14}>
          <div>
            <p className="mb-8 text-[1.75rem] font-bold tracking-[-0.04em] text-signal md:text-[2rem]">
              Com Kerso
            </p>
            <div className="space-y-5">
              {afterItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.75,
                      delay: 0.08 * index,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={`premium-panel rounded-[24px] px-5 py-5 md:px-6 ${index === 1 ? "md:mr-6" : ""} ${index === 2 ? "md:mr-2" : ""}`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`grid h-12 w-12 place-items-center rounded-full ${
                          item.active
                            ? "bg-signal/14 text-signal"
                            : "bg-white/[0.05] text-white/68"
                        }`}
                      >
                        <Icon size={20} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-4">
                          <div>
                            <p className="text-lg font-bold text-white">
                              {item.title}
                            </p>
                            <p className="text-sm text-white/56">{item.subtitle}</p>
                          </div>
                          <p className="font-display text-[1.3rem] font-bold tracking-[-0.04em] text-white">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <h3 className="mt-12 max-w-[8.5ch] font-display text-[2.55rem] font-extrabold leading-[0.98] tracking-[-0.07em] text-white md:max-w-[11ch] md:text-[4rem]">
              O Kerso transforma caos em controle.
            </h3>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
