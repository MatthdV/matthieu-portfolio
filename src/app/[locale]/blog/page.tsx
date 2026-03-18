import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { getLocalizedPosts } from "@/data/posts";
import MarkerUnderline from "@/components/MarkerUnderline";
import FadeIn from "@/components/FadeIn";
import PageHeader from "@/components/PageHeader";
import StaggerContainer from "@/components/StaggerContainer";
import StaggerItem from "@/components/StaggerItem";
import HoverCard from "@/components/HoverCard";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: "Metadata" });
  return {
    title: t("blogTitle"),
    description: t("blogDescription"),
    openGraph: {
      title: t("blogTitle"),
      description: t("blogDescription"),
    },
  };
}

export default function BlogPage() {
  const t = useTranslations("BlogPage");
  const tPosts = useTranslations("Posts");
  const posts = getLocalizedPosts(tPosts);

  return (
    <main className="flex flex-col">
      {/* Header */}
      <PageHeader
        label={t("title")}
        title={t("title")}
        description={t("description")}
      />

      {/* Articles list */}
      <section className="px-6 pb-24 md:px-12 lg:px-20">
        <StaggerContainer className="mx-auto flex max-w-6xl flex-col gap-6" stagger={0.1}>
          {posts.map((post, index) => (
            <StaggerItem key={post.slug} direction="left">
            <HoverCard>
            <article
              className="relative group border border-border bg-background p-8 md:p-10"
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
            </HoverCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Newsletter CTA */}
      <section className="px-6 pb-24 md:px-12 lg:px-20">
        <FadeIn>
        <div className="mx-auto max-w-6xl border border-border p-8 text-center md:p-12">
          <p className="mb-2 font-sans text-xl font-bold tracking-tight text-foreground md:text-2xl">
            {t("newsletterTitle")}
          </p>
          <p className="mb-6 font-sans text-base text-muted">
            {t("newsletterDescription")}
          </p>
        </div>
        </FadeIn>
      </section>
    </main>
  );
}
