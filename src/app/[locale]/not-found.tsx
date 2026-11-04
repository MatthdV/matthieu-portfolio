import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function NotFound() {
  const t = useTranslations("NotFound");
  return (
    <main className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
      <h1 className="font-display text-4xl">{t("title")}</h1>
      <p className="mt-4 text-lg">{t("body")}</p>
      <Link href="/" className="btn btn-red mt-8">{t("back")}</Link>
    </main>
  );
}
