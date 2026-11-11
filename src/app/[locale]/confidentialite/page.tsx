import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { SITE } from "@/config/site";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: { locale: string } }) {
  return pageMetadata(params.locale, "confidentialite");
}

export default function PrivacyPage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  const t = useTranslations("Privacy");
  const items = t.raw("dataItems") as string[];
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
      <section className="mt-10"><h2 className={h2}>{t("transfersTitle")}</h2><p className="mt-3 text-lg">{t("transfersBody")}</p></section>
      <section className="mt-10"><h2 className={h2}>{t("retentionTitle")}</h2><p className="mt-3 text-lg">{t("retentionBody")}</p></section>
      <section className="mt-10"><h2 className={h2}>{t("rightsTitle")}</h2><p className="mt-3 text-lg">{t("rightsBody", { email: SITE.email })}</p></section>
      <section className="mt-10"><h2 className={h2}>{t("cookiesTitle")}</h2><p className="mt-3 text-lg">{t("cookiesBody")}</p></section>
    </main>
  );
}
