/**
 * Données variables du site. Toute valeur `TODO_` doit être remplacée avant
 * la mise en ligne : `npm run check:todos` les liste, et le build de
 * production échoue tant qu'il en reste.
 */
export const SITE = {
  name: "Matthieu de Villele",
  url: "https://www.matthieudevillele.com",
  email: "TODO_EMAIL",
  phone: "TODO_PHONE",
  siret: "TODO_SIRET",
  address: "TODO_ADDRESS",
  linkedin: "https://linkedin.com/in/matthieudevillele",
  /** Prise de rendez-vous Cal.com, liens sortants sans intégration. */
  booking15: "https://cal.com/matthieu-de-villele/15min",
  booking30: "https://cal.com/matthieu-de-villele/30min",
  hostName: "Vercel Inc.",
  hostAddress: "TODO_VERCEL_ADDRESS",
  /** Remplacer par "OK" quand les deux personnes ont donné leur accord. */
  testimonialsConsent: "TODO_ACCORD_TEMOIGNAGES",
  /** Texte libre : nouvelle durée si vous la changez. */
  retention: "TODO_DUREE_CONSERVATION",
} as const;

export const isPlaceholder = (value: string) => value.startsWith("TODO_");

/** Numéro utilisable dans un lien tel: (chiffres et +). */
export const telHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, "")}`;
