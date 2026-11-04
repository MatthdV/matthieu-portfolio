import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { SITE, telHref } from "@/config/site";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: { locale: string } }) {
  return pageMetadata(params.locale, "services");
}

type AutoItem = { name: string; price: string; duration?: string; body: string };

export default function ServicesPage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  const t = useTranslations("Services");
  const home = useTranslations("Home");
  const included = t.raw("site.included") as string[];
  const items = t.raw("auto.items") as AutoItem[];

  return (
    <main>
      <section className="border-b-2 border-ink py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h1 className="font-display text-4xl sm:text-6xl">{t("title")}</h1>
          <p className="mt-4 max-w-2xl text-lg">{t("intro")}</p>
        </div>
      </section>

      <section className="on-green bg-green py-14 text-paper sm:py-20" aria-labelledby="site-title">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="label text-softOnGreen">{t("site.label")}</p>
            <h2 id="site-title" className="mt-3 font-display text-3xl leading-tight sm:text-5xl">{t("site.title")}</h2>
            <p className="mt-4 max-w-lg text-lg">{t("site.body")}</p>
            <dl className="mt-8 space-y-4 text-xl">
              <div className="leader">
                <dt>{t("site.setup")}</dt>
                <dd className="font-display text-3xl">{home("hero.setupAmount")}</dd>
              </div>
              <div className="leader">
                <dt>{t("site.monthly")}</dt>
                <dd className="font-display text-3xl">{home("hero.monthlyAmount")}</dd>
              </div>
            </dl>
            <p className="mt-6 text-softOnGreen">{t("site.extra")}</p>
            <p className="mt-2 text-softOnGreen">{home("price.note")}</p>
            {home.has("price.currency") && <p className="mt-2 text-softOnGreen">{home("price.currency")}</p>}
            <p className="mt-6">
              <Link href="/#comment" className="font-bold underline">{t("site.stepsLink")}</Link>
            </p>
          </div>
          <div>
            <h3 className="label text-softOnGreen">{t("site.includedTitle")}</h3>
            <ul className="mt-4">
              {included.map((i) => (
                <li key={i} className="border-t-2 border-paper py-4 font-display text-xl last:border-b-2">{i}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20" aria-labelledby="auto-title">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="label text-ink">{t("auto.label")}</p>
          <h2 id="auto-title" className="mt-3 font-display text-3xl leading-tight sm:text-5xl">{t("auto.title")}</h2>
          <ul className="mt-10">
            {items.map((i) => (
              <li key={i.name} className="grid gap-3 border-t-2 border-ink py-6 last:border-b-2 md:grid-cols-[1fr_2fr_1fr] md:gap-8">
                <h3 className="font-display text-2xl">{i.name}</h3>
                <p className="text-lg">{i.body}</p>
                <p className="md:text-right">
                  <span className="block font-bold">{i.price}</span>
                  {i.duration && <span className="text-soft">{i.duration}</span>}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-soft">{t("auto.note")}</p>
          <a href={telHref(SITE.phone)} className="btn btn-red mt-8">{t("cta")}</a>
        </div>
      </section>
    </main>
  );
}
