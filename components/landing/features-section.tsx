import { Bolt, ChartNoAxesCombined } from "lucide-react";
import { Reveal } from "./reveal";

type FeaturesSectionProps = {
  onWaitlistClick: () => void;
};

const reserveItems = [
  { label: "Viagem", value: "R$ 2k" },
  { label: "Emergência", value: "R$ 5k" },
];

export function FeaturesSection({ onWaitlistClick }: FeaturesSectionProps) {
  return (
    <section className="section-shell relative py-20 md:py-28">
      <div className="pointer-events-none absolute right-[6%] top-[18%] h-56 w-56 ambient-green opacity-60" />
      <div className="grid gap-6 lg:grid-cols-[1.22fr_0.62fr]">
        <Reveal>
          <div className="feature-card-glow premium-panel relative min-h-[27rem] rounded-[2.2rem] p-8 md:p-10">
            <div className="absolute inset-0 rounded-[2.2rem] bg-[radial-gradient(circle_at_100%_0%,rgba(59,207,125,0.08),transparent_36%)]" />
            <div className="relative grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
              <div className="max-w-[30rem]">
                <p className="hero-kicker text-[0.72rem] font-medium text-white/44">
                  Visão real do caixa
                </p>
                <h3 className="mt-5 font-display text-[2.05rem] font-extrabold leading-[1.02] tracking-[-0.055em] text-white md:text-[2.6rem]">
                  Saldo disponível real
                </h3>
                <p className="mt-4 text-[1.03rem] leading-[1.78] text-white/66 md:text-lg">
                  Saiba exatamente quanto você pode gastar hoje, considerando
                  suas reservas e contas a pagar.
                </p>

                <div className="mt-10 max-w-[24rem] rounded-[1.8rem] border border-white/8 bg-black/28 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                  <p className="text-lg text-white/60">Livre para gastar</p>
                  <p className="mt-4 font-display text-[3.4rem] font-extrabold tracking-[-0.08em] text-white">
                    R$ 1.240,00
                  </p>
                  <div className="mt-6 flex items-center gap-3 text-sm text-white/50">
                    <span className="h-2.5 w-2.5 rounded-full bg-signal" />
                    Reservas protegidas automaticamente
                  </div>
                </div>
              </div>

              <div className="flex items-end justify-start md:justify-end">
                <div className="w-full max-w-[20rem] rounded-[1.8rem] border border-white/8 bg-black/28 p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-sm text-white/55">Fluxo semanal</span>
                    <ChartNoAxesCombined className="text-signal" size={18} />
                  </div>
                  <div className="flex h-36 items-end gap-3">
                    {[42, 58, 73, 61, 88, 70, 96].map((height, index) => (
                      <div
                        key={`${height}-${index}`}
                        className={`w-full rounded-t-full ${
                          index === 4 || index === 6 ? "bg-signal" : "bg-white/16"
                        }`}
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="feature-card-glow premium-panel flex min-h-[27rem] flex-col rounded-[2.2rem] p-8 md:p-9">
            <div className="grid h-14 w-14 place-items-center rounded-full bg-white/[0.05] text-white">
              <Bolt size={22} />
            </div>
            <div className="mt-10">
              <h3 className="font-display text-[2rem] font-extrabold tracking-[-0.05em] text-white">
                Registro rápido
              </h3>
              <p className="mt-4 max-w-[18rem] text-[1.02rem] leading-[1.76] text-white/66 md:text-lg">
                Adicione gastos em 2 toques. Sem formulários complexos.
              </p>
            </div>
            <div className="mt-8 rounded-[1.3rem] border border-white/7 bg-black/24 p-4 text-sm text-white/56">
              Último gasto registrado em 3 segundos
            </div>
            <div className="mt-auto">
              <button
                className="premium-button w-full rounded-[1rem] bg-signal px-6 py-5 text-lg font-bold text-black shadow-[0_18px_34px_rgba(59,207,125,0.12)]"
                onClick={onWaitlistClick}
              >
                <span className="relative z-10">+ Novo gasto</span>
              </button>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[0.72fr_1.1fr]">
        <Reveal>
          <div className="feature-card-glow premium-panel min-h-[22rem] rounded-[2.2rem] p-8 md:p-9">
            <h3 className="font-display text-[2rem] font-extrabold tracking-[-0.05em] text-white">
              Separação de reservas
            </h3>
            <p className="mt-4 max-w-[18rem] text-[1.02rem] leading-[1.76] text-white/66 md:text-lg">
              Crie caixinhas para seus objetivos e proteja seu dinheiro.
            </p>

            <div className="mt-10 space-y-4">
              {reserveItems.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between rounded-[1.05rem] border border-white/7 bg-black/25 px-4 py-4 transition duration-300 hover:-translate-y-0.5 hover:border-white/10"
                >
                  <span className="text-lg text-white">{item.label}</span>
                  <span
                    className={`text-lg font-bold ${
                      item.label === "Viagem" ? "text-signal" : "text-[#7ea3ff]"
                    }`}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="feature-card-glow premium-panel min-h-[22rem] rounded-[2.2rem] p-8 md:p-10">
            <div className="grid gap-8 md:grid-cols-[1fr_18rem] md:items-center">
              <div>
                <h3 className="max-w-[11ch] font-display text-[2.1rem] font-extrabold leading-[1.02] tracking-[-0.05em] text-white md:text-[2.8rem]">
                  Controle de entradas e despesas
                </h3>
                <p className="mt-4 max-w-[28rem] text-[1.02rem] leading-[1.76] text-white/66 md:text-lg">
                  Visualize o fluxo do seu dinheiro com gráficos simples que
                  qualquer um entende.
                </p>
              </div>

              <div className="space-y-4">
                <div className="rounded-[1.3rem] border border-white/7 bg-black/25 p-4">
                  <div className="mb-3 flex items-center justify-between text-sm text-white/56">
                    <span>Entradas</span>
                    <span className="font-semibold text-white">R$ 12.500,00</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-black/45">
                    <div className="h-2.5 w-[78%] rounded-full bg-signal" />
                  </div>
                </div>
                <div className="rounded-[1.3rem] border border-white/7 bg-black/25 p-4">
                  <div className="mb-3 flex items-center justify-between text-sm text-white/56">
                    <span>Despesas</span>
                    <span className="font-semibold text-white">R$ 4.040,80</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-black/45">
                    <div className="h-2.5 w-[44%] rounded-full bg-[#ff5656]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
