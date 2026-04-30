import { useState, useEffect } from "react";
import { Info, X } from "lucide-react";

export function DemoModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // On vérifie si la modale a déjà été vue pendant cette session
    const hasSeenModal = sessionStorage.getItem("demoModalSeen");
    
    if (!hasSeenModal) {
      // Un léger délai pour laisser le temps au site de s'afficher
      const timer = setTimeout(() => setIsOpen(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    sessionStorage.setItem("demoModalSeen", "true");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
      <div className="relative w-full max-w-lg bg-[var(--slate-deep)] text-background p-8 md:p-10 shadow-2xl border border-background/10">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-background/50 hover:text-background transition-colors"
          aria-label="Fermer la modale"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="flex items-center gap-4 mb-6">
          <Info className="w-8 h-8 text-accent shrink-0" />
          <h2 className="font-display text-2xl md:text-3xl">Site de démonstration</h2>
        </div>
        
        <div className="space-y-4 text-background/80 leading-relaxed mb-8">
          <p>
            Bienvenue sur ce site vitrine fictif, imaginé et conçu pour illustrer le savoir-faire de l'agence <strong>Dev&Prog</strong>.
          </p>
          <p>
            Tous les sites de nos clients sont <strong>développés de A à Z et entièrement personnalisés</strong>. Nous ne nous contentons pas de modèles préfaits : nous concevons des interfaces sur mesure pour répondre parfaitement aux besoins et à l'identité visuelle de votre entreprise.
          </p>
        </div>
        
        <button
          onClick={closeModal}
          className="w-full px-6 py-4 bg-accent text-accent-foreground font-medium tracking-wide hover:bg-accent/90 transition-colors uppercase text-sm"
        >
          J'ai compris, découvrir le site
        </button>
      </div>
    </div>
  );
}