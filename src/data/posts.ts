export interface Post {
  title: string;
  slug: string;
  date: string;
  summary: string;
  tags: string[];
}

interface PostBase {
  slug: string;
  date: string;
  tags: string[];
  titleKey: string;
  summaryKey: string;
}

const postsBase: PostBase[] = [
  {
    slug: "automatiser-revues-performance-ia",
    date: "2026-03-10",
    tags: ["IA", "Apps Script", "Retour d'expérience"],
    titleKey: "post1Title",
    summaryKey: "post1Summary",
  },
  {
    slug: "n8n-vs-make-vs-zapier-2026",
    date: "2026-02-24",
    tags: ["Automation", "n8n", "Comparatif"],
    titleKey: "post2Title",
    summaryKey: "post2Summary",
  },
  {
    slug: "5-automations-jira-cloud",
    date: "2026-02-10",
    tags: ["Jira", "Automation", "Productivité"],
    titleKey: "post3Title",
    summaryKey: "post3Summary",
  },
  {
    slug: "pipeline-rag-production-guide",
    date: "2026-01-28",
    tags: ["IA", "RAG", "Guide"],
    titleKey: "post4Title",
    summaryKey: "post4Summary",
  },
];

export function getLocalizedPosts(
  t: (key: string) => string
): Post[] {
  return postsBase.map((p) => ({
    title: t(p.titleKey),
    slug: p.slug,
    date: p.date,
    summary: t(p.summaryKey),
    tags: p.tags,
  }));
}

export { postsBase };
