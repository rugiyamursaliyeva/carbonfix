import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      home: "Home",
      about: "About Us",
      contact: "Contact",
    },
  },
  az: {
    translation: {
      home: "Ana səhifə",
      about: "Haqqımızda",
      contact: "Əlaqə",
    },
  },
  tr: {
    translation: {
      home: "Ana Sayfa",
      about: "Hakkımızda",
      contact: "İletişim",
    },
  },
  ru: {
    translation: {
      home: "Главная",
      about: "О нас",
      contact: "Контакты",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "az", // default dil
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
