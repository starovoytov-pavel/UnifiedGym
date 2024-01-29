import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from 'locales/en.json';
import ru from 'locales/ru.json';
import bel from 'locales/bel.json';

const resources = {
  en: { translation: en },
  ru: { translation: ru },
  bel: { translation: bel },
};

i18n
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
