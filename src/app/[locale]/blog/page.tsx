import { useTranslations } from "next-intl";
import { getLocalizedPosts } from "@/data/posts";
import MarkerUnderline from "@/components/MarkerUnderline";

export default function BlogPage() {
  const t = useTranslations("BlogPage");
  const tPosts = useTranslations("Posts");
  const posts = getLocalizedPosts(tPosts);

  return (
    <main className="flex flex-col">
      {/* Header */}
      <section className="px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-marker-blue" />
            <span className="font-mono text-xs uppercase tracking-widest text-marker-blue">
              Blog
            </span>
          </div>
          <h1
            className="mb-4 font-sans font-bold tracking-[-2px] text-foreground"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
          >
            {t("title")}
          </h1>
          <p className="max-w-2xl font-sans text-lg text-muted">
            {t("description")}
          </p>
        </div>
      </section>

      {/* Articles list */}
      <section className="px-6 pb-24 md:px-12 lg:px-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-6">
          {posts.map((post, index) => (
            <article
              key={post.slug}
              className="group border border-border bg-background p-8 transition-all duration-200 hover:border-marker-blue hover:-translate-y-1 md:p-10"
            >
              {/* Date + tags row */}
              <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <time className="font-mono text-sm text-muted">
                  {post.date}
                </time>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-border px-2 py-0.5 font-mono text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Title */}
              <h2 className="mb-3 font-sans text-xl font-bold tracking-tight text-foreground md:text-2xl">
                {index === 0 ? (
                  <MarkerUnderline color="blue">{post.title}</MarkerUnderline>
                ) : (
                  post.title
                )}
              </h2>

              {/* Summary */}
              <p className="max-w-3xl font-sans text-base leading-relaxed text-foreground/70">
                {post.summary}
              </p>

              {/* Read more link */}
              <div className="mt-6">
                <span className="inline-flex items-center gap-2 font-mono text-sm text-muted transition-colors duration-200 group-hover:text-marker-blue">
                  {t("readMore")}
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="px-6 pb-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl border border-border p-8 text-center md:p-12">
          <p className="mb-2 font-sans text-xl font-bold tracking-tight text-foreground md:text-2xl">
            {t("newsletterTitle")}
          </p>
          <p className="mb-6 font-sans text-base text-muted">
            {t("newsletterDescription")}
          </p>
        </div>
      </section>
    </main>
  );
}
