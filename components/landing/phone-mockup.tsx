"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, ChevronRight, Plus, Wallet2 } from "lucide-react";
import { useRef } from "react";

type PhoneMockupProps = {
  className?: string;
  floatingCards?: boolean;
  variant?: "hero" | "preview" | "mini";
};

function MetricCard({
  label,
  value,
  color,
  width,
}: {
  label: string;
  value: string;
  color: "green" | "red";
  width: string;
}) {
  const Icon = color === "green" ? ArrowUpRight : ArrowDownRight;
  const fillClass = color === "green" ? "bg-signal" : "bg-[#ff5656]";

  return (
    <div className="rounded-[23px] border border-white/6 bg-white/[0.02] px-5 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.025)] backdrop-blur-sm">
      <div className="mb-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span
            className={`text-sm ${color === "green" ? "text-signal" : "text-[#ff6666]"}`}
          >
            <Icon size={16} />
          </span>
          <span className="text-[0.96rem] text-white/78">{label}</span>
        </div>
        <span className="text-[0.98rem] font-bold text-white">{value}</span>
      </div>
      <div className="h-2.5 rounded-full bg-black/40">
        <div className={`h-2.5 rounded-full ${fillClass}`} style={{ width }} />
      </div>
    </div>
  );
}

export function PhoneMockup({
  className = "",
  floatingCards = true,
  variant = "hero",
}: PhoneMockupProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const ySoft = useTransform(scrollYProgress, [0, 1], [12, -12]);
  const cardLeftY = useTransform(scrollYProgress, [0, 1], [10, -18]);
  const cardRightY = useTransform(scrollYProgress, [0, 1], [6, -12]);

  const widthClass =
    variant === "mini"
      ? "max-w-[250px]"
      : variant === "preview"
        ? "max-w-[310px] md:max-w-[340px]"
        : "max-w-[430px] md:max-w-[490px]";
  const heightClass =
    variant === "mini"
      ? "min-h-[470px]"
      : variant === "preview"
        ? "min-h-[570px] md:min-h-[620px]"
        : "min-h-[730px] md:min-h-[810px]";
  const outerWrapClass =
    variant === "hero"
      ? "max-w-[760px]"
      : variant === "preview"
        ? "max-w-[360px]"
        : "max-w-[270px]";
  const phoneTilt =
    variant === "hero"
      ? "rotate-[4.6deg]"
      : variant === "preview"
        ? "-rotate-[2deg]"
        : "rotate-[5deg]";

  return (
    <motion.div
      ref={ref}
      style={{ y: ySoft }}
      className={`relative mx-auto w-full ${outerWrapClass} ${className}`}
    >
      <div className="pointer-events-none absolute left-[6%] top-[6%] h-[82%] w-[78%] rounded-full ambient-green opacity-72" />
      <div className="pointer-events-none absolute left-[16%] top-[12%] h-[64%] w-[60%] rounded-full bg-white/[0.02] blur-[130px] opacity-18" />
      <div className="pointer-events-none absolute right-[4%] top-[24%] h-[34%] w-[24%] rounded-full bg-black/45 blur-[72px]" />

      {floatingCards ? (
        <>
          <motion.div
            style={{ y: cardLeftY }}
            animate={{ y: [0, -10, 0], x: [0, -3, 0] }}
            transition={{ duration: 9.5, repeat: Infinity, ease: "easeInOut" }}
            className="glass-panel absolute left-[0.8rem] top-[22%] z-20 hidden w-[15.5rem] rounded-[26px] border-white/[0.05] bg-[linear-gradient(180deg,rgba(18,20,18,0.58),rgba(13,14,13,0.42))] px-4 py-4 opacity-78 backdrop-blur-[22px] lg:block"
          >
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.035),transparent_30%)]" />
            <div className="relative flex items-center gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-signal/10 text-signal">
                <Plus size={20} />
              </div>
              <div className="min-w-0">
                <p className="text-sm text-white/38">Nova entrada</p>
                <p className="truncate text-xl font-bold text-signal/90">
                  + R$ 2.500
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            style={{ y: cardRightY }}
            animate={{ y: [0, -8, 0], x: [0, 3, 0] }}
            transition={{ duration: 11.2, repeat: Infinity, ease: "easeInOut" }}
            className="glass-panel absolute right-[0.6rem] top-[57%] z-20 hidden w-[13.5rem] rounded-[24px] border-white/[0.05] bg-[linear-gradient(180deg,rgba(18,20,18,0.56),rgba(13,14,13,0.4))] px-4 py-4 opacity-72 backdrop-blur-[24px] md:block"
          >
            <div className="space-y-2">
              <p className="text-sm text-white/44">Reserva ativa</p>
              <div className="flex items-center justify-between">
                <span className="text-base font-semibold text-white/92">Viagem</span>
                <span className="text-sm font-semibold text-signal/88">R$ 2k</span>
              </div>
            </div>
          </motion.div>
        </>
      ) : null}

      <motion.div
        animate={{ y: [0, -8, 0], rotate: variant === "hero" ? [4.6, 3.8, 4.6] : undefined }}
        transition={{ duration: 8.4, repeat: Infinity, ease: "easeInOut" }}
        className={`phone-edge relative mx-auto w-full ${widthClass} ${phoneTilt} rounded-[3.2rem] p-[0.56rem]`}
      >
        <div
          className={`phone-screen relative overflow-hidden rounded-[2.72rem] px-6 pb-6 pt-5 ${heightClass} md:px-7 md:pb-7`}
        >
          <div className="screen-reflection pointer-events-none absolute inset-0" />
          <div className="phone-specular pointer-events-none absolute inset-0" />
          <div className="pointer-events-none absolute left-0 right-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent)]" />
          <div className="pointer-events-none absolute inset-x-[18%] top-[10%] h-[24%] rounded-full bg-white/[0.03] blur-[52px] opacity-40" />

          <div className="relative mb-10 flex items-center justify-between text-sm text-white">
            <span className="font-semibold">9:41</span>
            <div className="flex items-center gap-2">
              <span className="h-3.5 w-3.5 rounded-full bg-white/28" />
              <span className="h-3.5 w-3.5 rounded-full bg-white/16" />
            </div>
          </div>

          <div className="relative mb-8 flex items-start justify-between gap-6">
            <div>
              <p className="mb-3 text-lg text-white/70">Saldo disponível</p>
              <h3 className="font-display text-[2.9rem] font-extrabold leading-none tracking-[-0.055em] text-white md:text-[3.35rem]">
                R$ 8.459,20
              </h3>
            </div>
            <div className="grid h-14 w-14 place-items-center rounded-[1.25rem] border border-white/8 bg-white/[0.04] text-signal shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
              <Wallet2 size={24} />
            </div>
          </div>

          <div className="space-y-5">
            <MetricCard label="Entradas" value="R$ 12.500,00" color="green" width="78%" />
            <MetricCard label="Despesas" value="R$ 4.040,80" color="red" width="45%" />
          </div>

          <div className="mt-[9.5rem] rounded-[24px] border border-signal/18 bg-[linear-gradient(135deg,rgba(12,49,25,0.84),rgba(10,28,18,0.98))] px-5 py-5 shadow-[0_18px_48px_rgba(0,0,0,0.3)] md:mt-[11.5rem]">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[1.03rem] font-bold text-white">Reservas</p>
                <p className="mt-1 text-lg text-signal">3 metas ativas</p>
              </div>
              <div className="grid h-12 w-12 place-items-center rounded-full bg-signal/16 text-signal">
                <ChevronRight size={24} />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
