import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { SITE } from "@/config/site";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: { locale: string } }) {
  return pageMetadata(params.locale, "confidentialite");
}

// Pages officielles lues le 11 novembre 2026, dans l'ordre de `Privacy.transfersItems`.
const SOURCES: { key: "policy" | "gdpr" | "dpa"; href: string }[][] = [
  [{ key: "policy", href: "https://vercel.com/legal/privacy-policy" }],
  [
    { key: "policy", href: "https://www.notion.com/en-gb/trust/privacy-policy" },
    { key: "gdpr", href: "https://www.notion.com/help/gdpr-at-notion" },
  ],
  [
    { key: "policy", href: "https://resend.com/legal/privacy-policy" },
    { key: "dpa", href: "https://resend.com/legal/dpa" },
  ],
];

export default function PrivacyPage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  const t = useTranslations("Privacy");
  const items = t.raw("dataItems") as string[];
  const transfers = t.raw("transfersItems") as { name: string; body: string }[];
  const labels = t.raw("sourceLabels") as Record<"policy" | "gdpr" | "dpa", string>;
  const h2 = "font-display text-2xl";
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="font-display text-4xl sm:text-5xl">{t("title")}</h1>
      <p className="mt-6 text-lg">{t("intro")}</p>

      <section className="mt-10"><h2 className={h2}>{t("controllerTitle")}</h2><p className="mt-3 text-lg">{t("controllerBody", { email: SITE.email })}</p></section>
      <section className="mt-10">
        <h2 className={h2}>{t("dataTitle")}</h2>
        <ul className="mt-3 list-disc space-y-1 pl-6 text-lg">{items.map((i) => <li key={i}>{i}</li>)}</ul>
      </section>
      <section className="mt-10"><h2 className={h2}>{t("purposeTitle")}</h2><p className="mt-3 text-lg">{t("purposeBody")}</p></section>
      <section className="mt-10"><h2 className={h2}>{t("basisTitle")}</h2><p className="mt-3 text-lg">{t("basisBody")}</p></section>
      <section className="mt-10"><h2 className={h2}>{t("ipTitle")}</h2><p className="mt-3 text-lg">{t("ipBody")}</p></section>
      <section className="mt-10"><h2 className={h2}>{t("recipientsTitle")}</h2><p className="mt-3 text-lg">{t("recipientsBody")}</p></section>
      <section className="mt-10">
        <h2 className={h2}>{t("transfersTitle")}</h2>
        <p className="mt-3 text-lg">{t("transfersIntro")}</p>
        {transfers.map((item, i) => (
          <div key={item.name} className="mt-5">
            <h3 className="font-bold">{item.name}</h3>
            <p className="mt-1 text-lg">{item.body}</p>
            <p className="mt-1 text-base">
              {SOURCES[i].map((src, j) => (
                <span key={src.href}>
                  {j > 0 && " · "}
                  <a className="font-bold underline" href={src.href} rel="noopener noreferrer">{labels[src.key]}</a>
                </span>
              ))}
            </p>
          </div>
        ))}
        <p className="mt-5 text-base text-soft">{t("sourcesNote")}</p>
      </section>
      <section className="mt-10"><h2 className={h2}>{t("retentionTitle")}</h2><p className="mt-3 text-lg">{t("retentionBody")}</p></section>
      <section className="mt-10"><h2 className={h2}>{t("rightsTitle")}</h2><p className="mt-3 text-lg">{t("rightsBody", { email: SITE.email })}</p></section>
      <section className="mt-10"><h2 className={h2}>{t("cookiesTitle")}</h2><p className="mt-3 text-lg">{t("cookiesBody")}</p></section>
    </main>
  );
}
