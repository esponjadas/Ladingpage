import { LegalPageShell } from "@/components/legal/legal-page-shell";

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
    title: "Responsabilidades",
    body: "O usuário é responsável pelas informações cadastradas, pela veracidade dos dados enviados e pelas decisões tomadas com base nas informações exibidas pelo produto.",
  },
  {
    title: "Privacidade",
    body: "O Kerso respeita a privacidade dos usuários e trata dados pessoais com cuidado, transparência e finalidade clara.",
  },
  {
    title: "Segurança",
    body: "Adotamos medidas técnicas e operacionais para proteger o ambiente e reduzir riscos de acesso não autorizado às informações.",
  },
  {
    title: "Limitações",
    body: "O Kerso não oferece consultoria financeira, investimento ou garantia de resultado financeiro. O produto apoia a organização e a leitura das informações.",
  },
  {
    title: "Contato",
    body: "Para dúvidas sobre estes termos, entre em contato pelo email kersosuporte@gmail.com.",
  },
];

export default function TermsPage() {
  return (
    <LegalPageShell
      eyebrow="Termos"
      title="Termos de Uso — Kerso"
      intro="Estes termos apresentam como o Kerso funciona hoje, quais são as responsabilidades de uso e o compromisso da marca com clareza, segurança e transparência."
    >
      {sections.map((section) => (
        <article key={section.title} className="premium-panel rounded-[1.8rem] p-6 md:p-8">
          <h2 className="font-display text-[1.45rem] font-[740] tracking-[-0.04em] text-white md:text-[1.6rem]">
            {section.title}
          </h2>
          <p className="mt-4 text-[1rem] leading-[1.9] text-white/62">{section.body}</p>
        </article>
      ))}
    </LegalPageShell>
  );
}
