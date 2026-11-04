import { useLocale, useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { SITE, telHref } from "@/config/site";
import { pageMetadata } from "@/lib/seo";
import ContactForm from "@/components/ContactForm";

export async function generateMetadata({ params }: { params: { locale: string } }) {
  return pageMetadata(params.locale, "contact");
}

export default function ContactPage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  const locale = useLocale();
  const t = useTranslations("Contact");
  const f = useTranslations("Contact.form");
  const c = useTranslations("Common");
  const labels = {
    name: f("name"),
    email: f("email"),
    phone: f("phone"),
    message: f("message"),
    messageHelp: f("messageHelp"),
    consent: f("consent"),
    consentLink: f("consentLink"),
    submit: f("submit"),
    sending: f("sending"),
    successTitle: f("successTitle"),
    success: f("success"),
    error: f("error", { email: SITE.email }),
    invalid: f("invalid"),
  };

  return (
    <main>
      <section className="on-green bg-green py-12 text-paper sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h1 className="font-display text-4xl sm:text-6xl">{t("title")}</h1>
          <p className="mt-4 max-w-2xl text-lg">{t("lead")}</p>
          <a href={SITE.booking15} className="btn btn-red mt-8" rel="noopener noreferrer">
            {c("book15")}
          </a>
          <a
            href={telHref(SITE.phone)}
            className="mt-8 block font-display text-[clamp(2rem,9vw,3.5rem)] leading-none underline decoration-4 underline-offset-8"
          >
            {SITE.phone}
          </a>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.2fr]">
          <dl className="space-y-6">
            <div>
              <dt className="label text-soft">{t("phoneLabel")}</dt>
              <dd className="mt-1 text-xl font-bold"><a className="underline" href={telHref(SITE.phone)}>{SITE.phone}</a></dd>
            </div>
            <div>
              <dt className="label text-soft">{t("emailLabel")}</dt>
              <dd className="mt-1 text-xl font-bold"><a className="underline" href={`mailto:${SITE.email}`}>{SITE.email}</a></dd>
            </div>
            <div>
              <dt className="label text-soft">{t("linkedinLabel")}</dt>
              <dd className="mt-1 text-xl font-bold"><a className="underline" href={SITE.linkedin} rel="noopener noreferrer">linkedin.com/in/matthieudevillele</a></dd>
            </div>
          </dl>
          <div className="border-2 border-ink bg-card p-5 sm:p-6">
            <h2 className="mb-5 font-display text-2xl">{t("formTitle")}</h2>
            <ContactForm labels={labels} locale={locale} />
          </div>
        </div>
      </section>
    </main>
  );
}
