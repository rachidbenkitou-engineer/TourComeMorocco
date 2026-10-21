export type Lang = "EN" | "FR" | "AR";

const t = {
  EN: {
    nav: {
      about: "About", services: "Services", portfolio: "Portfolio",
      team: "Team", blog: "Blog", contact: "Contact",
    },
    hero: {
      title: "Welcome to Noova Technology",
      subtitle: "We are a team of Software Engineers building Web, Mobile and ServiceNow solutions including AI",
      contact: "Contact us",
      lines: [
        "We build your vision from the ground up.",
        "We accompany you at every step of the journey.",
        "We advise with expertise and clarity.",
        "And we always stay by your side.",
      ],
    },
    about: {
      happyClients: "Happy Clients", projects: "Projects",
      experience: "Years of experience", awards: "Awards",
      paragraph: "Noova Technology is a team of high-quality engineers with over 5 years of hands-on experience delivering projects for large companies. That background gives us the technical depth, the best practices, and the professional standards to take your idea from concept to a fully working product — built right, built to last. What sets us apart is our commitment beyond delivery — we stay close, communicate clearly, and support you at every stage, from the first line of code to long after go-live. Your success is our benchmark.",
      servicesInclude: "Our services include:",
      items: [
        "Creating applications tailored to business needs.",
        "Protecting sensitive data and ensuring smooth operations.",
        "Integrating and managing cloud solutions for flexibility and scalability.",
        "Providing strategic advice to optimize tech infrastructure and boost efficiency.",
        "Integrating AI to automate tasks and enhance your products.",
      ],
    },
    cta: {
      title: "Start Your Project",
      description: "Have a project in mind or need expert advice on your next digital solution? Our team is ready to turn your ideas into powerful Web, Mobile, and AI-driven applications tailored to your business goals.",
      button: "Get In Touch",
    },
    services: {
      title: "Our Services",
      tagline: "We don't just deliver — we engineer impact.",
      items: [
        { title: "Web Apps & CRM", text: "We build custom web applications and CRM systems to streamline your workflows and boost business productivity." },
        { title: "Mobile Development", text: "We deliver high-performance iOS and Android apps with seamless user experiences across all devices and platforms." },
        { title: "Website & SEO", text: "We design responsive websites with on-page SEO optimization to grow your online visibility and attract more clients." },
        { title: "ServiceNow Apps", text: "We develop and configure ServiceNow applications to automate IT workflows and improve your service delivery efficiency." },
        { title: "Artificial Intelligence", text: "We integrate AI-powered features into your products to automate tasks, extract insights and enhance user interactions." },
        { title: "Cloud & API Integration", text: "We build scalable APIs and cloud integrations to connect your systems, automate data flows and enable flexible modern architectures." },
      ],
    },
    blog: {
      title: "Blog",
      subtitle: "Insights, tutorials and updates from the Noova Technology team — covering Web, Mobile, AI and the latest in software engineering.",
    },
    portfolio: {
      title: "Portfolio",
      description: "Noova Technology Team specializes in developing and deploying web and mobile applications, including artificial intelligence. Our goal is to transform your ideas into real-world projects with the highest quality.",
      viewProject: "View Project →",
      comingSoon: "Coming Soon",
      categories: { travel: "Travel & Tourism", techIT: "Tech & IT Services" },
    },
    cta2: {
      title: "Ready to Meet the Team?",
      description: "Let's talk about your project and find the right people to bring your idea to life.",
    },
    team: {
      members: [
        { role: "Software & GenAI Engineer", text: "Specializing in building web and mobile applications with AI integration, SEO-optimized websites, and ServiceNow apps." },
        { role: "Software & AI Engineer", text: "Specializing in developing web and mobile applications with AI integration and high-performance SEO-optimized websites." },
        { role: "Frontend Developer", text: "Specializing in building modern, responsive frontend applications with clean UI/UX and seamless user experiences across web platforms." },
      ],
    },
    footer: {
      quickLinks: "Quick Links", ourServices: "Our Services", startProject: "Start a Project",
      home: "Home", aboutUs: "About us",
      ctaText: "Have an idea? Let's build it together. Reach out and we'll get back to you quickly.",
      contactUs: "Contact Us",
      rights: "All Rights Reserved",
      services: ["Web Apps & CRM", "Mobile Development", "Website & SEO", "ServiceNow Apps", "Artificial Intelligence", "Cloud & API Integration"],
    },
    modal: {
      title: "Let's discuss your project",
      subtitle: "Fill out this form and we'll reach out to you via WhatsApp.",
      nomLabel: "Full name", nomPlaceholder: "Your full name",
      descLabel: "Project description", descPlaceholder: "Describe your project, your needs, your objectives...",
      nomRequired: "Full name is required.",
      descRequired: "Please describe your project.",
      descShort: "Description too short (min. 10 characters).",
      send: "Send via WhatsApp", cancel: "Cancel",
    },
  },

  FR: {
    nav: {
      about: "À Propos", services: "Services", portfolio: "Portfolio",
      team: "Équipe", blog: "Blog", contact: "Contact",
    },
    hero: {
      title: "Bienvenue chez Noova Technology",
      subtitle: "Nous sommes une équipe d'ingénieurs logiciels spécialisés en Web, Mobile et ServiceNow avec l'IA",
      contact: "Nous contacter",
      lines: [
        "Nous construisons votre vision de A à Z.",
        "Nous vous accompagnons à chaque étape.",
        "Nous conseillons avec expertise et clarté.",
        "Et nous restons toujours à vos côtés.",
      ],
    },
    about: {
      happyClients: "Clients satisfaits", projects: "Projets",
      experience: "Ans d'expérience", awards: "Récompenses",
      paragraph: "Noova Technology est une équipe d'ingénieurs de haute qualité avec plus de 5 ans d'expérience sur des projets pour de grandes entreprises. Cela nous donne la profondeur technique, les meilleures pratiques et les standards professionnels pour transformer votre idée en produit fonctionnel — bien construit, fait pour durer. Ce qui nous distingue, c'est notre engagement au-delà de la livraison — nous restons proches, communiquons clairement et vous soutenons à chaque étape.",
      servicesInclude: "Nos services comprennent :",
      items: [
        "Création d'applications adaptées aux besoins métier.",
        "Protection des données sensibles et fluidité des opérations.",
        "Intégration et gestion de solutions cloud flexibles et évolutives.",
        "Conseil stratégique pour optimiser l'infrastructure technique.",
        "Intégration de l'IA pour automatiser et améliorer vos produits.",
      ],
    },
    cta: {
      title: "Démarrez votre projet",
      description: "Vous avez un projet en tête ou besoin de conseils d'experts ? Notre équipe est prête à transformer vos idées en applications Web, Mobile et IA performantes.",
      button: "Prendre contact",
    },
    services: {
      title: "Nos Services",
      tagline: "Nous ne livrons pas seulement — nous créons de l'impact.",
      items: [
        { title: "Apps Web & CRM", text: "Nous développons des applications web personnalisées et des CRM pour optimiser vos processus et booster votre productivité." },
        { title: "Développement Mobile", text: "Nous créons des apps iOS et Android performantes avec des expériences utilisateur fluides sur tous les appareils." },
        { title: "Site Web & SEO", text: "Nous concevons des sites responsives avec une optimisation SEO on-page pour accroître votre visibilité en ligne." },
        { title: "Applications ServiceNow", text: "Nous développons et configurons des applications ServiceNow pour automatiser vos workflows IT." },
        { title: "Intelligence Artificielle", text: "Nous intégrons des fonctionnalités IA dans vos produits pour automatiser les tâches et enrichir les interactions." },
        { title: "Cloud & Intégration API", text: "Nous construisons des APIs et intégrations cloud évolutives pour connecter vos systèmes et automatiser les flux de données." },
      ],
    },
    blog: {
      title: "Blog",
      subtitle: "Conseils, tutoriels et actualités de l'équipe Noova Technology — couvrant le Web, le Mobile, l'IA et les dernières avancées en ingénierie logicielle.",
    },
    portfolio: {
      title: "Portfolio",
      description: "L'équipe Noova Technology se spécialise dans le développement et le déploiement d'applications web et mobiles incluant l'intelligence artificielle. Notre objectif est de transformer vos idées en projets réels avec la plus haute qualité.",
      viewProject: "Voir le projet →",
      comingSoon: "Bientôt disponible",
      categories: { travel: "Voyage & Tourisme", techIT: "Tech & Services IT" },
    },
    cta2: {
      title: "Prêt à rencontrer l'équipe ?",
      description: "Parlons de votre projet et trouvons les bonnes personnes pour donner vie à votre idée.",
    },
    team: {
      members: [
        { role: "Ingénieur Logiciel & IA Générative", text: "Spécialisé dans le développement d'applications web et mobiles avec intégration IA, sites SEO et applications ServiceNow." },
        { role: "Ingénieur Logiciel & IA", text: "Spécialisé dans le développement d'applications web et mobiles avec intégration IA et sites web haute performance." },
        { role: "Développeuse Frontend", text: "Spécialisée dans le développement d'applications frontend modernes et responsives avec une UI/UX soignée." },
      ],
    },
    footer: {
      quickLinks: "Liens rapides", ourServices: "Nos Services", startProject: "Démarrer un projet",
      home: "Accueil", aboutUs: "À propos",
      ctaText: "Une idée ? Construisons-la ensemble. Contactez-nous et nous vous répondrons rapidement.",
      contactUs: "Nous contacter",
      rights: "Tous droits réservés",
      services: ["Apps Web & CRM", "Développement Mobile", "Site Web & SEO", "Applications ServiceNow", "Intelligence Artificielle", "Cloud & Intégration API"],
    },
    modal: {
      title: "Discutons de votre projet",
      subtitle: "Remplissez ce formulaire et nous vous contacterons via WhatsApp.",
      nomLabel: "Nom complet", nomPlaceholder: "Votre nom complet",
      descLabel: "Description du projet", descPlaceholder: "Décrivez votre projet, vos besoins, vos objectifs...",
      nomRequired: "Le nom complet est requis.",
      descRequired: "Veuillez décrire votre projet.",
      descShort: "Description trop courte (min. 10 caractères).",
      send: "Envoyer via WhatsApp", cancel: "Annuler",
    },
  },

  AR: {
    nav: {
      about: "من نحن", services: "خدماتنا", portfolio: "أعمالنا",
      team: "الفريق", blog: "المدونة", contact: "تواصل",
    },
    hero: {
      title: "مرحباً بكم في نووفا تكنولوجي",
      subtitle: "نحن فريق من مهندسي البرمجيات متخصصون في تطوير الويب والجوال وServiceNow بما في ذلك الذكاء الاصطناعي",
      contact: "تواصل معنا",
      lines: [
        "نبني رؤيتك من الصفر.",
        "نرافقك في كل خطوة من رحلتك.",
        "ننصحك بخبرة ووضوح.",
        "ونبقى دائماً بجانبك.",
      ],
    },
    about: {
      happyClients: "عملاء راضون", projects: "مشاريع",
      experience: "سنوات خبرة", awards: "جوائز",
      paragraph: "نووفا تكنولوجي فريق من المهندسين ذوي الجودة العالية بخبرة تزيد عن 5 سنوات في تسليم مشاريع لكبرى الشركات. هذه الخلفية تمنحنا العمق التقني وأفضل الممارسات والمعايير المهنية لتحويل فكرتك إلى منتج متكامل. ما يميزنا هو التزامنا ما بعد التسليم — نبقى قريبين، نتواصل بوضوح، وندعمك في كل مرحلة.",
      servicesInclude: "تشمل خدماتنا:",
      items: [
        "إنشاء تطبيقات مخصصة لاحتياجات الأعمال.",
        "حماية البيانات الحساسة وضمان سلاسة العمليات.",
        "دمج وإدارة حلول الحوسبة السحابية.",
        "تقديم المشورة الاستراتيجية لتحسين البنية التقنية.",
        "دمج الذكاء الاصطناعي لأتمتة المهام وتعزيز منتجاتك.",
      ],
    },
    cta: {
      title: "ابدأ مشروعك",
      description: "لديك مشروع أو تحتاج إلى مشورة خبراء؟ فريقنا جاهز لتحويل أفكارك إلى تطبيقات ويب وجوال وذكاء اصطناعي قوية.",
      button: "تواصل معنا",
    },
    services: {
      title: "خدماتنا",
      tagline: "لا نسلّم فقط — نصنع الأثر.",
      items: [
        { title: "تطبيقات الويب وإدارة العملاء", text: "نبني تطبيقات ويب مخصصة وأنظمة CRM لتبسيط سير العمل وتعزيز الإنتاجية." },
        { title: "تطوير التطبيقات الجوالة", text: "نقدم تطبيقات iOS وAndroid عالية الأداء بتجارب مستخدم سلسة على جميع الأجهزة." },
        { title: "مواقع الويب وتحسين محركات البحث", text: "نصمم مواقع متجاوبة مع تحسين SEO لزيادة ظهورك على الإنترنت." },
        { title: "تطبيقات ServiceNow", text: "نطور ونكوّن تطبيقات ServiceNow لأتمتة سير عمل تقنية المعلومات." },
        { title: "الذكاء الاصطناعي", text: "ندمج ميزات الذكاء الاصطناعي في منتجاتك لأتمتة المهام واستخراج الرؤى." },
        { title: "الحوسبة السحابية وتكامل API", text: "نبني واجهات برمجية وتكاملات سحابية لربط أنظمتك وأتمتة تدفقات البيانات." },
      ],
    },
    blog: {
      title: "المدونة",
      subtitle: "مقالات ودروس وأخبار من فريق نووفا تكنولوجي — تغطي الويب والجوال والذكاء الاصطناعي وأحدث التطورات في هندسة البرمجيات.",
    },
    portfolio: {
      title: "أعمالنا",
      description: "يتخصص فريق نووفا تكنولوجي في تطوير ونشر تطبيقات الويب والجوال بما في ذلك الذكاء الاصطناعي. هدفنا تحويل أفكارك إلى مشاريع حقيقية بأعلى جودة.",
      viewProject: "عرض المشروع ←",
      comingSoon: "قريباً",
      categories: { travel: "السفر والسياحة", techIT: "التكنولوجيا وخدمات تقنية المعلومات" },
    },
    cta2: {
      title: "هل أنت مستعد للتعرف على الفريق؟",
      description: "لنتحدث عن مشروعك ونجد الأشخاص المناسبين لإحياء فكرتك.",
    },
    team: {
      members: [
        { role: "مهندس برمجيات وذكاء اصطناعي توليدي", text: "متخصص في بناء تطبيقات الويب والجوال مع دمج الذكاء الاصطناعي ومواقع SEO وتطبيقات ServiceNow." },
        { role: "مهندس برمجيات وذكاء اصطناعي", text: "متخصص في تطوير تطبيقات الويب والجوال مع دمج الذكاء الاصطناعي ومواقع عالية الأداء." },
        { role: "مطورة واجهة أمامية", text: "متخصصة في بناء تطبيقات واجهة أمامية حديثة ومتجاوبة بتجربة مستخدم متميزة." },
      ],
    },
    footer: {
      quickLinks: "روابط سريعة", ourServices: "خدماتنا", startProject: "ابدأ مشروعاً",
      home: "الرئيسية", aboutUs: "من نحن",
      ctaText: "لديك فكرة؟ لنبنيها معاً. تواصل معنا وسنرد عليك بسرعة.",
      contactUs: "تواصل معنا",
      rights: "جميع الحقوق محفوظة",
      services: ["تطبيقات الويب وإدارة العملاء", "تطوير التطبيقات الجوالة", "مواقع الويب وتحسين محركات البحث", "تطبيقات ServiceNow", "الذكاء الاصطناعي", "الحوسبة السحابية وتكامل API"],
    },
    modal: {
      title: "لنناقش مشروعك",
      subtitle: "املأ هذا النموذج وسنتواصل معك عبر واتساب.",
      nomLabel: "الاسم الكامل", nomPlaceholder: "اسمك الكامل",
      descLabel: "وصف المشروع", descPlaceholder: "صف مشروعك واحتياجاتك وأهدافك...",
      nomRequired: "الاسم الكامل مطلوب.",
      descRequired: "يرجى وصف مشروعك.",
      descShort: "الوصف قصير جداً (10 أحرف على الأقل).",
      send: "إرسال عبر واتساب", cancel: "إلغاء",
    },
  },
};

export default t;
