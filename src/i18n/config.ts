export const locales = ["fr", "en", "de", "it", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fr";
