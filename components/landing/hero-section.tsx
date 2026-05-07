"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { trackEvent } from "@/lib/analytics";
import { PhoneMockup } from "./phone-mockup";

type HeroSectionProps = {
  onWaitlistClick: () => void;
};

export function HeroSection({ onWaitlistClick }: HeroSectionProps) {
  return (
    <section className="section-shell relative overflow-hidden pb-16 pt-8 sm:pb-20 sm:pt-10 md:pb-24 md:pt-14 xl:pb-[10rem] xl:pt-16">
      <div className="pointer-events-none absolute left-[-8%] top-[5%] h-[10rem] w-[10rem] rounded-full bg-white/[0.025] blur-[56px] sm:h-[14rem] sm:w-[14rem] sm:blur-[72px] md:h-[18rem] md:w-[18rem] md:blur-[90px]" />
      <div className="pointer-events-none absolute left-[18%] top-[28%] hidden h-[14rem] w-[16rem] rounded-full bg-[#1d211e] opacity-70 blur-[90px] sm:block" />
      <div className="pointer-events-none absolute right-[-10%] top-[2%] h-[15rem] w-[15rem] rounded-full ambient-green opacity-70 sm:right-[-4%] sm:h-[22rem] sm:w-[22rem] sm:opacity-80 md:right-[-2%] md:h-[30rem] md:w-[30rem] md:opacity-90" />
      <div className="pointer-events-none absolute right-[12%] top-[40%] hidden h-[18rem] w-[18rem] rounded-full bg-[#102117] opacity-70 blur-[120px] md:block" />

      <div className="grid items-center gap-8 xl:grid-cols-[0.84fr_1.16fr] xl:gap-0">
        <div className="relative z-20 mx-auto max-w-[37rem] pt-2 text-center xl:mx-0 xl:pt-10 xl:text-left">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="glass-panel mb-8 inline-flex items-center gap-3 rounded-full px-4 py-2.5 text-[0.66rem] font-medium text-white/74 hero-kicker sm:mb-9 sm:text-[0.7rem] xl:mb-11"
          >
            <span className="h-2 w-2 rounded-full bg-signal shadow-[0_0_8px_rgba(59,207,125,0.3)]" />
            Acesso antecipado
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[2.45rem] font-[760] leading-[1.02] tracking-[-0.06em] text-white sm:text-[3rem] sm:leading-[1.02] md:text-[4rem] md:leading-[1] xl:text-[5.45rem]"
          >
            Sua vida
            <br />
            financeira,
            <br />
            <span className="text-glow bg-[linear-gradient(180deg,#7ae2a4_0%,#47c983_42%,#2c9a5f_100%)] bg-clip-text text-transparent">
              finalmente inteligente
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-7 max-w-[30rem] text-[0.98rem] leading-[1.82] text-white/62 sm:mt-8 sm:text-[1.03rem] md:mt-9 md:text-[1.12rem] xl:mx-0 xl:mt-10 xl:text-[1.2rem] xl:leading-[1.95]"
          >
            Controle seus gastos, organize seu dinheiro e tome decisões
            melhores.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-8 flex w-full max-w-[28rem] flex-col gap-3 sm:mt-10 sm:gap-4 xl:mx-0 xl:mt-12 xl:max-w-none xl:flex-row xl:items-center"
          >
            <button
              className="premium-button min-h-12 w-full rounded-full bg-signal px-8 py-4 text-center text-base font-bold text-black shadow-[0_18px_34px_rgba(59,207,125,0.12)] xl:w-auto"
              onClick={() => {
                trackEvent("waitlist_click", { location: "hero" });
                onWaitlistClick();
              }}
            >
              <span className="relative z-10">Entrar na lista de espera</span>
            </button>
            <Link
              href="#como-funciona"
              className="premium-button min-h-12 w-full rounded-full border border-white/10 bg-white/[0.03] px-8 py-4 text-center text-base font-semibold text-white/88 shadow-[0_18px_34px_rgba(0,0,0,0.12)] hover:border-white/18 hover:bg-white/[0.05] xl:w-auto"
              onClick={() => trackEvent("nav_how_click", { location: "hero" })}
            >
              <span className="relative z-10">Ver como funciona</span>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.95, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 mx-auto mt-2 w-full max-w-[22rem] sm:max-w-[28rem] md:max-w-[34rem] xl:mt-4 xl:max-w-none xl:-mr-32"
        >
          <PhoneMockup variant="hero" />
        </motion.div>
      </div>
    </section>
  );
}
