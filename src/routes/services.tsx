import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight, Phone, Droplets } from "lucide-react";
import serviceCouverture from "@/assets/service-couverture.jpg";
import serviceDemoussage from "@/assets/service-demoussage.jpg";
import serviceEtancheite from "@/assets/service-etancheite.jpg";
import serviceCharpente from "@/assets/service-charpente.jpg";
import { CtaBand } from "@/components/cta-band";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Couverture, Charpente, Étanchéité · Maison Mercier" },
      { name: "description", content: "Couverture, zinguerie, étanchéité toit-terrasse, charpente traditionnelle, démoussage et hydrofuge dans tout l'Hérault. Artisan RGE, garantie décennale." },
      { property: "og:title", content: "Services — Maison Mercier" },
      { property: "og:description", content: "Quatre savoir-faire pour protéger votre toit, en Hérault." },
      { property: "og:image", content: serviceCouverture },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    title: "Couverture & Toiture",
    img: serviceCouverture,
    tag: "Métier principal",
    intro:
      "Pose neuve, rénovation totale ou réparation ponctuelle. Nous travaillons toutes les couvertures du Sud de la France : tuile canal, tuile romane, tuile plate, ardoise naturelle d'Angers et zinc VMZ à joint debout. Chaque toit est traité comme une pièce unique.",
    long:
      "De la dépose soigneuse des matériaux anciens — souvent récupérables — à la pose millimétrée des nouveaux éléments, nous respectons les DTU en vigueur et les règles de l'art. Un chantier de réfection commence toujours par un diagnostic complet : état des liteaux, de l'écran sous-toiture, du faîtage, des solins. On ne recouvre jamais un problème, on le traite.",
    points: [
      "Diagnostic complet et rapport photo",
      "Réfection totale & reprise ponctuelle",
      "Pose de fenêtres de toit Velux & Fakro",
      "Zinguerie : gouttières, chéneaux, noues, descentes",
      "Faîtage à sec ou scellé au mortier de chaux",
      "Isolation sous toiture (ouate, laine de bois)",
    ],
    cta: "Demander un devis couverture",
  },
  {
    title: "Étanchéité Toit-Terrasse",
    img: serviceEtancheite,
    tag: "Spécialité moderne",
    intro:
      "Membranes EPDM, bitume SBS multicouche, résines polyuréthane liquides. Nous sécurisons les toits-terrasses, balcons accessibles, piscines débordantes et bâtiments tertiaires contre les infiltrations — pour de bon.",
    long:
      "Un toit-terrasse qui fuit, c'est souvent une étanchéité mal posée il y a dix ans. Nous reprenons les relevés, traitons les points singuliers (évacuations, ventilations, joints de dilatation) et posons une nouvelle peau continue, soudée ou collée selon le support. Garantie décennale incluse, compatible avec tout type de couvrement (gravillons, dalles sur plots, végétalisation).",
    points: [
      "Étanchéité bitumineuse multicouche",
      "Membranes EPDM auto-protégées (grande largeur)",
      "Résines polyuréthane circulables & teintables",
      "Reprise de relevés et points singuliers",
      "Étanchéité de balcons & loggias",
      "Toitures végétalisées et terrasses sur plots",
    ],
    cta: "Parler de mon toit-terrasse",
  },
  {
    title: "Charpente Traditionnelle",
    img: serviceCharpente,
    tag: "Savoir ancien",
    intro:
      "Charpente bois sur mesure, fermettes industrialisées, restauration de pannes, chevrons et entraits. Traitement curatif et préventif des bois contre capricornes, vrillettes, termites et mérule.",
    long:
      "Nous travaillons le chêne, le douglas, le mélèze et le châtaignier — toujours en provenance française. La charpente est l'ossature invisible qui porte tout le reste : une mauvaise jonction, une panne fatiguée, et c'est tout le toit qui bouge. Nos compagnons charpentiers diagnostiquent, renforcent ou reconstruisent avec assemblages traditionnels (tenons-mortaises, chevillage bois) ou modernes selon le projet.",
    points: [
      "Charpente traditionnelle bois sur mesure",
      "Fermettes industrialisées calculées",
      "Renforcement de structures existantes",
      "Remplacement de pannes & chevrons",
      "Traitement insectes xylophages & champignons",
      "Création de lucarnes & chiens-assis",
    ],
    cta: "Diagnostic charpente",
  },
  {
    title: "Démoussage & Hydrofuge",
    img: serviceDemoussage,
    tag: "Entretien longue durée",
    intro:
      "Nettoyage haute pression maîtrisée, application d'anti-mousse fongicide rémanent et hydrofuge de protection incolore ou coloré. Votre toit retrouve son éclat et gagne dix ans de vie supplémentaires.",
    long:
      "Un toit couvert de mousse, ce n'est pas qu'un problème esthétique : la mousse retient l'eau, fragilise les tuiles et accélère la porosité. Nous intervenons en deux passages : nettoyage doux puis traitement curatif, suivi quelques jours plus tard d'un hydrofuge qui imperméabilise sans colmater la respiration du matériau. Effet visible immédiatement, protection garantie 10 ans.",
    points: [
      "Nettoyage haute pression contrôlé (pas d'abîmage)",
      "Traitement anti-mousse curatif & préventif",
      "Hydrofuge incolore, perlant et respirant",
      "Hydrofuge coloré (ravive la tuile vieillie)",
      "Démoussage façades & terrasses pierre",
      "Contrat d'entretien annuel disponible",
    ],
    cta: "Redonner vie à mon toit",
  },
];

function ServicesPage() {
  useReveal();
  return (
    <>
      <section className="border-b border-border bg-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0 hatch opacity-30 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-36">
          <div className="text-xs uppercase tracking-[0.25em] text-accent mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-accent" /> Nos prestations
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] max-w-5xl text-balance">
            Quatre métiers,<br />une <span className="italic text-accent">même main</span>.
          </h1>
          <p className="mt-8 text-lg md:text-xl text-foreground/70 max-w-3xl leading-relaxed">
            Du grand chantier de réfection à la fuite urgente du dimanche soir,
            nous intervenons avec la même rigueur. Un toit, ce sont des matériaux,
            des techniques, une météo, un bâti. Voici tout ce que nous savons
            faire — et comment nous le faisons.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            {services.map((s, i) => (
              <a key={s.title} href={`#service-${i}`} className="text-xs uppercase tracking-[0.2em] px-4 py-2 border border-border hover:border-accent hover:text-accent transition-colors">
                0{i + 1} · {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {services.map((s, i) => (
          <section
            id={`service-${i}`}
            key={s.title}
            className={`py-24 md:py-32 grid md:grid-cols-2 gap-12 md:gap-20 items-start scroll-mt-24 ${i !== services.length - 1 ? "border-b border-border" : ""}`}
          >
            <div className={`reveal ${i % 2 === 1 ? "md:order-2" : ""}`}>
              <div className="aspect-[4/5] overflow-hidden relative group">
                <img src={s.img} alt={s.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105" />
                <div className="absolute top-5 left-5 px-3 py-1 bg-accent text-accent-foreground text-[10px] uppercase tracking-[0.25em]">
                  {s.tag}
                </div>
              </div>
            </div>
            <div className="reveal">
              <div className="text-xs uppercase tracking-[0.25em] text-accent mb-4 tabular-nums">
                0{i + 1} / 0{services.length}
              </div>
              <h2 className="font-display text-4xl md:text-6xl mb-6 text-balance leading-[1.05]">{s.title}</h2>
              <p className="text-foreground/80 text-lg leading-relaxed mb-6">{s.intro}</p>
              <p className="text-foreground/70 leading-relaxed mb-10">{s.long}</p>
              <div className="text-xs uppercase tracking-[0.25em] text-accent mb-5">Ce que nous réalisons</div>
              <ul className="space-y-3 mb-10">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-foreground/85">{p}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-6 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors group"
              >
                {s.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </section>
        ))}
      </div>

      {/* URGENCE */}
      <section className="bg-destructive text-destructive-foreground relative overflow-hidden">
        <div className="absolute inset-0 hatch opacity-10" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-16 md:py-20 grid md:grid-cols-[auto_1fr_auto] gap-8 items-center">
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-destructive-foreground/10 border border-destructive-foreground/30 shrink-0">
            <Droplets className="w-9 h-9" />
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.3em] opacity-80 mb-2">Urgence · 24h / 7j</div>
            <h3 className="font-display text-3xl md:text-4xl leading-tight">
              Besoin d'une intervention en urgence ?
            </h3>
            <p className="mt-3 text-destructive-foreground/80 max-w-2xl">
              Fuite au plafond, tuiles envolées après la tramontane, infiltration
              soudaine : un artisan est disponible sous 24h dans tout l'Hérault.
            </p>
          </div>
          <a
            href="tel:+33400000000"
            className="inline-flex items-center gap-3 px-7 py-5 bg-destructive-foreground text-destructive hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            <Phone className="w-5 h-5" />
            <span className="text-sm tracking-wide font-medium">Appeler l'astreinte</span>
          </a>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
