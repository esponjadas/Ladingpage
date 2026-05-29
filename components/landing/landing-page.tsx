"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Check,
  Eye,
  LockKeyhole,
  Play,
  ShieldCheck,
  Sparkles,
  WalletCards,
} from "lucide-react";

const SUPPORT_EMAIL = "kersosuporte@gmail.com";
const SUPPORT_LINK = `mailto:${SUPPORT_EMAIL}`;

const reveal = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

const familiarPhrases = [
  "Eu nem gastei tanto esse mês.",
  "Quando recebi tinha dinheiro.",
  "Eu começo a economizar mês que vem.",
  "Não sei para onde meu salário foi.",
  "Eu precisava guardar dinheiro.",
];

const tinyExpenses = [
  ["R$ 15", "um lanche rápido"],
  ["R$ 25", "entrega sem pensar"],
  ["R$ 40", "uma compra pequena"],
  ["R$ 18", "assinatura esquecida"],
  ["R$ 32", "corrida de última hora"],
];

const trustItems = [
  ["Simplicidade", "Nada de planilhas, menus infinitos ou confusão."],
  ["Clareza", "Você entende o dinheiro antes que ele desapareça."],
  ["Privacidade", "Uma experiência pensada para proteger seus dados."],
  ["Organização", "Pequenas decisões começam a fazer sentido juntas."],
];

function StoreButton({ large = false }: { large?: boolean }) {
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
        className={`group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#29e184] font-black uppercase tracking-[0.08em] text-[#021008] shadow-[0_22px_70px_rgba(41,225,132,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#54f6a2] hover:shadow-[0_28px_90px_rgba(41,225,132,0.28)] sm:w-auto ${
          large ? "min-h-16 px-9 text-sm sm:text-base" : "min-h-12 px-6 text-xs"
        }`}
      >
        <Play size={16} fill="currentColor" />
        BAIXAR NA PLAY STORE
        <ArrowRight size={16} className="transition group-hover:translate-x-1" />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed bottom-5 left-1/2 z-[100] -translate-x-1/2 rounded-full border border-white/10 bg-[#0d100e]/92 px-5 py-3 text-sm font-bold text-white shadow-[0_22px_80px_rgba(0,0,0,0.48)] backdrop-blur-2xl"
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

function LogoMark({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="Kerso">
      <span className={`${compact ? "h-10 w-10" : "h-12 w-12"} grid place-items-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_18px_55px_rgba(0,0,0,0.25)]`}>
        <Image src="/Kersologo-transparent.png" alt="" width={compact ? 34 : 40} height={compact ? 34 : 40} className="h-[86%] w-[86%] object-contain transition duration-500 group-hover:scale-105" priority />
      </span>
      <span>
        <span className="block font-display text-sm font-black tracking-[0.22em] text-white">KERSO</span>
        {!compact ? <span className="mt-0.5 block text-[10px] font-semibold uppercase tracking-[0.18em] text-white/36">clareza financeira</span> : null}
      </span>
    </Link>
  );
}

function MiniStatement() {
  return (
    <div className="relative mx-auto max-w-[390px] rounded-[2rem] border border-white/10 bg-[#080b09]/86 p-4 shadow-[0_44px_140px_rgba(0,0,0,0.55)] backdrop-blur-2xl sm:p-5">
      <div className="absolute -inset-5 -z-10 rounded-[2.5rem] bg-[#29e184]/10 blur-3xl" />
      <div className="mb-5 flex items-center justify-between">
        <LogoMark compact />
        <span className="rounded-full border border-[#29e184]/20 bg-[#29e184]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[#65f4aa]">Kerso</span>
      </div>
      <div className="rounded-[1.7rem] border border-white/8 bg-white/[0.035] p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/38">percepção do mês</p>
        <p className="mt-3 font-display text-4xl font-black tracking-[-0.08em] text-white">R$ 800</p>
        <p className="mt-2 text-sm leading-6 text-white/54">podem sumir em pequenas decisões que pareciam inofensivas.</p>
      </div>
      <div className="mt-4 space-y-2">
        {tinyExpenses.slice(0, 4).map(([value, label], index) => (
          <div key={label} className="flex items-center justify-between rounded-2xl border border-white/8 bg-[#0d100e] px-4 py-3">
            <span className="text-sm text-white/56">{label}</span>
            <span className={`font-bold ${index === 3 ? "text-[#29e184]" : "text-white"}`}>{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionTitle({ eyebrow, title, text, center = false }: { eyebrow: string; title: string; text?: string; center?: boolean }) {
  return (
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`${center ? "mx-auto text-center" : ""} max-w-3xl`}
    >
      <p className="text-xs font-black uppercase tracking-[0.24em] text-[#29e184]">{eyebrow}</p>
      <h2 className="mt-4 font-display text-[2.35rem] font-black leading-[1.02] tracking-[-0.075em] text-white sm:text-[3.7rem]">
        {title}
      </h2>
      {text ? <p className="mt-5 text-base leading-8 text-white/58 sm:text-lg">{text}</p> : null}
    </motion.div>
  );
}

function KersoPreview() {
  return (
    <div className="relative mx-auto max-w-[430px] rounded-[2.2rem] border border-white/10 bg-[#080a09]/88 p-5 shadow-[0_46px_150px_rgba(0,0,0,0.52)]">
      <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-[radial-gradient(circle_at_50%_0%,rgba(41,225,132,0.18),transparent_60%)] blur-2xl" />
      <div className="mb-8 flex items-center justify-between">
        <LogoMark compact />
        <Eye size={18} className="text-[#29e184]" />
      </div>
      <div className="space-y-3">
        <div className="rounded-3xl border border-white/8 bg-white/[0.035] p-5">
          <p className="text-xs uppercase tracking-[0.18em] text-white/36">clareza atual</p>
          <div className="mt-5 flex items-end justify-between gap-4">
            <div>
              <p className="font-display text-3xl font-black tracking-[-0.07em] text-white">R$ 3.420</p>
              <p className="mt-1 text-sm text-white/48">saldo projetado</p>
            </div>
            <div className="flex h-20 items-end gap-2">
              {[36, 62, 48, 78, 58].map((height, index) => (
                <span key={height} className={`w-5 rounded-t-full ${index === 3 ? "bg-[#29e184]" : "bg-white/14"}`} style={{ height: `${height}%` }} />
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-3xl border border-white/8 bg-white/[0.035] p-4">
            <p className="text-[11px] uppercase tracking-[0.14em] text-white/34">antes</p>
            <p className="mt-3 text-sm leading-6 text-white/58">gastos soltos, memória cansada, dúvida.</p>
          </div>
          <div className="rounded-3xl border border-[#29e184]/20 bg-[#29e184]/10 p-4">
            <p className="text-[11px] uppercase tracking-[0.14em] text-[#79f5b4]">depois</p>
            <p className="mt-3 text-sm leading-6 text-white/72">consciência, visão do mês, decisão melhor.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function LandingPage() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <main className="min-h-screen overflow-x-clip bg-[#020302] text-white">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_50%_0%,rgba(41,225,132,0.11),transparent_25%),radial-gradient(circle_at_12%_18%,rgba(255,255,255,0.045),transparent_22%),linear-gradient(180deg,#050706_0%,#020302_48%,#010201_100%)]" />
      <div className="page-noise pointer-events-none fixed inset-0 z-0 opacity-18" />

      <div className="relative z-10">
        <header className="section-shell sticky top-0 z-50 pt-4">
          <div className="flex items-center justify-between rounded-full border border-white/10 bg-[#060806]/76 px-3 py-3 shadow-[0_18px_60px_rgba(0,0,0,0.34)] backdrop-blur-2xl md:px-5">
            <LogoMark compact />
            <nav className="hidden items-center gap-7 text-sm font-semibold text-white/52 md:flex">
              <a href="#problema" className="transition hover:text-white">Problema</a>
              <a href="#kerso" className="transition hover:text-white">Kerso</a>
              <a href="#confianca" className="transition hover:text-white">Confiança</a>
            </nav>
            <StoreButton />
          </div>
        </header>

        <section className="section-shell grid min-h-[calc(100svh-84px)] items-center gap-12 py-14 lg:grid-cols-[1.03fr_0.97fr] lg:py-20">
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.1 }}
            className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left"
          >
            <motion.div variants={reveal} transition={{ duration: 0.7 }} className="mx-auto mb-8 flex w-fit justify-center lg:mx-0">
              <LogoMark />
            </motion.div>
            <motion.p variants={reveal} className="text-xs font-black uppercase tracking-[0.24em] text-[#29e184]">gestão financeira inteligente</motion.p>
            <motion.h1 variants={reveal} className="mt-5 font-display text-[3rem] font-black leading-[0.97] tracking-[-0.085em] text-white sm:text-[4.6rem] lg:text-[5.9rem]">
              Você trabalha todos os meses. Então por que o dinheiro continua desaparecendo?
            </motion.h1>
            <motion.p variants={reveal} className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/62 sm:text-lg lg:mx-0">
              Milhares de pessoas não gastam porque querem. Gastam porque nunca conseguem enxergar para onde o dinheiro está indo.
            </motion.p>
            <motion.div variants={reveal} className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <StoreButton large />
              <a href="#kerso" className="inline-flex min-h-16 w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-8 text-sm font-black uppercase tracking-[0.08em] text-white/86 transition hover:-translate-y-0.5 hover:bg-white/[0.065] sm:w-auto">
                CONHECER O KERSO <ArrowRight size={17} />
              </a>
            </motion.div>
            <motion.a variants={reveal} href="#problema" className="mx-auto mt-10 inline-flex items-center gap-2 text-sm font-semibold text-white/42 transition hover:text-white lg:mx-0">
              Existe algo importante para descobrir <ArrowDown size={16} />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.98 }}
            animate={{ opacity: 1, y: prefersReducedMotion ? 0 : [0, -8, 0], scale: 1 }}
            transition={{ duration: prefersReducedMotion ? 0.7 : 6, repeat: prefersReducedMotion ? 0 : Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <MiniStatement />
          </motion.div>
        </section>

        <section id="problema" className="section-shell py-20 sm:py-28">
          <SectionTitle center eyebrow="parece familiar?" title="O dinheiro não some de uma vez. Ele escapa em silêncio." />
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {familiarPhrases.map((phrase, index) => (
              <motion.article
                key={phrase}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-70px" }}
                transition={{ duration: 0.55, delay: index * 0.05 }}
                className="rounded-[1.6rem] border border-white/10 bg-white/[0.035] p-5 text-sm leading-6 text-white/72 shadow-[0_18px_70px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:border-white/18 hover:bg-white/[0.055]"
              >
                “{phrase}”
              </motion.article>
            ))}
          </div>
        </section>

        <section className="section-shell py-16 sm:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <SectionTitle eyebrow="a soma invisível" title="Pequenos gastos parecem inofensivos. Até o mês fechar." text="Um valor aqui, outro ali, uma decisão rápida no meio do dia. Separados, eles parecem pequenos. Juntos, contam uma história que quase ninguém para para olhar." />
            <div className="rounded-[2.2rem] border border-white/10 bg-[#080a09]/82 p-5 shadow-[0_34px_130px_rgba(0,0,0,0.34)]">
              <div className="grid gap-3 sm:grid-cols-2">
                {tinyExpenses.map(([value, label]) => (
                  <div key={label} className="rounded-3xl border border-white/8 bg-white/[0.035] p-5">
                    <p className="font-display text-3xl font-black tracking-[-0.07em] text-white">{value}</p>
                    <p className="mt-2 text-sm text-white/46">{label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-3xl border border-[#29e184]/20 bg-[#29e184]/10 p-6">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#75f6b1]">resultado percebido tarde demais</p>
                <p className="mt-3 font-display text-5xl font-black tracking-[-0.08em] text-white">R$ 800</p>
                <p className="mt-2 leading-7 text-white/62">desaparecem sem parecer uma decisão grande.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell py-20 sm:py-28">
          <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.052),rgba(255,255,255,0.024))] px-6 py-14 text-center shadow-[0_36px_140px_rgba(0,0,0,0.3)] sm:px-10">
            <LogoMark compact />
            <h2 className="mx-auto mt-8 max-w-4xl font-display text-[2.5rem] font-black leading-[1] tracking-[-0.08em] text-white sm:text-[5rem]">
              O problema não é ganhar pouco.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-9 text-white/64">
              O problema é não enxergar o próprio dinheiro. Sem clareza, a ansiedade aumenta, as metas ficam para depois e a sensação de estagnação vira rotina.
            </p>
            <div className="mt-9 grid gap-3 sm:grid-cols-4">
              {["ansiedade", "frustração", "metas adiadas", "estagnação"].map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/[0.035] px-5 py-3 text-sm font-semibold text-white/62">{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="kerso" className="section-shell grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-[0.9fr_1.1fr]">
          <KersoPreview />
          <div>
            <SectionTitle eyebrow="agora sim, o kerso" title="Foi por isso que criamos o Kerso." text="Kerso não é uma planilha. Kerso não é um aplicativo complicado. Kerso foi criado para trazer clareza antes que o mês vire uma surpresa." />
            <div className="mt-8 space-y-3">
              {["Registre menos. Entenda mais.", "Veja padrões antes que eles virem problema.", "Tenha consciência sem precisar viver calculando tudo."].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-4 text-white/68">
                  <Check size={17} className="text-[#29e184]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell py-20 sm:py-28">
          <SectionTitle center eyebrow="transformação" title="Não é sobre controlar cada centavo. É sobre parar de viver no escuro." />
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.032] p-6">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-white/34">antes</p>
              <div className="mt-7 grid gap-3">
                {["dinheiro sumindo", "desorganização", "impulsividade", "dúvidas"].map((item) => (
                  <span key={item} className="rounded-2xl bg-black/20 px-4 py-4 text-white/56">{item}</span>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] border border-[#29e184]/20 bg-[#29e184]/10 p-6 shadow-[0_30px_120px_rgba(41,225,132,0.08)]">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#7df6b6]">depois</p>
              <div className="mt-7 grid gap-3">
                {["clareza", "consciência", "controle", "tranquilidade"].map((item) => (
                  <span key={item} className="rounded-2xl bg-white/[0.06] px-4 py-4 text-white/78">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="confianca" className="section-shell py-20 sm:py-28">
          <SectionTitle eyebrow="feito para pessoas reais" title="Sem teatro. Sem promessas vazias. Só clareza para decidir melhor." />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trustItems.map(([title, text], index) => {
              const Icon = [Sparkles, Eye, ShieldCheck, WalletCards][index];
              return (
                <article key={title} className="rounded-[1.7rem] border border-white/10 bg-[#080a09]/78 p-6 shadow-[0_18px_80px_rgba(0,0,0,0.16)]">
                  <Icon size={22} className="text-[#29e184]" />
                  <h3 className="mt-5 font-display text-2xl font-black tracking-[-0.055em] text-white">{title}</h3>
                  <p className="mt-3 leading-7 text-white/54">{text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section-shell py-20 sm:py-28">
          <div className="relative overflow-hidden rounded-[2.7rem] border border-white/10 bg-[radial-gradient(circle_at_50%_0%,rgba(41,225,132,0.18),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.025))] px-6 py-16 text-center shadow-[0_42px_160px_rgba(0,0,0,0.42)] sm:px-10">
            <div className="mx-auto mb-9 flex justify-center"><LogoMark /></div>
            <h2 className="mx-auto max-w-4xl font-display text-[2.5rem] font-black leading-[1] tracking-[-0.085em] text-white sm:text-[5.6rem]">
              Seu dinheiro merece mais atenção do que sua memória.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-9 text-white/64">
              Pare de tentar lembrar onde gastou. Comece a enxergar para onde ele está indo.
            </p>
            <div className="mx-auto mt-10 max-w-md"><StoreButton large /></div>
          </div>
        </section>

        <footer className="section-shell border-t border-white/10 py-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <LogoMark />
            <div className="flex flex-wrap gap-4 text-sm text-white/56">
              <Link href="/privacy" className="hover:text-white">Política de Privacidade</Link>
              <Link href="/terms" className="hover:text-white">Termos de Uso</Link>
              <a href={SUPPORT_LINK} className="hover:text-white">Contato</a>
              <a href={SUPPORT_LINK} className="hover:text-white">Suporte</a>
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-2 text-sm text-white/38 sm:flex-row sm:items-center sm:justify-between">
            <p>KERSO © 2026. Gestão financeira inteligente.</p>
            <a href={SUPPORT_LINK} className="hover:text-white"><LockKeyhole size={14} className="mr-2 inline" />{SUPPORT_EMAIL}</a>
          </div>
        </footer>
      </div>
    </main>
  );
}
