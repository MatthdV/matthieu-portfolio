import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Image from "next/image";
import MarkerUnderline from "@/components/MarkerUnderline";
import MarkerCircle from "@/components/MarkerCircle";
import { Link } from "@/i18n/navigation";
import FadeIn from "@/components/FadeIn";
import PageHeader from "@/components/PageHeader";
import StaggerContainer from "@/components/StaggerContainer";
import StaggerItem from "@/components/StaggerItem";
import HoverCard from "@/components/HoverCard";
import MarkerButton from "@/components/MarkerButton";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: "Metadata" });
  return {
    title: t("servicesTitle"),
    description: t("servicesDescription"),
    openGraph: {
      title: t("servicesTitle"),
      description: t("servicesDescription"),
    },
  };
}

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
      <PageHeader
        label={t("title")}
        title={t("title")}
        description={t("description")}
      />

      {/* Service cards */}
      <section className="px-6 pb-24 md:px-12 lg:px-20">
        <StaggerContainer className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2" stagger={0.1}>
          {SERVICES.map((service, index) => (
            <StaggerItem key={service.key}>
            <HoverCard className="h-full">
            <article
              className="relative flex flex-col border border-border bg-background p-8 md:p-10 h-full"
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
                  sizes="64px"
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
              <MarkerButton href="/contact" color="blue" variant="outline">
                {t(`${service.key}Cta`)}
              </MarkerButton>
            </article>
            </HoverCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
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
          <MarkerButton href="/contact" color="blue" variant="filled">
            {t("bottomCtaCta")}
          </MarkerButton>
        </div>
        </FadeIn>
      </section>
    </main>
  );
}
