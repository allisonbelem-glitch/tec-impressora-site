import { useState } from "react";

const navLinks = [
  { label: "Como Atendemos", href: "#como-funciona" },
  { label: "Quem Somos", href: "#diferenciais" },
  { label: "Marcas", href: "#marcas" },
  { label: "Depoimentos", href: "#depoimentos" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground text-xs py-1.5">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <span>📞 (11) 99999-9999 &nbsp; Seg-Sex 08-18h | Sáb 09-13h</span>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium hover:underline"
          >
            💬 WhatsApp
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <a href="#" className="font-heading text-2xl font-bold tracking-tight">
            <span className="text-foreground">TEC</span>
            <span className="text-primary">IMPRESSORA</span>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wide"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground text-sm font-semibold px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
            >
              💬 WhatsApp
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-foreground"
            aria-label="Menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden bg-background border-t border-border px-4 pb-4 space-y-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-sm text-muted-foreground hover:text-foreground uppercase tracking-wide"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-primary text-primary-foreground text-sm font-semibold px-4 py-2 rounded-md text-center"
            >
              💬 WhatsApp
            </a>
          </div>
        )}
      </nav>
    </>
  );
}