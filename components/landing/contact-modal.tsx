"use client";

import { Mail, MessageCircle, LifeBuoy, X } from "lucide-react";
import { ModalShell } from "@/components/ui/modal-shell";
import { trackEvent } from "@/lib/analytics";

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const contactOptions = [
  {
    icon: Mail,
    title: "Enviar email",
    description: "Fale com a equipe do Kerso por email.",
    href: "mailto:kersosuporte@gmail.com",
    event: "contact_email_click",
  },
  {
    icon: MessageCircle,
    title: "Falar no WhatsApp",
    description: "Conversa rápida para dúvidas comerciais.",
    href: "https://wa.me/55SEUNUMEROAQUI",
    event: "contact_whatsapp_click",
    note: "Substituir pelo número oficial do WhatsApp do Kerso.",
  },
  {
    icon: LifeBuoy,
    title: "Suporte",
    description: "Abra um contato direto para suporte.",
    href: "mailto:kersosuporte@gmail.com?subject=Suporte%20Kerso",
    event: "contact_support_click",
  },
];

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  return (
    <ModalShell isOpen={isOpen} onClose={onClose} titleId="contact-modal-title">
      <div className="pointer-events-none absolute right-[-8%] top-[-8%] h-40 w-40 rounded-full ambient-green opacity-80" />

      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className="hero-kicker text-[0.72rem] font-medium text-white/48">
            Contato
          </p>
          <h3
            id="contact-modal-title"
            className="mt-4 font-display text-[2.1rem] font-[780] leading-[1.02] tracking-[-0.06em] text-white"
          >
            Fale com o Kerso
          </h3>
          <p className="mt-4 max-w-[28rem] text-[1rem] leading-[1.8] text-white/64">
            Escolha a melhor forma de contato.
          </p>
        </div>

        <button
          className="rounded-full border border-white/10 bg-white/[0.03] p-3 text-white/68 transition hover:text-white"
          onClick={onClose}
        >
          <X size={18} />
        </button>
      </div>

      <div className="relative mt-8 grid gap-4">
        {contactOptions.map((option) => {
          const Icon = option.icon;

          return (
            <a
              key={option.title}
              href={option.href}
              target={option.href.startsWith("http") ? "_blank" : undefined}
              rel={option.href.startsWith("http") ? "noreferrer" : undefined}
              className="premium-panel rounded-[1.35rem] px-5 py-5 transition duration-300 hover:-translate-y-0.5 hover:border-white/10"
              onClick={() => trackEvent(option.event, { location: "contact_modal" })}
            >
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-signal/12 text-signal">
                  <Icon size={20} />
                </div>
                <div>
                  <p className="font-display text-[1.18rem] font-[740] tracking-[-0.03em] text-white">
                    {option.title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/58">
                    {option.description}
                  </p>
                  {option.note ? (
                    <p className="mt-2 text-xs leading-5 text-white/38">{option.note}</p>
                  ) : null}
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </ModalShell>
  );
}
