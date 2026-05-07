"use client";

import { motion } from "framer-motion";
import { Reveal } from "./reveal";
import { PhoneMockup } from "./phone-mockup";

export function AppPreviewSection() {
  return (
    <section id="preview" className="section-shell relative overflow-hidden py-20 md:py-32">
      <div className="pointer-events-none absolute left-[12%] top-[12%] h-40 w-40 rounded-full bg-white/[0.025] blur-3xl" />
      <div className="pointer-events-none absolute right-[12%] top-[28%] h-72 w-72 ambient-green opacity-70" />

      <Reveal>
        <div className="mx-auto max-w-[62rem] text-center">
          <h2 className="font-display text-[2.8rem] font-extrabold leading-[1] tracking-[-0.08em] text-white sm:text-[4rem] md:text-[5.1rem]">
            O Kerso não é só
            <br />
            controle financeiro.
            <br />
            <span className="text-white/70">É clareza para decidir melhor.</span>
          </h2>
          <div className="mx-auto mt-10 h-[4px] w-16 rounded-full bg-signal/80" />
        </div>
      </Reveal>

      <div className="relative mt-20 flex items-center justify-center md:mt-24">
        <motion.div
          initial={{ opacity: 0, x: -30, rotate: -8 }}
          whileInView={{ opacity: 0.45, x: 0, rotate: -6 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-[-2.5rem] top-10 hidden scale-[0.82] blur-[1px] md:block lg:left-[8%]"
        >
          <PhoneMockup variant="mini" floatingCards={false} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          <PhoneMockup
            variant="preview"
            floatingCards={false}
            className="max-w-[420px]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30, rotate: 8 }}
          whileInView={{ opacity: 0.4, x: 0, rotate: 6 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          className="absolute right-[-2.5rem] top-16 hidden scale-[0.8] blur-[1px] md:block lg:right-[8%]"
        >
          <PhoneMockup variant="mini" floatingCards={false} />
        </motion.div>
      </div>
    </section>
  );
}
