import { useTranslations } from "next-intl";
import { SITE } from "@/config/site";

/** Barre de réservation collée en bas de l'écran sur téléphone. */
export default function CallBar() {
  const c = useTranslations("Common");
  return (
    <a
      href={SITE.booking15}
      rel="noopener noreferrer"
      className="fixed inset-x-0 bottom-0 z-40 flex min-h-[3.5rem] items-center justify-center border-t-2 border-ink bg-tomato px-4 font-sans text-base font-semibold text-[#101010] md:hidden"
    >
      {c("book15")}
    </a>
  );
}
