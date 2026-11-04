import { useTranslations } from "next-intl";
import { SITE, telHref } from "@/config/site";

/** Barre d'appel collée en bas de l'écran sur téléphone. */
export default function CallBar() {
  const c = useTranslations("Common");
  return (
    <a
      href={telHref(SITE.phone)}
      className="fixed inset-x-0 bottom-0 z-40 flex min-h-[3.5rem] items-center justify-center gap-3 border-t-2 border-ink bg-tomato px-4 font-sans text-base font-semibold text-[#101010] md:hidden"
    >
      <span>{c("callName")}</span>
      <span className="font-sans text-sm font-bold normal-case">{SITE.phone}</span>
    </a>
  );
}
