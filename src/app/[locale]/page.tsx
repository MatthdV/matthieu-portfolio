import { useTranslations } from "next-intl";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  const t = useTranslations("HomePage");
  const tProjects = useTranslations("Projects");

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

  const projects = [
    { number: "01", title: tProjects("hyprTitle"), tags: ["OpenAI", "n8n", "LiteLLM"] },
    { number: "02", title: tProjects("n8nTitle"), tags: ["n8n", "Jira", "Slack"] },
    { number: "03", title: tProjects("kindlyTitle"), tags: ["Apps Script", "Gmail"] },
    { number: "04", title: tProjects("caplabourTitle"), tags: ["BigQuery", "Sheets"] },
    { number: "05", title: tProjects("bigpictureTitle"), tags: ["Jira", "Confluence"] },
    { number: "06", title: tProjects("jiraTitle"), tags: ["Jira Cloud", "18 rules"] },
    { number: "07", title: tProjects("catalogueTitle"), tags: ["Registry", "Apps Script"] },
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
      <ProjectsSection
        sectionLabel={t("projectsSectionLabel")}
        title={t("projectsTitle")}
        titleAccent={t("projectsTitleAccent")}
        projects={projects}
        viewAllLabel={t("projectsViewAll")}
        viewAllHref="https://github.com/matthieu-de-villele"
      />
    </main>
  );
}
