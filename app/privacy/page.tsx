import { LegalPageShell } from "@/components/legal/legal-page-shell";

const sections = [
  {
    title: "Coleta de dados",
    body: "O Kerso coleta apenas as informações necessárias para operação da experiência, como nome, email e dados enviados voluntariamente em formulários de acesso antecipado e contato.",
  },
  {
    title: "Armazenamento",
    body: "As informações são armazenadas em infraestrutura segura, com acesso controlado e práticas voltadas para proteção, continuidade e integridade dos dados.",
  },
  {
    title: "Cookies",
    body: "Podemos utilizar cookies e tecnologias semelhantes para melhorar desempenho, lembrar preferências e entender interações com a landing page e futuras experiências do produto.",
  },
  {
    title: "LGPD",
    body: "O tratamento de dados pessoais segue os princípios da Lei Geral de Proteção de Dados, respeitando finalidade, necessidade, transparência e segurança.",
  },
  {
    title: "Privacidade",
    body: "O Kerso não vende dados pessoais a terceiros. Qualquer uso de informação é feito com foco em comunicação, melhoria do produto e relacionamento com quem demonstrou interesse na marca.",
  },
  {
    title: "Segurança",
    body: "Aplicamos medidas técnicas e operacionais para reduzir riscos e fortalecer a proteção das informações, incluindo revisão de acesso, monitoramento e boas práticas de desenvolvimento.",
  },
  {
    title: "Contato",
    body: "Para dúvidas sobre privacidade, direitos do titular ou solicitações relacionadas aos seus dados, escreva para kersosuporte@gmail.com.",
  },
];

export default function PrivacyPage() {
  return (
    <LegalPageShell
      eyebrow="Privacidade"
      title="Política de Privacidade — Kerso"
      intro="Esta política explica como o Kerso coleta, utiliza, armazena e protege informações pessoais com foco em clareza, confiança e conformidade."
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
