"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight, Eye, LockKeyhole, Play, ShieldCheck } from "lucide-react";

const SUPPORT_EMAIL = "kersosuporte@gmail.com";
const SUPPORT_LINK = `mailto:${SUPPORT_EMAIL}`;

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const phrases = [
  "Eu nem gastei tanto esse mês.",
  "Quando recebi, tinha dinheiro.",
  "Mês que vem eu começo a economizar.",
  "Não sei para onde meu salário foi.",
  "Eu precisava guardar dinheiro.",
];

const before = [
  "Eu acho que gastei pouco.",
  "Eu vejo isso depois.",
  "Não lembro quanto foi.",
  "Talvez mês que vem.",
];

const after = [
  "Eu sei quanto sobrou.",
  "Eu sei onde exagerei.",
  "Eu sei onde posso cortar.",
  "Eu tomo decisões com clareza.",
];

const clues = ["saldo projetado", "percepção do mês", "alerta de padrão", "clareza atual"];

function StoreButton({ hero = false }: { hero?: boolean }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const timer = window.setTimeout(() => setOpen(false), 2300);
    return () => window.clearTimeout(timer);
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#2ce987] font-black uppercase tracking-[0.08em] text-[#031008] shadow-[0_24px_80px_rgba(44,233,135,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#6affad] hover:shadow-[0_30px_100px_rgba(44,233,135,0.28)] sm:w-auto ${
          hero ? "min-h-16 px-9 text-sm sm:text-base" : "min-h-12 px-6 text-xs"
        }`}
      >
        <Play size={16} fill="currentColor" />
        BAIXAR NA PLAY STORE
        <ArrowRight size={16} className="transition group-hover:translate-x-1" />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed bottom-5 left-1/2 z-[100] -translate-x-1/2 rounded-full border border-white/10 bg-[#090b0a]/94 px-5 py-3 text-sm font-bold text-white shadow-[0_22px_80px_rgba(0,0,0,0.5)] backdrop-blur-2xl"
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

function LogoMark({ large = false }: { large?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="Kerso">
      <span className={`${large ? "h-14 w-14 rounded-[1.35rem]" : "h-10 w-10 rounded-2xl"} grid place-items-center overflow-hidden border border-white/10 bg-white/[0.045] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_18px_55px_rgba(0,0,0,0.26)]`}>
        <Image src="/Kersologo-transparent.png" alt="" width={large ? 48 : 34} height={large ? 48 : 34} className="h-[86%] w-[86%] object-contain transition duration-500 group-hover:scale-105" priority />
      </span>
      <span>
        <span className={`${large ? "text-lg" : "text-sm"} block font-display font-black tracking-[0.22em] text-white`}>KERSO</span>
        <span className="mt-0.5 block text-[10px] font-semibold uppercase tracking-[0.18em] text-white/36">clareza financeira</span>
      </span>
    </Link>
  );
}

function SectionText({ eyebrow, title, text, center = false }: { eyebrow?: string; title: string; text?: string; center?: boolean }) {
  return (
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
      className={`${center ? "mx-auto text-center" : ""} max-w-4xl`}
    >
      {eyebrow ? <p className="text-xs font-black uppercase tracking-[0.25em] text-[#2ce987]">{eyebrow}</p> : null}
      <h2 className="mt-4 font-display text-[2.7rem] font-black leading-[0.96] tracking-[-0.085em] text-white sm:text-[5rem]">
        {title}
      </h2>
      {text ? <p className="mt-6 max-w-2xl text-base leading-8 text-white/62 sm:text-xl sm:leading-9">{text}</p> : null}
    </motion.div>
  );
}

function Count800() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let frame = 0;
    const totalFrames = 72;
    const timer = window.setInterval(() => {
      frame += 1;
      const progress = Math.min(frame / totalFrames, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(800 * eased));
      if (progress === 1) window.clearInterval(timer);
    }, 18);

    return () => window.clearInterval(timer);
  }, [inView]);

  return (
    <div ref={ref} className="font-display text-[6.4rem] font-black leading-none tracking-[-0.11em] text-white sm:text-[11rem] lg:text-[15rem]">
      R${value}
    </div>
  );
}

function MysteryMockup() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 28, scale: 0.98 }}
      animate={{ opacity: 1, y: prefersReducedMotion ? 0 : [0, -10, 0], scale: 1 }}
      transition={{ duration: prefersReducedMotion ? 0.8 : 6, repeat: prefersReducedMotion ? 0 : Infinity, ease: "easeInOut" }}
      className="relative mx-auto w-full max-w-[430px]"
    >
      <div className="absolute inset-6 rounded-full bg-[#2ce987]/14 blur-[90px]" />
      <div className="relative overflow-hidden rounded-[2.4rem] border border-white/10 bg-[#070908]/88 p-5 shadow-[0_50px_170px_rgba(0,0,0,0.62)] backdrop-blur-2xl">
        <div className="mb-10 flex items-center justify-between">
          <LogoMark />
          <Eye size={18} className="text-[#2ce987]" />
        </div>

        <div className="space-y-6">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-white/32">clareza atual</p>
            <p className="mt-2 font-display text-5xl font-black tracking-[-0.09em] text-white">R$ 3.420</p>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-white/14 to-transparent" />

          <div className="grid grid-cols-2 gap-3">
            {clues.slice(0, 2).map((item) => (
              <div key={item} className="rounded-3xl bg-white/[0.045] p-4">
                <p className="text-xs leading-5 text-white/50">{item}</p>
                <span className="mt-5 block h-2 rounded-full bg-[#2ce987]/70" />
              </div>
            ))}
          </div>

          <div className="rounded-[1.8rem] bg-[#2ce987]/10 p-5">
            <p className="text-sm font-semibold text-[#8dffc2]">O dinheiro não desaparece.</p>
            <p className="mt-1 text-sm text-white/58">Ele deixa rastros.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function LandingPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#010201] text-white">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_50%_0%,rgba(44,233,135,0.10),transparent_24%),radial-gradient(circle_at_12%_16%,rgba(255,255,255,0.04),transparent_20%),linear-gradient(180deg,#050705_0%,#010201_52%,#000_100%)]" />
      <div className="page-noise pointer-events-none fixed inset-0 z-0 opacity-16" />

      <div className="relative z-10">
        <header className="section-shell sticky top-0 z-50 pt-4">
          <div className="flex items-center justify-between rounded-full bg-[#050705]/78 px-3 py-3 shadow-[0_18px_70px_rgba(0,0,0,0.34)] backdrop-blur-2xl md:px-5">
            <LogoMark />
            <nav className="hidden items-center gap-8 text-sm font-semibold text-white/52 md:flex">
              <a href="#problema" className="transition hover:text-white">Problema</a>
              <a href="#kerso" className="transition hover:text-white">Kerso</a>
              <a href="#clareza" className="transition hover:text-white">Clareza</a>
            </nav>
            <StoreButton />
          </div>
        </header>

        <section className="section-shell grid min-h-[calc(100svh-84px)] items-center gap-14 py-14 lg:grid-cols-[1.04fr_0.96fr] lg:py-20">
          <motion.div initial="hidden" animate="visible" transition={{ staggerChildren: 0.1 }} className="mx-auto max-w-4xl text-center lg:mx-0 lg:text-left">
            <motion.p variants={reveal} className="text-xs font-black uppercase tracking-[0.25em] text-[#2ce987]">Kerso</motion.p>
            <motion.h1 variants={reveal} className="mt-5 font-display text-[3.25rem] font-black leading-[0.95] tracking-[-0.09em] text-white sm:text-[5.4rem] lg:text-[6.7rem]">
              Você trabalha todos os meses.
              <br />
              Então por que o dinheiro continua desaparecendo?
            </motion.h1>
            <motion.p variants={reveal} className="mx-auto mt-7 max-w-2xl text-lg leading-9 text-white/64 lg:mx-0">
              O dinheiro não desaparece. Você só nunca teve clareza suficiente para enxergar para onde ele foi.
            </motion.p>
            <motion.div variants={reveal} className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <StoreButton hero />
              <a href="#kerso" className="inline-flex min-h-16 w-full items-center justify-center gap-2 rounded-full bg-white/[0.045] px-8 text-sm font-black uppercase tracking-[0.08em] text-white/86 transition hover:-translate-y-0.5 hover:bg-white/[0.075] sm:w-auto">
                CONHECER O KERSO <ArrowRight size={17} />
              </a>
            </motion.div>
            <motion.a variants={reveal} href="#problema" className="mx-auto mt-12 inline-flex items-center gap-2 text-sm font-semibold text-white/40 transition hover:text-white lg:mx-0">
              descubra o que está acontecendo <ArrowDown size={16} />
            </motion.a>
          </motion.div>

          <MysteryMockup />
        </section>

        <section id="problema" className="section-shell flex min-h-screen items-center py-24">
          <div className="w-full">
            <SectionText center eyebrow="parece familiar?" title="Tem mês que parece que o dinheiro simplesmente evapora." />
            <div className="mx-auto mt-14 max-w-5xl space-y-8 sm:space-y-10">
              {phrases.map((phrase, index) => (
                <motion.p
                  key={phrase}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-90px" }}
                  transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="font-display text-[2.2rem] font-black leading-[1.02] tracking-[-0.075em] text-white/86 sm:text-[4.4rem]"
                >
                  “{phrase}”
                </motion.p>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell flex min-h-screen items-center justify-center py-24 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} transition={{ staggerChildren: 0.12 }} className="mx-auto max-w-5xl">
            <motion.div variants={reveal}><Count800 /></motion.div>
            <motion.h2 variants={reveal} className="mt-4 font-display text-[2.4rem] font-black leading-none tracking-[-0.08em] text-white sm:text-[5rem]">
              Pequenas decisões.
              <br />
              Grande impacto.
            </motion.h2>
            <motion.p variants={reveal} className="mx-auto mt-8 max-w-2xl text-base leading-8 text-white/58 sm:text-xl sm:leading-9">
              Um lanche, uma entrega, uma assinatura esquecida, uma compra rápida. Separados parecem nada. Juntos mudam o mês inteiro.
            </motion.p>
          </motion.div>
        </section>

        <section className="section-shell flex min-h-screen items-center py-24">
          <SectionText
            eyebrow="a realidade"
            title="O problema não é ganhar pouco."
            text="O problema é não enxergar o próprio dinheiro. Sem clareza, qualquer mês vira surpresa. Você trabalha, recebe, paga, compra, esquece, repete. Quando percebe, o dinheiro já foi."
          />
        </section>

        <section className="section-shell py-24 sm:py-32">
          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} transition={{ staggerChildren: 0.08 }} className="space-y-6">
              <motion.p variants={reveal} className="text-xs font-black uppercase tracking-[0.25em] text-white/34">antes do kerso</motion.p>
              {before.map((item) => (
                <motion.p key={item} variants={reveal} className="font-display text-[2.2rem] font-black leading-none tracking-[-0.075em] text-white/45 sm:text-[3.8rem]">
                  {item}
                </motion.p>
              ))}
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} transition={{ staggerChildren: 0.08, delayChildren: 0.1 }} className="space-y-6">
              <motion.p variants={reveal} className="text-xs font-black uppercase tracking-[0.25em] text-[#2ce987]">depois do kerso</motion.p>
              {after.map((item) => (
                <motion.p key={item} variants={reveal} className="font-display text-[2.2rem] font-black leading-none tracking-[-0.075em] text-white sm:text-[3.8rem]">
                  {item}
                </motion.p>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="clareza" className="section-shell flex min-h-screen items-center justify-center py-24 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} transition={{ staggerChildren: 0.12 }} className="mx-auto max-w-5xl">
            <motion.div variants={reveal} className="mx-auto mb-10 flex justify-center"><LogoMark large /></motion.div>
            <motion.h2 variants={reveal} className="font-display text-[5rem] font-black leading-none tracking-[-0.12em] text-white sm:text-[10rem] lg:text-[14rem]">
              KERSO
            </motion.h2>
            <motion.p variants={reveal} className="mt-6 text-xs font-black uppercase tracking-[0.32em] text-[#2ce987]">clareza financeira</motion.p>
            <motion.p variants={reveal} className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-white/62">
              Não é sobre controlar cada centavo. É sobre finalmente entender o que o seu dinheiro está tentando mostrar.
            </motion.p>
            <motion.p variants={reveal} className="mx-auto mt-10 max-w-3xl font-display text-[2.4rem] font-black leading-[1] tracking-[-0.08em] text-white sm:text-[4.6rem]">
              O dinheiro não desaparece.
              <br />
              Ele deixa rastros.
            </motion.p>
          </motion.div>
        </section>

        <section className="section-shell flex min-h-screen items-center py-24">
          <div className="mx-auto max-w-5xl">
            <SectionText center title="Imagine abrir seu aplicativo bancário sem sentir ansiedade." />
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-90px" }} transition={{ staggerChildren: 0.1 }} className="mt-12 space-y-5 text-center">
              {["Imagine saber quanto entrou.", "Quanto saiu.", "Quanto pode gastar.", "Quanto está construindo."].map((line) => (
                <motion.p key={line} variants={reveal} className="font-display text-[2.15rem] font-black leading-none tracking-[-0.075em] text-white/72 sm:text-[4.2rem]">
                  {line}
                </motion.p>
              ))}
              <motion.p variants={reveal} className="pt-8 font-display text-[2.6rem] font-black leading-none tracking-[-0.085em] text-[#2ce987] sm:text-[5.3rem]">
                É isso que clareza faz.
              </motion.p>
            </motion.div>
          </div>
        </section>

        <section id="kerso" className="section-shell grid items-center gap-16 py-24 sm:py-32 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionText
              eyebrow="agora sim, o produto"
              title="Foi por isso que criamos o Kerso."
              text="Kerso foi criado para transformar bagunça financeira em clareza. Sem planilhas. Sem complicação. Sem precisar viver calculando tudo de cabeça."
            />
            <div className="mt-10 space-y-4 text-lg leading-8 text-white/70">
              {["Registre menos. Entenda mais.", "Veja padrões antes que virem problemas.", "Tenha consciência antes do mês acabar.", "Transforme gastos em informação."].map((item) => (
                <p key={item} className="border-l border-[#2ce987]/50 pl-5">{item}</p>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[460px]">
            <div className="absolute inset-10 rounded-full bg-[#2ce987]/12 blur-[90px]" />
            <div className="relative overflow-hidden rounded-[2.4rem] bg-[#070908]/88 p-6 shadow-[0_50px_170px_rgba(0,0,0,0.6)]">
              <div className="mb-12 flex items-center justify-between">
                <LogoMark />
                <ShieldCheck size={18} className="text-[#2ce987]" />
              </div>
              <div className="space-y-5">
                {clues.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: index * 0.08 }}
                    className="flex items-center justify-between rounded-3xl bg-white/[0.045] px-5 py-4"
                  >
                    <span className="text-sm font-semibold text-white/62">{item}</span>
                    <span className="h-2 w-16 rounded-full bg-[#2ce987]/70" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell flex min-h-screen items-center justify-center py-24 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} transition={{ staggerChildren: 0.12 }} className="mx-auto max-w-5xl">
            <motion.div variants={reveal} className="mx-auto mb-10 flex justify-center"><LogoMark large /></motion.div>
            <motion.h2 variants={reveal} className="font-display text-[3.1rem] font-black leading-[0.96] tracking-[-0.09em] text-white sm:text-[6.8rem]">
              Você não controla aquilo que não consegue ver.
            </motion.h2>
            <motion.p variants={reveal} className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-white/62">
              Pare de tentar lembrar onde gastou. Comece a enxergar para onde o seu dinheiro está indo.
            </motion.p>
            <motion.div variants={reveal} className="mx-auto mt-10 max-w-md"><StoreButton hero /></motion.div>
            <motion.p variants={reveal} className="mt-7 text-sm font-semibold uppercase tracking-[0.18em] text-white/36">
              Kerso. Clareza financeira para decisões melhores.
            </motion.p>
          </motion.div>
        </section>

        <footer className="section-shell border-t border-white/10 py-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <LogoMark large />
            <div className="flex flex-wrap gap-4 text-sm text-white/56">
              <Link href="/privacy" className="hover:text-white">Política de Privacidade</Link>
              <Link href="/terms" className="hover:text-white">Termos de Uso</Link>
              <a href={SUPPORT_LINK} className="hover:text-white">Contato</a>
              <a href={SUPPORT_LINK} className="hover:text-white">Suporte</a>
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-2 text-sm text-white/38 sm:flex-row sm:items-center sm:justify-between">
            <p>KERSO © 2026. Clareza financeira.</p>
            <a href={SUPPORT_LINK} className="hover:text-white"><LockKeyhole size={14} className="mr-2 inline" />{SUPPORT_EMAIL}</a>
          </div>
        </footer>
      </div>
    </main>
  );
}
