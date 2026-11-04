import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { SITE, isPlaceholder, telHref } from "@/config/site";

export default function Footer() {
  const t = useTranslations("Footer");
  const n = useTranslations("Nav");
  const status = isPlaceholder(SITE.siret) ? t("statusPending") : t("statusSiret", { siret: SITE.siret });

  return (
    <footer className="on-green bg-green px-4 pb-24 pt-12 text-paper sm:px-6 md:pb-12">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-xl leading-none">{SITE.name}</p>
          <p className="mt-4 max-w-sm text-softOnGreen">{t("role")}</p>
          <p className="mt-4 text-softOnGreen">{status}</p>
        </div>
        <nav aria-label="Pied de page">
          <ul className="space-y-1">
            <li><Link className="inline-block py-2 hover:underline" href="/services">{n("services")}</Link></li>
            <li><Link className="inline-block py-2 hover:underline" href="/projets">{n("projects")}</Link></li>
            <li><Link className="inline-block py-2 hover:underline" href="/contact">{n("contact")}</Link></li>
          </ul>
        </nav>
        <div>
          <ul className="space-y-1">
            <li><a className="inline-block py-2 hover:underline" href={telHref(SITE.phone)}>{SITE.phone}</a></li>
            <li><a className="inline-block py-2 hover:underline" href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
            <li><Link className="inline-block py-2 hover:underline" href="/mentions-legales">{t("legal")}</Link></li>
            <li><Link className="inline-block py-2 hover:underline" href="/confidentialite">{t("privacy")}</Link></li>
          </ul>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl text-sm text-softOnGreen">{t("rights", { year: new Date().getFullYear() })}</p>
    </footer>
  );
}
