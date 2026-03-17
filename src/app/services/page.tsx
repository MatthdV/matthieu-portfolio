import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Audit IA gratuit, implémentation automation, agents IA custom et retainer mensuel. Découvrez mes offres pour automatiser et accélérer votre business.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services — Matthieu de Villele",
    description:
      "Audit IA gratuit, automation sur-mesure, agents IA custom et retainer mensuel.",
    url: "/services",
  },
};

const services = [
  {
    name: "Audit IA gratuit",
    price: "Gratuit",
    duration: "30 min",
    description:
      "Un appel de 30 minutes pour analyser vos process actuels, identifier les quick wins d'automatisation et définir une feuille de route IA concrète.",
    features: [
      "Analyse de vos workflows existants",
      "Identification des tâches automatisables",
      "Recommandations priorisées par ROI",
      "Feuille de route actionnable",
    ],
    cta: "Réserver un créneau",
    highlighted: false,
  },
  {
    name: "Implémentation Automation",
    price: "À partir de 2 000 €",
    duration: "1–4 semaines",
    description:
      "Conception et déploiement de workflows automatisés avec n8n, Google Apps Script ou Jira Automation. Livré clé en main avec documentation.",
    features: [
      "Workflow n8n ou Apps Script sur-mesure",
      "Intégration avec vos outils existants",
      "Tests et monitoring inclus",
      "Documentation et formation équipe",
    ],
    cta: "Discuter de mon projet",
    highlighted: false,
  },
  {
    name: "Agent IA Custom",
    price: "À partir de 5 000 €",
    duration: "2–6 semaines",
    description:
      "Développement d'un agent IA sur-mesure : chatbot, assistant interne, pipeline RAG ou automatisation intelligente adaptée à votre métier.",
    features: [
      "Agent IA adapté à votre contexte métier",
      "Intégration RAG avec vos données",
      "Interface conversationnelle (Slack, web, API)",
      "Itérations et fine-tuning inclus",
    ],
    cta: "Discuter de mon projet",
    highlighted: true,
  },
  {
    name: "Retainer mensuel",
    price: "À partir de 1 500 €/mois",
    duration: "Engagement flexible",
    description:
      "Support continu pour maintenir, optimiser et étendre vos automations. Inclut monitoring proactif, corrections et nouvelles fonctionnalités.",
    features: [
      "Monitoring et maintenance proactive",
      "Corrections et optimisations continues",
      "Nouvelles automations chaque mois",
      "Support prioritaire par Slack",
    ],
    cta: "En savoir plus",
    highlighted: false,
  },
];

export default function ServicesPage() {
  return (
    <main className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Services
          </h1>
          <p className="mt-4 text-lg text-foreground/60">
            Des offres claires pour chaque étape de votre transformation
            automation &amp; IA.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.name}
              className={`relative flex flex-col rounded-2xl border p-8 transition-colors ${
                service.highlighted
                  ? "border-accent/40 bg-accent/[0.05]"
                  : "border-foreground/10 bg-foreground/[0.03] hover:border-accent/20"
              }`}
            >
              {service.highlighted && (
                <span className="absolute -top-3 left-6 rounded-full bg-accent px-3 py-0.5 text-xs font-semibold text-white">
                  Populaire
                </span>
              )}

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold">{service.name}</h2>
                  <p className="mt-1 text-sm text-foreground/50">
                    {service.duration}
                  </p>
                </div>
                <p className="shrink-0 text-right text-lg font-bold text-accent">
                  {service.price}
                </p>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-foreground/60">
                {service.description}
              </p>

              <ul className="mt-6 flex-1 space-y-3">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm text-foreground/70"
                  >
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="https://calendly.com"
                className={`mt-8 block rounded-lg px-6 py-3 text-center text-sm font-semibold transition-colors ${
                  service.highlighted
                    ? "bg-accent text-white hover:bg-accent-hover"
                    : "border border-foreground/15 text-foreground/80 hover:border-accent/30 hover:text-accent"
                }`}
              >
                {service.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-12 text-center">
          <h2 className="text-2xl font-bold">
            Pas sûr de l&apos;offre qui vous convient ?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-foreground/60">
            Commencez par un audit gratuit de 30 minutes. On identifie ensemble
            les opportunités et je vous recommande la meilleure approche.
          </p>
          <a
            href="https://calendly.com"
            className="mt-6 inline-block rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-hover"
          >
            Discutons de votre projet
          </a>
        </div>
      </div>
    </main>
  );
}
