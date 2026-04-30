import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone, ShieldCheck, Hammer, Award, Clock, Check, Droplets, Wrench, Home, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";
import heroRoof from "@/assets/hero-roof.jpg";
import serviceCouverture from "@/assets/service-couverture.jpg";
import serviceDemoussage from "@/assets/service-demoussage.jpg";
import serviceEtancheite from "@/assets/service-etancheite.jpg";
import serviceCharpente from "@/assets/service-charpente.jpg";
import project1 from "@/assets/project-1.jpg";
import project3 from "@/assets/project-3.jpg";
import portrait from "@/assets/artisan-portrait.jpg";
import { CtaBand } from "@/components/cta-band";
import { useReveal } from "@/hooks/use-reveal";
import { DemoModal } from "@/components/demo-modal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maison Mercier — Artisan Couvreur Zingueur dans l'Hérault" },
      {
        name: "description",
        content:
          "Couvreur zingueur dans l'Hérault depuis 1998. Réfection de toiture, étanchéité, charpente, démoussage et urgence fuite 24h. Devis gratuit sous 48h, garantie décennale.",
      },
      { property: "og:title", content: "Maison Mercier — Artisan Couvreur Hérault" },
      {
        property: "og:description",
        content: "Le savoir-faire d'un couvreur d'exception au service de votre toit.",
      },
      { property: "og:image", content: heroRoof },
    ],
  }),
  component: Index,
});

const services = [
  { title: "Couverture & Toiture", desc: "Pose, rénovation et réfection complète. Tuile canal, romane, plate, ardoise naturelle et zinc à joint debout.", img: serviceCouverture, icon: Home },
  { title: "Étanchéité Toit-Terrasse", desc: "Membranes EPDM, bitume SBS multicouche, résines liquides polyuréthane. On stoppe l'eau, durablement.", img: serviceEtancheite, icon: Droplets },
  { title: "Charpente Traditionnelle", desc: "Charpente bois sur mesure, fermettes, renforts, traitement curatif et préventif des bois anciens.", img: serviceCharpente, icon: Wrench },
  { title: "Démoussage & Hydrofuge", desc: "Nettoyage haute pression maîtrisée, anti-mousse fongicide et hydrofuge coloré pour redonner vie au toit.", img: serviceDemoussage, icon: Sparkles },
];

function Index() {
  useReveal();
  const heroImgRef = useRef<HTMLImageElement>(null);

  // Parallax hero
  useEffect(() => {
    const onScroll = () => {
      if (!heroImgRef.current) return;
      const y = window.scrollY;
      if (y < 900) {
        heroImgRef.current.style.transform = `translate3d(0, ${y * 0.35}px, 0) scale(${1 + y * 0.0004})`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <DemoModal />
      {/* HERO */}
      <section className="relative h-[100vh] min-h-[720px] w-full overflow-hidden">
        <img
          ref={heroImgRef}
          src={heroRoof}
          alt="Artisan couvreur sur un toit en tuiles au coucher du soleil dans l'Hérault"
          className="absolute inset-0 w-full h-full object-cover animate-slow-zoom will-change-transform"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--slate-deep)] via-[var(--slate-deep)]/60 to-[var(--slate-deep)]/20" />
        <div className="absolute inset-0 grain grain-strong opacity-80 pointer-events-none" />

        {/* Decorative side number */}
        <div className="absolute top-28 right-6 md:right-10 text-background/20 text-right hidden md:block">
          <div className="font-display text-[120px] leading-none">25</div>
          <div className="text-xs uppercase tracking-[0.3em] -mt-2">ans de toits</div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl h-full px-6 lg:px-10 flex flex-col justify-end pb-20 md:pb-28">
          <div className="text-xs uppercase tracking-[0.3em] text-accent mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-accent" />
            Artisan couvreur · Hérault · Depuis 1998
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-background leading-[0.95] max-w-5xl text-balance">
            Le toit qui vous protège <br />
            mérite la main d'un <span className="italic text-accent">artisan</span>.
          </h1>
          <p className="mt-8 text-background/80 max-w-xl text-lg leading-relaxed">
            Couverture, charpente, étanchéité et démoussage dans tout l'Hérault.
            Un travail soigné, une parole tenue, une garantie décennale — et
            chaque devis signé Antoine Mercier, lui-même.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-7 py-4 bg-accent text-accent-foreground hover:bg-accent/90 transition-colors group"
            >
              Devis gratuit sous 48h
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+33400000000"
              className="inline-flex items-center gap-3 px-7 py-4 border border-background/30 text-background hover:bg-background/10 transition-colors"
            >
              <Phone className="w-4 h-4" /> 04 00 00 00 00
            </a>
            <a
              href="tel:+33400000000"
              className="inline-flex items-center gap-3 px-7 py-4 bg-destructive text-destructive-foreground hover:opacity-90 transition-opacity animate-pulse-ring"
            >
              <Droplets className="w-4 h-4" /> Urgence fuite · 24h
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-background/50 text-[10px] uppercase tracking-[0.4em] flex flex-col items-center gap-2">
          <span>Scroll</span>
          <span className="w-px h-10 bg-background/30 animate-pulse" />
        </div>
      </section>

      {/* MARQUEE BAND */}
      <section className="bg-primary text-primary-foreground border-y border-accent/20 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap py-5 w-max">
          {[...Array(2)].map((_, loop) => (
            <div key={loop} className="flex items-center gap-12 pr-12 shrink-0">
              {[
                "Tuile canal",
                "Ardoise naturelle",
                "Zinc à joint debout",
                "Étanchéité EPDM",
                "Charpente bois",
                "Démoussage",
                "Urgence fuite 24h",
                "Velux & fenêtres de toit",
                "Zinguerie sur mesure",
                "Hydrofuge coloré",
              ].map((w) => (
                <span key={w + loop} className="text-sm uppercase tracking-[0.3em] text-background/70 flex items-center gap-12">
                  {w}
                  <span className="text-accent">◆</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: Award, label: "Qualibat RGE", sub: "Certification officielle" },
            { icon: ShieldCheck, label: "Garantie décennale", sub: "Assurance MMA" },
            { icon: Hammer, label: "25 ans d'expérience", sub: "800+ chantiers" },
            { icon: Clock, label: "Intervention 24/48h", sub: "Astreinte urgence" },
          ].map(({ icon: Icon, label, sub }) => (
            <div key={label} className="flex items-start gap-4 reveal">
              <Icon className="w-6 h-6 text-accent shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-medium text-foreground">{label}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INTRO ÉDITORIAL */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-36 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 reveal">
          <div className="text-xs uppercase tracking-[0.25em] text-accent mb-5 flex items-center gap-3">
            <span className="w-8 h-px bg-accent" /> Notre métier
          </div>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.1] text-balance">
            Travailler le toit,<br />c'est défendre la <span className="italic text-accent">maison</span>.
          </h2>
          <div className="mt-10 relative aspect-[4/5] max-w-sm overflow-hidden">
            <img src={portrait} alt="Antoine Mercier, couvreur" className="w-full h-full object-cover" />
            <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur p-4">
              <div className="text-xs uppercase tracking-[0.2em] text-accent">Antoine Mercier</div>
              <div className="text-sm text-foreground/70">Fondateur · Artisan couvreur</div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-6 lg:col-start-7 space-y-6 text-lg leading-relaxed text-foreground/80 reveal">
          <p className="text-2xl leading-snug text-foreground font-display">
            Depuis bientôt trois décennies, Maison Mercier intervient sur les toits
            de l'Hérault — du mas de pierre au pavillon contemporain.
          </p>
          <p>
            Nous croyons qu'un toit ne se rénove pas : il <em>s'écoute</em>, se
            comprend, puis se répare avec patience. Avant chaque chantier, un
            artisan monte, ausculte la couverture tuile par tuile, sonde la
            charpente, observe les écoulements. Le diagnostic est écrit, photographié,
            expliqué — et remis gratuitement.
          </p>
          <p>
            Tuile canal, ardoise naturelle d'Angers, zinc VMZ à joint debout :
            chaque matériau a son histoire, sa pose, sa durée de vie. Nous ne
            faisons jamais de compromis sur la provenance. La belle ouvrage n'a
            pas de raccourci — et un toit posé dans les règles tient cinquante ans
            sans trembler.
          </p>
          <p>
            Pas de sous-traitance, pas de commerciaux, pas de pression. Juste
            une équipe de huit compagnons formés en interne, un atelier à
            Saint-Mathieu-de-Tréviers, et l'envie de faire durer ce que d'autres
            rafistolent.
          </p>
          <Link
            to="/a-propos"
            className="inline-flex items-center gap-2 mt-4 text-accent group"
          >
            Découvrir l'atelier et l'artisan
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* URGENCE BAND */}
      <section className="bg-destructive text-destructive-foreground relative overflow-hidden">
        <div className="absolute inset-0 hatch opacity-10" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-16 md:py-20 grid md:grid-cols-[auto_1fr_auto] gap-8 items-center">
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-destructive-foreground/10 border border-destructive-foreground/30 shrink-0">
            <Droplets className="w-9 h-9" />
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.3em] opacity-80 mb-2">Urgence · 24h / 7j</div>
            <h3 className="font-display text-3xl md:text-4xl leading-tight">
              Une fuite au plafond ? Une infiltration après l'orage ?
            </h3>
            <p className="mt-3 text-destructive-foreground/80 max-w-2xl">
              Un artisan d'astreinte se déplace sous 24h dans tout l'Hérault.
              Bâchage immédiat, mise hors d'eau, diagnostic photographié. Vous
              respirez, on s'occupe du reste.
            </p>
          </div>
          <a
            href="tel:+33400000000"
            className="inline-flex items-center gap-3 px-7 py-5 bg-destructive-foreground text-destructive hover:opacity-90 transition-opacity md:whitespace-nowrap justify-self-start"
          >
            <Phone className="w-5 h-5" />
            <span className="text-sm tracking-wide font-medium">Appeler maintenant</span>
          </a>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="bg-secondary/30 py-24 md:py-32 relative grain">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 relative">
          <div className="flex items-end justify-between mb-16 flex-wrap gap-6 reveal">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-accent mb-4 flex items-center gap-3">
                <span className="w-8 h-px bg-accent" /> Nos prestations
              </div>
              <h2 className="font-display text-4xl md:text-6xl text-balance max-w-3xl leading-[1.05]">
                Quatre savoir-faire,<br />un seul niveau <span className="italic text-accent">d'exigence</span>.
              </h2>
              <p className="mt-6 text-foreground/70 max-w-xl leading-relaxed">
                De la tuile cassée remplacée en une matinée à la réfection
                intégrale d'un mas du XVIIIe, chaque chantier est mené avec la
                même attention au détail.
              </p>
            </div>
            <Link to="/services" className="text-sm tracking-wide text-foreground hover:text-accent inline-flex items-center gap-2 group shrink-0">
              Voir tous les services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.title}
                  to="/services"
                  className={`group relative overflow-hidden bg-background reveal ${i === 0 ? "sm:col-span-2" : ""}`}
                >
                  <div className={`relative ${i === 0 ? "aspect-[4/5] sm:aspect-[16/8]" : "aspect-[4/5] sm:aspect-[4/3]"} overflow-hidden`}>
                    <img
                      src={s.img}
                      alt={s.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--slate-deep)]/95 via-[var(--slate-deep)]/50 to-transparent" />
                    <div className="absolute top-5 left-5 w-11 h-11 bg-accent flex items-center justify-center text-accent-foreground">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 md:p-9">
                      <div className="text-[10px] uppercase tracking-[0.3em] text-accent mb-2">0{i + 1}</div>
                      <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-background mb-2">{s.title}</h3>
                      <p className="text-background/80 text-sm md:text-base max-w-md leading-relaxed">{s.desc}</p>
                      <div className="mt-4 inline-flex items-center gap-2 text-accent text-sm">
                        En savoir plus
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-14 lg:gap-20">
          <div className="reveal">
            <div className="text-xs uppercase tracking-[0.25em] text-accent mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-accent" /> Notre méthode
            </div>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.1] text-balance">
              Quatre étapes,<br />zéro mauvaise surprise.
            </h2>
            <p className="mt-6 text-foreground/70 leading-relaxed">
              Nous suivons le même protocole depuis 1998. Parce qu'un client
              informé est un client serein, et qu'un chantier préparé est un
              chantier livré à l'heure.
            </p>
          </div>
          <ol className="space-y-0 divide-y divide-border">
            {[
              {
                n: "01",
                t: "Diagnostic gratuit sur site",
                d: "Un artisan monte sur le toit, inspecte la couverture, la charpente, la zinguerie et les points singuliers. Rapport photo remis le jour même.",
              },
              {
                n: "02",
                t: "Devis détaillé sous 48h",
                d: "Chiffrage transparent, matériaux nommés avec leur provenance, délais précis. Le prix signé est le prix final — aucun supplément caché.",
              },
              {
                n: "03",
                t: "Chantier mené par notre équipe",
                d: "Pas de sous-traitance. Nos compagnons interviennent avec leur propre matériel, chantier protégé, voisinage respecté, déchets triés et évacués.",
              },
              {
                n: "04",
                t: "Réception & garantie décennale",
                d: "Visite de réception avec le client, remise du PV, activation automatique de la garantie décennale MMA. Dix ans tranquilles.",
              },
            ].map((step) => (
              <li key={step.n} className="py-8 grid grid-cols-[auto_1fr] gap-8 items-start reveal">
                <div className="font-display text-4xl text-accent tabular-nums">{step.n}</div>
                <div>
                  <h3 className="font-display text-2xl mb-2">{step.t}</h3>
                  <p className="text-foreground/70 leading-relaxed">{step.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* RÉALISATIONS APERÇU */}
      <section className="bg-secondary/30 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-10 items-end mb-14 reveal">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-accent mb-4 flex items-center gap-3">
                <span className="w-8 h-px bg-accent" /> Réalisations récentes
              </div>
              <h2 className="font-display text-4xl md:text-6xl leading-[1.05] text-balance">
                Chaque toit raconte une histoire.<br/>
                <span className="italic text-foreground/50">Voici les nôtres.</span>
              </h2>
            </div>
            <p className="text-foreground/70 lg:text-right text-lg leading-relaxed">
              Plus de 800 chantiers menés à terme dans l'Hérault, du Pic Saint-Loup
              au littoral sétois, du mas provençal au toit-terrasse contemporain
              de Montpellier.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="relative aspect-[4/5] overflow-hidden group reveal">
              <img src={project1} alt="Mas restauré" loading="lazy" className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--slate-deep)]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute top-6 left-6">
                <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-[10px] uppercase tracking-[0.25em]">
                  Couverture
                </span>
              </div>
              <div className="absolute bottom-6 left-6 right-6 text-background">
                <div className="text-xs uppercase tracking-[0.25em] mb-2 text-accent">Saint-Guilhem · 2024</div>
                <div className="font-display text-2xl md:text-3xl mb-2">Réfection complète en tuile canal</div>
                <p className="text-sm text-background/70 leading-relaxed max-w-md">
                  220 m² de tuiles anciennes triées à la main, 40 % de tuiles
                  d'origine réutilisées, liteaux en châtaignier. Sept semaines.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden group reveal">
              <img src={project3} alt="Mas en pierre avec lavandes" loading="lazy" className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--slate-deep)]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute top-6 left-6">
                <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-[10px] uppercase tracking-[0.25em]">
                  Restauration
                </span>
              </div>
              <div className="absolute bottom-6 left-6 right-6 text-background">
                <div className="text-xs uppercase tracking-[0.25em] mb-2 text-accent">Pic Saint-Loup · 2023</div>
                <div className="font-display text-2xl md:text-3xl mb-2">Restauration d'un mas du XVIIIe</div>
                <p className="text-sm text-background/70 leading-relaxed max-w-md">
                  Charpente en chêne déposée, traitée, reposée. Couverture tuile
                  canal et génoise à trois rangs refaites à l'identique.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link to="/realisations" className="inline-flex items-center gap-2 text-accent group text-lg">
              Voir toutes les réalisations
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* GARANTIES / POURQUOI NOUS */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32">
        <div className="text-center mb-16 reveal">
          <div className="text-xs uppercase tracking-[0.25em] text-accent mb-4">
            Pourquoi Maison Mercier
          </div>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05] text-balance max-w-4xl mx-auto">
            Cinq raisons de nous confier <span className="italic">votre toit</span>.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-px bg-border">
          {[
            { t: "Artisan local", d: "Basés à Saint-Mathieu-de-Tréviers, nous connaissons les vents, les pluies cévenoles et les toits du coin." },
            { t: "Devis transparent", d: "Chaque ligne est détaillée, chaque matériau nommé. Le prix signé ne bouge plus." },
            { t: "Zéro sous-traitance", d: "Huit compagnons formés en interne. Ceux qui commencent le chantier sont ceux qui le terminent." },
            { t: "Matériaux nobles", d: "Tuile française, bois des Cévennes, zinc VMZ. Nous refusons les contrefaçons low-cost." },
            { t: "Garantie décennale", d: "Assurance MMA activée sur chaque chantier, attestation remise dès la signature." },
          ].map((v, i) => (
            <div key={v.t} className="bg-background p-8 reveal">
              <div className="font-display text-3xl text-accent mb-4 tabular-nums">0{i + 1}</div>
              <h3 className="font-display text-xl mb-3">{v.t}</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section className="bg-primary text-primary-foreground py-24 md:py-32 grain relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 relative">
          <div className="reveal">
            <div className="text-xs uppercase tracking-[0.25em] text-accent mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-accent" /> Ils nous ont fait confiance
            </div>
            <h2 className="font-display text-4xl md:text-6xl mb-16 max-w-4xl text-balance leading-[1.05]">
              La parole d'un client vaut<br />tous les <span className="italic text-accent">discours</span>.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10 md:gap-14">
            {[
              {
                q: "Travail méticuleux, équipe ponctuelle, prix juste. Notre toit a retrouvé une seconde jeunesse, et Antoine a pris le temps d'expliquer chaque étape à mon mari qui voulait tout comprendre.",
                n: "Claire D.",
                l: "Montpellier",
                p: "Réfection tuile romane · 180 m²",
              },
              {
                q: "Diagnostic honnête là où d'autres voulaient tout refaire. Maison Mercier a réparé l'essentiel, changé vingt tuiles, refait un faîtage. Trois ans plus tard : pas une goutte.",
                n: "Pascal M.",
                l: "Sète",
                p: "Reprise de couverture",
              },
              {
                q: "Appelés un dimanche soir pour une fuite, bâchés dans la nuit, chantier refait la semaine suivante. Un suivi exemplaire, des artisans polis, un devis clair. Je recommande sans hésiter.",
                n: "Hélène R.",
                l: "Lunel",
                p: "Urgence infiltration + réfection",
              },
            ].map((t) => (
              <figure key={t.n} className="border-l-2 border-accent pl-6 reveal">
                <div className="text-accent text-xl mb-4">★★★★★</div>
                <blockquote className="font-display text-xl leading-snug italic mb-6">
                  « {t.q} »
                </blockquote>
                <figcaption className="text-sm text-background/60">
                  <div className="text-background">{t.n} — {t.l}</div>
                  <div className="text-xs text-accent/70 mt-1">{t.p}</div>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-16 pt-10 border-t border-background/10 flex flex-wrap items-center gap-8 justify-between reveal">
            <div className="flex items-center gap-4 text-sm text-background/70">
              <span className="text-accent text-3xl">★★★★★</span>
              <div>
                <div className="text-background text-lg font-display">4,9 / 5</div>
                <div>127 avis vérifiés sur Google</div>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-xs uppercase tracking-[0.25em] text-background/50">
              <span>Qualibat RGE</span>
              <span className="text-accent">◆</span>
              <span>Assurance MMA</span>
              <span className="text-accent">◆</span>
              <span>Artisan CAPEB</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-5xl px-6 lg:px-10 py-24 md:py-32">
        <div className="text-center mb-14 reveal">
          <div className="text-xs uppercase tracking-[0.25em] text-accent mb-4">
            Questions fréquentes
          </div>
          <h2 className="font-display text-4xl md:text-5xl leading-tight text-balance">
            On vous répond, <span className="italic">sans détour</span>.
          </h2>
        </div>
        <div className="divide-y divide-border border-y border-border">
          {[
            {
              q: "Combien coûte une réfection de toiture dans l'Hérault ?",
              a: "Le prix d'une réfection dépend de la surface, du matériau et de l'état de la charpente. Comptez en moyenne entre 90 et 180 € / m² pour une couverture tuile canal complète, pose incluse. Nous établissons un devis précis, ligne à ligne, gratuitement et sans engagement sous 48h.",
            },
            {
              q: "Intervenez-vous en urgence pour une fuite ?",
              a: "Oui. Un artisan d'astreinte se déplace sous 24h dans tout le département pour un bâchage ou une mise hors d'eau. Nous couvrons Montpellier, Sète, Lunel, Clermont-l'Hérault, le Pic Saint-Loup, le bassin de Thau et le Minervois.",
            },
            {
              q: "Êtes-vous certifiés RGE ?",
              a: "Oui, Maison Mercier est certifiée Qualibat RGE. Vous pouvez donc prétendre à MaPrimeRénov', à l'éco-prêt à taux zéro et à la TVA à 5,5 % pour les travaux d'amélioration énergétique de votre toiture.",
            },
            {
              q: "Quelle garantie sur vos travaux ?",
              a: "Tous nos chantiers sont couverts par la garantie décennale (assurance MMA). L'attestation nominative vous est remise avec le devis signé. S'y ajoutent la garantie de parfait achèvement (1 an) et la garantie biennale sur les équipements.",
            },
            {
              q: "Travaillez-vous uniquement les toits anciens ?",
              a: "Non. Nous intervenons aussi bien sur les mas du XVIIe que sur les toits-terrasses contemporains en EPDM, les villas modernes à ardoise ou zinc, et les pavillons en tuile mécanique. Chaque toit a sa technique — nous les maîtrisons toutes.",
            },
            {
              q: "Quels sont vos délais d'intervention ?",
              a: "Urgence fuite : sous 24h. Devis : sous 48h. Démarrage d'un chantier de réfection : généralement entre 3 et 8 semaines selon la saison et la taille du projet. Nous vous donnons toujours une date ferme dans le devis.",
            },
          ].map((f, i) => (
            <details key={i} className="group py-6 reveal" open={i === 0}>
              <summary className="flex items-start justify-between gap-6 cursor-pointer list-none">
                <h3 className="font-display text-xl md:text-2xl text-foreground group-hover:text-accent transition-colors">
                  {f.q}
                </h3>
                <span className="mt-1 w-8 h-8 shrink-0 border border-border flex items-center justify-center text-accent transition-transform group-open:rotate-45 text-xl">
                  +
                </span>
              </summary>
              <p className="mt-4 text-foreground/75 leading-relaxed max-w-3xl">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* ZONES D'INTERVENTION */}
      <section className="bg-[var(--slate-deep)] text-background py-20 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 hatch opacity-[0.04]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-start">
            <div className="reveal">
              <div className="text-xs uppercase tracking-[0.25em] text-accent mb-4">
                Zones d'intervention
              </div>
              <h2 className="font-display text-3xl md:text-4xl leading-tight text-balance">
                Tout l'Hérault,<br />d'un versant à l'autre.
              </h2>
              <p className="mt-5 text-background/60 leading-relaxed text-sm">
                Nous intervenons quotidiennement dans un rayon de 60 km autour de
                Saint-Mathieu-de-Tréviers. Une commune n'est pas listée ? Appelez-nous.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-3 text-sm text-background/70 reveal">
              {[
                "Montpellier", "Sète", "Lunel", "Lattes", "Pérols", "Castelnau-le-Lez",
                "Clermont-l'Hérault", "Pic Saint-Loup", "Saint-Guilhem-le-Désert",
                "Gignac", "Aniane", "Saint-Mathieu-de-Tréviers", "Prades-le-Lez",
                "Jacou", "Mauguio", "Frontignan", "Mèze", "Bédarieux", "Lodève",
                "Ganges", "Saint-Clément-de-Rivière", "Teyran", "Vendargues",
                "Baillargues", "Palavas-les-Flots",
              ].map((c) => (
                <div key={c} className="flex items-center gap-2 before:content-['◆'] before:text-accent before:text-[8px]">
                  {c}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
