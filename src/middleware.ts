import createMiddleware from 'next-intl/middleware';
import {NextRequest, NextResponse} from 'next/server';
import {routing} from './i18n/routing';

const handleI18nRouting = createMiddleware(routing);

/** Nom du cookie de langue de next-intl (valeur par défaut de `localeCookie`). */
const LOCALE_COOKIE = 'NEXT_LOCALE';

/**
 * Pays du visiteur. Sur Vercel : en-tête `x-vercel-ip-country` (code ISO 3166-1).
 * Hors production, `DEV_FORCE_COUNTRY=CO` simule un visiteur colombien.
 */
function visitorCountry(request: NextRequest): string | null {
  if (process.env.NODE_ENV !== 'production' && process.env.DEV_FORCE_COUNTRY) {
    return process.env.DEV_FORCE_COUNTRY.toUpperCase();
  }
  return request.headers.get('x-vercel-ip-country');
}

const LOCALES = ['fr', 'en', 'es'];

/**
 * Anciennes URL : /projects devient /projets, /newsletter n'a plus de page
 * (renvoi vers l'accueil de la même langue). Avec préfixe de langue, la cible
 * est fixe : redirection permanente. Sans préfixe, la langue vient du cookie
 * NEXT_LOCALE (sinon fr) : redirection temporaire.
 */
function legacyRedirect(request: NextRequest): NextResponse | null {
  const parts = request.nextUrl.pathname.split('/').filter(Boolean);
  const prefixed = LOCALES.includes(parts[0]);
  const locale = prefixed
    ? parts[0]
    : LOCALES.find((l) => l === request.cookies.get(LOCALE_COOKIE)?.value) ?? routing.defaultLocale;
  const rest = (prefixed ? parts.slice(1) : parts).join('/');
  const target = rest === 'projects' ? `/${locale}/projets` : rest === 'newsletter' ? `/${locale}` : null;
  if (!target) return null;
  const url = request.nextUrl.clone();
  url.pathname = target;
  return NextResponse.redirect(url, prefixed ? 308 : 307);
}

export default function middleware(request: NextRequest) {
  const {pathname} = request.nextUrl;

  const legacy = legacyRedirect(request);
  if (legacy) return legacy;

  // Seule la racine nue est redirigée, et seulement sans choix de langue déjà mémorisé.
  if (
    pathname === '/' &&
    !request.cookies.has(LOCALE_COOKIE) &&
    visitorCountry(request) === 'CO'
  ) {
    const url = request.nextUrl.clone();
    url.pathname = '/es';
    const res = NextResponse.redirect(url); // 307
    // La réponse dépend du pays : aucun cache partagé ne doit la conserver.
    res.headers.set('Cache-Control', 'private, no-store');
    return res;
  }

  return handleI18nRouting(request);
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
