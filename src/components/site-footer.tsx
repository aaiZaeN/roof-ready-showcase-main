import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-[var(--slate-deep)] text-background/90">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 grid gap-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-3xl mb-4">Maison Mercier</div>
          <p className="text-background/60 max-w-md leading-relaxed">
            Artisan couvreur-zingueur dans l'Hérault depuis 1998. Un savoir-faire
            transmis, un regard qui ne transige pas sur la qualité.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-xs uppercase tracking-[0.2em] text-background/40">
            <span>Qualibat RGE</span>
            <span>·</span>
            <span>Garantie décennale</span>
            <span>·</span>
            <span>Artisan certifié</span>
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-background/40 mb-5">
            Navigation
          </div>
          <ul className="space-y-3 text-sm">
            <li><Link to="/services" className="hover:text-accent">Services</Link></li>
            <li><Link to="/realisations" className="hover:text-accent">Réalisations</Link></li>
            <li><Link to="/a-propos" className="hover:text-accent">L'artisan</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-background/40 mb-5">
            Atelier
          </div>
          <ul className="space-y-3 text-sm text-background/80">
            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0" />145 chemin des Oliviers, 34000 Montpellier</li>
            <li className="flex items-start gap-2">
              <Phone className="w-4 h-4 mt-0.5 shrink-0" /><a href="tel:+33400000000" className="hover:text-accent transition-colors">04 00 00 00 00</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="w-4 h-4 mt-0.5 shrink-0" /><a href="mailto:contact@maison-mercier.fr" className="hover:text-accent transition-colors">contact@maison-mercier.fr</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-background/40">
          <div>© {new Date().getFullYear()} Maison Mercier · Tous droits réservés</div>
          <div className="flex gap-2">
            <Link to="/mentions-legales" className="hover:text-accent transition-colors">Mentions légales</Link>
            <span>·</span>
            <Link to="/politique-confidentialite" className="hover:text-accent transition-colors">Politique de confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
