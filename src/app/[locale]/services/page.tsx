import { useTranslations } from "next-intl";
import Image from "next/image";
import MarkerUnderline from "@/components/MarkerUnderline";
import MarkerCircle from "@/components/MarkerCircle";
import { Link } from "@/i18n/navigation";
import FadeIn from "@/components/FadeIn";

const SERVICES = [
  {
    key: "service1",
    icon: "/images/icon-audit.png",
    priceColor: "blue" as const,
    markerColor: "blue" as const,
    features: 4,
  },
  {
    key: "service2",
    icon: "/images/icon-automation.png",
    priceColor: "yellow" as const,
    markerColor: "yellow" as const,
    features: 4,
  },
  {
    key: "service3",
    icon: "/images/icon-agents.png",
    priceColor: "yellow" as const,
    markerColor: "red" as const,
    features: 4,
    popular: true,
  },
  {
    key: "service4",
    icon: "/images/icon-retainer.png",
    priceColor: "yellow" as const,
    markerColor: "yellow" as const,
    features: 4,
  },
];

export default function ServicesPage() {
  const t = useTranslations("ServicesPage");

  return (
    <main className="flex flex-col">
      {/* Header */}
      <section className="px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-marker-blue" />
              <span className="font-mono text-xs uppercase tracking-widest text-marker-blue">
                {t("title")}
              </span>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1
              className="mb-4 font-sans font-bold tracking-[-2px] text-foreground"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
            >
              {t("title")}
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="max-w-2xl font-sans text-lg text-muted">
              {t("description")}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Service cards */}
      <section className="px-6 pb-24 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          {SERVICES.map((service, index) => (
            <FadeIn key={service.key} delay={index * 0.1}>
            <article
              className="group relative flex flex-col border border-border bg-background p-8 transition-all duration-200 hover:-translate-y-1 hover:border-marker-blue md:p-10 h-full"
            >
              {/* Popular badge */}
              {service.popular && (
                <span className="absolute right-6 top-6 border border-marker-red bg-marker-red/10 px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-marker-red">
                  {t("popular")}
                </span>
              )}

              {/* Icon */}
              <div className="relative mb-6 h-16 w-16">
                <Image
                  src={service.icon}
                  alt={t(`${service.key}Name`)}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Name */}
              <h2 className="mb-2 font-sans text-2xl font-bold tracking-tight text-foreground">
                {index === 0 ? (
                  <MarkerUnderline color={service.markerColor}>
                    {t(`${service.key}Name`)}
                  </MarkerUnderline>
                ) : (
                  t(`${service.key}Name`)
                )}
              </h2>

              {/* Price + Duration */}
              <div className="mb-4 flex items-baseline gap-3">
                <span
                  className={`font-mono text-lg font-bold ${
                    service.priceColor === "blue"
                      ? "text-marker-blue"
                      : "text-marker-yellow"
                  }`}
                >
                  {t(`${service.key}Price`)}
                </span>
                <span className="font-mono text-xs text-muted">
                  {t(`${service.key}Duration`)}
                </span>
              </div>

              {/* Description */}
              <p className="mb-6 font-sans text-sm leading-relaxed text-foreground/80">
                {t(`${service.key}Desc`)}
              </p>

              {/* Features */}
              <ul className="mb-8 flex flex-1 flex-col gap-3">
                {Array.from({ length: service.features }, (_, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 font-mono text-sm text-muted"
                  >
                    <span className="mt-0.5 text-marker-blue">&rarr;</span>
                    {t(`${service.key}Feature${i + 1}`)}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href="/contact"
                className="inline-block w-full border border-border bg-transparent px-6 py-3 text-center font-mono text-sm font-bold uppercase tracking-wider text-foreground transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:border-marker-blue hover:shadow-[4px_4px_0_var(--color-marker-blue)]"
              >
                {t(`${service.key}Cta`)}
              </Link>
            </article>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 pb-24 md:px-12 lg:px-20">
        <FadeIn>
        <div className="mx-auto max-w-6xl border border-border p-8 text-center md:p-12">
          <p className="mb-3 font-sans text-xl font-bold tracking-tight text-foreground md:text-2xl">
            {t("bottomCtaTitle")}
          </p>
          <p className="mx-auto mb-6 max-w-xl font-sans text-sm text-muted">
            {t("bottomCtaDesc")}
          </p>
          <Link
            href="/contact"
            className="inline-block bg-marker-blue px-8 py-3 font-mono text-sm font-bold uppercase tracking-wider text-white transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_var(--color-marker-yellow)]"
          >
            {t("bottomCtaCta")}
          </Link>
        </div>
        </FadeIn>
      </section>
    </main>
  );
}
