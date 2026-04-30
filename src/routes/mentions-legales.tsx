import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [{ title: "Mentions légales — Maison Mercier" }],
  }),
  component: MentionsLegalesPage,
});

function MentionsLegalesPage() {
  useReveal();
  return (
    <section className="mx-auto max-w-4xl px-6 lg:px-10 py-24 md:py-36">
      <div className="text-xs uppercase tracking-[0.25em] text-accent mb-6">Informations légales</div>
      <h1 className="font-display text-4xl md:text-5xl leading-tight mb-14 reveal">Mentions légales</h1>
      
      <div className="space-y-10 text-foreground/80 leading-relaxed reveal">
        <div className="p-6 bg-accent/10 border-l-4 border-accent text-sm mb-10">
          <p className="font-bold mb-2">Avertissement</p>
          <p>Maison Mercier est une entreprise fictive. Ce site a été créé à des fins de démonstration pour présenter le savoir-faire de l'agence Dev&Prog. Aucun service réel n'est proposé par l'entité "Maison Mercier".</p>
        </div>

        <section>
          <h2 className="font-display text-2xl mb-4 text-foreground">1. Éditeur du site</h2>
          <p><strong>Maxence Maucourant</strong><br />Auto-entrepreneur - Dev&Prog</p>
          <p className="mt-2">
            SIRET : 804 310 688 00044<br />
            Né le : 01/10/1994<br />
            1 rue des Guignes 89580 Vallan, France
          </p>
          <p className="mt-2">
            <strong>Directeur de la publication :</strong> Maxence Maucourant (tous droits réservés).
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl mb-4 text-foreground">2. Coordonnées de contact</h2>
          <p>
            Téléphone : 06 99 83 73 89<br />
            Email : <a href="mailto:contact@devandprog.fr" className="text-accent hover:underline transition-colors">contact@devandprog.fr</a><br />
            Adresse : 1 rue des Guignes, 89580 Vallan
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl mb-4 text-foreground">3. Hébergement</h2>
          <p>
            <strong>PlanetHoster INC</strong><br />
            4416 Louis-B.-Mayer<br />
            Laval (Québec) H7P 0G1, Canada
          </p>
          <p className="mt-2">
            Téléphone : +1 855 774 4678<br />
            Site web : <a href="https://www.planethoster.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline transition-colors">www.planethoster.com</a>
          </p>
        </section>
      </div>
    </section>
  );
}