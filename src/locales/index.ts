import type { Lang, LocaleStrings } from '../types';
import { de } from './de';
import { en } from './en';
import { sv } from './sv';

export const LOCALES: Record<Lang, LocaleStrings> = {
  en,
  sv,
  de,
};

export function t(lang: Lang): LocaleStrings {
  return LOCALES[lang];
}
