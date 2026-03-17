export interface Post {
  title: string;
  slug: string;
  date: string;
  summary: string;
  tags: string[];
}

export const posts: Post[] = [
  {
    title: "Comment j'ai automatisé les revues de performance pour 150+ employés avec l'IA",
    slug: "automatiser-revues-performance-ia",
    date: "2025-03-10",
    summary:
      "Retour d'expérience sur la conception d'un système de performance review propulsé par GPT-4 et Google Apps Script. Résultats, limites et leçons apprises.",
    tags: ["IA", "Apps Script", "Retour d'expérience"],
  },
  {
    title: "n8n vs Make vs Zapier : quel outil d'automation choisir en 2025 ?",
    slug: "n8n-vs-make-vs-zapier-2025",
    date: "2025-02-24",
    summary:
      "Comparatif détaillé des 3 plateformes d'automation les plus populaires. Pricing, flexibilité, self-hosting et cas d'usage concrets.",
    tags: ["Automation", "n8n", "Comparatif"],
  },
  {
    title: "5 automations Jira Cloud que chaque équipe devrait mettre en place",
    slug: "5-automations-jira-cloud",
    date: "2025-02-10",
    summary:
      "Les 5 règles Jira Automation qui ont le plus d'impact sur la productivité de vos équipes. Templates inclus, prêts à importer.",
    tags: ["Jira", "Automation", "Productivité"],
  },
  {
    title: "Construire un pipeline RAG en production : guide pratique",
    slug: "pipeline-rag-production-guide",
    date: "2025-01-28",
    summary:
      "De la théorie à la production : chunking, embeddings, vector store et orchestration. Les choix techniques qui comptent vraiment.",
    tags: ["IA", "RAG", "Guide"],
  },
];
