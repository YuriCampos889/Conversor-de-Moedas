// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import ptBR from '../locales/pt.json';
import enUS from '../locales/en.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      pt: { translation: ptBR },
      en: { translation: enUS },
    },
    lng: 'pt',
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
