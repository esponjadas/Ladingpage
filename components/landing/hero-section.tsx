"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PhoneMockup } from "./phone-mockup";

type HeroSectionProps = {
  onWaitlistClick: () => void;
};

export function HeroSection({ onWaitlistClick }: HeroSectionProps) {
  return (
    <section className="section-shell relative overflow-hidden pb-20 pt-10 md:pb-28 md:pt-16 xl:pb-[10rem]">
      <div className="pointer-events-none absolute left-[-8%] top-[5%] h-[18rem] w-[18rem] rounded-full bg-white/[0.025] blur-[90px]" />
      <div className="pointer-events-none absolute left-[18%] top-[28%] h-[14rem] w-[16rem] rounded-full bg-[#1d211e] opacity-70 blur-[90px]" />
      <div className="pointer-events-none absolute right-[-2%] top-[2%] h-[30rem] w-[30rem] rounded-full ambient-green opacity-90" />
      <div className="pointer-events-none absolute right-[12%] top-[40%] h-[18rem] w-[18rem] rounded-full bg-[#102117] opacity-70 blur-[120px]" />

      <div className="grid items-center gap-6 xl:grid-cols-[0.84fr_1.16fr] xl:gap-0">
        <div className="relative z-20 max-w-[37rem] pt-6 md:pt-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="glass-panel mb-11 inline-flex items-center gap-3 rounded-full px-4 py-2.5 text-[0.7rem] font-medium text-white/74 hero-kicker"
          >
            <span className="h-2 w-2 rounded-full bg-signal shadow-[0_0_8px_rgba(59,207,125,0.3)]" />
            Acesso antecipado
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[3.05rem] font-[760] leading-[1.03] tracking-[-0.068em] text-white sm:text-[3.95rem] sm:leading-[1] md:text-[4.7rem] xl:text-[5.45rem]"
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
            className="mt-10 max-w-[30rem] text-[1.02rem] leading-[1.95] text-white/62 sm:text-[1.08rem] md:text-[1.2rem]"
          >
            Controle seus gastos, organize seu dinheiro e tome decisões
            melhores.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <button
              className="premium-button rounded-full bg-signal px-8 py-4 text-center text-base font-bold text-black shadow-[0_18px_34px_rgba(59,207,125,0.12)]"
              onClick={onWaitlistClick}
            >
              <span className="relative z-10">Entrar na lista de espera</span>
            </button>
            <Link
              href="#como-funciona"
              className="premium-button rounded-full border border-white/10 bg-white/[0.03] px-8 py-4 text-center text-base font-semibold text-white/88 shadow-[0_18px_34px_rgba(0,0,0,0.12)] hover:border-white/18 hover:bg-white/[0.05]"
            >
              <span className="relative z-10">Ver como funciona</span>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.95, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 -mr-12 mt-4 sm:-mr-[4.5rem] xl:-mr-32"
        >
          <PhoneMockup variant="hero" />
        </motion.div>
      </div>
    </section>
  );
}
