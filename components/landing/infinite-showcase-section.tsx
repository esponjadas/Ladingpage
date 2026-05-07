"use client";

import { motion } from "framer-motion";
import {
  Bell,
  ChartSpline,
  CircleDollarSign,
  CreditCard,
  Goal,
  Layers3,
  PiggyBank,
  ReceiptText,
  Smartphone,
  Sparkles,
  Target,
  WalletCards,
} from "lucide-react";
import { Reveal } from "./reveal";

const calmCards = [
  {
    icon: CircleDollarSign,
    label: "Saldo disponível",
    title: "R$ 1.240,00 livres",
    copy: "Hoje você sabe exatamente quanto pode gastar.",
    tone: "green",
    rotate: "-rotate-[2deg]",
    width: "w-[17rem]",
  },
  {
    icon: PiggyBank,
    label: "Reservas",
    title: "Viagem, emergência e aluguel",
    copy: "Metas organizadas em caixas separadas.",
    tone: "soft",
    rotate: "rotate-[1.5deg]",
    width: "w-[18rem]",
  },
  {
    icon: Target,
    label: "Meta ativa",
    title: "Notebook em 4 meses",
    copy: "Contribuições automáticas e tranquilas.",
    tone: "green",
    rotate: "-rotate-[1deg]",
    width: "w-[16rem]",
  },
  {
    icon: ChartSpline,
    label: "Fluxo mensal",
    title: "Entradas acima das despesas",
    copy: "Visual claro para decidir melhor.",
    tone: "soft",
    rotate: "rotate-[2deg]",
    width: "w-[18rem]",
  },
  {
    icon: Sparkles,
    label: "Insight inteligente",
    title: "Você gastou menos com delivery",
    copy: "Clareza que incentiva decisões melhores.",
    tone: "green",
    rotate: "-rotate-[1.5deg]",
    width: "w-[19rem]",
  },
  {
    icon: Layers3,
    label: "Categorias",
    title: "Essenciais, lazer e objetivos",
    copy: "Tudo no lugar, sem ruído visual.",
    tone: "soft",
    rotate: "rotate-[1deg]",
    width: "w-[17rem]",
  },
];

const chaosCards = [
  {
    icon: Smartphone,
    label: "Pix aleatório",
    title: "- R$ 68,90",
    copy: "Transferência que você nem lembra por quê.",
    rotate: "rotate-[2deg]",
    width: "w-[15rem]",
  },
  {
    icon: ReceiptText,
    label: "Delivery",
    title: "- R$ 124,50",
    copy: "Dois pedidos em uma noite corrida.",
    rotate: "-rotate-[2deg]",
    width: "w-[16rem]",
  },
  {
    icon: CreditCard,
    label: "Fatura do cartão",
    title: "- R$ 2.450,00",
    copy: "Valor alto demais sem contexto.",
    rotate: "rotate-[1.5deg]",
    width: "w-[18rem]",
  },
  {
    icon: Bell,
    label: "Notificação confusa",
    title: "Cobrança recorrente",
    copy: "Mais uma assinatura esquecida.",
    rotate: "-rotate-[1deg]",
    width: "w-[17rem]",
  },
  {
    icon: WalletCards,
    label: "Assinaturas",
    title: "- R$ 89,90",
    copy: "Pequenas saídas virando peso no mês.",
    rotate: "rotate-[2.5deg]",
    width: "w-[16rem]",
  },
  {
    icon: Goal,
    label: "Fim do mês",
    title: "Saldo sem direção",
    copy: "Você acompanha, mas não entende.",
    rotate: "-rotate-[1.5deg]",
    width: "w-[18rem]",
  },
];

function CalmCard({
  icon: Icon,
  label,
  title,
  copy,
  tone,
  rotate,
  width,
}: (typeof calmCards)[number]) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.012 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={`${width} ${rotate} marquee-card premium-panel rounded-[1.7rem] p-5`}
    >
      <div className="mb-4 flex items-center gap-3">
        <div
          className={`grid h-11 w-11 place-items-center rounded-full ${
            tone === "green" ? "bg-signal/12 text-signal" : "bg-white/[0.05] text-white/74"
          }`}
        >
          <Icon size={18} />
        </div>
        <span className="text-sm text-white/52">{label}</span>
      </div>
      <p className="font-display text-[1.28rem] font-[760] leading-[1.08] tracking-[-0.04em] text-white">
        {title}
      </p>
      <p className="mt-3 text-[0.96rem] leading-[1.75] text-white/58">{copy}</p>
    </motion.div>
  );
}

function ChaosCard({
  icon: Icon,
  label,
  title,
  copy,
  rotate,
  width,
}: (typeof chaosCards)[number]) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={`${width} ${rotate} marquee-card rounded-[1.7rem] border border-white/[0.06] bg-[linear-gradient(180deg,rgba(24,16,16,0.82),rgba(13,11,11,0.72))] p-5 shadow-[0_28px_70px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.03)] backdrop-blur-[18px]`}
    >
      <div className="mb-4 flex items-center gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-full bg-[#8e2d2d]/12 text-[#ff7c7c]">
          <Icon size={18} />
        </div>
        <span className="text-sm text-white/46">{label}</span>
      </div>
      <p className="font-display text-[1.28rem] font-[760] leading-[1.08] tracking-[-0.04em] text-white">
        {title}
      </p>
      <p className="mt-3 text-[0.96rem] leading-[1.75] text-white/52">{copy}</p>
    </motion.div>
  );
}

function MarqueeRow({
  items,
  reverse = false,
  duration,
  chaos = false,
}: {
  items: typeof calmCards | typeof chaosCards;
  reverse?: boolean;
  duration: number;
  chaos?: boolean;
}) {
  const duplicated = [...items, ...items];

  return (
    <div className="relative overflow-hidden">
      <div className="marquee-fade-left pointer-events-none absolute inset-y-0 left-0 z-20 w-20 md:w-28" />
      <div className="marquee-fade-right pointer-events-none absolute inset-y-0 right-0 z-20 w-20 md:w-28" />
      {chaos ? (
        <div className="pointer-events-none absolute left-[12%] top-1/2 z-0 h-28 w-56 -translate-y-1/2 rounded-full bg-[#8e2d2d]/14 blur-[80px]" />
      ) : (
        <div className="pointer-events-none absolute right-[18%] top-1/2 z-0 h-32 w-64 -translate-y-1/2 rounded-full bg-signal/10 blur-[90px]" />
      )}

      <div
        className={`marquee-track flex w-max gap-5 py-3 will-change-transform ${reverse ? "marquee-reverse" : ""}`}
        style={{ animationDuration: `${duration}s` }}
      >
        {duplicated.map((item, index) =>
          chaos ? (
            <ChaosCard key={`${item.title}-${index}`} {...(item as (typeof chaosCards)[number])} />
          ) : (
            <CalmCard key={`${item.title}-${index}`} {...(item as (typeof calmCards)[number])} />
          ),
        )}
      </div>
    </div>
  );
}

export function InfiniteShowcaseSection() {
  return (
    <section className="section-shell relative py-20 md:py-32">
      <div className="pointer-events-none absolute inset-x-[6%] top-[10%] h-40 rounded-full bg-[#0d100e] blur-[120px]" />
      <div className="pointer-events-none absolute right-[10%] top-[34%] h-60 w-60 rounded-full bg-signal/10 blur-[110px]" />
      <div className="pointer-events-none absolute left-[8%] bottom-[20%] h-56 w-56 rounded-full bg-[#8e2d2d]/10 blur-[100px]" />

      <MarqueeRow items={calmCards} reverse duration={44} />

      <Reveal className="relative z-10 py-12 md:py-16">
        <div className="mx-auto max-w-[46rem] text-center">
          <h2 className="font-display text-[2.9rem] font-[780] leading-[0.98] tracking-[-0.075em] text-white sm:text-[3.8rem] md:text-[4.9rem]">
            O controle financeiro que faz sentido.
          </h2>
          <p className="mx-auto mt-6 max-w-[34rem] text-[1.02rem] leading-[1.9] text-white/62 md:text-lg">
            Pare de apenas acompanhar gastos. Comece a entender seu dinheiro.
          </p>
        </div>
      </Reveal>

      <MarqueeRow items={chaosCards} duration={38} chaos />
    </section>
  );
}
