import { Link } from "@tanstack/react-router";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

const nav = [
  { to: "/", label: "Accueil" },
  { to: "/services", label: "Services" },
  { to: "/realisations", label: "Réalisations" },
  { to: "/a-propos", label: "L'artisan" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-sm bg-primary flex items-center justify-center">
            <span className="font-display text-primary-foreground text-xl">M</span>
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg tracking-tight">Maison Mercier</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Couvreur · Zingueur · Hérault
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm tracking-wide text-foreground/75 hover:text-foreground transition-colors"
              activeProps={{ className: "text-accent font-medium" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+33400000000"
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
          >
            <Phone className="w-4 h-4" /> 04 00 00 00 00
          </a>
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center px-5 py-2.5 bg-accent text-accent-foreground text-sm tracking-wide hover:bg-accent/90 transition-colors"
          >
            Devis gratuit
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2"
            aria-label="Menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="px-6 py-4 flex flex-col gap-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="text-base text-foreground/80"
              >
                {n.label}
              </Link>
            ))}
            <a href="tel:+33400000000" className="text-accent font-medium mt-2">
              04 00 00 00 00
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
