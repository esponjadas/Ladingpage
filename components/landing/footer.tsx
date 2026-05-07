import Link from "next/link";

const links = [
  { href: "#preview", label: "Preview do app" },
  { href: "#", label: "Termos de uso" },
  { href: "mailto:kersosuporte@gmail.com", label: "kersosuporte@gmail.com" },
  { href: "#contato", label: "Contato" },
];

export function Footer() {
  return (
    <footer id="contato" className="border-t border-white/8 pb-10 pt-14">
      <div className="section-shell">
        <div className="grid gap-12 md:grid-cols-[1fr_auto] md:items-start">
          <div>
            <div className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.03]">
              <div className="font-display text-sm font-semibold tracking-[0.3em] text-white">
                K
              </div>
            </div>
            <p className="mt-6 max-w-xs text-base leading-relaxed text-white/58 md:text-[1.02rem]">
              Clareza financeira para decisões melhores.
            </p>
          </div>

          <div className="grid gap-x-12 gap-y-4 text-sm text-white/62 sm:grid-cols-2 md:text-[0.96rem]">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition duration-300 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/8 pt-8 text-xs text-white/42 md:flex-row md:items-center md:justify-between md:text-sm">
          <p>© 2026 Kerso. Todos os direitos reservados.</p>
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-signal" />
            <p className="uppercase tracking-[0.18em] text-white/48">
              Sistemas operacionais
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
