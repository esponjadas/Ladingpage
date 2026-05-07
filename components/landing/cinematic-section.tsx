"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { MouseEvent } from "react";
import { PhoneMockup } from "./phone-mockup";
import { Reveal } from "./reveal";

export function CinematicSection() {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 80, damping: 20, mass: 0.7 });
  const smoothY = useSpring(pointerY, { stiffness: 80, damping: 20, mass: 0.7 });

  const leftPhoneX = useTransform(smoothX, [-40, 40], [-18, 18]);
  const leftPhoneY = useTransform(smoothY, [-40, 40], [-12, 12]);
  const centerPhoneY = useTransform(smoothY, [-40, 40], [10, -10]);
  const rightPhoneX = useTransform(smoothX, [-40, 40], [14, -14]);
  const rightPhoneY = useTransform(smoothY, [-40, 40], [12, -12]);
  const lightX = useTransform(smoothX, [-40, 40], ["42%", "58%"]);
  const lightY = useTransform(smoothY, [-40, 40], ["34%", "48%"]);
  const dynamicGlow = useMotionTemplate`radial-gradient(circle at ${lightX} ${lightY}, rgba(59, 207, 125, 0.16), transparent 34%)`;

  function handleMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 80;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 80;
    pointerX.set(x);
    pointerY.set(y);
  }

  function resetMove() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <section className="section-shell relative py-20 md:py-32">
      <div className="pointer-events-none absolute inset-x-[8%] top-[14%] h-[28rem] rounded-full bg-[#0d120f] blur-[140px]" />
      <div className="pointer-events-none absolute left-[8%] top-[22%] h-56 w-56 rounded-full bg-white/[0.02] blur-[120px]" />
      <div className="pointer-events-none absolute right-[10%] top-[28%] h-72 w-72 ambient-green opacity-70" />

      <Reveal>
        <div className="max-w-[40rem]">
          <p className="hero-kicker text-[0.72rem] font-medium text-white/44">
            Clareza em movimento
          </p>
          <h2 className="mt-5 max-w-[10ch] font-display text-[2.9rem] font-[780] leading-[1.01] tracking-[-0.075em] text-white sm:text-[3.8rem] md:text-[4.8rem]">
            Dinheiro não deveria ser confuso.
          </h2>
          <p className="mt-6 max-w-[34rem] text-[1.02rem] leading-[1.86] text-white/62 md:text-lg">
            Quando tudo ganha contexto, você finalmente entende para onde seu dinheiro vai e
            como retomar o controle com menos ruído.
          </p>
        </div>
      </Reveal>

      <motion.div
        onMouseMove={handleMove}
        onMouseLeave={resetMove}
        className="premium-panel relative mt-14 overflow-hidden rounded-[2.6rem] px-4 py-10 sm:px-6 md:px-10 md:py-14"
      >
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-90"
          style={{ background: dynamicGlow }}
        />
        <div className="pointer-events-none absolute inset-x-[20%] bottom-[-8%] h-24 rounded-full bg-signal/10 blur-[80px]" />
        <div className="pointer-events-none absolute left-[8%] top-[16%] h-2 w-2 rounded-full bg-white/30 shadow-[0_0_18px_rgba(255,255,255,0.16)]" />
        <div className="pointer-events-none absolute left-[14%] top-[38%] h-1.5 w-1.5 rounded-full bg-white/20 shadow-[0_0_14px_rgba(255,255,255,0.12)]" />
        <div className="pointer-events-none absolute right-[12%] top-[26%] h-2 w-2 rounded-full bg-signal/20 shadow-[0_0_20px_rgba(59,207,125,0.16)]" />

        <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="relative z-10 max-w-[25rem] self-center px-2 md:px-4">
            <h3 className="font-display text-[2.1rem] font-[760] leading-[1.04] tracking-[-0.06em] text-white md:text-[2.8rem]">
              Você finalmente entende para onde seu dinheiro vai.
            </h3>
            <p className="mt-5 text-[1rem] leading-[1.82] text-white/62 md:text-[1.05rem]">
              Menos improviso. Menos culpa. Mais calma para decidir, gastar e planejar com
              clareza.
            </p>
          </div>

          <div className="relative min-h-[30rem] sm:min-h-[34rem] md:min-h-[38rem]">
            <motion.div
              style={{ x: leftPhoneX, y: leftPhoneY }}
              animate={{ y: [0, -12, 0], rotate: [-8, -6.5, -8] }}
              transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-[-4%] top-[12%] hidden scale-[0.82] opacity-62 blur-[0.6px] md:block"
            >
              <PhoneMockup variant="mini" floatingCards={false} />
            </motion.div>

            <motion.div
              style={{ y: centerPhoneY }}
              animate={{ y: [0, -14, 0], rotate: [2.5, 4.5, 2.5] }}
              transition={{ duration: 9.8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-1/2 top-[6%] z-10 w-full max-w-[24rem] -translate-x-1/2 md:max-w-[28rem]"
            >
              <PhoneMockup variant="preview" floatingCards={false} />
            </motion.div>

            <motion.div
              style={{ x: rightPhoneX, y: rightPhoneY }}
              animate={{ y: [0, -10, 0], rotate: [8, 6.5, 8] }}
              transition={{ duration: 12.6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-[-6%] top-[20%] hidden scale-[0.8] opacity-56 blur-[0.8px] md:block"
            >
              <PhoneMockup variant="mini" floatingCards={false} />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
