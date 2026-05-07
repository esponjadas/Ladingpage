import Link from "next/link";
import type { ReactNode } from "react";

type LegalPageShellProps = {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
};

export function LegalPageShell({
  eyebrow,
  title,
  intro,
  children,
}: LegalPageShellProps) {
  return (
    <main className="min-h-screen overflow-x-clip bg-obsidian text-white">
      <div className="page-noise pointer-events-none fixed inset-0 z-0 opacity-35" />
      <div className="page-vignette pointer-events-none fixed inset-0 z-0 opacity-70" />

      <div className="relative z-10">
        <header className="section-shell pt-5">
          <div className="glass-panel flex items-center justify-between rounded-full px-4 py-3 md:px-6">
            <Link href="/" className="font-display text-sm tracking-[0.2em] text-white">
              KERSO
            </Link>

            <Link
              href="/"
              className="premium-button inline-flex min-h-11 items-center rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white"
            >
              <span className="relative z-10">Voltar</span>
            </Link>
          </div>
        </header>

        <section className="section-shell py-14 md:py-20">
          <div className="mx-auto max-w-[54rem]">
            <p className="hero-kicker text-[0.72rem] font-medium text-white/44">{eyebrow}</p>
            <h1 className="mt-5 font-display text-[2.8rem] font-[760] leading-[0.98] tracking-[-0.08em] text-white sm:text-[4rem] md:text-[5rem]">
              {title}
            </h1>
            <p className="mt-6 max-w-[42rem] text-[1rem] leading-[1.9] text-white/62 md:text-[1.08rem]">
              {intro}
            </p>

            <div className="mt-12 space-y-6">{children}</div>

            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                href="/"
                className="premium-button inline-flex min-h-11 items-center rounded-full bg-signal px-8 py-4 text-base font-bold text-black"
              >
                <span className="relative z-10">Voltar para o início</span>
              </Link>
              <Link
                href="/privacy"
                className="premium-button inline-flex min-h-11 items-center rounded-full border border-white/10 bg-white/[0.03] px-7 py-4 text-base font-semibold text-white"
              >
                <span className="relative z-10">Política de privacidade</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
