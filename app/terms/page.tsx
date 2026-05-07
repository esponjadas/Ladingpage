import Link from "next/link";

const sections = [
  {
    title: "Aceitação dos termos",
    body: "Ao acessar ou utilizar o Kerso, você concorda com estes Termos de Uso.",
  },
  {
    title: "Sobre o Kerso",
    body: "O Kerso é uma plataforma de gestão financeira pessoal criada para ajudar usuários a organizar gastos, reservas e informações financeiras.",
  },
  {
    title: "Responsabilidade do usuário",
    body: "O usuário é responsável pelas informações cadastradas e pelas decisões tomadas com base nos dados exibidos.",
  },
  {
    title: "Privacidade",
    body: "O Kerso respeita a privacidade dos usuários e não vende dados pessoais a terceiros.",
  },
  {
    title: "Limitações",
    body: "O Kerso não oferece consultoria financeira, investimento ou garantia de resultado financeiro.",
  },
  {
    title: "Alterações",
    body: "Estes termos podem ser atualizados conforme evolução do produto.",
  },
  {
    title: "Contato",
    body: "Para dúvidas, entre em contato pelo email: kersosuporte@gmail.com",
  },
];

export default function TermsPage() {
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
          <div className="mx-auto max-w-[52rem]">
            <p className="hero-kicker text-[0.72rem] font-medium text-white/44">
              Termos
            </p>
            <h1 className="mt-5 font-display text-[2.8rem] font-[780] leading-[1] tracking-[-0.08em] text-white sm:text-[4rem] md:text-[5rem]">
              Termos de Uso — Kerso
            </h1>

            <div className="mt-12 space-y-6">
              {sections.map((section) => (
                <article key={section.title} className="premium-panel rounded-[1.8rem] p-6 md:p-8">
                  <h2 className="font-display text-[1.5rem] font-[760] tracking-[-0.04em] text-white">
                    {section.title}
                  </h2>
                  <p className="mt-4 text-[1rem] leading-[1.85] text-white/62">
                    {section.body}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-12">
              <Link
                href="/"
                className="premium-button inline-flex min-h-11 items-center rounded-full bg-signal px-8 py-4 text-base font-bold text-black"
              >
                <span className="relative z-10">Voltar para o início</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
