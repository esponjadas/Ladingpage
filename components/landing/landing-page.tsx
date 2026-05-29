"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Check,
  ChevronRight,
  FileText,
  LockKeyhole,
  PieChart,
  Play,
  ReceiptText,
  ShieldCheck,
  Smartphone,
  WalletCards,
} from "lucide-react";

const SUPPORT_EMAIL = "kersosuporte@gmail.com";
const SUPPORT_LINK = `mailto:${SUPPORT_EMAIL}`;

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const screens: Array<[string, string, string]> = [
  ["Dashboard", "Saldo, receitas, despesas e evolução em uma visão limpa.", "dashboard"],
  ["Calendário financeiro", "Veja o mês em segundos, com dias positivos e negativos.", "calendar"],
  ["Categorias", "Alimentação, transporte, moradia e tudo que importa.", "categories"],
  ["Relatórios", "PDF mensal com gastos, receitas, categorias e evolução.", "report"],
  ["Perfil", "Preferências, segurança e sua experiência personalizada.", "profile"],
];

const features: Array<[string, string, LucideIcon]> = [
  ["IA integrada", "Organiza seus gastos automaticamente.", Bot],
  ["Registro rápido", "Sem burocracia para anotar o que acabou de acontecer.", ReceiptText],
  ["Relatórios inteligentes", "Entenda seus hábitos financeiros sem abrir planilha.", BarChart3],
  ["Controle completo", "Receitas, despesas e metas no mesmo lugar.", WalletCards],
  ["Visual moderno", "Interface escura, limpa e intuitiva.", Smartphone],
  ["Dados seguros", "Proteção das informações e foco em privacidade.", ShieldCheck],
];

const steps: Array<[string, string, string, LucideIcon]> = [
  ["1", "Você registra", "R$ 50 no iFood", ReceiptText],
  ["2", "O Kerso entende", "A IA identifica categoria automaticamente.", Bot],
  ["3", "Você acompanha", "Tudo organizado em gráficos e relatórios.", BarChart3],
];

function StoreButton({ compact = false }: { compact?: boolean }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const timer = window.setTimeout(() => setOpen(false), 2400);
    return () => window.clearTimeout(timer);
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`group inline-flex items-center justify-center gap-2 rounded-full bg-[#20e383] font-bold text-[#03120a] shadow-[0_18px_48px_rgba(32,227,131,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#49f39e] hover:shadow-[0_22px_60px_rgba(32,227,131,0.26)] ${
          compact ? "px-5 py-3 text-sm" : "min-h-14 px-7 py-4 text-base"
        }`}
      >
        <Play size={17} fill="currentColor" />
        BAIXAR NA PLAY STORE
        <ArrowRight size={16} className="transition group-hover:translate-x-0.5" />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed bottom-5 left-1/2 z-[100] -translate-x-1/2 rounded-full border border-white/10 bg-[#101411]/90 px-5 py-3 text-sm font-semibold text-white shadow-[0_20px_70px_rgba(0,0,0,0.45)] backdrop-blur-xl"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
          >
            Em breve na Play Store
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

function LogoMark() {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="Kerso">
      <span className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
        <Image src="/Kersologo-transparent.png" alt="" width={28} height={28} className="h-7 w-7 object-contain" priority />
      </span>
      <span className="font-display text-sm font-bold tracking-[0.18em] text-white">KERSO</span>
    </Link>
  );
}

function PhoneShell({ type = "dashboard", small = false }: { type?: string; small?: boolean }) {
  return (
    <div className={`relative mx-auto rounded-[2.4rem] border border-white/12 bg-[#202421] p-2 shadow-[0_40px_120px_rgba(0,0,0,0.55)] ${small ? "w-[210px]" : "w-[290px] sm:w-[330px]"}`}>
      <div className="overflow-hidden rounded-[2rem] bg-[#070907] p-4">
        <div className="mb-5 flex items-center justify-between text-[11px] font-semibold text-white/80">
          <span>9:41</span>
          <span className="h-2 w-8 rounded-full bg-white/18" />
        </div>
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/Kersologo-transparent.png" alt="" width={24} height={24} className="h-6 w-6 object-contain" />
            <div>
              <p className="text-sm font-bold text-white">Kerso</p>
              <p className="text-[11px] text-white/42">Finance OS</p>
            </div>
          </div>
          <span className="rounded-full border border-white/10 px-2 py-1 text-[10px] text-[#20e383]">IA</span>
        </div>
        {type === "dashboard" ? <DashboardScreen /> : null}
        {type === "calendar" ? <CalendarScreen /> : null}
        {type === "categories" ? <CategoriesScreen /> : null}
        {type === "report" ? <ReportScreen /> : null}
        {type === "profile" ? <ProfileScreen /> : null}
      </div>
    </div>
  );
}

function DashboardScreen() {
  return (
    <div className="space-y-3">
      <div className="rounded-3xl border border-white/8 bg-[linear-gradient(180deg,#121812,#0b0e0c)] p-4">
        <p className="text-xs text-white/48">Saldo atual</p>
        <p className="mt-2 font-display text-3xl font-extrabold tracking-[-0.06em] text-white">R$ 3.840,20</p>
        <p className="mt-2 text-xs font-semibold text-[#20e383]">+12% este mês</p>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-2xl border border-white/8 bg-white/[0.035] p-3">
          <p className="text-[11px] text-white/42">Receitas</p>
          <p className="mt-1 text-sm font-bold text-white">R$ 5.200</p>
        </div>
        <div className="rounded-2xl border border-white/8 bg-white/[0.035] p-3">
          <p className="text-[11px] text-white/42">Despesas</p>
          <p className="mt-1 text-sm font-bold text-white">R$ 1.359</p>
        </div>
      </div>
      <div className="rounded-2xl border border-white/8 bg-white/[0.035] p-4">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-xs text-white/48">Categorias</span>
          <PieChart size={16} className="text-[#20e383]" />
        </div>
        <div className="flex h-24 items-end gap-2">
          {[48, 78, 42, 62, 34].map((height, index) => (
            <span className={`w-full rounded-t-full ${index === 1 ? "bg-[#20e383]" : "bg-white/16"}`} style={{ height: `${height}%` }} key={height} />
          ))}
        </div>
      </div>
    </div>
  );
}

function CalendarScreen() {
  const days = ["+", "+", "-", "+", "+", "-", "+", "+", "+", "-", "+", "+", "-", "+", "+"];
  return (
    <div>
      <p className="text-xs text-white/48">Maio</p>
      <h3 className="mt-1 text-lg font-bold text-white">Calendário financeiro</h3>
      <div className="mt-5 grid grid-cols-5 gap-2">
        {days.map((day, index) => (
          <span
            key={`${day}-${index}`}
            className={`grid aspect-square place-items-center rounded-xl text-xs font-bold ${day === "+" ? "bg-[#20e383]/16 text-[#20e383]" : "bg-[#ff5b5b]/14 text-[#ff7373]"}`}
          >
            {index + 1}
          </span>
        ))}
      </div>
      <div className="mt-5 space-y-2 text-xs text-white/52">
        <p><span className="mr-2 inline-block h-2 w-2 rounded-full bg-[#20e383]" />saldo positivo</p>
        <p><span className="mr-2 inline-block h-2 w-2 rounded-full bg-[#ff7373]" />saldo negativo</p>
      </div>
    </div>
  );
}

function CategoriesScreen() {
  return (
    <div className="space-y-3">
      {["Alimentação", "Transporte", "Moradia", "Lazer"].map((item, index) => (
        <div className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.035] p-3" key={item}>
          <span className="text-sm text-white/70">{item}</span>
          <strong className="text-sm text-white">{[38, 24, 21, 17][index]}%</strong>
        </div>
      ))}
      <div className="flex items-center gap-2 rounded-2xl bg-[#20e383]/10 p-3 text-xs font-semibold text-[#20e383]">
        <Bot size={15} /> iFood → Alimentação
      </div>
    </div>
  );
}

function ReportScreen() {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#f5f7f2] p-5 text-[#101410]">
      <FileText size={22} />
      <h3 className="mt-4 text-xl font-black tracking-[-0.04em]">Relatório mensal</h3>
      <p className="mt-1 text-xs text-black/50">PDF • Maio 2026</p>
      <div className="mt-8 flex h-28 items-end gap-2">
        {[42, 72, 56, 86, 48].map((height) => (
          <span className="w-full rounded-t bg-[#111]" style={{ height: `${height}%` }} key={height} />
        ))}
      </div>
      <div className="mt-6 space-y-2">
        <span className="block h-2 rounded-full bg-black/14" />
        <span className="block h-2 w-3/4 rounded-full bg-black/14" />
        <span className="block h-2 w-1/2 rounded-full bg-black/14" />
      </div>
    </div>
  );
}

function ProfileScreen() {
  return (
    <div className="space-y-3">
      <div className="rounded-3xl border border-white/8 bg-white/[0.035] p-4">
        <LockKeyhole size={18} className="text-[#20e383]" />
        <p className="mt-4 font-bold text-white">Dados seguros</p>
        <p className="mt-1 text-xs text-white/46">Conta, preferências e suporte</p>
      </div>
      {["Moeda padrão", "Notificações", "Exportar dados"].map((item) => (
        <div className="rounded-2xl border border-white/8 bg-white/[0.035] p-3 text-sm text-white/70" key={item}>{item}</div>
      ))}
    </div>
  );
}

export function LandingPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#030504] text-white">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_70%_0%,rgba(32,227,131,0.13),transparent_28%),radial-gradient(circle_at_15%_10%,rgba(255,255,255,0.055),transparent_18%),linear-gradient(180deg,#030504,#050706_46%,#020302)]" />
      <div className="page-noise pointer-events-none fixed inset-0 z-0 opacity-20" />

      <div className="relative z-10">
        <header className="section-shell sticky top-0 z-50 pt-4">
          <div className="flex items-center justify-between rounded-full border border-white/10 bg-[#070907]/72 px-3 py-3 shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur-2xl md:px-5">
            <LogoMark />
            <nav className="hidden items-center gap-6 text-sm font-medium text-white/56 md:flex">
              <a href="#como-funciona" className="transition hover:text-white">Como funciona</a>
              <a href="#telas" className="transition hover:text-white">Telas</a>
              <a href="#relatorios" className="transition hover:text-white">Relatórios</a>
            </nav>
            <StoreButton compact />
          </div>
        </header>

        <section className="section-shell grid min-h-[calc(100svh-88px)] items-center gap-12 py-16 lg:grid-cols-[0.92fr_1.08fr] lg:py-20">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left">
            <motion.p variants={reveal} className="text-xs font-bold uppercase tracking-[0.22em] text-[#20e383]">Kerso para Android</motion.p>
            <motion.h1 variants={reveal} className="mt-6 font-display text-[3rem] font-black leading-[0.96] tracking-[-0.08em] text-white sm:text-[4.6rem] lg:text-[6rem]">
              Controle seu dinheiro sem planilhas.
            </motion.h1>
            <motion.p variants={reveal} className="mx-auto mt-6 max-w-xl text-base leading-8 text-white/62 sm:text-lg lg:mx-0">
              Registre gastos em segundos, acompanhe sua evolução e entenda para onde seu dinheiro está indo.
            </motion.p>
            <motion.div variants={reveal} className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <StoreButton />
              <a href="#como-funciona" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-7 py-4 font-bold text-white/88 transition hover:-translate-y-0.5 hover:bg-white/[0.06]">
                VER COMO FUNCIONA <ChevronRight size={17} />
              </a>
            </motion.div>
            <motion.div variants={reveal} className="mt-7 flex flex-wrap justify-center gap-3 text-sm text-white/58 lg:justify-start">
              <span className="inline-flex items-center gap-2"><Check size={14} className="text-[#20e383]" /> IA para categorias</span>
              <span className="inline-flex items-center gap-2"><Check size={14} className="text-[#20e383]" /> Calendário financeiro</span>
              <span className="inline-flex items-center gap-2"><Check size={14} className="text-[#20e383]" /> PDF mensal</span>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="relative mx-auto w-full max-w-[520px]">
            <div className="absolute inset-8 rounded-full bg-[#20e383]/18 blur-[90px]" />
            <PhoneShell type="dashboard" />
            <div className="absolute left-0 top-[18%] hidden rounded-3xl border border-white/10 bg-[#101411]/80 p-4 shadow-[0_22px_80px_rgba(0,0,0,0.38)] backdrop-blur-xl sm:block">
              <p className="text-xs text-white/44">Receitas</p>
              <p className="mt-1 text-xl font-black text-white">R$ 5.200</p>
            </div>
            <div className="absolute bottom-[18%] right-0 hidden rounded-3xl border border-white/10 bg-[#101411]/80 p-4 shadow-[0_22px_80px_rgba(0,0,0,0.38)] backdrop-blur-xl sm:block">
              <p className="text-xs text-white/44">iFood detectado</p>
              <p className="mt-1 text-base font-black text-[#20e383]">Alimentação</p>
            </div>
          </motion.div>
        </section>

        <section id="como-funciona" className="section-shell py-20">
          <SectionHeading kicker="Como funciona" title="Do gasto ao relatório sem abrir uma planilha." />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {steps.map(([number, title, text, Icon]) => (
              <article key={title} className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 shadow-[0_24px_90px_rgba(0,0,0,0.18)]">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-[#20e383]/12 text-sm font-black text-[#20e383]">{number}</span>
                <Icon className="mt-8 text-white" size={24} />
                <h3 className="mt-5 font-display text-2xl font-black tracking-[-0.04em]">{title}</h3>
                <p className="mt-3 leading-7 text-white/58">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="telas" className="section-shell py-20">
          <SectionHeading center kicker="Telas reais" title="O produto vende o produto." text="Dashboard, calendário, categorias, relatórios e perfil em uma experiência horizontal, limpa e pronta para uso." />
          <div className="hide-scrollbar mt-12 flex gap-5 overflow-x-auto pb-4">
            {screens.map(([title, description, type]) => (
              <article key={title} className="min-w-[260px] rounded-[2rem] border border-white/10 bg-white/[0.035] p-4">
                <PhoneShell type={type} small />
                <h3 className="mt-5 font-display text-xl font-black tracking-[-0.04em]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/56">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell py-20">
          <SectionHeading kicker="Diferenciais" title="Controle financeiro com menos fricção e mais clareza." />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(([title, text, Icon]) => (
              <article key={String(title)} className="rounded-[1.7rem] border border-white/10 bg-[#0b0f0d]/78 p-6">
                <Icon size={22} className="text-[#20e383]" />
                <h3 className="mt-5 font-display text-xl font-black tracking-[-0.04em]">{title}</h3>
                <p className="mt-2 leading-7 text-white/56">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell grid items-center gap-10 py-20 lg:grid-cols-[0.85fr_1fr]">
          <PhoneShell type="calendar" />
          <SectionHeading kicker="Calendário financeiro" title="Veja seu mês inteiro em segundos." text="Dias verdes mostram saldo positivo. Dias vermelhos mostram saldo negativo. O Kerso transforma o mês em uma leitura rápida e visual." />
        </section>

        <section id="relatorios" className="section-shell grid items-center gap-10 py-20 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <SectionHeading kicker="Relatórios" title="PDF mensal pronto para revisar sua evolução." text="Gastos, receitas, categorias e evolução financeira reunidos em um relatório limpo, exportável e fácil de entender." />
            <div className="mt-7 flex flex-wrap gap-2">
              {["gastos", "receitas", "categorias", "evolução financeira"].map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm text-white/64">{item}</span>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] bg-[#f5f7f2] p-7 text-[#101410] shadow-[0_30px_120px_rgba(0,0,0,0.35)]">
            <FileText size={26} />
            <h3 className="mt-5 font-display text-3xl font-black tracking-[-0.05em]">Relatório Kerso</h3>
            <p className="mt-1 text-sm text-black/52">PDF mensal • Maio 2026</p>
            <div className="mt-10 flex h-40 items-end gap-3">
              {[42, 72, 56, 86, 48].map((height) => <span key={height} className="w-full rounded-t-xl bg-[#111]" style={{ height: `${height}%` }} />)}
            </div>
            <div className="mt-8 space-y-3">
              <span className="block h-3 rounded-full bg-black/12" />
              <span className="block h-3 w-3/4 rounded-full bg-black/12" />
              <span className="block h-3 w-1/2 rounded-full bg-black/12" />
            </div>
          </div>
        </section>

        <section className="section-shell py-20">
          <div className="rounded-[2.5rem] border border-white/10 bg-[radial-gradient(circle_at_50%_0%,rgba(32,227,131,0.15),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.025))] px-6 py-14 text-center shadow-[0_35px_140px_rgba(0,0,0,0.32)] sm:px-10">
            <h2 className="mx-auto max-w-3xl font-display text-4xl font-black leading-[1] tracking-[-0.07em] sm:text-6xl">Seu dinheiro, organizado com a clareza de um aplicativo moderno.</h2>
            <p className="mx-auto mt-6 max-w-xl leading-8 text-white/62">O Kerso foi pensado para quem quer controle financeiro sem planilhas, sem confusão e sem perder tempo.</p>
            <div className="mt-9"><StoreButton /></div>
          </div>
        </section>

        <footer id="contato" className="section-shell border-t border-white/10 py-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <LogoMark />
            <div className="flex flex-wrap gap-4 text-sm text-white/58">
              <Link href="/terms" className="hover:text-white">Termos de Uso</Link>
              <Link href="/privacy" className="hover:text-white">Política de Privacidade</Link>
              <a href={SUPPORT_LINK} className="hover:text-white">Contato</a>
              <a href={SUPPORT_LINK} className="hover:text-white">Suporte</a>
            </div>
          </div>
          <p className="mt-8 text-sm text-white/42">Suporte: <a className="hover:text-white" href={SUPPORT_LINK}>{SUPPORT_EMAIL}</a></p>
        </footer>
      </div>
    </main>
  );
}

function SectionHeading({ kicker, title, text, center = false }: { kicker: string; title: string; text?: string; center?: boolean }) {
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-3xl`}>
      <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#20e383]">{kicker}</p>
      <h2 className="mt-4 font-display text-[2.4rem] font-black leading-[1.02] tracking-[-0.07em] text-white sm:text-[3.6rem]">{title}</h2>
      {text ? <p className="mt-5 text-base leading-8 text-white/58 sm:text-lg">{text}</p> : null}
    </div>
  );
}
