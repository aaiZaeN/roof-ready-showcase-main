import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/politique-confidentialite")({
  head: () => ({
    meta: [{ title: "Politique de confidentialité — Maison Mercier" }],
  }),
  component: PolitiqueConfidentialitePage,
});

function PolitiqueConfidentialitePage() {
  useReveal();
  return (
    <section className="mx-auto max-w-4xl px-6 lg:px-10 py-24 md:py-36">
      <div className="text-xs uppercase tracking-[0.25em] text-accent mb-6">Protection des données</div>
      <h1 className="font-display text-4xl md:text-5xl leading-tight mb-14 reveal">Politique de confidentialité</h1>
      
      <div className="space-y-10 text-foreground/80 leading-relaxed reveal">
        <section>
          <h2 className="font-display text-2xl mb-4 text-foreground">1. Collecte des données personnelles</h2>
          <p>
            Dans le cadre de l'utilisation de ce site de démonstration, aucune donnée personnelle n'est réellement collectée. Le formulaire de contact présent sur le site est non fonctionnel et figure uniquement à titre d'exemple pour illustrer les compétences de conception de l'agence Dev&Prog.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl mb-4 text-foreground">2. Utilisation des données</h2>
          <p>
            Puisque le formulaire de contact est inactif, aucune information n'est recueillie, stockée ou traitée. Par conséquent, aucune donnée n'est cédée, vendue ou louée à des tiers commerciaux externes.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl mb-4 text-foreground">3. Vos droits</h2>
          <p>
            Conformément à la réglementation applicable (loi Informatique et Libertés et RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition concernant vos données personnelles. Vous pouvez exercer ces droits en nous contactant à l'adresse suivante : <a href="mailto:contact@devandprog.fr" className="text-accent hover:underline transition-colors">contact@devandprog.fr</a>.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl mb-4 text-foreground">4. Cookies</h2>
          <p>
            Ce site utilise principalement des cookies techniques strictement nécessaires à son bon fonctionnement et à la démonstration des fonctionnalités (aucune exploitation publicitaire ou pistage comportemental intempestif n'est effectuée sur ce site de démonstration).
          </p>
        </section>
      </div>
    </section>
  );
}