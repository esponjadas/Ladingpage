"use client";

import { motion } from "framer-motion";
import { trackEvent } from "@/lib/analytics";
import { Reveal } from "./reveal";
import { PhoneMockup } from "./phone-mockup";

type CtaSectionProps = {
  onWaitlistClick: () => void;
};

export function CtaSection({ onWaitlistClick }: CtaSectionProps) {
  return (
    <section id="cta" className="section-shell relative overflow-hidden py-20 md:py-32">
      <div className="pointer-events-none absolute inset-x-[12%] top-[12%] h-80 rounded-full ambient-green opacity-85" />
      <div className="pointer-events-none absolute left-[10%] bottom-[6%] h-48 w-48 rounded-full bg-white/[0.02] blur-[120px]" />
      <div className="pointer-events-none absolute right-[8%] top-[30%] h-56 w-56 rounded-full bg-[#102117] opacity-80 blur-[110px]" />

      <Reveal>
        <div className="premium-panel relative mx-auto max-w-[66rem] overflow-hidden rounded-[2.6rem] px-6 py-14 text-center sm:px-8 md:px-12 md:py-18">
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [-8, -6, -8] }}
            transition={{ duration: 11.4, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute left-[-2rem] bottom-[-7rem] hidden scale-[0.82] opacity-26 blur-[2px] md:block"
          >
            <PhoneMockup variant="mini" floatingCards={false} />
          </motion.div>

          <motion.div
            animate={{ y: [0, -8, 0], rotate: [9, 7, 9] }}
            transition={{ duration: 12.6, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute right-[-2rem] top-[-5rem] hidden scale-[0.78] opacity-22 blur-[2px] md:block"
          >
            <PhoneMockup variant="mini" floatingCards={false} />
          </motion.div>

          <div className="relative z-10">
            <h2 className="font-display text-[2.95rem] font-[780] leading-[0.98] tracking-[-0.08em] text-white sm:text-[4rem] md:text-[5.2rem]">
              Tenha controle da
              <br />
              sua vida financeira.
            </h2>

            <p className="mx-auto mt-7 max-w-[35rem] text-[1.02rem] leading-[1.9] text-white/62 md:text-lg">
              Mais clareza no presente, mais tranquilidade nas decisões e uma
              relação melhor com o seu dinheiro.
            </p>

            <div className="mt-12">
              <button
                className="premium-button inline-flex rounded-full bg-signal px-10 py-5 text-lg font-bold text-black shadow-[0_20px_40px_rgba(59,207,125,0.12)]"
                onClick={() => {
                  trackEvent("waitlist_click", { location: "final_cta" });
                  onWaitlistClick();
                }}
              >
                <span className="relative z-10">Quero acesso antecipado</span>
              </button>
            </div>

            <p className="mt-8 text-sm uppercase tracking-[0.16em] text-white/50">
              Acesso limitado no lançamento
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
