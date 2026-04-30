import { createFileRoute } from "@tanstack/react-router";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import serviceCouverture from "@/assets/service-couverture.jpg";
import serviceDemoussage from "@/assets/service-demoussage.jpg";
import serviceCharpente from "@/assets/service-charpente.jpg";
import { CtaBand } from "@/components/cta-band";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/realisations")({
  head: () => ({
    meta: [
      { title: "Réalisations — Maison Mercier · Couvreur Hérault" },
      { name: "description", content: "Découvrez nos chantiers de couverture, charpente, étanchéité et démoussage dans l'Hérault. Plus de 800 toits restaurés depuis 1998." },
      { property: "og:title", content: "Réalisations — Maison Mercier" },
      { property: "og:description", content: "Plus de 800 toits restaurés dans l'Hérault. Une sélection." },
      { property: "og:image", content: project1 },
    ],
  }),
  component: RealisationsPage,
});

const projects = [
  { img: project1, place: "Saint-Guilhem-le-Désert", year: "2024", title: "Réfection complète en tuile canal", type: "Couverture", surface: "220 m²", duration: "7 semaines", desc: "Dépose soignée des tuiles anciennes, tri manuel, 40 % réemployées. Liteaux châtaignier, écran sous-toiture HPV." },
  { img: project3, place: "Pic Saint-Loup", year: "2023", title: "Restauration d'un mas du XVIIIe", type: "Charpente & couverture", surface: "340 m²", duration: "11 semaines", desc: "Charpente chêne déposée, traitée, reposée. Génoise à trois rangs refaite à l'identique au mortier de chaux." },
  { img: project2, place: "Montpellier", year: "2024", title: "Étanchéité d'une villa contemporaine", type: "Étanchéité", surface: "180 m²", duration: "3 semaines", desc: "Membrane EPDM grande largeur, relevés soudés, dalles sur plots. Garantie décennale MMA." },
  { img: serviceCouverture, place: "Sète", year: "2023", title: "Reprise de tuiles & faîtage", type: "Couverture", surface: "90 m²", duration: "6 jours", desc: "Remplacement de 180 tuiles cassées par la tramontane, faîtage à sec, solins cuivre refaits." },
  { img: serviceDemoussage, place: "Lunel", year: "2024", title: "Démoussage & hydrofuge coloré", type: "Démoussage", surface: "160 m²", duration: "4 jours", desc: "Nettoyage haute pression basse, anti-mousse curatif, hydrofuge terracotta. Toit rajeuni de vingt ans." },
  { img: serviceCharpente, place: "Clermont-l'Hérault", year: "2022", title: "Charpente traditionnelle neuve", type: "Charpente", surface: "210 m²", duration: "5 semaines", desc: "Charpente douglas des Cévennes, assemblages tenons-mortaises, création de deux chiens-assis." },
];

function RealisationsPage() {
  useReveal();
  return (
    <>
      <section className="border-b border-border bg-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0 hatch opacity-30" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-36">
          <div className="text-xs uppercase tracking-[0.25em] text-accent mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-accent" /> Carnet de chantiers
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] max-w-5xl text-balance">
            800 toits,<br /><span className="italic text-accent">une même promesse</span>.
          </h1>
          <p className="mt-8 text-lg md:text-xl text-foreground/70 max-w-3xl leading-relaxed">
            Une sélection de chantiers menés ces dernières années aux quatre coins
            de l'Hérault — du mas cévenol à la villa contemporaine, du toit-terrasse
            du centre de Montpellier à la restauration d'une génoise oubliée.
            Chaque projet est unique ; le soin, lui, ne change pas.
          </p>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
            {[
              { n: "800+", l: "Chantiers livrés" },
              { n: "25", l: "Années d'activité" },
              { n: "4,9/5", l: "Avis Google" },
              { n: "100 %", l: "Décennale couverte" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl md:text-4xl text-accent tabular-nums">{s.n}</div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((p, i) => (
            <article key={i} className="group reveal">
              <div className="aspect-[4/5] overflow-hidden mb-5 bg-muted relative">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--slate-deep)]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 left-4 px-3 py-1 bg-accent text-accent-foreground text-[10px] uppercase tracking-[0.25em]">
                  {p.type}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 text-background opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="flex gap-4 text-xs uppercase tracking-[0.2em]">
                    <span>{p.surface}</span>
                    <span className="text-accent">·</span>
                    <span>{p.duration}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                <span>{p.place}</span>
                <span>{p.year}</span>
              </div>
              <h3 className="font-display text-2xl mb-2 leading-tight">{p.title}</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">{p.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
