/**
 * Prix, délais et mention de TVA. Un seul endroit à modifier.
 *
 * Les textes de `messages/` contiennent des repères [[nom]] remplacés au
 * chargement par `messageTokens()` (voir `src/i18n/request.ts`).
 *
 * Statut des prix, décision du 04/11/2026 :
 * - site pour commerce (setup, monthly, extraHour, includedMinutes) : prix de l'offre ;
 * - automationFrom, agentFrom, followFrom : hypothèses à tester, aucune vente ne les valide.
 */
export const PRICES = {
  /** Mise en place du site, en euros. */
  setup: 690,
  /** Maintenance et mise en ligne, par mois. */
  monthly: 29,
  /** Minutes de petites modifications incluses chaque mois. */
  includedMinutes: 30,
  /** Tarif horaire des modifications au-delà du forfait. */
  extraHour: 60,
  /** Automatisation simple, « à partir de ». */
  automationFrom: 900,
  /** Agent IA pour PME, sur devis « à partir de ». */
  agentFrom: 5000,
  /** Suivi mensuel de 1 à 3 automatisations, « à partir de ». */
  followFrom: 150,
} as const;

type ByLocale = Record<"fr" | "en" | "es", string>;

/** Délais en texte libre, par langue. */
export const DELAYS: { adjustments: ByLocale; live: ByLocale } = {
  adjustments: {
    fr: "2 jours ouvrés après votre retour",
    en: "2 working days after your feedback",
    es: "2 días hábiles después de su respuesta",
  },
  live: {
    fr: "5 jours ouvrés après validation et paiement",
    en: "5 working days after approval and payment",
    es: "5 días hábiles después de la aprobación y el pago",
  },
};

/** Mention affichée sous les prix et dans les mentions légales. */
export const VAT_NOTE: ByLocale = {
  fr: "TVA non applicable, art. 293 B du CGI",
  en: "VAT not applicable, art. 293 B of the French General Tax Code (CGI)",
  es: "IVA no aplicable, art. 293 B del Código General de Impuestos francés (CGI)",
};

const intlLocale = { fr: "fr-FR", en: "en-IE", es: "es-ES" } as const;
type Locale = keyof typeof intlLocale;

/** « 5 000 € » en français, « €5,000 » en anglais, « 5.000 € » en espagnol. */
export function money(locale: Locale, amount: number): string {
  return new Intl.NumberFormat(intlLocale[locale], {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
    // « always » : l'espagnol ne groupe pas les nombres à 4 chiffres par défaut.
    useGrouping: "always" as unknown as boolean,
  }).format(amount);
}

/** Valeurs de remplacement des repères [[nom]] pour une langue. */
export function messageTokens(locale: string): Record<string, string> {
  const l: Locale = locale === "en" || locale === "es" ? locale : "fr";
  return {
    setup: money(l, PRICES.setup),
    monthly: money(l, PRICES.monthly),
    extraHour: money(l, PRICES.extraHour),
    includedMinutes: String(PRICES.includedMinutes),
    automationFrom: money(l, PRICES.automationFrom),
    agentFrom: money(l, PRICES.agentFrom),
    followFrom: money(l, PRICES.followFrom),
    delayAdjustments: DELAYS.adjustments[l],
    delayLive: DELAYS.live[l],
    vat: VAT_NOTE[l],
  };
}

/** Remplace récursivement les repères [[nom]] dans un arbre de messages. */
export function applyTokens<T>(messages: T, tokens: Record<string, string>): T {
  if (typeof messages === "string") {
    return messages.replace(/\[\[(\w+)\]\]/g, (m, key: string) => {
      if (!(key in tokens)) throw new Error(`Repère inconnu dans les messages : ${m}`);
      return tokens[key];
    }) as unknown as T;
  }
  if (Array.isArray(messages)) return messages.map((x) => applyTokens(x, tokens)) as unknown as T;
  if (messages && typeof messages === "object") {
    return Object.fromEntries(
      Object.entries(messages).map(([k, v]) => [k, applyTokens(v, tokens)]),
    ) as T;
  }
  return messages;
}
