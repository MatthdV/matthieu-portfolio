import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { SITE, telHref } from "@/config/site";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const t = useTranslations("Nav");
  const c = useTranslations("Common");
  const links = [
    { href: "/services", label: t("services") },
    { href: "/projets", label: t("projects") },
    { href: "/contact", label: t("contact") },
  ] as const;

  return (
    <header className="border-b-2 border-ink bg-paper">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 px-4 sm:px-6">
        <Link
          href="/"
          aria-label={`${SITE.name}, ${c("home")}`}
          className="py-3 font-display text-lg uppercase leading-none tracking-tight sm:text-xl"
        >
          {SITE.name}
        </Link>
        <LanguageSwitcher label={c("language")} />
        <nav
          aria-label="Principal"
          className="order-last flex w-full items-center gap-6 border-t-2 border-ink/15 py-1 md:order-none md:w-auto md:border-0 md:py-0"
        >
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="py-3 text-base font-bold hover:underline">
              {l.label}
            </Link>
          ))}
          <a href={telHref(SITE.phone)} className="btn btn-red ml-auto hidden md:inline-flex">
            {c("call")}
          </a>
        </nav>
      </div>
    </header>
  );
}
