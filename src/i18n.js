import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    welcome: 'Welcome',
    changeLanguage: 'Change Language',
  },
  hi: {
    welcome: 'स्वागत',
    changeLanguage: 'भाषा बदला',
  },
  mr: {
    welcome: 'स्वागत आहे',
    changeLanguage: 'भाषा बदला',
  },
};

const i18n = createI18n({
  locale: 'en', // Default language
  messages,
});

export default i18n;
