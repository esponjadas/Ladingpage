"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { trackEvent } from "@/lib/analytics";

type NavbarProps = {
  onWaitlistClick: () => void;
  onContactClick: () => void;
};

const navItems = [
  { href: "#como-funciona", label: "Ver como funciona", event: "nav_how_click" },
  { href: "#contato", label: "Contato", event: "nav_contact_click", action: "contact" },
];

export function Navbar({ onWaitlistClick, onContactClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isMenuOpen]);

  return (
    <header className="section-shell sticky top-0 z-50 pt-3 md:pt-5">
      <motion.div
        animate={{
          paddingTop: isScrolled ? 8 : 10,
          paddingBottom: isScrolled ? 8 : 10,
          backdropFilter: isScrolled ? "blur(26px)" : "blur(18px)",
        }}
        className={`glass-panel rounded-full border px-2.5 shadow-[0_12px_28px_rgba(0,0,0,0.16)] sm:px-3 md:px-5 ${
          isScrolled ? "border-white/[0.09]" : "border-white/[0.06]"
        }`}
      >
        <div className="flex items-center justify-between gap-2 sm:gap-3">
          <Link href="/" className="flex items-center gap-2.5 rounded-full px-1.5 py-1 sm:gap-3 sm:px-2 sm:py-1.5">
            <div className="grid h-9 w-9 place-items-center rounded-[0.9rem] border border-white/10 bg-white/[0.03] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] sm:h-10 sm:w-10 sm:rounded-[1rem]">
              <div className="font-display text-sm font-semibold tracking-[0.3em] text-white">
                K
              </div>
            </div>
            <div className="hidden sm:block">
              <p className="font-display text-[0.72rem] font-semibold tracking-[0.18em] text-white md:text-sm">
                KERSO
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item) =>
              item.action === "contact" ? (
                <button
                  key={item.label}
                  className="rounded-full px-4 py-2 text-sm font-medium text-white/66 transition duration-500 hover:bg-white/[0.035] hover:text-white"
                  onClick={() => {
                    trackEvent(item.event, { location: "navbar" });
                    onContactClick();
                  }}
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-white/66 transition duration-500 hover:bg-white/[0.035] hover:text-white"
                  onClick={() => trackEvent(item.event, { location: "navbar" })}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-2">
            <button
              className="premium-button hidden min-h-11 rounded-full bg-signal px-4 py-3 text-sm font-bold text-black shadow-[0_16px_30px_rgba(59,207,125,0.12)] lg:inline-flex lg:px-6"
              onClick={() => {
                trackEvent("waitlist_click", { location: "navbar" });
                onWaitlistClick();
              }}
            >
              <span className="relative z-10">Entrar na lista de espera</span>
            </button>

            <button
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white lg:hidden"
              onClick={() => setIsMenuOpen((current) => !current)}
              aria-expanded={isMenuOpen}
              aria-label="Abrir menu"
            >
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.div>

      {isMenuOpen ? (
        <div className="glass-panel mt-3 rounded-[1.4rem] border border-white/[0.08] p-3.5 lg:hidden">
          <div className="flex flex-col gap-2">
            <Link
              href="#como-funciona"
              className="rounded-[1rem] px-4 py-3 text-sm text-white/72 transition hover:bg-white/[0.04] hover:text-white"
              onClick={() => {
                trackEvent("nav_how_click", { location: "mobile_nav" });
                setIsMenuOpen(false);
              }}
            >
              Ver como funciona
            </Link>
            <button
              className="rounded-[1rem] px-4 py-3 text-left text-sm text-white/72 transition hover:bg-white/[0.04] hover:text-white"
              onClick={() => {
                trackEvent("nav_contact_click", { location: "mobile_nav" });
                setIsMenuOpen(false);
                onContactClick();
              }}
            >
              Contato
            </button>
            <button
              className="premium-button mt-2 inline-flex min-h-11 items-center justify-center rounded-full bg-signal px-5 py-3 text-sm font-bold text-black"
              onClick={() => {
                trackEvent("waitlist_click", { location: "mobile_nav" });
                setIsMenuOpen(false);
                onWaitlistClick();
              }}
            >
              <span className="relative z-10">Entrar na lista de espera</span>
            </button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
