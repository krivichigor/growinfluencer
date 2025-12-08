// Internationalization configuration for Hub for Influencers

export type Locale = "en"

export const defaultLocale: Locale = "en"

import { translations } from "@/lib/i18n/translations"

export function t(key: string, locale: Locale = "en"): string {
  const keys = key.split(".")
  let value: any = translations[locale] || translations.en

  for (const k of keys) {
    if (value && typeof value === "object" && k in value) {
      value = value[k]
    } else {
      let fallbackValue: any = translations.en
      for (const fk of keys) {
        if (fallbackValue && typeof fallbackValue === "object" && fk in fallbackValue) {
          fallbackValue = fallbackValue[fk]
        } else {
          console.warn(`Translation missing for key: ${key}`)
          return key
        }
      }
      return typeof fallbackValue === "string" ? fallbackValue : key
    }
  }

  return typeof value === "string" ? value : key
}

export function useTranslation(locale: Locale = defaultLocale) {
  return {
    t: (key: string) => t(key, locale),
    locale,
  }
}
