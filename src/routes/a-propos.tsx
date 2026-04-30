import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/artisan-portrait.jpg";
import { CtaBand } from "@/components/cta-band";
import { ShieldCheck, Award, Users, Leaf } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "L'artisan — Maison Mercier · Couvreur Hérault depuis 1998" },
      { name: "description", content: "Rencontrez l'artisan derrière Maison Mercier. 25 ans de savoir-faire couvreur transmis de père en fils dans l'Hérault." },
      { property: "og:title", content: "L'artisan — Maison Mercier" },
      { property: "og:description", content: "L'histoire d'un atelier de couvreurs dans l'Hérault, de père en fils depuis trois générations." },
      { property: "og:image", content: portrait },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Award, title: "Le geste juste", text: "25 ans de chantiers, des milliers de tuiles posées à la main, une seule façon de faire : la bonne. Pas d'approximation, pas de bricolage, pas d'à-peu-près." },
  { icon: ShieldCheck, title: "La parole tenue", text: "Devis détaillé, délais respectés, prix qui ne bouge pas. Un client doit pouvoir dormir tranquille le soir de la signature comme le soir de la réception." },
  { icon: Users, title: "Une équipe stable", text: "Pas de sous-traitance. Les compagnons que vous voyez le matin sont ceux qui terminent le chantier. Tous formés chez nous, certains depuis plus de quinze ans." },
  { icon: Leaf, title: "Matériaux choisis", text: "Tuile française, bois local des Cévennes, zinc VMZ de qualité, ardoise d'Angers. Un toit doit traverser les générations — pas seulement passer les dix ans de garantie." },
];

function AboutPage() {
  useReveal();
  return (
    <>
      <section className="grid lg:grid-cols-2">
        <div className="bg-primary text-primary-foreground p-10 md:p-16 lg:p-24 flex flex-col justify-center min-h-[70vh] relative overflow-hidden">
          <div className="absolute inset-0 hatch opacity-[0.04]" />
          <div className="relative">
            <div className="text-xs uppercase tracking-[0.3em] text-accent mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-accent" /> L'artisan
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1] text-balance">
              Antoine Mercier,<br />
              <span className="italic text-background/70">couvreur de père en fils.</span>
            </h1>
            <p className="mt-8 text-background/85 text-lg leading-relaxed max-w-lg">
              « Mon grand-père couvrait les mas du Larzac à la tuile canal, à
              l'époque où on la triait encore une par une au pied de l'échelle.
              Mon père a continué, à Saint-Mathieu-de-Tréviers, avec la même
              obstination du travail bien fait. »
            </p>
            <p className="mt-5 text-background/70 leading-relaxed max-w-lg">
              « Aujourd'hui, c'est mon nom sur le devis — mais c'est trois
              générations de gestes qui montent sur votre toit. Ça ne se délègue
              pas, ça se transmet. »
            </p>
            <div className="mt-10 flex items-center gap-4">
              <div className="w-px h-10 bg-accent" />
              <div>
                <div className="font-display text-lg">Antoine Mercier</div>
                <div className="text-xs uppercase tracking-[0.25em] text-background/50">Fondateur · Artisan couvreur</div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative min-h-[70vh] lg:min-h-full overflow-hidden">
          <img src={portrait} alt="Antoine Mercier, artisan couvreur" className="absolute inset-0 w-full h-full object-cover animate-ken-burns" />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 lg:px-10 py-24 md:py-36">
        <div className="text-xs uppercase tracking-[0.25em] text-accent mb-6 text-center">
          Notre histoire
        </div>
        <h2 className="font-display text-4xl md:text-5xl leading-tight text-balance text-center mb-14 reveal">
          Un atelier, trois générations,<br />un seul métier.
        </h2>
        <div className="space-y-8 text-lg leading-relaxed text-foreground/80 max-w-3xl mx-auto">
          <p className="reveal">
            Maison Mercier a été fondée officiellement en <strong className="text-foreground">1998</strong> dans un petit hangar
            à Saint-Mathieu-de-Tréviers, au pied du Pic Saint-Loup. Au début :
            un homme, une échelle, un camion Renault fatigué, et la conviction
            qu'on pouvait faire de la couverture autrement. Sans presser. Sans
            bâcler. Sans jamais promettre l'impossible pour décrocher un chantier.
          </p>
          <p className="reveal">
            Les premiers clients arrivent par le bouche-à-oreille. Des voisins,
            des amis de voisins, des notaires qui recommandent pour une vente,
            des architectes qui cherchent quelqu'un de sérieux sur une
            restauration. Antoine refuse deux chantiers sur trois — il ne veut
            que ce qu'il peut faire bien.
          </p>
          <p className="reveal">
            Vingt-cinq ans plus tard, l'atelier compte <strong className="text-foreground">huit compagnons</strong> formés
            en interne, un chef d'équipe charpentier qui a fait ses classes dans
            les Cévennes, et un apprenti par an. Nous intervenons sur tout
            l'Hérault, du Pic Saint-Loup au littoral sétois, du grand mas en
            restauration au pavillon qui prend l'eau un dimanche de novembre.
          </p>
          <p className="reveal">
            La méthode, elle, n'a pas changé d'un iota : on monte voir, on écoute
            la toiture, on dit la vérité — même quand elle coûte un chantier —,
            on chiffre juste, et on fait du beau travail. Nos devis sont toujours
            gratuits, nos diagnostics toujours écrits, nos chantiers toujours
            menés par les nôtres.
          </p>
          <p className="reveal italic font-display text-xl text-foreground">
            « On ne vend pas un toit. On vend vingt ans de tranquillité. »
          </p>
        </div>
      </section>

      <section className="bg-secondary/40 py-24 md:py-32 relative grain">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 relative">
          <div className="reveal mb-16">
            <div className="text-xs uppercase tracking-[0.25em] text-accent mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-accent" /> Nos principes
            </div>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05] text-balance max-w-3xl">
              Quatre principes,<br /><span className="italic text-accent">jamais négociés</span>.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {values.map(({ icon: Icon, title, text }) => (
              <div key={title} className="reveal">
                <Icon className="w-8 h-8 text-accent mb-5" />
                <h3 className="font-display text-xl mb-3">{title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-28">
        <div className="grid md:grid-cols-4 gap-10 text-center">
          {[
            { n: "1998", l: "Année de fondation" },
            { n: "800+", l: "Chantiers réalisés" },
            { n: "8", l: "Compagnons formés" },
            { n: "4,9/5", l: "Satisfaction client" },
          ].map((s) => (
            <div key={s.l} className="reveal">
              <div className="font-display text-6xl md:text-7xl text-accent tabular-nums">{s.n}</div>
              <div className="mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-24 md:py-28 grain">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 reveal">
          <div className="text-xs uppercase tracking-[0.25em] text-accent mb-6">Engagements & certifications</div>
          <h2 className="font-display text-3xl md:text-5xl leading-tight text-balance mb-10">
            Un artisan officiellement reconnu.
          </h2>
          <div className="grid md:grid-cols-2 gap-10 text-background/80 leading-relaxed">
            <div>
              <h3 className="font-display text-xl text-background mb-3">Qualibat RGE</h3>
              <p className="text-sm">
                Certification officielle délivrée par l'organisme Qualibat,
                attestant de nos compétences techniques, financières et
                juridiques. Vous permet de bénéficier des aides à la rénovation
                énergétique (MaPrimeRénov', éco-PTZ, TVA 5,5 %).
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl text-background mb-3">Garantie décennale MMA</h3>
              <p className="text-sm">
                Tous nos chantiers sont couverts par une assurance décennale
                nominative souscrite chez MMA. Attestation remise à chaque client
                avec le devis signé, garantie activée automatiquement dès la
                réception du chantier.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl text-background mb-3">Membre CAPEB Hérault</h3>
              <p className="text-sm">
                Nous sommes membres actifs de la Confédération de l'Artisanat et
                des Petites Entreprises du Bâtiment de l'Hérault — un gage de
                représentation, de formation continue et d'éthique professionnelle.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl text-background mb-3">Formation continue</h3>
              <p className="text-sm">
                Chaque compagnon suit au minimum 35 heures de formation par an :
                nouveaux matériaux, sécurité sur toiture, normes DTU, pose de
                photovoltaïque intégré. Le métier évolue — nous aussi.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
