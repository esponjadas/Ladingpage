import { Reveal } from "./reveal";

const problems = [
  {
    title: "O dinheiro some",
    copy: "Chega o fim do mês e a conta não fecha.",
    offset: "md:mt-10",
  },
  {
    title: "Você não sabe onde gastou",
    copy: "Pequenos gastos viram uma bola de neve.",
    offset: "md:mt-0",
  },
  {
    title: "Falta controle",
    copy: "Planilhas dão trabalho e ficam desatualizadas.",
    offset: "md:mt-16",
  },
];

export function ProblemSection() {
  return (
    <section id="como-funciona" className="section-shell section-vignette relative py-20 md:py-28">
      <div className="pointer-events-none absolute left-[8%] top-[32%] h-32 w-32 rounded-full bg-white/[0.025] blur-3xl" />
      <Reveal>
        <h2 className="max-w-[11ch] font-display text-[2.7rem] font-extrabold leading-[1.02] tracking-[-0.06em] text-white sm:text-[3.1rem] md:mx-auto md:text-center md:text-[4.15rem]">
          Todo mês parece igual.
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-6 md:mt-16 md:grid-cols-3 md:gap-8">
        {problems.map((problem, index) => (
          <Reveal key={problem.title} delay={index * 0.08} className={problem.offset}>
            <div className="premium-panel rounded-[2rem] p-7 md:min-h-[16rem] md:p-8">
              <div className="mb-7 h-[3px] w-12 rounded-full bg-signal/55" />
              <h3 className="max-w-[12ch] font-display text-[1.7rem] font-bold leading-[1.06] tracking-[-0.05em] text-white md:text-[1.9rem]">
                {problem.title}
              </h3>
              <p className="mt-4 max-w-[18rem] text-[1.02rem] leading-[1.75] text-white/66 md:text-lg">
                {problem.copy}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
