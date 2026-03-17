import type { Project } from "@/components/ProjectCard";

export const projects: Project[] = [
  {
    title: "HYPR AI Performance Review",
    description:
      "Système de revues de performance propulsé par l'IA pour 150+ employés. Génération automatique de feedbacks structurés et scoring objectif.",
    tags: ["IA", "Apps Script", "Automation"],
    github: "https://github.com/matthieu-de-villele",
    slug: "hypr-ai-performance-review",
  },
  {
    title: "BigPicture Initiative Tracker",
    description:
      "Suivi d'initiatives cross-platform synchronisant Jira, Confluence et Google Sheets pour une visibilité temps réel sur l'avancement des projets.",
    tags: ["Jira", "Apps Script", "Integration"],
    github: "https://github.com/matthieu-de-villele",
    slug: "bigpicture-initiative-tracker",
  },
  {
    title: "CapLabour Capacity Planning",
    description:
      "Outil de planification de capacité (v1 + v2) permettant aux managers de prévoir la charge et d'optimiser l'allocation des ressources.",
    tags: ["Apps Script", "Google Sheets", "Planning"],
    github: "https://github.com/matthieu-de-villele",
    slug: "caplabour-capacity-planning",
  },
  {
    title: "Kindly Reminder",
    description:
      "Bot de conformité avec monitoring automatisé. Envoi de rappels intelligents et suivi des actions correctives en temps réel.",
    tags: ["Bot", "n8n", "Monitoring"],
    github: "https://github.com/matthieu-de-villele",
    slug: "kindly-reminder",
  },
  {
    title: "n8n Enterprise Workflows",
    description:
      "18 workflows d'automatisation enterprise couvrant onboarding, reporting, alerting et synchronisation de données inter-systèmes.",
    tags: ["n8n", "Automation", "Enterprise"],
    github: "https://github.com/matthieu-de-villele",
    slug: "n8n-enterprise-workflows",
  },
  {
    title: "Jira Automation Rules",
    description:
      "18 règles Jira Cloud automatisant la gestion de tickets : assignation, transitions, notifications et SLA tracking.",
    tags: ["Jira", "Automation", "Cloud"],
    github: "https://github.com/matthieu-de-villele",
    slug: "jira-automation-rules",
  },
];
