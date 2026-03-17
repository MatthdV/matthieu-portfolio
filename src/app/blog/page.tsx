import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/data/posts";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles sur l'automation, l'IA, n8n, Jira et Google Apps Script. Retours d'expérience, guides pratiques et comparatifs.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog — Matthieu de Villele",
    description:
      "Retours d'expérience, guides pratiques et veille automation & IA.",
    url: "/blog",
  },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  return (
    <main className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Blog</h1>
        <p className="mt-4 text-lg text-foreground/60">
          Retours d&apos;expérience, guides pratiques et veille automation &amp;
          IA.
        </p>

        {/* Article list */}
        <div className="mt-16 divide-y divide-foreground/10">
          {posts.map((post) => (
            <article key={post.slug} className="py-8 first:pt-0 last:pb-0">
              <time className="text-xs text-foreground/40">
                {formatDate(post.date)}
              </time>
              <h2 className="mt-2 text-xl font-semibold">
                <Link
                  href={`/blog/${post.slug}`}
                  className="transition-colors hover:text-accent"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-foreground/60">
                {post.summary}
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent"
                  >
                    {tag}
                  </span>
                ))}
                <Link
                  href={`/blog/${post.slug}`}
                  className="ml-auto text-sm font-medium text-accent transition-colors hover:text-accent-hover"
                >
                  Lire plus &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-20 rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-8 text-center sm:p-12">
          <h2 className="text-2xl font-bold">Newsletter IA &amp; Automation</h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-foreground/60">
            Un email par semaine avec les meilleures ressources, outils et
            retours d&apos;expérience sur l&apos;automation et l&apos;IA.
          </p>
          <NewsletterForm />
        </div>
      </div>
    </main>
  );
}
