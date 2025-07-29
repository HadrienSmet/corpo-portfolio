import i18n from "@/i18n";

export const getLocalizedPath = (path: string, locale = i18n.language) => (`/${locale}/${path}`);
