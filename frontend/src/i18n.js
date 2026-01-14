import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  az: {
    translation: {
      // ──────────────────────────────────────────────
      // HEADER
      home: "Ana səhifə",
      about: "Haqqımızda",
      contact: "Əlaqə",

      // SECTION 1
      subtitle: "Təhlükəsiz • Sürətli • Effektiv",
      titlePart1: "Matorunuzu Sökmədən",
      titleHighlight: "Daxildən",
      titlePart2: "Təmizləyirik",
      description:
        "Yanma kamerasında yığılan karbon çöküntülərini xüsusi avadanlıqla təmizləyərək matorun gücünü, yanacaq qənaətini və ömrünü artırırıq.",

      // SECTION 2
      section2Title: "Təmizləmə sistemi harada təsir göstərir?",
      section2Desc:
        "Təmizləmə avadanlığımız birbaşa hissəcik filtrinin nüvəsinə təsir edərək işlənmiş qazların axınına mane olan his, kül və bərk qalıqları aradan qaldırır.",
      section2Span:
        "Dərin təmizləmə DPF-nin ilkin filtrasiya qabiliyyətini bərpa etməsinə və emissiya limitlərinə uyğun olmasına imkan verir.",

      // SECTION 3 – Cards
      cards: {
        sootTitle: "His və yanma hissəcikləri",
        sootDesc: "Dizel mühərrikindən yaranan karbon çöküntülərinin tam təmizlənməsi.",
        oilTitle: "Əlavə və yağ külləri",
        oilDesc: "Avtomatik regenerasiya zamanı təmizlənməyən mineral qalıqların çıxarılması.",
        blockTitle: "Daxili tıxanmalar",
        blockDesc: "Qaz axınının bərpası və mühərrik performansının artırılması.",
      },

      // SECTION 4
      section4Title: "Niyə bizim filtr təmizləmə sistemimizi seçməlisiniz?",
      section4Desc:
        "CARBONFIX DPF təmizləmə maşını təzyiqli su və hava ilə birlikdə xüsusi çöküntü təmizləyici maddələrin istifadə olunduğu nəzarətli inyeksiya prosesi ilə işləyir.",
      section4Process:
        "Sistem filtrin bütün daxilində təsir göstərərək daxili keramika divarlarına yapışmış hissəcikləri parçalayır və tamamilə təmizləyir.",

      // SECTION 5 – Advantages cards
      section5: {
        cards: {
          c1: "Filtrə zərər vermir və strukturunu dəyişdirmir.",
          c2: "Yığılmış qalıqların 98%-ə qədərini təmizləyir.",
          c3: "Egzoz sistemindəki əks təzyiqi azaldır.",
          c4: "DPF-ni avtomobilə yenidən quraşdırılmaq üçün hazır vəziyyətdə saxlayır.",
        },
      },

      // FAQ
      faq: {
        mainQuestion: "Niyə bizim Cyber Enerji Texnologiyasını seçməlisiniz?",

        q1: "Karbon yığılması nəqliyyat vasitələrində hansı problemlərə səbəb olur?",
        a1: "• Silindr sıxılmasının azalması\n• Mühərrik gücünün azalması\n• Həddindən artıq yanacaq sərfiyyatı\n• Boş vəziyyətdə problem\n• Azalmış sürətlənmə\n• Soyuq havada işə salmaqda çətinlik\n• Mühərrik sarsıntılı hərəkətlə işə düşür",

        q2: "Hansı avtomobillərə Cyber Enerji sistemi tətbiq olunmalıdır?",
        a2: "Tətbiq 30.000 km yol qət etmiş nəqliyyat vasitələrində başlayır.",

        q3: "Maşınlarda normalda necə km-dən sonra təkrarlanmalıdır bu proses?",
        a3: "• Benzinlə işləyən nəqliyyat vasitələri üçün — hər 10.000 km-dən bir\n• Dizellə işləyən nəqliyyat vasitələri üçün — hər 15.000 km-dən bir",

        q4: "Faydaları nədir?",
        a4: "• Yanacaq sərfiyyatı azalır\n• Çəkmə (dartma) artır\n• Tütsü və titrəmə azalır\n• Mühərrikin işi sakitləşir",

        q5: "Hansı detallar təmizlənir?",
        a5: "Porşenlər, şamlar, sveçalar, turbo, zaslonka, forsunkalar, kolsalar, klapanlar, katalizator, EGR klapanı, saja filteri, yanma kamerası",

        q6: "Hansı növ nəqliyyat vasitələrinə aiddir bu sistem?",
        a6: "100–15.000 kub santimetr həcmində olan bütün nəqliyyat vasitələrini yuya bilirik.",

        q7: "Proses nə qədər vaxt aparır?",
        a7: "Orta hesabla 40 dəqiqə – 1 saat davam edir.",

        q8: "Matorun daxili karbon təmizlənməsi nədir?",
        a8: "Bu proses matorun yanma kamerasında, klapanlarda və EGR sistemində yığılan karbon çöküntülərinin mator sökülmədən xüsusi avadanlıqla təmizlənməsidir."
      },

      // SECTION 7
      section7: {
        subtitle: "BÜTÜN MÜHƏRRİK NÖVLƏRİ ÜÇÜN DEKARBONİZASİYA",
        title: "Mühərrik Təmizləməsi Üçün Ən Sərfəli Həll!",
        textPart1:
          "Maşınlarımızdan istifadə etmək çox rahatdır və bütün növ mühərriklərə uyğundur – avtomobillər, mikroavtobuslar, kənd təsərrüfatı texnikası, qayıqlar, yük maşınları, avtobuslar, generatorlar, suvarma nasosları və s.",
        textPart2:
          "Onlar istənilən fosil yanacaq növündən asılı olmayaraq istənilən mühərrikdə istifadə oluna bilər: dizel, benzin, LPG, biodizel və s.",
        applicableTo: "TƏTBİQ OLUNUR",
        allTypesOfFuels: "Bütün Yanacaq Növləri",
        fuelsList: "Dizel, benzin, LPG, metan...",
        allTypesOfVehicles: "Bütün Nəqliyyat Növləri",
        vehiclesAlt: "Nəqliyyat vasitələri"
      },

      // ──────────────────────────────────────────────
      // FOOTER (added)
      footer: {
        logoAlt: "CARBONFIX loqosu",
        description: "Bütün nəqliyyat vasitələri üçün peşəkar dizel hissəcik filtri regenerasiyası və təmizləmə xidmətləri.",
        contactTitle: "Əlaqə",
        phoneLabel: "Telefon",
        phoneNumber: "+994 50 123 45 67",
        emailLabel: "Email",
        email: "info@dpfcenter.az",
        addressLabel: "Ünvan",
        address: "Bakı, Azərbaycan",
        followUsTitle: "Bizi izləyin",
        followUsText: "Sosial mediada bizə qoşulun",
        facebookAria: "Facebook səhifəmiz",
        instagramAria: "Instagram hesabımız",
        tiktokAria: "TikTok hesabımız",
        copyrightCompany: "CARBONFIX",
        copyrightText: "Bütün hüquqlar qorunur."
      }
    }
  },

  en: {
    translation: {
      // ──────────────────────────────────────────────
      // HEADER
      home: "Home",
      about: "About Us",
      contact: "Contact",

      // SECTION 1
      subtitle: "Safe • Fast • Effective",
      titlePart1: "Engine Cleaning",
      titleHighlight: "Internally",
      titlePart2: "Without Disassembly",
      description:
        "By removing carbon deposits accumulated in the combustion chamber with special equipment, we increase engine power, fuel efficiency, and engine lifespan.",

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

      // SECTION 4
      section4Title: "Why choose our filter cleaning system?",
      section4Desc:
        "CARBONFIX DPF cleaning machine use a controlled injection process of pressurized water and air combined with specific descaling products.",
      section4Process:
        "The system acts throughout the filter, breaking and removing particles attached to the inner ceramic walls.",

      // SECTION 5
      section5: {
        cards: {
          c1: "It does not damage the filter or alter its structure.",
          c2: "It removes up to 98% of accumulated residues.",
          c3: "It reduces backpressure in the exhaust system.",
          c4: "It leaves the DPF ready for reinstallation in the vehicle.",
        },
      },

      // FAQ
      faq: {
        mainQuestion: "Why should you choose our Cyber Energy Technology?",

        q1: "What problems does carbon buildup cause in vehicles?",
        a1: "• Reduced cylinder compression\n• Decreased engine power\n• Excessive fuel consumption\n• Issues at idle\n• Reduced acceleration\n• Difficulty starting in cold weather\n• Engine starts with shaking/vibration",

        q2: "Which vehicles should use the Cyber Energy system?",
        a2: "Application starts on vehicles that have covered 30,000 km.",

        q3: "How often should the process be repeated under normal conditions?",
        a3: "• For gasoline vehicles — every 10,000 km\n• For diesel vehicles — every 15,000 km",

        q4: "What are the benefits?",
        a4: "• Reduced fuel consumption\n• Increased torque/pulling power\n• Reduced smoke and vibration\n• Smoother and quieter engine operation",

        q5: "Which parts are cleaned?",
        a5: "Pistons, spark plugs, glow plugs, turbo, throttle valve, injectors, coils, valves, catalytic converter, EGR valve, DPF/soot filter, combustion chamber",

        q6: "Which types of vehicles is this system suitable for?",
        a6: "We can clean all vehicles with engine displacement from 100 to 15,000 cc.",

        q7: "How long does the process take?",
        a7: "On average 40 minutes – 1 hour.",

        q8: "What is internal engine carbon cleaning?",
        a8: "It is the process of removing carbon deposits accumulated in the combustion chamber, valves and EGR system using special equipment without disassembling the engine."
      },

      // SECTION 7
      section7: {
        subtitle: "DECARBONIZATION FOR ALL TYPES OF ENGINES",
        title: "The Most Cost-Effective Solution for Engine Cleaning!",
        textPart1:
          "Using our machines is highly convenient and suitable for all types of engines, whether cars, vans, agricultural machinery, boats, trucks, buses, generators, irrigation pumps, etc.",
        textPart2:
          "They can be used on any engine regardless of the fossil fuel type: diesel, gasoline, LPG, biodiesel, etc.",
        applicableTo: "APPLICABLE TO",
        allTypesOfFuels: "All Types of Fuels",
        fuelsList: "Diesel, gasoline, LPG, methane...",
        allTypesOfVehicles: "All Types of Vehicles",
        vehiclesAlt: "Vehicles"
      },

      // ──────────────────────────────────────────────
      // FOOTER (added)
      footer: {
        logoAlt: "CARBONFIX logo",
        description: "Professional diesel particulate filter regeneration and maintenance services for all vehicle types.",
        contactTitle: "Contact",
        phoneLabel: "Phone",
        phoneNumber: "+994 50 123 45 67",
        emailLabel: "Email",
        email: "info@dpfcenter.az",
        addressLabel: "Address",
        address: "Baku, Azerbaijan",
        followUsTitle: "Follow us",
        followUsText: "Stay connected with us on social media",
        facebookAria: "Our Facebook page",
        instagramAria: "Our Instagram account",
        tiktokAria: "Our TikTok account",
        copyrightCompany: "CARBONFIX",
        copyrightText: "All rights reserved."
      }
    }
  },

  tr: {
    translation: {
      // ──────────────────────────────────────────────
      // HEADER
      home: "Ana Sayfa",
      about: "Hakkımızda",
      contact: "İletişim",

      // SECTION 1
      subtitle: "Güvenli • Hızlı • Etkili",
      titlePart1: "Motorunuzu Sökmeden",
      titleHighlight: "İçeriden",
      titlePart2: "Temizliyoruz",
      description:
        "Yanma odasında biriken karbon birikintilerini özel ekipmanla temizleyerek motor gücünü, yakıt tasarrufunu ve motor ömrünü artırıyoruz.",

      // SECTION 2
      section2Title: "Temizleme sistemi nerede etki eder?",
      section2Desc:
        "Temizleme ekipmanımız, egzoz gazı akışını engelleyen kurum, kül ve katı kalıntıları gidererek partikül filtresinin çekirdeğine doğrudan etki eder.",
      section2Span:
        "Derin temizlik, DPF'nin orijinal filtreleme kapasitesini geri kazandırır ve emisyon sınırlarına uyum sağlar.",

      // SECTION 3
      cards: {
        sootTitle: "Kurum ve yanma parçacıkları",
        sootDesc: "Dizel tarafından oluşan karbon birikintilerinin tamamen temizlenmesi.",
        oilTitle: "Katkı ve yağ külü",
        oilDesc: "Otomatik rejenerasyon sırasında temizlenmeyen mineral kalıntıların giderilmesi.",
        blockTitle: "İç tıkanıklıklar",
        blockDesc: "Gaz akışının geri kazanılması ve motor performansının artırılması.",
      },

      // SECTION 4
      section4Title: "Neden filtre temizleme sistemimizi seçmelisiniz?",
      section4Desc:
        "CARBONFIX DPF temizleme makinesi, basınçlı su ve hava ile birlikte özel tortu çözücü kimyasalların kullanıldığı kontrollü bir enjeksiyon süreciyle çalışır.",
      section4Process:
        "Sistem filtrenin tamamında etkili olarak iç seramik yüzeylere yapışmış parçacıkları parçalar ve temizler.",

      // SECTION 5
      section5: {
        cards: {
          c1: "Filtreye zarar vermez ve yapısını değiştirmez.",
          c2: "Birikmiş kalıntıların %98'ine kadarını temizler.",
          c3: "Egzoz sistemindeki geri basıncı azaltır.",
          c4: "DPF'yi araca yeniden takılmaya hazır hale getirir.",
        },
      },

      // FAQ
      faq: {
        mainQuestion: "Neden Cyber Enerji Teknolojimizi tercih etmelisiniz?",

        q1: "Karbon birikintisi araçlarda hangi sorunlara yol açar?",
        a1: "• Silindir sıkıştırmasının azalması\n• Motor gücünün düşmesi\n• Aşırı yakıt tüketimi\n• Rölantide sorun\n• Azalmış hızlanma\n• Soğuk havalarda çalıştırmada zorluk\n• Motor sarsıntılı şekilde çalışmaya başlar",

        q2: "Hangi araçlara Cyber Enerji sistemi uygulanmalıdır?",
        a2: "Uygulama 30.000 km yol yapmış araçlarda başlar.",

        q3: "Normal şartlarda bu işlem kaç km’de bir tekrarlanmalıdır?",
        a3: "• Benzinli araçlar için — her 10.000 km’de bir\n• Dizel araçlar için — her 15.000 km’de bir",

        q4: "Faydaları nelerdir?",
        a4: "• Yakıt tüketimi azalır\n• Çekiş gücü artar\n• Duman ve titreşim azalır\n• Motor çalışması sakinleşir",

        q5: "Hangi parçalar temizlenir?",
        a5: "Pistonlar, bujiler, kızdırma bujileri, turbo, gaz kelebeği, enjektörler, bobinler, valfler, katalitik konvertör, EGR valfi, DPF/ is filtresi, yanma odası",

        q6: "Bu sistem hangi tip araçlara uygundur?",
        a6: "100–15.000 cc motor hacmine sahip tüm taşıtları temizleyebiliriz.",

        q7: "İşlem ne kadar sürer?",
        a7: "Ortalama 40 dakika – 1 saat sürer.",

        q8: "Motor içi karbon temizliği nedir?",
        a8: "Motor sökülmeden özel ekipmanla yanma odası, valfler ve EGR sisteminde biriken karbon tortularının temizlenmesi işlemidir."
      },

      // SECTION 7
      section7: {
        subtitle: "TÜM MOTOR TÜRLERİ İÇİN DEKARBONİZASYON",
        title: "Motor Temizliği İçin En Ekonomik Çözüm!",
        textPart1:
          "Makinelerimizi kullanmak son derece pratiktir ve arabalar, kamyonetler, tarım makineleri, tekneler, kamyonlar, otobüsler, jeneratörler, sulama pompaları vb. dahil her tür motora uygundur.",
        textPart2:
          "Dizel, benzin, LPG, biyodizel vb. herhangi bir fosil yakıt türüne bakılmaksızın her motor üzerinde kullanılabilir.",
        applicableTo: "UYGULANABİLİR",
        allTypesOfFuels: "Tüm Yakıt Türleri",
        fuelsList: "Dizel, benzin, LPG, metan...",
        allTypesOfVehicles: "Tüm Araç Türleri",
        vehiclesAlt: "Araçlar"
      },

      // ──────────────────────────────────────────────
      // FOOTER (added)
      footer: {
        logoAlt: "CARBONFIX logosu",
        description: "Tüm araç tipleri için profesyonel dizel partikül filtre rejenerasyon ve bakım hizmetleri.",
        contactTitle: "İletişim",
        phoneLabel: "Telefon",
        phoneNumber: "+994 50 123 45 67",
        emailLabel: "E-posta",
        email: "info@dpfcenter.az",
        addressLabel: "Adres",
        address: "Bakü, Azerbaycan",
        followUsTitle: "Bizi takip edin",
        followUsText: "Sosyal medyada bize katılın",
        facebookAria: "Facebook sayfamız",
        instagramAria: "Instagram hesabımız",
        tiktokAria: "TikTok hesabımız",
        copyrightCompany: "CARBONFIX",
        copyrightText: "Tüm hakları saklıdır."
      }
    }
  },

  ru: {
    translation: {
      // ──────────────────────────────────────────────
      // HEADER
      home: "Главная",
      about: "О нас",
      contact: "Контакты",

      // SECTION 1
      subtitle: "Безопасно • Быстро • Эффективно",
      titlePart1: "Чистка двигателя",
      titleHighlight: "Изнутри",
      titlePart2: "Без разборки",
      description:
        "Удаляя углеродные отложения, накопившиеся в камере сгорания, с помощью специального оборудования, мы повышаем мощность двигателя, экономию топлива и срок службы мотора.",

      // SECTION 2
      section2Title: "Где действует система очистки?",
      section2Desc:
        "Наше оборудование воздействует непосредственно на сердцевину сажевого фильтра, удаляя сажу, золу и твердые частицы, блокирующие поток выхлопных газов.",
      section2Span:
        "Глубокая очистка позволяет DPF восстановить исходную фильтрующую способность и соответствовать экологическим нормам.",

      // SECTION 3
      cards: {
        sootTitle: "Сажа и продукты сгорания",
        sootDesc: "Полное удаление углеродных отложений, образующихся при работе дизельного двигателя.",
        oilTitle: "Присадки и масляная зола",
        oilDesc: "Удаление минеральных остатков, не устраняемых во время автоматической регенерации.",
        blockTitle: "Внутренние засоры",
        blockDesc: "Восстановление потока газов и улучшение работы двигателя.",
      },

      // SECTION 4
      section4Title: "Почему стоит выбрать нашу систему очистки фильтров?",
      section4Desc:
        "Машина CARBONFIX для очистки DPF используют контролируемый процесс впрыска под давлением воды и воздуха в сочетании со специальными очистительными средствами.",
      section4Process:
        "Система воздействует на весь фильтр, разрушая и удаляя частицы, прилипшие к внутренним керамическим стенкам.",

      // SECTION 5
      section5: {
        cards: {
          c1: "Не повреждает фильтр и не изменяет его структуру.",
          c2: "Удаляет до 98% накопленных отложений.",
          c3: "Снижает противодавление в выхлопной системе.",
          c4: "Оставляет DPF готовым к повторной установке в автомобиль.",
        },
      },

      // FAQ
      faq: {
        mainQuestion: "Почему стоит выбрать нашу технологию Cyber Energy?",

        q1: "К каким проблемам приводит накопление углерода в транспортных средствах?",
        a1: "• Снижение компрессии в цилиндрах\n• Падение мощности двигателя\n• Повышенный расход топлива\n• Проблемы на холостом ходу\n• Ухудшение разгона\n• Трудности с запуском в холодную погоду\n• Двигатель запускается с тряской",

        q2: "На какие автомобили следует применять систему Cyber Enerji?",
        a2: "Применение начинается на транспортных средствах, прошедших 30 000 км.",

        q3: "Через сколько км в норме нужно повторять процедуру?",
        a3: "• Для бензиновых автомобилей — каждые 10 000 км\n• Для дизельных автомобилей — каждые 15 000 км",

        q4: "Какие преимущества дает процедура?",
        a4: "• Снижение расхода топлива\n• Увеличение тяги\n• Уменьшение дыма и вибрации\n• Двигатель работает тише и ровнее",

        q5: "Какие детали очищаются?",
        a5: "Поршни, свечи зажигания, свечи накаливания, турбина, дроссельная заслонка, форсунки, катушки, клапаны, катализатор, клапан EGR, сажевый фильтр, камера сгорания",

        q6: "Для каких типов транспортных средств подходит эта система?",
        a6: "Мы можем очищать все транспортные средства с объемом двигателя от 100 до 15 000 см³.",

        q7: "Сколько времени занимает процесс?",
        a7: "В среднем 40 минут – 1 час.",

        q8: "Что такое внутренняя очистка двигателя от углерода?",
        a8: "Это процесс удаления углеродных отложений в камере сгорания, на клапанах и в системе EGR с помощью специального оборудования без разборки двигателя."
      },

      // SECTION 7
      section7: {
        subtitle: "ДЕКАРБОНИЗАЦИЯ ДЛЯ ВСЕХ ТИПОВ ДВИГАТЕЛЕЙ",
        title: "Самое экономичное решение для очистки двигателей!",
        textPart1:
          "Использование наших машин очень удобно и подходит для всех типов двигателей: легковые автомобили, фургоны, сельскохозяйственная техника, лодки, грузовики, автобусы, генераторы, насосы для орошения и т.д.",
        textPart2:
          "Они могут использоваться на любом двигателе независимо от типа ископаемого топлива: дизель, бензин, LPG, биодизель и т.д.",
        applicableTo: "ПРИМЕНИМО К",
        allTypesOfFuels: "Все типы топлива",
        fuelsList: "Дизель, бензин, LPG, метан...",
        allTypesOfVehicles: "Все типы транспортных средств",
        vehiclesAlt: "Транспортные средства"
      },

      // ──────────────────────────────────────────────
      // FOOTER (added)
      footer: {
        logoAlt: "Логотип CARBONFIX",
        description: "Профессиональные услуги по регенерации и обслуживанию дизельных сажевых фильтров для всех типов транспортных средств.",
        contactTitle: "Контакты",
        phoneLabel: "Телефон",
        phoneNumber: "+994 50 123 45 67",
        emailLabel: "Эл. почта",
        email: "info@dpfcenter.az",
        addressLabel: "Адрес",
        address: "Баку, Азербайджан",
        followUsTitle: "Следите за нами",
        followUsText: "Оставайтесь на связи в социальных сетях",
        facebookAria: "Наша страница в Facebook",
        instagramAria: "Наш аккаунт в Instagram",
        tiktokAria: "Наш аккаунт в TikTok",
        copyrightCompany: "CARBONFIX",
        copyrightText: "Все права защищены."
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "az",                    // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,         // react already escapes values
    },
    // debug: process.env.NODE_ENV === 'development',
  });

export default i18n;