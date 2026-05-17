export interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  slug: string;
  problem?: string;
  stack?: string[];
  results?: string[];
}

interface ProjectBase {
  slug: string;
  tags: string[];
  github?: string;
  stack?: string[];
  titleKey: string;
  descKey: string;
  problemKey: string;
  resultKeys: string[];
}

const projectsBase: ProjectBase[] = [
  {
    slug: "hypr-ai-performance-review",
    tags: ["IA", "Apps Script", "Automation"],
    github: "https://github.com/MatthdV",
    stack: ["Google Apps Script", "OpenAI API", "Google Sheets", "Google Forms"],
    titleKey: "hyprTitle",
    descKey: "hyprDesc",
    problemKey: "hyprProblem",
    resultKeys: ["hyprResult1", "hyprResult2", "hyprResult3"],
  },
  {
    slug: "bigpicture-initiative-tracker",
    tags: ["Jira", "Apps Script", "Integration"],
    github: "https://github.com/MatthdV",
    stack: ["Jira API", "Confluence API", "Google Apps Script", "BigPicture"],
    titleKey: "bigpictureTitle",
    descKey: "bigpictureDesc",
    problemKey: "bigpictureProblem",
    resultKeys: ["bigpictureResult1", "bigpictureResult2", "bigpictureResult3"],
  },
  {
    slug: "caplabour-capacity-planning",
    tags: ["Apps Script", "Google Sheets", "Planning"],
    github: "https://github.com/MatthdV",
    stack: ["Google Apps Script", "Google Sheets", "Jira API", "Charts API"],
    titleKey: "caplabourTitle",
    descKey: "caplabourDesc",
    problemKey: "caplabourProblem",
    resultKeys: ["caplabourResult1", "caplabourResult2", "caplabourResult3"],
  },
  {
    slug: "kindly-reminder",
    tags: ["Bot", "n8n", "Monitoring"],
    github: "https://github.com/MatthdV",
    stack: ["n8n", "Slack API", "Google Sheets", "Cron scheduling"],
    titleKey: "kindlyTitle",
    descKey: "kindlyDesc",
    problemKey: "kindlyProblem",
    resultKeys: ["kindlyResult1", "kindlyResult2", "kindlyResult3"],
  },
  {
    slug: "n8n-enterprise-workflows",
    tags: ["n8n", "Automation", "Enterprise"],
    github: "https://github.com/MatthdV",
    stack: ["n8n", "REST APIs", "Webhooks", "PostgreSQL", "Slack API"],
    titleKey: "n8nTitle",
    descKey: "n8nDesc",
    problemKey: "n8nProblem",
    resultKeys: ["n8nResult1", "n8nResult2", "n8nResult3"],
  },
  {
    slug: "jira-automation-rules",
    tags: ["Jira", "Automation", "Cloud"],
    github: "https://github.com/MatthdV",
    stack: ["Jira Cloud Automation", "JQL", "Jira REST API", "Smart Values"],
    titleKey: "jiraTitle",
    descKey: "jiraDesc",
    problemKey: "jiraProblem",
    resultKeys: ["jiraResult1", "jiraResult2", "jiraResult3"],
  },
  {
    slug: "automation-catalogue",
    tags: ["Documentation", "Apps Script", "Governance"],
    github: "https://github.com/MatthdV",
    stack: ["Google Apps Script", "Google Sheets", "n8n API", "Jira API"],
    titleKey: "catalogueTitle",
    descKey: "catalogueDesc",
    problemKey: "catalogueProblem",
    resultKeys: ["catalogueResult1", "catalogueResult2", "catalogueResult3"],
  },
  {
    slug: "imoc-rag-incident-review",
    tags: ["n8n", "RAG", "AI"],
    stack: ["n8n", "OpenAI API", "Pinecone", "PostgreSQL", "Slack API"],
    titleKey: "imocTitle",
    descKey: "imocDesc",
    problemKey: "imocProblem",
    resultKeys: ["imocResult1", "imocResult2", "imocResult3"],
  },
  {
    slug: "kallpa-running-coach",
    tags: ["SaaS", "Next.js", "AI"],
    github: "https://github.com/MatthdV",
    stack: ["Next.js 14", "Supabase", "Vercel", "Claude API", "Strava API"],
    titleKey: "kallpaTitle",
    descKey: "kallpaDesc",
    problemKey: "kallpaProblem",
    resultKeys: ["kallpaResult1", "kallpaResult2", "kallpaResult3"],
  },
  {
    slug: "jobhunter-ai",
    tags: ["Python", "AI", "MCP"],
    github: "https://github.com/MatthdV",
    stack: ["Python", "Claude API", "MCP", "Gmail API", "PostgreSQL"],
    titleKey: "jobhunterTitle",
    descKey: "jobhunterDesc",
    problemKey: "jobhunterProblem",
    resultKeys: ["jobhunterResult1", "jobhunterResult2", "jobhunterResult3"],
  },
];

export function getLocalizedProjects(
  t: (key: string) => string
): Project[] {
  return projectsBase.map((p) => ({
    title: t(p.titleKey),
    description: t(p.descKey),
    problem: t(p.problemKey),
    results: p.resultKeys.map((k) => t(k)),
    tags: p.tags,
    github: p.github,
    slug: p.slug,
    stack: p.stack,
  }));
}

export { projectsBase };
