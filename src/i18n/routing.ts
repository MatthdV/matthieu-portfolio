import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['fr', 'en', 'es'],
  defaultLocale: 'fr',
  localePrefix: 'always',
  // Les hreflang (avec x-default vers /fr) sont déjà dans le HTML via src/lib/seo.ts.
  // L'en-tête Link de next-intl pointerait x-default vers "/", ce qui les contredirait.
  alternateLinks: false,
});
