import { useTranslations } from "next-intl";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  const t = useTranslations("HomePage");

  const stats = [
    { value: t("stat1Value"), label: t("stat1Label") },
    { value: t("stat2Value"), label: t("stat2Label") },
    { value: t("stat3Value"), label: t("stat3Label") },
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
    </main>
  );
}
