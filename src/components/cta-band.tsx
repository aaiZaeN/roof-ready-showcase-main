import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function CtaBand() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 md:py-28 grid md:grid-cols-[1.3fr_1fr] gap-12 items-center">
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-accent mb-4">
            Une toiture saine commence par un regard d'artisan
          </div>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05] text-balance">
            Parlons de votre toit.<br />
            <span className="italic text-background/70">Le devis est offert.</span>
          </h2>
        </div>
        <div className="flex flex-col gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center justify-between px-6 py-5 bg-accent text-accent-foreground hover:bg-accent/90 transition-colors group"
          >
            <span className="tracking-wide">Demander un devis</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="tel:+33400000000"
            className="inline-flex items-center justify-between px-6 py-5 border border-background/20 hover:border-accent transition-colors"
          >
            <span className="tracking-wide">Appeler — intervention sous 24h</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
