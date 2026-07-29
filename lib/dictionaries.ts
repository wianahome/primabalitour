import 'server-only';

const dictionaries = {
  id: () => import('@/app/dictionaries/id.json').then((module) => module.default),
  en: () => import('@/app/dictionaries/en.json').then((module) => module.default),
  ja: () => import('@/app/dictionaries/ja.json').then((module) => module.default),
};

export const getDictionary = async (locale: 'id' | 'en' | 'ja') => {
  return dictionaries[locale] ? dictionaries[locale]() : dictionaries.id();
};