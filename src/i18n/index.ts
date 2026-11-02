import { en, type Dictionary } from "./en";

export type Locale = "en";

const dictionaries: Record<Locale, Dictionary> = { en };

export const defaultLocale: Locale = "en";

export function getDictionary(locale: Locale = defaultLocale): Dictionary {
  return dictionaries[locale];
}
