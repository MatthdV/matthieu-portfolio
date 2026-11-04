import {getRequestConfig} from 'next-intl/server';
import {hasLocale} from 'next-intl';
import {routing} from './routing';
import {applyTokens, messageTokens} from '@/config/prices';

export default getRequestConfig(async ({requestLocale}) => {
  let locale = await requestLocale;
  if (!hasLocale(routing.locales, locale)) {
    locale = routing.defaultLocale;
  }

  const messages = (await import(`../../messages/${locale}.json`)).default;

  return {
    locale,
    // Prix, délais et mention de TVA viennent de src/config/prices.ts.
    messages: applyTokens(messages, messageTokens(locale)),
  };
});
