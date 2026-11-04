import { SITE } from "@/config/site";

/** Données structurées sans adresse, note ni avis. */
export default function JsonLd({ locale, description }: { locale: string; description: string }) {
  const area = locale === "es" ? "CO" : "FR";
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE.url}/#person`,
        name: SITE.name,
        url: `${SITE.url}/${locale}`,
        sameAs: [SITE.linkedin],
      },
      {
        "@type": "Service",
        "@id": `${SITE.url}/#site-commerce`,
        name: locale === "es" ? "Sitio web para negocios" : locale === "en" ? "Website for local businesses" : "Site web pour commerce",
        description,
        provider: { "@id": `${SITE.url}/#person` },
        areaServed: area,
        offers: {
          "@type": "Offer",
          price: "690",
          priceCurrency: "EUR",
        },
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, "\\u003c") }}
    />
  );
}
