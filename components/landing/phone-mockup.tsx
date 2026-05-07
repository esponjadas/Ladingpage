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
    <div className="rounded-[20px] border border-white/6 bg-white/[0.02] px-4 py-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.025)] backdrop-blur-sm sm:rounded-[23px] sm:px-5 sm:py-4">
      <div className="mb-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <span
            className={`text-sm ${color === "green" ? "text-signal" : "text-[#ff6666]"}`}
          >
            <Icon size={15} />
          </span>
          <span className="text-[0.88rem] text-white/78 sm:text-[0.96rem]">
            {label}
          </span>
        </div>
        <span className="text-[0.86rem] font-bold text-white sm:text-[0.98rem]">
          {value}
        </span>
      </div>
      <div className="h-2 rounded-full bg-black/40 sm:h-2.5">
        <div className={`h-2 rounded-full ${fillClass} sm:h-2.5`} style={{ width }} />
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

  const ySoft = useTransform(scrollYProgress, [0, 1], [8, -8]);
  const cardLeftY = useTransform(scrollYProgress, [0, 1], [8, -12]);
  const cardRightY = useTransform(scrollYProgress, [0, 1], [5, -10]);

  const widthClass =
    variant === "mini"
      ? "max-w-[218px] sm:max-w-[250px]"
      : variant === "preview"
        ? "max-w-[250px] sm:max-w-[290px] md:max-w-[340px]"
        : "max-w-[260px] sm:max-w-[320px] md:max-w-[390px] xl:max-w-[490px]";
  const heightClass =
    variant === "mini"
      ? "min-h-[410px] sm:min-h-[470px]"
      : variant === "preview"
        ? "min-h-[470px] sm:min-h-[540px] md:min-h-[620px]"
        : "min-h-[500px] sm:min-h-[610px] md:min-h-[700px] xl:min-h-[810px]";
  const outerWrapClass =
    variant === "hero"
      ? "max-w-[300px] sm:max-w-[420px] md:max-w-[560px] xl:max-w-[760px]"
      : variant === "preview"
        ? "max-w-[300px] sm:max-w-[340px] md:max-w-[360px]"
        : "max-w-[230px] sm:max-w-[270px]";
  const phoneTilt =
    variant === "hero"
      ? "rotate-[2.4deg] sm:rotate-[3.3deg] xl:rotate-[4.6deg]"
      : variant === "preview"
        ? "-rotate-[1.25deg] sm:-rotate-[2deg]"
        : "rotate-[3deg] sm:rotate-[5deg]";

  return (
    <motion.div
      ref={ref}
      style={{ y: ySoft }}
      className={`relative mx-auto w-full ${outerWrapClass} ${className}`}
    >
      <div className="pointer-events-none absolute left-[10%] top-[8%] h-[78%] w-[74%] rounded-full ambient-green opacity-60 sm:opacity-72" />
      <div className="pointer-events-none absolute left-[18%] top-[14%] h-[58%] w-[56%] rounded-full bg-white/[0.02] opacity-14 blur-[84px] sm:blur-[110px] sm:opacity-18" />
      <div className="pointer-events-none absolute right-[6%] top-[25%] h-[30%] w-[24%] rounded-full bg-black/40 blur-[42px] sm:blur-[72px]" />

      {floatingCards ? (
        <>
          <motion.div
            style={{ y: cardLeftY }}
            animate={{ y: [0, -8, 0], x: [0, -2, 0] }}
            transition={{ duration: 9.5, repeat: Infinity, ease: "easeInOut" }}
            className="glass-panel absolute left-[-0.2rem] top-[19%] z-20 w-[9rem] rounded-[20px] border-white/[0.04] bg-[linear-gradient(180deg,rgba(18,20,18,0.52),rgba(13,14,13,0.38))] px-3 py-3 opacity-68 backdrop-blur-[16px] sm:left-[0.1rem] sm:w-[12rem] sm:rounded-[24px] sm:px-3.5 sm:py-3.5 sm:opacity-72 sm:backdrop-blur-[18px] lg:left-[0.8rem] lg:top-[22%] lg:w-[15.5rem] lg:rounded-[26px] lg:px-4 lg:py-4 lg:opacity-78 lg:backdrop-blur-[22px]"
          >
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.03),transparent_30%)]" />
            <div className="relative flex items-center gap-2.5 sm:gap-3 lg:gap-4">
              <div className="grid h-8 w-8 place-items-center rounded-full bg-signal/8 text-signal sm:h-10 sm:w-10 lg:h-12 lg:w-12 lg:bg-signal/10">
                <Plus size={16} className="sm:hidden" />
                <Plus size={18} className="hidden sm:block lg:hidden" />
                <Plus size={20} className="hidden lg:block" />
              </div>
              <div className="min-w-0">
                <p className="text-[0.68rem] text-white/36 sm:text-xs lg:text-sm">
                  Nova entrada
                </p>
                <p className="truncate text-[0.92rem] font-bold text-signal/90 sm:text-base lg:text-xl">
                  + R$ 2.500
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            style={{ y: cardRightY }}
            animate={{ y: [0, -7, 0], x: [0, 2, 0] }}
            transition={{ duration: 11.2, repeat: Infinity, ease: "easeInOut" }}
            className="glass-panel absolute right-[0.1rem] top-[61%] z-20 hidden w-[10rem] rounded-[20px] border-white/[0.04] bg-[linear-gradient(180deg,rgba(18,20,18,0.5),rgba(13,14,13,0.36))] px-3 py-3 opacity-66 backdrop-blur-[16px] sm:block sm:w-[11rem] sm:rounded-[22px] sm:px-3.5 sm:py-3.5 sm:opacity-68 md:right-[0.4rem] md:top-[59%] md:w-[12rem] lg:right-[0.6rem] lg:top-[57%] lg:w-[13.5rem] lg:rounded-[24px] lg:px-4 lg:py-4 lg:opacity-72 lg:backdrop-blur-[24px]"
          >
            <div className="space-y-1.5 sm:space-y-2">
              <p className="text-[0.68rem] text-white/42 sm:text-xs lg:text-sm">
                Reserva ativa
              </p>
              <div className="flex items-center justify-between gap-3">
                <span className="text-[0.86rem] font-semibold text-white/90 sm:text-[0.95rem] lg:text-base">
                  Viagem
                </span>
                <span className="text-[0.72rem] font-semibold text-signal/86 sm:text-xs lg:text-sm">
                  R$ 2k
                </span>
              </div>
            </div>
          </motion.div>
        </>
      ) : null}

      <motion.div
        animate={{
          y: [0, -6, 0],
          rotate:
            variant === "hero"
              ? [2.4, 1.8, 2.4]
              : variant === "preview"
                ? [-1.25, -0.8, -1.25]
                : undefined,
        }}
        transition={{ duration: 8.4, repeat: Infinity, ease: "easeInOut" }}
        className={`phone-edge relative mx-auto w-full ${widthClass} ${phoneTilt} rounded-[2.35rem] p-[0.45rem] sm:rounded-[2.8rem] sm:p-[0.52rem] xl:rounded-[3.2rem] xl:p-[0.56rem]`}
      >
        <div
          className={`phone-screen relative overflow-hidden rounded-[2rem] px-4 pb-4 pt-4 sm:rounded-[2.35rem] sm:px-5 sm:pb-5 sm:pt-5 md:px-6 md:pb-6 xl:rounded-[2.72rem] xl:px-7 xl:pb-7 ${heightClass}`}
        >
          <div className="screen-reflection pointer-events-none absolute inset-0" />
          <div className="phone-specular pointer-events-none absolute inset-0" />
          <div className="pointer-events-none absolute left-0 right-0 top-0 h-28 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),transparent)] sm:h-36 xl:h-40" />
          <div className="pointer-events-none absolute inset-x-[18%] top-[10%] h-[24%] rounded-full bg-white/[0.03] opacity-34 blur-[32px] sm:blur-[44px] xl:blur-[52px]" />

          <div className="relative mb-7 flex items-center justify-between text-xs text-white sm:mb-8 sm:text-sm xl:mb-10">
            <span className="font-semibold">9:41</span>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="h-3 w-3 rounded-full bg-white/28 sm:h-3.5 sm:w-3.5" />
              <span className="h-3 w-3 rounded-full bg-white/16 sm:h-3.5 sm:w-3.5" />
            </div>
          </div>

          <div className="relative mb-6 flex items-start justify-between gap-4 sm:mb-7 sm:gap-5 xl:mb-8 xl:gap-6">
            <div>
              <p className="mb-2 text-[0.92rem] text-white/70 sm:text-base xl:mb-3 xl:text-lg">
                Saldo disponível
              </p>
              <h3 className="font-display text-[2rem] font-extrabold leading-none tracking-[-0.055em] text-white sm:text-[2.45rem] md:text-[2.7rem] xl:text-[3.35rem]">
                R$ 8.459,20
              </h3>
            </div>
            <div className="grid h-11 w-11 place-items-center rounded-[1rem] border border-white/8 bg-white/[0.04] text-signal shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:h-12 sm:w-12 xl:h-14 xl:w-14 xl:rounded-[1.25rem]">
              <Wallet2 size={18} className="sm:hidden" />
              <Wallet2 size={21} className="hidden sm:block xl:hidden" />
              <Wallet2 size={24} className="hidden xl:block" />
            </div>
          </div>

          <div className="space-y-3.5 sm:space-y-4 xl:space-y-5">
            <MetricCard label="Entradas" value="R$ 12.500,00" color="green" width="78%" />
            <MetricCard label="Despesas" value="R$ 4.040,80" color="red" width="45%" />
          </div>

          <div className="mt-[6.25rem] rounded-[20px] border border-signal/18 bg-[linear-gradient(135deg,rgba(12,49,25,0.84),rgba(10,28,18,0.98))] px-4 py-4 shadow-[0_14px_32px_rgba(0,0,0,0.24)] sm:mt-[7.5rem] sm:rounded-[22px] sm:px-4.5 sm:py-4.5 md:mt-[8.5rem] xl:mt-[11.5rem] xl:rounded-[24px] xl:px-5 xl:py-5 xl:shadow-[0_18px_48px_rgba(0,0,0,0.3)]">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[0.94rem] font-bold text-white sm:text-base xl:text-[1.03rem]">
                  Reservas
                </p>
                <p className="mt-1 text-[0.92rem] text-signal sm:text-base xl:text-lg">
                  3 metas ativas
                </p>
              </div>
              <div className="grid h-10 w-10 place-items-center rounded-full bg-signal/16 text-signal sm:h-11 sm:w-11 xl:h-12 xl:w-12">
                <ChevronRight size={20} className="sm:hidden" />
                <ChevronRight size={22} className="hidden sm:block xl:hidden" />
                <ChevronRight size={24} className="hidden xl:block" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
