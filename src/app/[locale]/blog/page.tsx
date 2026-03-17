import { useTranslations } from "next-intl";

export default function BlogPage() {
  const t = useTranslations("BlogPage");

  return (
    <main className="min-h-screen px-6 py-24">
      <h1 className="text-4xl font-bold">{t("title")}</h1>
      <p className="mt-4 text-gray-muted">{t("description")}</p>
    </main>
  );
}
