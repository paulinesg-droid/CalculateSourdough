import type { Lang, LocaleStrings } from '../types';
import { blogPostsByLang } from './blogPostsI18n';
import { de } from './de';
import { en } from './en';
import { sv } from './sv';

export const LOCALES: Record<Lang, LocaleStrings> = {
  en,
  sv,
  de,
};

export function t(lang: Lang): LocaleStrings {
  const base = LOCALES[lang];
  return {
    ...base,
    blogTab: {
      ...base.blogTab,
      posts: blogPostsByLang[lang],
    },
  };
}
