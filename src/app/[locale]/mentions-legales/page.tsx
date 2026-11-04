import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { SITE } from "@/config/site";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: { locale: string } }) {
  return pageMetadata(params.locale, "mentions");
}

export default function LegalPage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  const t = useTranslations("Legal");
  const block = "mt-10";
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="font-display text-4xl sm:text-5xl">{t("title")}</h1>

      <section className={block}>
        <h2 className="font-display text-2xl">{t("editorTitle")}</h2>
        <ul className="mt-3 space-y-1 text-lg">
          <li>{t("editorBody")}</li>
          <li>{t("siret", { siret: SITE.siret })}</li>
          <li>{t("address", { address: SITE.address })}</li>
          <li>{t("emailLine", { email: SITE.email })}</li>
          <li>{t("phoneLine", { phone: SITE.phone })}</li>
          <li>{t("vatLine", { vat: SITE.vat })}</li>
        </ul>
      </section>
      <section className={block}>
        <h2 className="font-display text-2xl">{t("publisherTitle")}</h2>
        <p className="mt-3 text-lg">{t("publisherBody")}</p>
      </section>
      <section className={block}>
        <h2 className="font-display text-2xl">{t("hostTitle")}</h2>
        <p className="mt-3 text-lg">{t("hostBody", { hostName: SITE.hostName, hostAddress: SITE.hostAddress })}</p>
      </section>
      <section className={block}>
        <h2 className="font-display text-2xl">{t("ipTitle")}</h2>
        <p className="mt-3 text-lg">{t("ipBody")}</p>
      </section>
      <section className={block}>
        <h2 className="font-display text-2xl">{t("liabilityTitle")}</h2>
        <p className="mt-3 text-lg">{t("liabilityBody")}</p>
      </section>
      <section className={block}>
        <h2 className="font-display text-2xl">{t("dataTitle")}</h2>
        <p className="mt-3 text-lg">{t("dataBody")}</p>
      </section>
    </main>
  );
}
