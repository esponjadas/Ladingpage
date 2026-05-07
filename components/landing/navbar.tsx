import Link from "next/link";

type NavbarProps = {
  onWaitlistClick: () => void;
};

const navItems = [
  { href: "#como-funciona", label: "Ver como funciona" },
  { href: "#contato", label: "Contato" },
];

export function Navbar({ onWaitlistClick }: NavbarProps) {
  return (
    <header className="section-shell sticky top-0 z-50 pt-4 md:pt-5">
      <div className="glass-panel rounded-full border border-white/[0.06] px-3 py-3 shadow-[0_18px_44px_rgba(0,0,0,0.18)] backdrop-blur-3xl">
        <div className="flex items-center justify-between gap-3">
          <Link href="#" className="flex items-center gap-3 rounded-full px-2 py-1.5">
            <div className="grid h-10 w-10 place-items-center rounded-[1rem] border border-white/10 bg-white/[0.03] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              <div className="font-display text-sm font-semibold tracking-[0.3em] text-white">
                K
              </div>
            </div>
            <div className="hidden md:block">
              <p className="font-display text-sm font-semibold tracking-[0.18em] text-white">
                KERSO
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-white/66 transition duration-500 hover:bg-white/[0.035] hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            className="premium-button rounded-full bg-signal px-4 py-3 text-sm font-bold text-black shadow-[0_16px_30px_rgba(59,207,125,0.12)] md:px-6"
            onClick={onWaitlistClick}
          >
            <span className="relative z-10">Entrar na lista de espera</span>
          </button>
        </div>
      </div>
    </header>
  );
}
