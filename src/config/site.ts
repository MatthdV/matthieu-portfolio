/**
 * Données variables du site. Toute valeur `TODO_` doit être remplacée avant
 * la mise en ligne : `npm run check:todos` les liste, et le build de
 * production échoue tant qu'il en reste.
 */
export const SITE = {
  name: "Matthieu de Villele",
  url: "https://www.matthieudevillele.com",
  /** Provisoire : remplacer par contact@matthieudevillele.com quand Workspace sera prêt. */
  email: "matthieu.devillele@gmail.com",
  /** Optionnel : un numéro professionnel ici l'affiche dans les mentions légales. */
  phone: null as string | null,
  siret: "913 194 999 00029",
  /** Code APE / NAF de l'activité (SIREN 913 194 999). */
  ape: "62.01Z",
  address: "1 rue de Trefois, 22170 Plouvara",
  linkedin: "https://linkedin.com/in/matthieudevillele",
  /** Prise de rendez-vous Cal.com, liens sortants sans intégration. */
  booking15: "https://cal.com/matthieu-de-villele/15min",
  booking30: "https://cal.com/matthieu-de-villele/30min",
  hostName: "Vercel Inc.",
  /** Adresse publiée par Vercel (politique de confidentialité). Le pays est dans messages/. */
  hostAddress: "440 N Barranca Avenue #4133, Covina, CA 91723",
  /** Vercel ne publie aucun numéro : null affiche le texte `Legal.hostPhoneNone`. */
  hostPhone: null as string | null,
} as const;

export const isPlaceholder = (value: string) => value.startsWith("TODO_");

