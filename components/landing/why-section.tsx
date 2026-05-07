import { Reveal } from "./reveal";

const reasons = [
  {
    title: "Clareza antes de cortar gastos",
    copy: "O Kerso mostra o que realmente está disponível hoje, sem confundir saldo com dinheiro livre.",
  },
  {
    title: "Reservas feitas para a vida real",
    copy: "Objetivos, contas e imprevistos passam a ter lugar definido, com menos atrito e mais tranquilidade.",
  },
  {
    title: "Decisões melhores no dia a dia",
    copy: "Menos culpa, menos improviso e mais confiança para escolher como usar o seu dinheiro.",
  },
];

export function WhySection() {
  return (
    <section className="section-shell relative py-20 md:py-30">
      <div className="pointer-events-none absolute left-[8%] top-[18%] h-40 w-40 rounded-full bg-white/[0.02] blur-[90px]" />
      <div className="pointer-events-none absolute right-[10%] top-[24%] h-56 w-56 ambient-green opacity-55" />

      <Reveal>
        <div className="max-w-[42rem]">
          <p className="hero-kicker text-[0.72rem] font-medium text-white/44">Por que Kerso</p>
          <h2 className="mt-5 max-w-[11ch] font-display text-[2.75rem] font-[780] leading-[1.02] tracking-[-0.07em] text-white sm:text-[3.5rem] md:text-[4.4rem]">
            Um app financeiro que parece feito para a vida real.
          </h2>
          <p className="mt-6 max-w-[34rem] text-[1.02rem] leading-[1.85] text-white/62 md:text-lg">
            O Kerso não quer só registrar números. Ele quer devolver clareza, calma e senso de
            direção para quem cansou de se sentir sempre atrás do próprio dinheiro.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {reasons.map((reason, index) => (
          <Reveal key={reason.title} delay={index * 0.07}>
            <div className="premium-panel rounded-[2rem] p-7 md:min-h-[17rem] md:p-8">
              <div className="mb-6 h-[3px] w-11 rounded-full bg-signal/55" />
              <h3 className="max-w-[15ch] font-display text-[1.55rem] font-[760] leading-[1.08] tracking-[-0.04em] text-white md:text-[1.8rem]">
                {reason.title}
              </h3>
              <p className="mt-4 text-[1rem] leading-[1.8] text-white/62 md:text-[1.04rem]">
                {reason.copy}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
