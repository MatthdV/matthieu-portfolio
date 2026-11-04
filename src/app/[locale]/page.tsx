import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { SITE, telHref } from "@/config/site";
import { fill } from "@/lib/fill";
import { pageMetadata } from "@/lib/seo";
import PhoneDemo from "@/components/PhoneDemo";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";

export async function generateMetadata({ params }: { params: { locale: string } }) {
  return pageMetadata(params.locale, "home");
}

const wrap = "mx-auto max-w-6xl px-4 sm:px-6";

type Step = { title: string; body: string };
type Row = { name: string; price: string };
type Quote = { quote: string; name: string; role: string };
type ProjectItem = { title: string; stack: string[] };

export default function Home({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  const locale = useLocale();
  const t = useTranslations("Home");
  const c = useTranslations("Common");
  const meta = useTranslations("Meta");
  const proj = useTranslations("Projects");
  const tt = useTranslations("Testimonials");
  const form = useTranslations("Contact.form");

  const vars = { demo: SITE.delays.demo, live: SITE.delays.live };
  const steps = t.raw("how.steps") as Step[];
  const included = t.raw("price.included") as string[];
  const autoPrices = t.raw("auto.prices") as Row[];
  const projects = proj.raw("items") as ProjectItem[];
  const quotes = tt.raw("items") as Quote[];

  const labels = {
    name: form("name"),
    email: form("email"),
    phone: form("phone"),
    message: form("message"),
    messageHelp: form("messageHelp"),
    consent: form("consent"),
    consentLink: form("consentLink"),
    submit: form("submit"),
    sending: form("sending"),
    successTitle: form("successTitle"),
    success: form("success"),
    error: form("error", { email: SITE.email }),
    invalid: form("invalid"),
  };

  return (
    <main>
      <JsonLd locale={locale} description={meta("homeDescription")} />

      {/* 1. Ce que je fais, avec le prix */}
      <section>
        <div className={`${wrap} grid gap-10 py-10 sm:py-14 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:py-20`}>
          <div>
            <p className="label text-soft">{t("hero.kicker")}</p>
            <h1 className="mt-4 font-display text-[clamp(2.25rem,7vw,4.25rem)] leading-[1.02] tracking-tight">
              {t("hero.title")}
            </h1>
            <p className="mt-5 max-w-xl text-lg">{t("hero.lead")}</p>

            <dl className="mt-7 flex flex-wrap items-end gap-x-10 gap-y-4">
              <div>
                <dd className="font-display text-[clamp(2.75rem,12vw,4.5rem)] leading-none">
                  <span className="marker">{t("hero.setupAmount")}</span>
                </dd>
                <dt className="mt-1">{t("hero.setupLabel")}</dt>
              </div>
              <div>
                <dd className="font-display text-[clamp(2rem,8vw,3rem)] leading-none">{t("hero.monthlyAmount")}</dd>
                <dt className="mt-1">{t("hero.monthlyLabel")}</dt>
              </div>
            </dl>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={telHref(SITE.phone)} className="btn btn-red hidden md:inline-flex">
                {c("callName")}
              </a>
              <a href="#comment" className="btn btn-line">
                {t("hero.steps")}
              </a>
            </div>
            <p className="mt-4 hidden font-bold md:block">{SITE.phone}</p>
          </div>

          <Image
            src="/images/hero-illustration.jpg"
            alt={t("hero.imageAlt")}
            width={1600}
            height={893}
            priority
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="h-auto w-full border-2 border-ink"
          />
        </div>
      </section>

      {/* 2. Comment ça se passe */}
      <section id="comment" aria-labelledby="how-title" className="py-14 sm:py-20">
        <div className={`${wrap} grid gap-12 lg:grid-cols-[1.4fr_1fr]`}>
          <div>
            <p className="label text-ink">{t("how.label")}</p>
            <h2 id="how-title" className="mt-3 font-display text-3xl leading-tight sm:text-5xl">
              {t("how.title")}
            </h2>
            <p className="mt-4 max-w-xl text-lg">{t("how.intro")}</p>
            <ol className="mt-10 space-y-0">
              {steps.map((s, i) => (
                <li key={s.title} className="grid grid-cols-[3.5rem_1fr] gap-4 border-t-2 border-ink py-6 sm:grid-cols-[5rem_1fr]">
                  <span
                    className="flex h-14 w-14 items-center justify-center bg-tomato font-display text-3xl leading-none text-[#101010] sm:h-16 sm:w-16 sm:text-4xl"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-xl">{s.title}</h3>
                    <p className="mt-2 max-w-md">{fill(s.body, vars)}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="lg:pt-10">
            <PhoneDemo
              demo={{
                label: t("demo.label"),
                caption: t("demo.caption"),
                name: t("demo.name"),
                tagline: t("demo.tagline"),
                hoursTitle: t("demo.hoursTitle"),
                hours: t("demo.hours"),
                dish: t("demo.dish"),
                dishPrice: t("demo.dishPrice"),
                book: t("demo.book"),
              }}
            />
          </div>
        </div>
      </section>

      {/* 3. Le prix */}
      <section aria-labelledby="price-title" className="on-green bg-green py-14 text-paper sm:py-20">
        <div className={`${wrap} grid gap-10 lg:grid-cols-2`}>
          <div>
            <p className="label text-softOnGreen">{t("price.label")}</p>
            <h2 id="price-title" className="mt-3 font-display text-3xl leading-tight sm:text-5xl">
              {t("price.title")}
            </h2>
            <dl className="mt-10 space-y-5 text-xl">
              <div className="leader">
                <dt>{t("price.setup")}</dt>
                <dd className="font-display text-3xl">{t("hero.setupAmount")}</dd>
              </div>
              <div className="leader">
                <dt>{t("price.monthly")}</dt>
                <dd className="font-display text-3xl">{t("hero.monthlyAmount")}</dd>
              </div>
            </dl>
            <p className="mt-6 text-softOnGreen">{t("price.note", { vat: SITE.vat })}</p>
          </div>
          <div>
            <h3 className="label text-softOnGreen">{t("price.includedTitle")}</h3>
            <ul className="mt-4">
              {included.map((item) => (
                <li key={item} className="border-t-2 border-paper py-4 font-display text-xl last:border-b-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Automatisation et agents IA */}
      <section aria-labelledby="auto-title" className="py-14 sm:py-20">
        <div className={wrap}>
          <p className="label text-ink">{t("auto.label")}</p>
          <h2 id="auto-title" className="mt-3 font-display text-3xl leading-tight sm:text-5xl">
            {t("auto.title")}
          </h2>
          <p className="mt-4 max-w-2xl text-lg">{t("auto.lead")}</p>

          <dl className="mt-8 max-w-2xl space-y-4 text-lg">
            {autoPrices.map((r) => (
              <div key={r.name} className="leader">
                <dt>{r.name}</dt>
                <dd className="font-bold">{r.price}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4">
            <Link href="/services" className="font-bold underline">{t("auto.servicesLink")}</Link>
          </p>

          <p className="mt-12 max-w-3xl font-display text-2xl leading-snug sm:text-3xl">{t("auto.proof")}</p>

          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="label text-soft">{t("auto.projectsTitle")}</h3>
              <ul className="mt-4">
                {projects.map((p) => (
                  <li key={p.title} className="border-t-2 border-ink py-4 last:border-b-2">
                    <p className="font-display text-lg">{p.title}</p>
                    <p className="mt-1 text-soft">{p.stack.join(", ")}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                <Link href="/projets" className="font-bold underline">{t("auto.projectsLink")}</Link>
              </p>
            </div>
            <div>
              <h3 className="label text-soft">{t("auto.testimonialsTitle")}</h3>
              <div className="mt-4 space-y-6">
                {quotes.map((q) => (
                  <figure key={q.name} className="border-l-4 border-tomato pl-5">
                    <blockquote className="text-lg">{q.quote}</blockquote>
                    <figcaption className="mt-3 text-sm">
                      <span className="font-bold">{q.name}</span>, {q.role}
                    </figcaption>
                  </figure>
                ))}
              </div>
              <p className="mt-4 text-sm text-soft">{t("auto.testimonialsNote")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Qui je suis */}
      <section aria-labelledby="about-title" className="border-t-2 border-ink py-14 sm:py-20">
        <div className={`${wrap} grid gap-6 lg:grid-cols-[1fr_1.6fr]`}>
          <div>
            <p className="label text-ink">{t("about.label")}</p>
            <h2 id="about-title" className="mt-3 font-display text-3xl leading-tight sm:text-4xl">
              {t("about.title")}
            </h2>
          </div>
          <div className="max-w-2xl space-y-4 text-lg">
            <p>{t("about.p1")}</p>
            <p>{t("about.p2")}</p>
          </div>
        </div>
      </section>

      {/* 6. Contact */}
      <section id="contact" aria-labelledby="contact-title" className="on-green bg-green py-14 text-paper sm:py-20">
        <div className={`${wrap} grid gap-10 lg:grid-cols-2`}>
          <div>
            <p className="label text-softOnGreen">{t("contact.label")}</p>
            <h2 id="contact-title" className="mt-3 font-display text-3xl leading-tight sm:text-5xl">
              {t("contact.title")}
            </h2>
            <a
              href={telHref(SITE.phone)}
              className="mt-8 block font-display text-[clamp(2rem,9vw,3.5rem)] leading-none underline decoration-4 underline-offset-8"
            >
              {SITE.phone}
            </a>
            <p className="mt-6 text-lg">{t("contact.lead")}</p>
            <a href={`mailto:${SITE.email}`} className="mt-2 inline-block py-2 text-lg font-bold underline">
              {SITE.email}
            </a>
          </div>
          <div className="border-2 border-paper bg-paper p-5 text-ink sm:p-6">
            <h3 className="mb-5 font-display text-2xl">{t("contact.formLink")}</h3>
            <ContactForm labels={labels} locale={locale} />
          </div>
        </div>
      </section>
    </main>
  );
}
