import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6">
      <h1 className="text-4xl font-bold">{t("heroTitle")}</h1>
      <p className="mt-4 text-gray-muted">{t("heroSubtitle")}</p>
    </main>
  );
}
