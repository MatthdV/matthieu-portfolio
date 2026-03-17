import { useTranslations } from "next-intl";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  const t = useTranslations("HomePage");

  const stats = [
    { value: t("stat1Value"), label: t("stat1Label") },
    { value: t("stat2Value"), label: t("stat2Label") },
    { value: t("stat3Value"), label: t("stat3Label") },
  ];

  const services = [
    {
      title: t("service1Title"),
      description: t("service1Desc"),
      price: t("service1Price"),
      icon: "/images/icon-agents.png",
      featured: true,
    },
    {
      title: t("service2Title"),
      description: t("service2Desc"),
      price: t("service2Price"),
      icon: "/images/icon-automation.png",
    },
    {
      title: t("service3Title"),
      description: t("service3Desc"),
      price: t("service3Price"),
      icon: "/images/icon-audit.png",
      priceColor: "blue" as const,
    },
    {
      title: t("service4Title"),
      description: t("service4Desc"),
      price: t("service4Price"),
      icon: "/images/icon-retainer.png",
    },
  ];

  return (
    <main className="flex flex-col">
      <HeroSection
        tag={t("heroTag")}
        title={t("heroTitle")}
        titleAccent={t("heroTitleAccent")}
        description={t("heroDescription")}
        stats={stats}
        ctaPrimary={t("ctaPrimary")}
        ctaSecondary={t("ctaSecondary")}
      />
      <ServicesSection
        sectionLabel={t("servicesSectionLabel")}
        title={t("servicesBentoTitle")}
        titleAccent={t("servicesBentoTitleAccent")}
        services={services}
      />
    </main>
  );
}
