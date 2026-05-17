import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsletterSection from "@/components/NewsletterSection";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: "Metadata" });
  return {
    title: t("homeTitle"),
    description: t("homeDescription"),
    openGraph: {
      title: t("homeTitle"),
      description: t("homeDescription"),
    },
  };
}

export default function Home() {
  const t = useTranslations("HomePage");
  const tProjects = useTranslations("Projects");
  const tTestimonials = useTranslations("Testimonials");
  const tNewsletter = useTranslations("NewsletterForm");

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
    { number: "01", title: tProjects("kallpaTitle"), tags: ["SaaS", "Next.js", "AI"] },
    { number: "02", title: tProjects("jobhunterTitle"), tags: ["Python", "Claude API", "MCP"] },
    { number: "03", title: tProjects("imocTitle"), tags: ["n8n", "RAG", "Pinecone"] },
    { number: "04", title: tProjects("hyprTitle"), tags: ["OpenAI", "n8n", "LiteLLM"] },
    { number: "05", title: tProjects("n8nTitle"), tags: ["n8n", "Jira", "Slack"] },
    { number: "06", title: tProjects("caplabourTitle"), tags: ["BigQuery", "Sheets"] },
    { number: "07", title: tProjects("bigpictureTitle"), tags: ["Jira", "Confluence"] },
  ];

  const testimonials = [
    {
      quote: tTestimonials("michalQuote"),
      name: tTestimonials("michalName"),
      role: tTestimonials("michalRole"),
      company: tTestimonials("michalCompany"),
    },
    {
      quote: tTestimonials("aniketQuote"),
      name: tTestimonials("aniketName"),
      role: tTestimonials("aniketRole"),
      company: tTestimonials("aniketCompany"),
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
      <ProjectsSection
        sectionLabel={t("projectsSectionLabel")}
        title={t("projectsTitle")}
        titleAccent={t("projectsTitleAccent")}
        projects={projects}
        viewAllLabel={t("projectsViewAll")}
        viewAllHref="https://github.com/MatthdV"
      />
      <TestimonialsSection
        sectionLabel={tTestimonials("sectionLabel")}
        title={tTestimonials("title")}
        titleAccent={tTestimonials("titleAccent")}
        testimonials={testimonials}
      />
      <NewsletterSection
        sectionLabel={t("newsletterSectionLabel")}
        title={t("newsletterTitle")}
        titleAccent={t("newsletterTitleAccent")}
        description={t("newsletterDescription")}
        placeholder={tNewsletter("placeholder")}
        subscribe={tNewsletter("subscribe")}
      />
    </main>
  );
}
