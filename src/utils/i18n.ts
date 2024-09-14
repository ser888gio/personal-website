import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

const resources = {
  en: {
    translation: {
      city: "Prague",
      programmer: "Programmer",
      navExperience: "Experience",
      navTechStack: "Tech Stack",
      navContact: "Contact Me",
      workExperience: "Work Experience",
      education: "Education",
      techDaily: "Daily Technologies",
      techExp: "Used Technologies",
      titleFE: "Frontend Developer",
      about: "About me",
      contact: "Contact Me",
      yourEmail: "Your Email",
      subject: "Subject",
      message: "Message",
      bulletPoint1Education:
        "Proficient in C# programming, with experience in projects such as a Student Management System and a Gym Management System.",
      bulletPoint2Education:
        "Familiarity with relational database systems and SQL.",
      bulletPoint3Education:
        "Expertise in developing user-friendly graphical interfaces, including UI/UX design and proficiency in Figma.",
      bulletPoint4Education:
        "Gained knowledge in Computer Science, Operating Systems, and Network Architecture.",
      bulletPoint5Education:
        "Understanding of Markup Languages, including HTML, XML, and JSON.",
      bulletPoint6Education:
        "Acquired knowledge in Mathematics, focusing on Graph Theory, Calculus, Game Theory, and Statistics.",
      descFE:
        "As a frontend developer, I specialize in creating user-friendly and interactive web interfaces according to the design of Figma. Currently, I am working on several interesting projects. One of them is the election calculator for Czech Digital, which helps citizens better navigate upcoming elections. Another project, Unreleased.art, is a platform for musicians where they can build communities and share exclusive content with their fans. In my work, I use the latest technologies such as React, TypeScript, Tailwind, and Next.js.",
      titleGenerali: "IT Analyst AI/ML",
      firmGenerali: "Generali Czech Insurance Company",
      descGenerali:
        "As an IT analyst specializing in artificial intelligence and machine learning, I have successfully implemented a number of projects in the past. My work consisted of translating complex business requirements into understandable technical specifications. I collected and analyzed data from various sources to clearly define the objectives of each project. I then translated these requirements into concrete technical specifications that served as the basis for development. I was experienced in evaluating existing systems and processes and identifying areas where we could use AI/ML to optimize and improve performance. I worked closely with developers, data science teams, and other stakeholders to ensure projects ran smoothly and achieved their goals. My biggest reward was seeing how my work translated into innovative solutions that delivered real value to the organization. I was thrilled to be a part of this change.",
      titleGP: "Data Analyst (Support)",
      descGP:
        "As a data analyst support, I specialized in ensuring data quality and consistency. I worked with tools such as Excel and ETL, performed validation, cleaning, and standardization of data. I worked closely with data analysts and ensured the necessary documentation. I believe in the importance of high-quality data for successful analyses.",
      cardText:
        "Welcome to my personal page. I'm a passionate web developer \
            specializing in TypeScript and React. My goal is to consistently \
            deliver high-quality projects that exceed client expectations. \
            I'm always eager to collaborate with talented individuals and \
            teams. Explore My Portfolio to see my work or Contact Me to discuss \
            potential projects.",
      schoolName: "Czech University of Life Sciences Prague",
      schoolTitle: "Bachelor of Computer Science",
      footerText:
        "Thank you for visiting. This website was created as portfolio by Sergiu Nica. Have a great day!",
    },
  },
  cz: {
    translation: {
      city: "Praha",
      programmer: "Programátor",
      navExperience: "Zkušenosti",
      navTechStack: "Technologie",
      navContact: "Kontaktujte mě",
      workExperience: "Pracovní zkušenosti",
      education: "Vzdělání",
      techDaily: "Každodenní technologie",
      techExp: "Použité technologie",
      titleFE: "Frontend Developer",
      about: "O mně",
      contact: "Kontaktujte mě",
      yourEmail: "Vaše emailová adresa",
      subject: "Předmět",
      message: "Zpráva",
      bulletPoint1Education:
        "Programovaní v C# – projekty: Student Management System, Gym Management System",
      bulletPoint2Education:
        "Znalosti a dovednosti ve využívání relačních databázových systémů a SQL",
      bulletPoint3Education:
        "Tvorba přívětivého grafického rozhrání, UI/UX design, ovládání programů Figma",
      bulletPoint4Education:
        "Získaní znalosti v oblastí Architektura počítačů, OS a sítí",
      bulletPoint5Education:
        "Znalostí v oblasti Značkovacích jazyků – HTML, XML, JSON",
      bulletPoint6Education:
        "Znalostí v oblasti Matematiky – Grafová teorie, Matematická analýza, Teorie her, Statistika",
      descFE:
        "Jako frontend vývojář se zaměřuji na tvorbu uživatelsky přívětivých a interaktivních webových rozhraní podle návrhu Figmy. V současnosti pracuji na několika zajímavých projektech. Jedním z nich je volební kalkulačka pro Česko Digital, která pomáhá občanům lépe se zorientovat v nadcházejících volbách. Druhý projekt, Unreleased.art, je platforma pro hudební umělce, kde mohou budovat komunity a sdílet exkluzivní obsah se svými fanoušky. V práci využívám nejmodernější technologie jako React, TypeScript, Tailwind a Next.js.",
      titleGenerali: "IT Analytik AI/ML",
      firmGenerali: "Generali Česká pojišťovna",
      descGenerali:
        "Jako IT analytik v oblasti umělé inteligence jsem v minulosti úspěšně realizoval řadu projektů. Moje práce spočívala v překládání komplexních obchodních požadavků do srozumitelných technických specifikací. Shromažďoval jsem a analyzoval data z různých zdrojů, abych jasně definoval cíle každého projektu. Poté jsem tyto požadavky přetvářel do konkrétních technických specifikací, které sloužily jako základ pro vývoj. Měl jsem zkušenosti s hodnocením stávajících systémů a procesů a s identifikací oblastí, kde jsme mohli využít AI/ML k optimalizaci a zlepšení výkonu. Úzce jsem spolupracoval s vývojáři, data science týmy a dalšími stakeholdery, abych zajistil hladký průběh projektů a dosažení stanovených cílů. Moje největší odměnou bylo vidět, jak se moje práce promítla do inovativních řešení, která přinesla skutečnou hodnotu pro organizaci. Byl jsem nadšený, že jsem mohl být součástí této změny.",
      titleGP: "Data Analytik (Support)",
      descGP:
        "Jako podpora datových analytiků jsem se specializoval na zajištění kvality a konzistence dat. Pracoval jsem s nástroji jako Excel a ETL, prováděl jsem validaci, čištění a standardizaci dat. Úzce jsem spolupracoval s datovými analytiky a zajišťoval potřebnou dokumentaci. Věřím v důležitost kvalitních dat pro úspěšné analýzy.",
      cardText:
        "Vítejte na mé osobní stránce. Jsem vášnivý webový vývojář specializující se na TypeScript a React. Mým cílem je neustále dodávat vysoce kvalitní projekty, které překračují očekávání klientů. Jsem vždy připraven spolupracovat s talentovanými jednotlivci a týmy. Prohlédněte si mé portfolio, abyste viděli moji práci, nebo mě kontaktujte, abyste mohli diskutovat o potenciálních projektech.",
      schoolName: "Česká zemědělská univerzita v Praze",
      schoolTitle: "Informatika - Bakalář",
      footerText:
        "Děkuji za návštěvu. Tato webová stránka byla vytvořena jako portfolio Sergiu Nica. Mějte krásný den!",
    },
  },
};

i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  // want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    lng: "cz",
    fallbackLng: "en",
    debug: true,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
