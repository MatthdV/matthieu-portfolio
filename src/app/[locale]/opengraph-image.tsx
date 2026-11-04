import { getTranslations } from "next-intl/server";
import { generateOGImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Matthieu de Villele";

export default async function Image({ params }: { params: { locale: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: "Home" });
  return generateOGImage({
    name: "Matthieu de Villele",
    title: t("hero.title"),
    price: t("hero.setupAmount"),
    priceNote: `${t("hero.setupLabel")}, ${t("hero.monthlyAmount")} ${t("hero.monthlyLabel")}`,
  });
}
