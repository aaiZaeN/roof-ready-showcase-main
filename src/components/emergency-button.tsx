import { useEffect, useState } from "react";
import { Droplets, Phone, X } from "lucide-react";

/**
 * Floating "Urgence fuite / infiltration" button.
 * Appears after small scroll, expands on hover, pulses to attract attention.
 */
export function EmergencyButton() {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed z-40 bottom-4 right-3 md:bottom-8 md:right-8 max-w-[calc(100vw-1.5rem)] transition-all duration-500 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      {open && (
        <div className="absolute bottom-[calc(100%+12px)] right-0 w-[min(300px,calc(100vw-1.5rem))] bg-background border border-border shadow-2xl p-5 animate-[fade-in_0.25s_ease-out]">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-2 right-2 p-1 text-muted-foreground hover:text-foreground"
            aria-label="Fermer"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="text-[10px] uppercase tracking-[0.25em] text-destructive mb-2">
            Urgence 24h / 7j
          </div>
          <h4 className="font-display text-xl leading-tight mb-2">
            Fuite ou infiltration ?
          </h4>
          <p className="text-sm text-foreground/70 leading-relaxed mb-4">
            Un artisan d'astreinte intervient sous 24h dans tout l'Hérault.
            Bâchage, mise hors d'eau, diagnostic immédiat.
          </p>
          <a
            href="tel:+33400000000"
            className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-destructive text-destructive-foreground text-sm tracking-wide hover:opacity-90 transition-opacity"
          >
            <Phone className="w-4 h-4" /> 04 00 00 00 00
          </a>
          <div className="mt-3 text-[11px] text-muted-foreground text-center">
            Appel direct · Diagnostic gratuit
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((o) => !o)}
        className="group relative flex items-center gap-2 md:gap-3 pl-3 pr-4 md:pl-4 md:pr-5 py-3 md:py-4 bg-destructive text-destructive-foreground shadow-xl md:hover:pr-6 transition-all animate-pulse-ring"
        aria-label="Urgence fuite ou infiltration"
      >
        <span className="relative flex items-center justify-center w-5 h-5 md:w-6 md:h-6 shrink-0">
          <Droplets className="w-4 h-4 md:w-5 md:h-5" />
        </span>
        <span className="text-xs md:text-sm tracking-wide font-medium whitespace-nowrap">
          Urgence fuite
        </span>
      </button>
    </div>
  );
}
