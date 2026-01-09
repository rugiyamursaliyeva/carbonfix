import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // HEADER
      home: "Home",
      about: "About Us",
      contact: "Contact",

      // SECTION 1
      subtitle:
        "THE PROFESSIONAL SOLUTION FOR THE REGENERATION AND MAINTENANCE OF PARTICULATE FILTERS",
      titlePart1: "DPF Filter ",
      titleHighlight: "Cleaning",
      titlePart2: "Machines",
      description:
        "Our automatic DPF cleaning machines remove 100% of soot, oil, cerium, and AdBlue residues without the need to cut or weld the filter.",
      descriptionSecondLine:
        "It is the most effective system for workshops that want to offer a professional and profitable service.",

      // SECTION 2
      section2Title: "Where does the cleaning system act?",
      section2Desc:
        "Our cleaning equipment acts directly on the core of the particulate filter, removing soot, ash, and solid residues that block the flow of exhaust gases.",
      section2Span:
        "Deep cleaning allows the DPF to recover its original filtering capacity and comply with emission limits.",

      // SECTION 3
      cards: {
        sootTitle: "Soot and combustion particles",
        sootDesc: "Complete removal of carbon deposits produced by diesel.",
        oilTitle: "Additive and oil ash",
        oilDesc:
          "Removal of mineral residues that are not eliminated during automatic regenerations.",
        blockTitle: "Internal blockages",
        blockDesc:
          "Restoration of gas flow and improvement of engine performance.",
      },

      // SECTION 4 (MAIN SOURCE)
      section4Title: "Why choose our filter cleaning system?",
      section4Desc:
        "CARBONFIX DPF cleaning machines use a controlled injection process of pressurized water and air combined with specific descaling products.",
      section4Process:
        "The system acts throughout the filter, breaking and removing particles attached to the inner ceramic walls.",
    },
  },

  az: {
    translation: {
      // HEADER
      home: "Ana səhifə",
      about: "Haqqımızda",
      contact: "Əlaqə",

      // SECTION 1
      subtitle:
        "HİSSƏCİK FİLTRLƏRİN BƏRPA EDİLMƏSİ VƏ TEXNİKİ XİDMƏTİ ÜÇÜN PEŞƏKAR HƏLL",
      titlePart1: "DPF Filtri ",
      titleHighlight: "Təmizləmə",
      titlePart2: "Maşınları",
      description:
        "Avtomatik DPF təmizləmə maşınlarımız filtrin kəsilməsi və ya qaynaq edilməsinə ehtiyac olmadan his, yağ, serium və AdBlue qalıqlarını 100% təmizləyir.",
      descriptionSecondLine:
        "Bu, peşəkar və sərfəli xidmət göstərmək istəyən emalatxanalar üçün ən effektiv sistemdir.",

      // SECTION 2
      section2Title: "Təmizləmə sistemi harada təsir göstərir?",
      section2Desc:
        "Təmizləmə avadanlığımız birbaşa hissəcik filtrinin nüvəsinə təsir edərək işlənmiş qazların axınına mane olan his, kül və bərk qalıqları aradan qaldırır.",
      section2Span:
        "Dərin təmizləmə DPF-nin ilkin filtrasiya qabiliyyətini bərpa etməsinə və emissiya limitlərinə uyğun olmasına imkan verir.",

      // SECTION 3
      cards: {
        sootTitle: "His və yanma hissəcikləri",
        sootDesc:
          "Dizel mühərrikindən yaranan karbon çöküntülərinin tam təmizlənməsi.",
        oilTitle: "Əlavə və yağ külləri",
        oilDesc:
          "Avtomatik regenerasiya zamanı təmizlənməyən mineral qalıqların çıxarılması.",
        blockTitle: "Daxili tıxanmalar",
        blockDesc:
          "Qaz axınının bərpası və mühərrik performansının artırılması.",
      },

      // SECTION 4 (EN ilə eyni məna)
      section4Title: "Niyə bizim filtr təmizləmə sistemimizi seçməlisiniz?",
      section4Desc:
        "CARBONFIX DPF təmizləmə maşınları təzyiqli su və hava ilə birlikdə xüsusi çöküntü təmizləyici maddələrin istifadə olunduğu nəzarətli inyeksiya prosesi ilə işləyir.",
      section4Process:
        "Sistem filtrin bütün daxilində təsir göstərərək daxili keramika divarlarına yapışmış hissəcikləri parçalayır və tamamilə təmizləyir.",
    },
  },

  tr: {
    translation: {
      // HEADER
      home: "Ana Sayfa",
      about: "Hakkımızda",
      contact: "İletişim",

      // SECTION 1
      subtitle:
        "PARTİKÜL FİLTRELERİNİN REJENERASYONU VE BAKIMI İÇİN PROFESYONEL ÇÖZÜM",
      titlePart1: "DPF Filtre ",
      titleHighlight: "Temizleme",
      titlePart2: "Makineleri",
      description:
        "Otomatik DPF temizleme makinelerimiz, filtreyi kesmeden veya kaynak yapmadan kurum, yağ, seryum ve AdBlue kalıntılarını %100 temizler.",
      descriptionSecondLine:
        "Profesyonel ve kârlı hizmet sunmak isteyen atölyeler için en etkili sistemdir.",

      // SECTION 2
      section2Title: "Temizleme sistemi nerede etki eder?",
      section2Desc:
        "Temizleme ekipmanımız, egzoz gazı akışını engelleyen kurum, kül ve katı kalıntıları gidererek partikül filtresinin çekirdeğine doğrudan etki eder.",
      section2Span:
        "Derin temizlik, DPF’nin orijinal filtreleme kapasitesini geri kazandırır ve emisyon sınırlarına uyum sağlar.",

      // SECTION 3
      cards: {
        sootTitle: "Kurum ve yanma parçacıkları",
        sootDesc:
          "Dizel tarafından oluşan karbon birikintilerinin tamamen temizlenmesi.",
        oilTitle: "Katkı ve yağ külü",
        oilDesc:
          "Otomatik rejenerasyon sırasında temizlenmeyen mineral kalıntıların giderilmesi.",
        blockTitle: "İç tıkanıklıklar",
        blockDesc:
          "Gaz akışının geri kazanılması ve motor performansının artırılması.",
      },

      // SECTION 4
      section4Title: "Neden filtre temizleme sistemimizi seçmelisiniz?",
      section4Desc:
        "CARBONFIX DPF temizleme makineleri, basınçlı su ve hava ile birlikte özel tortu çözücü kimyasalların kullanıldığı kontrollü bir enjeksiyon süreciyle çalışır.",
      section4Process:
        "Sistem filtrenin tamamında etkili olarak iç seramik yüzeylere yapışmış parçacıkları parçalar ve temizler.",
    },
  },

  ru: {
    translation: {
      // HEADER
      home: "Главная",
      about: "О нас",
      contact: "Контакты",

      // SECTION 1
      subtitle:
        "ПРОФЕССИОНАЛЬНОЕ РЕШЕНИЕ ДЛЯ РЕГЕНЕРАЦИИ И ОБСЛУЖИВАНИЯ САЖЕВЫХ ФИЛЬТРОВ",
      titlePart1: "Машины для очистки ",
      titleHighlight: "DPF-фильтров",
      titlePart2: "",
      description:
        "Наши автоматические машины для очистки DPF удаляют 100% сажи, масла, церия и остатков AdBlue без необходимости разрезать или сваривать фильтр.",
      descriptionSecondLine:
        "Это самая эффективная система для сервисов, которые хотят предоставлять профессиональные и прибыльные услуги.",

      // SECTION 2
      section2Title: "Где действует система очистки?",
      section2Desc:
        "Наше оборудование воздействует непосредственно на сердцевину сажевого фильтра, удаляя сажу, золу и твердые частицы, блокирующие поток выхлопных газов.",
      section2Span:
        "Глубокая очистка позволяет DPF восстановить исходную фильтрующую способность и соответствовать экологическим нормам.",

      // SECTION 3
      cards: {
        sootTitle: "Сажа и продукты сгорания",
        sootDesc:
          "Полное удаление углеродных отложений, образующихся при работе дизельного двигателя.",
        oilTitle: "Присадки и масляная зола",
        oilDesc:
          "Удаление минеральных остатков, не устраняемых во время автоматической регенерации.",
        blockTitle: "Внутренние засоры",
        blockDesc:
          "Восстановление потока газов и улучшение работы двигателя.",
      },

      // SECTION 4
      section4Title: "Почему стоит выбрать нашу систему очистки фильтров?",
      section4Desc:
        "Машины CARBONFIX для очистки DPF используют контролируемый процесс впрыска под давлением воды и воздуха в сочетании со специальными очистительными средствами.",
      section4Process:
        "Система воздействует на весь фильтр, разрушая и удаляя частицы, прилипшие к внутренним керамическим стенкам.",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "az",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
