import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Check } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Devis gratuit — Maison Mercier · Couvreur Hérault" },
      { name: "description", content: "Demandez un devis gratuit pour vos travaux de couverture dans l'Hérault. Réponse sous 48h, intervention urgente possible." },
      { property: "og:title", content: "Contact — Maison Mercier" },
      { property: "og:description", content: "Devis gratuit sous 48h. Urgence fuite : intervention 24h." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="border-b border-border bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-28">
          <div className="text-xs uppercase tracking-[0.25em] text-accent mb-6">
            Devis & contact
          </div>
          <h1 className="font-display text-5xl md:text-7xl leading-[1] max-w-4xl text-balance">
            Décrivez-nous votre toit.<br />
            <span className="italic">On s'occupe du reste.</span>
          </h1>
          <p className="mt-8 text-lg text-foreground/70 max-w-2xl leading-relaxed">
            Devis détaillé sous 48h, déplacement et estimation gratuits dans tout
            l'Hérault. Pour une fuite ou une urgence, appelez-nous directement.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20 md:py-24 grid lg:grid-cols-[1.3fr_1fr] gap-14 lg:gap-20">
        {/* FORM */}
        <div>
          {sent ? (
            <div className="bg-secondary/50 border border-accent/30 p-10">
              <Check className="w-10 h-10 text-accent mb-4" />
              <h2 className="font-display text-3xl mb-3">Message bien reçu.</h2>
              <p className="text-foreground/70">
                Antoine vous rappelle sous 48h ouvrées. Pour une urgence, n'hésitez
                pas à composer le 04 00 00 00 00.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <Field label="Nom" name="name" required />
                <Field label="Téléphone" name="phone" type="tel" required />
              </div>
              <Field label="Email" name="email" type="email" required />
              <Field label="Code postal du chantier" name="zip" />
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                  Type de demande
                </label>
                <select
                  name="type"
                  className="w-full bg-background border border-border px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                >
                  <option>Couverture / réfection</option>
                  <option>Étanchéité toit-terrasse</option>
                  <option>Charpente</option>
                  <option>Démoussage / hydrofuge</option>
                  <option>Urgence fuite</option>
                  <option>Autre</option>
                </select>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                  Décrivez votre projet
                </label>
                <textarea
                  name="message"
                  rows={5}
                  className="w-full bg-background border border-border px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                  placeholder="Surface approximative, type de couverture, état actuel, photos si possible…"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-4 bg-accent text-accent-foreground tracking-wide hover:bg-accent/90 transition-colors"
              >
                Envoyer ma demande
              </button>
              <p className="text-xs text-muted-foreground">
                Vos données ne sont utilisées que pour vous répondre. Pas de spam, jamais.
              </p>
            </form>
          )}
        </div>

        {/* INFOS */}
        <aside className="bg-primary text-primary-foreground p-10 md:p-12 self-start">
          <h3 className="font-display text-2xl mb-8">L'atelier</h3>
          <ul className="space-y-6">
            <InfoRow icon={Phone} label="Téléphone" value="04 00 00 00 00" href="tel:+33400000000" />
            <InfoRow icon={Mail} label="Email" value="contact@maison-mercier.fr" href="mailto:contact@maison-mercier.fr" />
            <InfoRow icon={MapPin} label="Adresse" value="12 chemin des Oliviers, 34000 Montpellier" />
            <InfoRow icon={Clock} label="Horaires" value="Lun – Ven · 7h30 – 18h00" />
          </ul>
          <div className="mt-10 pt-8 border-t border-background/15">
            <div className="text-xs uppercase tracking-[0.25em] text-accent mb-3">Urgence fuite</div>
            <p className="text-background/80 text-sm leading-relaxed">
              En cas d'infiltration, nous intervenons sous 24h dans tout l'Hérault.
              N'attendez pas — appelez directement.
            </p>
          </div>
        </aside>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
        {label}{required && " *"}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full bg-background border border-border px-4 py-3 focus:outline-none focus:border-accent transition-colors"
      />
    </div>
  );
}

function InfoRow({ icon: Icon, label, value, href }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string; href?: string }) {
  const content = (
    <div className="flex items-start gap-4">
      <Icon className="w-5 h-5 text-accent mt-1 shrink-0" />
      <div>
        <div className="text-xs uppercase tracking-[0.2em] text-background/40 mb-1">{label}</div>
        <div className="text-background">{value}</div>
      </div>
    </div>
  );
  return <li>{href ? <a href={href} className="hover:opacity-80 transition-opacity block">{content}</a> : content}</li>;
}
