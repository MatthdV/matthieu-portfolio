import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { getLocalizedPosts } from "@/data/posts";
import NewsletterForm from "@/components/NewsletterForm";
import { useLocale } from "next-intl";

function formatDate(dateStr: string, locale: string) {
  const localeMap: Record<string, string> = {
    fr: "fr-FR",
    en: "en-US",
    es: "es-ES",
  };
  return new Date(dateStr).toLocaleDateString(localeMap[locale] || "fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const t = useTranslations("BlogPage");
  const tp = useTranslations("Posts");
  const tNewsletter = useTranslations("NewsletterForm");
  const locale = useLocale();
  const posts = getLocalizedPosts(tp);

  return (
    <main className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          {t("title")}
        </h1>
        <p className="mt-4 text-lg text-foreground/60">
          {t("description")}
        </p>

        {/* Article list */}
        <div className="mt-16 divide-y divide-foreground/10">
          {posts.map((post) => (
            <article key={post.slug} className="py-8 first:pt-0 last:pb-0">
              <time className="text-xs text-foreground/40">
                {formatDate(post.date, locale)}
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
                  {t("readMore")} &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-20 rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-8 text-center sm:p-12">
          <h2 className="text-2xl font-bold">{t("newsletterTitle")}</h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-foreground/60">
            {t("newsletterDescription")}
          </p>
          <NewsletterForm placeholder={tNewsletter("placeholder")} subscribe={tNewsletter("subscribe")} />
        </div>
      </div>
    </main>
  );
}
