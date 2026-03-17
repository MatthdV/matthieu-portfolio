import type { Project } from "@/components/ProjectCard";

export const projects: Project[] = [
  {
    title: "HYPR AI Performance Review",
    description:
      "Système de revues de performance propulsé par l'IA pour 150+ employés. Génération automatique de feedbacks structurés et scoring objectif.",
    problem:
      "Les revues de performance manuelles prenaient 3 semaines par cycle et souffraient de biais subjectifs importants, réduisant la confiance des employés.",
    stack: ["Google Apps Script", "OpenAI API", "Google Sheets", "Google Forms"],
    results: [
      "150+ employés évalués par cycle",
      "Temps de revue réduit de 3 semaines à 3 jours",
      "Score de satisfaction managériale passé de 62% à 91%",
    ],
    tags: ["IA", "Apps Script", "Automation"],
    github: "https://github.com/matthieu-de-villele",
    slug: "hypr-ai-performance-review",
  },
  {
    title: "BigPicture Initiative Tracker",
    description:
      "Suivi d'initiatives cross-platform synchronisant Jira, Confluence et Google Sheets pour une visibilité temps réel sur l'avancement des projets.",
    problem:
      "Les équipes utilisaient 3 outils différents sans vue consolidée. Les status updates hebdomadaires nécessitaient 4h de travail manuel par PM.",
    stack: ["Jira API", "Confluence API", "Google Apps Script", "BigPicture"],
    results: [
      "Vue unifiée de 50+ initiatives",
      "4h/semaine économisées par PM",
      "Adoption par 12 équipes en 2 mois",
    ],
    tags: ["Jira", "Apps Script", "Integration"],
    github: "https://github.com/matthieu-de-villele",
    slug: "bigpicture-initiative-tracker",
  },
  {
    title: "CapLabour Capacity Planning",
    description:
      "Outil de planification de capacité (v1 + v2) permettant aux managers de prévoir la charge et d'optimiser l'allocation des ressources.",
    problem:
      "La planification de capacité se faisait sur Excel avec des données obsolètes. Les sur-allocations étaient détectées trop tard, causant des retards projets.",
    stack: ["Google Apps Script", "Google Sheets", "Jira API", "Charts API"],
    results: [
      "Visibilité capacité sur 8 équipes (60+ personnes)",
      "Réduction de 40% des conflits d'allocation",
      "V2 livrée avec prévisionnel glissant sur 12 semaines",
    ],
    tags: ["Apps Script", "Google Sheets", "Planning"],
    github: "https://github.com/matthieu-de-villele",
    slug: "caplabour-capacity-planning",
  },
  {
    title: "Kindly Reminder",
    description:
      "Bot de conformité avec monitoring automatisé. Envoi de rappels intelligents et suivi des actions correctives en temps réel.",
    problem:
      "Les équipes oubliaient régulièrement de compléter les actions de conformité, entraînant des risques audit et des relances manuelles chronophages.",
    stack: ["n8n", "Slack API", "Google Sheets", "Cron scheduling"],
    results: [
      "Taux de conformité passé de 68% à 95%",
      "Zéro relance manuelle nécessaire",
      "Monitoring temps réel avec alertes escalade",
    ],
    tags: ["Bot", "n8n", "Monitoring"],
    github: "https://github.com/matthieu-de-villele",
    slug: "kindly-reminder",
  },
  {
    title: "n8n Enterprise Workflows",
    description:
      "18 workflows d'automatisation enterprise couvrant onboarding, reporting, alerting et synchronisation de données inter-systèmes.",
    problem:
      "Des dizaines de process manuels répétitifs entre Slack, Jira, Google Workspace et les outils internes, générant erreurs et perte de temps.",
    stack: ["n8n", "REST APIs", "Webhooks", "PostgreSQL", "Slack API"],
    results: [
      "18 workflows en production",
      "200+ heures/mois économisées",
      "99.5% uptime sur 12 mois",
    ],
    tags: ["n8n", "Automation", "Enterprise"],
    github: "https://github.com/matthieu-de-villele",
    slug: "n8n-enterprise-workflows",
  },
  {
    title: "Jira Automation Rules",
    description:
      "18 règles Jira Cloud automatisant la gestion de tickets : assignation, transitions, notifications et SLA tracking.",
    problem:
      "La gestion manuelle des tickets Jira créait des incohérences de statut, des assignations oubliées et un suivi SLA approximatif.",
    stack: ["Jira Cloud Automation", "JQL", "Jira REST API", "Smart Values"],
    results: [
      "18 règles actives sur 5 projets Jira",
      "Temps de triage réduit de 70%",
      "SLA compliance amélioré de 78% à 96%",
    ],
    tags: ["Jira", "Automation", "Cloud"],
    github: "https://github.com/matthieu-de-villele",
    slug: "jira-automation-rules",
  },
  {
    title: "Automation Catalogue",
    description:
      "Registre centralisé de toutes les automations de l'organisation avec documentation, ownership et métriques de performance.",
    problem:
      "Avec 40+ automations en production, personne ne savait exactement ce qui existait, qui en était responsable, ni si ça fonctionnait correctement.",
    stack: ["Google Apps Script", "Google Sheets", "n8n API", "Jira API"],
    results: [
      "40+ automations documentées et cataloguées",
      "Ownership clair pour chaque workflow",
      "Dashboard de santé avec alertes en cas de panne",
    ],
    tags: ["Documentation", "Apps Script", "Governance"],
    github: "https://github.com/matthieu-de-villele",
    slug: "automation-catalogue",
  },
];
