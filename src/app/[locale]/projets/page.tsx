import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { SITE, telHref } from "@/config/site";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: { locale: string } }) {
  return pageMetadata(params.locale, "projets");
}

type Item = { title: string; body: string; problem: string; stack: string[] };

export default function ProjectsPage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  const t = useTranslations("Projects");
  const items = t.raw("items") as Item[];

  return (
    <main>
      <section className="border-b-2 border-ink py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h1 className="font-display text-4xl sm:text-6xl">{t("title")}</h1>
          <p className="mt-4 max-w-2xl text-lg">{t("intro")}</p>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <ol className="mx-auto max-w-6xl px-4 sm:px-6">
          {items.map((p, i) => (
            <li key={p.title} className="grid gap-6 border-t-2 border-ink py-10 last:border-b-2 lg:grid-cols-[6rem_1.2fr_1fr]">
              <span className="font-display text-5xl leading-none text-tomato" aria-hidden="true">{i + 1}</span>
              <div>
                <h2 className="font-display text-2xl sm:text-3xl">{p.title}</h2>
                <p className="mt-3 max-w-xl text-lg">{p.body}</p>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="label text-soft">{t("problem")}</h3>
                  <p className="mt-1">{p.problem}</p>
                </div>
                <div>
                  <h3 className="label text-soft">{t("stack")}</h3>
                  <p className="mt-1 font-bold">{p.stack.join(", ")}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
        <div className="mx-auto mt-12 max-w-6xl px-4 sm:px-6">
          <p className="font-display text-2xl">{t("ctaText")}</p>
          <a href={telHref(SITE.phone)} className="btn btn-red mt-6">{t("cta")}</a>
        </div>
      </section>
    </main>
  );
}
