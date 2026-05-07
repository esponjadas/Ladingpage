import { Reveal } from "./reveal";

const steps = [
  {
    number: "01",
    title: "Registre",
    copy: "Adicione seus ganhos e gastos de forma simples.",
  },
  {
    number: "02",
    title: "Organize",
    copy: "Separe reservas, categorias e compromissos.",
  },
  {
    number: "03",
    title: "Entenda",
    copy: "Veja para onde seu dinheiro vai e tome decisões melhores.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="section-shell relative py-20 md:py-28">
      <div className="pointer-events-none absolute left-[8%] top-[24%] h-40 w-40 rounded-full bg-white/[0.02] blur-[90px]" />
      <div className="pointer-events-none absolute right-[8%] top-[18%] h-52 w-52 ambient-green opacity-55" />

      <Reveal>
        <div className="max-w-[42rem]">
          <p className="hero-kicker text-[0.72rem] font-medium text-white/44">
            Como o Kerso funciona
          </p>
          <h2 className="mt-5 font-display text-[2.8rem] font-[780] leading-[1.02] tracking-[-0.07em] text-white sm:text-[3.6rem] md:text-[4.4rem]">
            Um fluxo simples para transformar caos em clareza.
          </h2>
        </div>
      </Reveal>

      <div className="relative mt-12 grid gap-6 lg:grid-cols-3">
        <div className="pointer-events-none absolute left-[16%] right-[16%] top-8 hidden h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.14),transparent)] lg:block" />
        {steps.map((step, index) => (
          <Reveal key={step.number} delay={index * 0.08}>
            <div className="premium-panel relative rounded-[2rem] p-7 md:min-h-[17rem] md:p-8">
              <div className="mb-8 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/8 bg-white/[0.04] font-display text-sm font-bold tracking-[0.12em] text-signal">
                {step.number}
              </div>
              <h3 className="font-display text-[1.7rem] font-[760] tracking-[-0.04em] text-white">
                {step.title}
              </h3>
              <p className="mt-4 max-w-[18rem] text-[1rem] leading-[1.8] text-white/62">
                {step.copy}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
