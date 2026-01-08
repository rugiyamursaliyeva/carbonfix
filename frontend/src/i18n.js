import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      home: "Home",
      about: "About Us",
      contact: "Contact",

      // Section1 mətnləri
      subtitle: "THE PROFESSIONAL SOLUTION FOR THE REGENERATION AND MAINTENANCE OF PARTICULATE FILTERS",
      titlePart1: "DPF Filter ",  // sonuna boşluq əlavə edildi
      titleHighlight: "Cleaning",
      titlePart2: "Machines",
      description: "Our automatic DPF cleaning machines remove 100% of soot, oil, cerium, and AdBlue residues without the need to cut or weld the filter.",
      descriptionSecondLine: "It is the most effective system for workshops that want to offer a professional and profitable service."
    },
  },
  az: {
    translation: {
      home: "Ana səhifə",
      about: "Haqqımızda",
      contact: "Əlaqə",

      subtitle: "HİSSƏCİK FİLTRLƏRİN BƏRPA EDİLMƏSİ VƏ TEXNİKİ XİDMƏTİ ÜÇÜN PEŞƏKAR HƏLL",
      titlePart1: "DPF Filtri ",  // sonuna boşluq əlavə edildi
      titleHighlight: "Təmizləyici",
      titlePart2: "Maşınlar",
      description: "Avtomatik DPF təmizləmə maşınlarımız filtrin kəsilməsi və ya qaynaq edilməsinə ehtiyac olmadan his, yağ, serium və AdBlue qalıqlarını 100% təmizləyir.",
      descriptionSecondLine: "Bu, peşəkar və sərfəli xidmət təklif etmək istəyən emalatxanalar üçün ən təsirli sistemdir."
    },
  },
  tr: {
    translation: {
      home: "Ana Sayfa",
      about: "Hakkımızda",
      contact: "İletişim",

      subtitle: "PARTİKÜL FİLTRELERİNİN REJENERASYONU VE BAKIMI İÇİN PROFESYONEL ÇÖZÜM",
      titlePart1: "DPF Filtre ",  // sonuna boşluq əlavə edildi
      titleHighlight: "Temizleme",
      titlePart2: "Makineleri",
      description: "Otomatik DPF temizleme makinelerimiz, filtreyi kesmeden veya kaynak yapmadan kurum, yağ, serium ve AdBlue kalıntılarını %100 temizler.",
      descriptionSecondLine: "Profesyonel ve karlı hizmet sunmak isteyen atölyeler için en etkili sistemdir."
    },
  },
  ru: {
    translation: {
      home: "Главная",
      about: "О нас",
      contact: "Контакты",

      subtitle: "ПРОФЕССИОНАЛЬНОЕ РЕШЕНИЕ ДЛЯ РЕГЕНЕРАЦИИ И ОБСЛУЖИВАНИЯ САЖЕВЫХ ФИЛЬТРОВ",
      titlePart1: "Машины для очистки ",  // sonuna boşluq əlavə edildi (rus strukturuna uyğun)
      titleHighlight: "DPF-фильтров",
      titlePart2: "", 
      description: "Наши автоматические машины для очистки DPF удаляют 100% сажи, масла, церия и остатков AdBlue без необходимости резки или сварки фильтра.",
      descriptionSecondLine: "Это наиболее эффективная система для мастерских, желающих предлагать профессиональные и прибыльные услуги."
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "az",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;