import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { EmergencyButton } from "@/components/emergency-button";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl text-foreground">404</h1>
        <h2 className="mt-4 text-xl text-foreground">Page introuvable</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Cette page n'existe pas ou a été déplacée.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-5 py-3 bg-accent text-accent-foreground text-sm tracking-wide"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
  { charSet: "utf-8" },
  { name: "viewport", content: "width=device-width, initial-scale=1" },
  // Titre réaliste pour le métier
  { title: "Maison Mercier — Artisan Couvreur Zingueur dans l'Hérault (Site Démo)" },
  {
    name: "description",
    content:
      "DEMO : Exemple de site pour couvreur zingueur. Spécialiste toiture, étanchéité et charpente dans l'Hérault. Modèle de site professionnel pour artisans.",
  },
  { name: "author", content: "Design Artisans - Site Exemple" },
  { property: "og:type", content: "website" },
  { name: "twitter:card", content: "summary_large_image" },
  
  // OpenGraph (Réseaux sociaux)
  { 
    property: "og:title", 
    content: "Maison Mercier — Expert Toiture (Modèle de Site)" 
  },
  { 
    name: "twitter:title", 
    content: "Maison Mercier — Expert Toiture (Modèle de Site)" 
  },
  
  // Descriptions harmonisées (Français + Mention Démo)
  { 
    name: "description", 
    content: "Ceci est une page de démonstration. Maison Mercier représente le savoir-faire en couverture et zinguerie pour ce template de site internet." 
  },
  { 
    property: "og:description", 
    content: "Découvrez ce modèle de site vitrine pour couvreur. Qualité visuelle, performance et prise de contact optimisée." 
  },
  { 
    name: "twitter:description", 
    content: "Modèle de site internet pour artisan couvreur. Exemple : Maison Mercier, zinguerie et toiture dans le 34." 
  },
  
  // Images (Gardez vos liens R2 actuels s'ils correspondent aux visuels de toiture)
  { 
    property: "og:image", 
    content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/631c7341-0222-4430-8027-2ed916a42b3b/id-preview-dad260be--114f4228-67c0-4cd8-87b9-db92112875ba.lovable.app-1776958581330.png" 
  },
  { 
    name: "twitter:image", 
    content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/631c7341-0222-4430-8027-2ed916a42b3b/id-preview-dad260be--114f4228-67c0-4cd8-87b9-db92112875ba.lovable.app-1776958581330.png" 
  },
]
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
      <EmergencyButton />
    </div>
  );
}
