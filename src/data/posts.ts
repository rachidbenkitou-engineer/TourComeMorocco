export type Lang = "EN" | "FR" | "AR";

export type Block =
  | { type: "p"; text: Record<Lang, string> }
  | { type: "h3"; text: Record<Lang, string> }
  | { type: "blockquote"; text: Record<Lang, string> }
  | { type: "img"; src: string }
  | { type: "ul"; items: Record<Lang, string[]> };

export interface Post {
  slug: string;
  img: string;
  date: string;
  author: string;
  authorRole: Record<Lang, string>;
  authorLinkedin: string;
  authorWebsite: string;
  comments: number;
  category: Record<Lang, string>;
  tags: string[];
  title: Record<Lang, string>;
  excerpt: Record<Lang, string>;
  content: Block[];
}

const POSTS: Post[] = [
  {
    slug: "generative-ai-transforming-software-development",
    img: "/assets/img/blog/blog-1.jpg",
    date: "Oct 15, 2024",
    author: "Rachid Benkitou",
    authorRole: {
      EN: "Software & GenAI Engineer",
      FR: "Ingénieur Logiciel & IA Générative",
      AR: "مهندس برمجيات وذكاء اصطناعي توليدي",
    },
    authorLinkedin: "",
    authorWebsite: "https://www.rachidbenkitou.online/",
    comments: 8,
    category: { EN: "Artificial Intelligence", FR: "Intelligence Artificielle", AR: "الذكاء الاصطناعي" },
    tags: ["AI", "GenAI", "Software", "LLM", "Productivity"],
    title: {
      EN: "How Generative AI is Transforming Software Development in 2025",
      FR: "Comment l'IA Générative Transforme le Développement Logiciel en 2025",
      AR: "كيف يُحوِّل الذكاء الاصطناعي التوليدي تطوير البرمجيات في 2025",
    },
    excerpt: {
      EN: "Generative AI is no longer a distant concept — it's reshaping how software teams design, code, test and deploy applications. At Noova Technology, we integrate GenAI directly into our development workflows to deliver faster, smarter solutions.",
      FR: "L'IA générative n'est plus un concept lointain — elle redéfinit la façon dont les équipes conçoivent, codent, testent et déploient leurs applications. Chez Noova Technology, nous intégrons l'IA générative directement dans nos workflows de développement.",
      AR: "لم يعد الذكاء الاصطناعي التوليدي مفهوماً بعيداً — إنه يُعيد تشكيل طريقة تصميم الفرق للبرمجيات وترميزها واختبارها ونشرها. في نووفا تكنولوجي، ندمج الذكاء الاصطناعي التوليدي مباشرةً في سير عمل التطوير لدينا.",
    },
    content: [
      {
        type: "p",
        text: {
          EN: "The rise of large language models — from GPT-4 to Claude and Gemini — has fundamentally changed what it means to build software in 2025. Developers are no longer typing every line from scratch; they're collaborating with AI assistants that can generate boilerplate, review code, write unit tests and explain complex logic in plain language.",
          FR: "L'essor des grands modèles de langage — de GPT-4 à Claude et Gemini — a fondamentalement changé ce que signifie construire des logiciels en 2025. Les développeurs ne tapent plus chaque ligne depuis zéro ; ils collaborent avec des assistants IA capables de générer du code, de réviser, d'écrire des tests unitaires et d'expliquer la logique complexe.",
          AR: "أحدث ظهور نماذج اللغة الكبيرة — من GPT-4 إلى Claude وGemini — تحولاً جذرياً في مفهوم بناء البرمجيات عام 2025. لم يعد المطورون يكتبون كل سطر من الصفر؛ بل يتعاونون مع مساعدي الذكاء الاصطناعي القادرين على توليد الكود وإجراء المراجعات وكتابة اختبارات الوحدة وشرح المنطق المعقد بلغة بسيطة.",
        },
      },
      {
        type: "p",
        text: {
          EN: "At Noova Technology, we've embedded GenAI tools across our entire development lifecycle. From the initial design phase where we use AI to generate architecture suggestions, to the testing phase where LLMs help us write comprehensive test suites — the result is a measurable increase in velocity without sacrificing code quality.",
          FR: "Chez Noova Technology, nous avons intégré des outils d'IA générative dans tout notre cycle de développement. De la phase de conception initiale — où l'IA génère des suggestions d'architecture — jusqu'à la phase de test — où les LLMs nous aident à écrire des suites de tests complètes — le résultat est une accélération mesurable sans sacrifier la qualité du code.",
          AR: "في نووفا تكنولوجي، دمجنا أدوات الذكاء الاصطناعي التوليدي في دورة التطوير بالكامل. من مرحلة التصميم الأولية — حيث يولّد الذكاء الاصطناعي مقترحات معمارية — إلى مرحلة الاختبار — حيث تساعدنا نماذج اللغة الكبيرة على كتابة مجموعات اختبار شاملة — والنتيجة زيادة ملموسة في السرعة دون التضحية بجودة الكود.",
        },
      },
      {
        type: "blockquote",
        text: {
          EN: "AI doesn't replace engineers — it amplifies them. The best developers of 2025 are those who know how to collaborate with AI as a co-pilot, not compete with it.",
          FR: "L'IA ne remplace pas les ingénieurs — elle les amplifie. Les meilleurs développeurs de 2025 sont ceux qui savent collaborer avec l'IA comme co-pilote, pas la concurrencer.",
          AR: "الذكاء الاصطناعي لا يستبدل المهندسين — بل يُضاعف قدراتهم. أفضل المطورين في 2025 هم من يعرفون كيفية التعاون مع الذكاء الاصطناعي بوصفه مساعداً، لا منافساً.",
        },
      },
      {
        type: "h3",
        text: {
          EN: "Practical Applications of GenAI in Our Projects",
          FR: "Applications Pratiques de l'IA Générative dans Nos Projets",
          AR: "التطبيقات العملية للذكاء الاصطناعي التوليدي في مشاريعنا",
        },
      },
      {
        type: "ul",
        items: {
          EN: [
            "Automated code generation for repetitive patterns and CRUD operations.",
            "AI-assisted code review that catches bugs and suggests improvements before human review.",
            "Natural language to SQL — clients describe what data they need, AI writes the query.",
            "Auto-generated API documentation keeping docs always in sync with code.",
            "Intelligent test generation covering edge cases developers often miss.",
          ],
          FR: [
            "Génération automatique de code pour les patterns répétitifs et les opérations CRUD.",
            "Revue de code assistée par IA qui détecte les bugs avant la revue humaine.",
            "Langage naturel vers SQL — les clients décrivent les données voulues, l'IA écrit la requête.",
            "Documentation API auto-générée, toujours synchronisée avec le code.",
            "Génération intelligente de tests couvrant les cas limites souvent manqués.",
          ],
          AR: [
            "توليد الكود تلقائياً للأنماط المتكررة وعمليات CRUD.",
            "مراجعة الكود بمساعدة الذكاء الاصطناعي لاكتشاف الأخطاء قبل المراجعة البشرية.",
            "تحويل اللغة الطبيعية إلى SQL — يصف العملاء البيانات المطلوبة ويكتب الذكاء الاصطناعي الاستعلام.",
            "توثيق API مُولَّد تلقائياً يبقى دائماً متزامناً مع الكود.",
            "توليد اختبارات ذكية تغطي الحالات الحدية التي يغفلها المطورون.",
          ],
        },
      },
      {
        type: "img",
        src: "/assets/img/blog/blog-inside-post.jpg",
      },
      {
        type: "p",
        text: {
          EN: "Of course, integrating GenAI responsibly matters. We always review AI-generated code carefully, never deploy without human validation, and make sure our clients understand what AI is doing in their stack. The goal is augmented intelligence, not blind automation.",
          FR: "Bien sûr, intégrer l'IA générative de manière responsable est essentiel. Nous révisons toujours soigneusement le code généré par l'IA, ne déployons jamais sans validation humaine, et nous assurons que nos clients comprennent ce que l'IA fait dans leur stack. L'objectif est l'intelligence augmentée, pas l'automatisation aveugle.",
          AR: "بالطبع، يهمّ دمج الذكاء الاصطناعي التوليدي بمسؤولية. نراجع دائماً الكود المولَّد بعناية، ولا ننشر أبداً دون تحقق بشري، ونضمن أن عملاءنا يفهمون ما يقوم به الذكاء الاصطناعي في بنيتهم التقنية. الهدف ذكاء معزَّز، لا أتمتة عمياء.",
        },
      },
    ],
  },

  {
    slug: "servicenow-it-workflow-automation",
    img: "/assets/img/blog/blog-2.jpg",
    date: "Sep 28, 2024",
    author: "Abdelkabir Elbahmadi",
    authorRole: {
      EN: "Software & AI Engineer",
      FR: "Ingénieur Logiciel & IA",
      AR: "مهندس برمجيات وذكاء اصطناعي",
    },
    authorLinkedin: "https://www.linkedin.com/in/elbahmadi/",
    authorWebsite: "",
    comments: 5,
    category: { EN: "ServiceNow", FR: "ServiceNow", AR: "ServiceNow" },
    tags: ["ServiceNow", "ITSM", "Automation", "IT", "Workflows"],
    title: {
      EN: "ServiceNow: Automate Your IT Workflows and Boost Efficiency",
      FR: "ServiceNow : Automatisez vos Workflows IT et Boostez votre Efficacité",
      AR: "ServiceNow: أتمت سير عمل تقنية المعلومات لديك وعزِّز كفاءتك",
    },
    excerpt: {
      EN: "ServiceNow has become the backbone of IT service management for large enterprises. Automating your workflows with ServiceNow can drastically reduce manual tasks, cut resolution times and transform your IT department into a strategic driver.",
      FR: "ServiceNow est devenu l'épine dorsale de la gestion des services IT pour les grandes entreprises. Automatiser vos workflows avec ServiceNow peut réduire radicalement les tâches manuelles, diminuer les délais de résolution et transformer votre DSI en moteur stratégique.",
      AR: "أصبح ServiceNow العمود الفقري لإدارة خدمات تقنية المعلومات في المؤسسات الكبيرة. يمكن لأتمتة سير عملك باستخدام ServiceNow أن يُقلل بشكل كبير من المهام اليدوية ويُقصِّر أوقات الحل ويحوِّل قسم تقنية المعلومات إلى محرك استراتيجي.",
    },
    content: [
      {
        type: "p",
        text: {
          EN: "ServiceNow is more than a ticketing system — it's a full-scale platform for digitizing and automating business processes across IT, HR, Finance and customer service. Its low-code/no-code environment allows teams to build powerful applications without deep programming knowledge, while its enterprise-grade infrastructure ensures reliability at scale.",
          FR: "ServiceNow est bien plus qu'un système de tickets — c'est une plateforme complète pour numériser et automatiser les processus métiers à travers l'IT, les RH, la Finance et le service client. Son environnement low-code/no-code permet aux équipes de construire des applications puissantes sans connaissance approfondie en programmation.",
          AR: "ServiceNow أكثر من مجرد نظام تذاكر — إنه منصة متكاملة لرقمنة العمليات التجارية وأتمتتها عبر تقنية المعلومات والموارد البشرية والمالية وخدمة العملاء. تتيح بيئته المنخفضة الكود/عديمة الكود للفرق بناء تطبيقات قوية دون معرفة برمجية عميقة.",
        },
      },
      {
        type: "p",
        text: {
          EN: "The core strength of ServiceNow lies in its IT Service Management (ITSM) module — incident management, problem management, change management and service catalog all under one roof. When these processes are automated and connected, IT teams spend less time on repetitive tasks and more time delivering real business value.",
          FR: "La force centrale de ServiceNow réside dans son module ITSM — gestion des incidents, des problèmes, des changements et catalogue de services sous un même toit. Lorsque ces processus sont automatisés et connectés, les équipes IT passent moins de temps sur les tâches répétitives et plus à créer de la valeur métier.",
          AR: "تكمن القوة الجوهرية لـ ServiceNow في وحدة إدارة خدمات تقنية المعلومات (ITSM) — إدارة الحوادث والمشكلات والتغييرات وكتالوج الخدمات تحت سقف واحد. عندما تكون هذه العمليات مؤتمتة ومترابطة، تُخصِّص فرق تقنية المعلومات وقتاً أقل للمهام المتكررة وأكثر لتقديم قيمة حقيقية للأعمال.",
        },
      },
      {
        type: "blockquote",
        text: {
          EN: "The best IT teams don't just fix problems — they prevent them. ServiceNow gives you the visibility and automation to shift from reactive to proactive IT.",
          FR: "Les meilleures équipes IT ne font pas que résoudre les problèmes — elles les préviennent. ServiceNow vous donne la visibilité et l'automatisation pour passer d'une IT réactive à une IT proactive.",
          AR: "أفضل فرق تقنية المعلومات لا تكتفي بحل المشكلات — بل تتوقعها وتمنعها. يمنحك ServiceNow الرؤية والأتمتة للانتقال من تقنية معلومات تفاعلية إلى استباقية.",
        },
      },
      {
        type: "h3",
        text: {
          EN: "What Noova Technology Builds on ServiceNow",
          FR: "Ce que Noova Technology Développe sur ServiceNow",
          AR: "ما تبنيه نووفا تكنولوجي على منصة ServiceNow",
        },
      },
      {
        type: "p",
        text: {
          EN: "At Noova Technology, our ServiceNow practice covers custom application development on the Now Platform, workflow automation using Flow Designer, integration with third-party tools via REST/SOAP APIs, and ITSM implementation from scratch for enterprises transitioning to digital IT operations.",
          FR: "Chez Noova Technology, notre practice ServiceNow couvre le développement d'applications personnalisées sur la Now Platform, l'automatisation des workflows via Flow Designer, l'intégration avec des outils tiers via des APIs REST/SOAP, et l'implémentation ITSM from scratch pour les entreprises en transition numérique.",
          AR: "في نووفا تكنولوجي، يشمل تخصصنا في ServiceNow تطوير تطبيقات مخصصة على Now Platform، وأتمتة سير العمل باستخدام Flow Designer، والتكامل مع أدوات الطرف الثالث عبر REST/SOAP APIs، وتطبيق ITSM من الصفر للمؤسسات التي تنتقل إلى العمليات الرقمية.",
        },
      },
      {
        type: "ul",
        items: {
          EN: [
            "Custom ServiceNow application development tailored to your business processes.",
            "Automated incident and change management workflows reducing MTTR by up to 60%.",
            "Self-service portals empowering employees to resolve issues without IT involvement.",
            "Real-time dashboards and reporting for full operational visibility.",
            "Integration with Azure, AWS, Jira, Slack and other enterprise tools.",
          ],
          FR: [
            "Développement d'applications ServiceNow personnalisées adaptées à vos processus métiers.",
            "Workflows automatisés de gestion des incidents et des changements réduisant le MTTR jusqu'à 60%.",
            "Portails libre-service permettant aux employés de résoudre les problèmes sans l'IT.",
            "Tableaux de bord et rapports en temps réel pour une visibilité opérationnelle totale.",
            "Intégration avec Azure, AWS, Jira, Slack et autres outils d'entreprise.",
          ],
          AR: [
            "تطوير تطبيقات ServiceNow مخصصة مُكيَّفة لعمليات أعمالك.",
            "سير عمل آلي لإدارة الحوادث والتغييرات يُقلِّص MTTR بنسبة تصل إلى 60%.",
            "بوابات الخدمة الذاتية لتمكين الموظفين من حل المشكلات دون تدخل تقنية المعلومات.",
            "لوحات معلومات وتقارير فورية لرؤية تشغيلية شاملة.",
            "التكامل مع Azure وAWS وJira وSlack وأدوات المؤسسات الأخرى.",
          ],
        },
      },
    ],
  },

  {
    slug: "seo-best-practices-2025",
    img: "/assets/img/blog/blog-3.jpg",
    date: "Sep 10, 2024",
    author: "Fatima Ezzahrae Benkitou",
    authorRole: {
      EN: "Frontend Developer",
      FR: "Développeuse Frontend",
      AR: "مطورة واجهة أمامية",
    },
    authorLinkedin: "",
    authorWebsite: "",
    comments: 11,
    category: { EN: "Website & SEO", FR: "Site Web & SEO", AR: "مواقع الويب وتحسين محركات البحث" },
    tags: ["SEO", "Website", "Google", "Performance", "Content"],
    title: {
      EN: "10 SEO Best Practices to Rank Higher on Google in 2025",
      FR: "10 Bonnes Pratiques SEO pour Mieux Vous Positionner sur Google en 2025",
      AR: "10 ممارسات SEO لتحسين ترتيبك على Google في 2025",
    },
    excerpt: {
      EN: "A well-optimized website doesn't just look good — it gets found. With search engines evolving constantly, staying ahead of SEO best practices is essential to growing your online visibility and attracting the right clients.",
      FR: "Un site web bien optimisé ne fait pas que bien paraître — il se retrouve. Avec des moteurs de recherche en constante évolution, rester à la pointe des meilleures pratiques SEO est essentiel pour développer votre visibilité en ligne.",
      AR: "الموقع المُحسَّن جيداً لا يبدو فحسب جيداً — بل يُعثَر عليه. مع التطور المستمر لمحركات البحث، يُعدّ التفوق على أفضل ممارسات SEO أمراً أساسياً لتنمية رؤيتك على الإنترنت وجذب العملاء المناسبين.",
    },
    content: [
      {
        type: "p",
        text: {
          EN: "Search Engine Optimization in 2025 is no longer about keyword stuffing or buying backlinks. Google's algorithms have matured dramatically — they now understand context, user intent, content quality and page experience at a level that rewards genuinely helpful, well-structured websites.",
          FR: "L'optimisation pour les moteurs de recherche en 2025 ne consiste plus à bourrer de mots-clés ou acheter des backlinks. Les algorithmes de Google ont considérablement mûri — ils comprennent désormais le contexte, l'intention de l'utilisateur, la qualité du contenu et l'expérience de la page à un niveau qui récompense les sites réellement utiles et bien structurés.",
          AR: "لم يعد تحسين محركات البحث في 2025 يتعلق بحشو الكلمات المفتاحية أو شراء الروابط الخلفية. نضجت خوارزميات Google بشكل كبير — فهي الآن تفهم السياق ونية المستخدم وجودة المحتوى وتجربة الصفحة بمستوى يُكافئ المواقع المفيدة حقاً والمُنظَّمة جيداً.",
        },
      },
      {
        type: "blockquote",
        text: {
          EN: "The best place to hide a secret is page 2 of Google. If your business isn't on page 1, you're practically invisible to most potential clients.",
          FR: "Le meilleur endroit pour cacher un secret est la page 2 de Google. Si votre entreprise n'est pas en page 1, vous êtes pratiquement invisible pour la plupart de vos clients potentiels.",
          AR: "أفضل مكان لإخفاء سر هو الصفحة الثانية من Google. إذا لم يكن عملك في الصفحة الأولى، فأنت عملياً غير مرئي لمعظم العملاء المحتملين.",
        },
      },
      {
        type: "h3",
        text: {
          EN: "Our 10 Essential SEO Best Practices",
          FR: "Nos 10 Meilleures Pratiques SEO Essentielles",
          AR: "أفضل 10 ممارسات SEO الأساسية لدينا",
        },
      },
      {
        type: "ul",
        items: {
          EN: [
            "Core Web Vitals: optimize LCP, FID and CLS — Google measures page experience directly.",
            "Mobile-first design: more than 60% of searches happen on mobile devices.",
            "Semantic keyword research: target topics and user intent, not just individual keywords.",
            "Structured data (Schema.org): help Google understand your content and earn rich snippets.",
            "Internal linking: build a logical content hierarchy that guides both users and crawlers.",
            "Page speed: every second of load time reduces conversions by 7% — use Next.js, lazy loading and CDN.",
            "High-quality, long-form content: articles over 1500 words tend to rank higher on competitive keywords.",
            "Optimized title tags and meta descriptions: first impressions in search results matter.",
            "Backlink building: earn links from authoritative sites through content, partnerships and PR.",
            "Regular content audits: update outdated articles to keep them relevant and maintain rankings.",
          ],
          FR: [
            "Core Web Vitals : optimisez LCP, FID et CLS — Google mesure directement l'expérience de la page.",
            "Design mobile-first : plus de 60% des recherches se font sur mobile.",
            "Recherche de mots-clés sémantique : ciblez les sujets et l'intention, pas seulement les mots-clés.",
            "Données structurées (Schema.org) : aidez Google à comprendre votre contenu pour gagner des rich snippets.",
            "Maillage interne : construisez une hiérarchie de contenu logique guidant utilisateurs et crawlers.",
            "Vitesse de la page : chaque seconde de chargement réduit les conversions de 7% — utilisez Next.js, lazy loading et CDN.",
            "Contenu long et de qualité : les articles de plus de 1500 mots se classent mieux sur les mots-clés compétitifs.",
            "Title tags et meta descriptions optimisés : les premières impressions dans les résultats comptent.",
            "Construction de backlinks : obtenez des liens de sites autoritaires via le contenu, les partenariats et les RP.",
            "Audits de contenu réguliers : mettez à jour les articles obsolètes pour maintenir la pertinence et les classements.",
          ],
          AR: [
            "Core Web Vitals: حسِّن LCP وFID وCLS — يقيس Google تجربة الصفحة مباشرةً.",
            "تصميم Mobile-first: أكثر من 60% من عمليات البحث تتم على الأجهزة المحمولة.",
            "البحث الدلالي عن الكلمات المفتاحية: استهدف المواضيع ونية المستخدم لا مجرد الكلمات المفتاحية.",
            "البيانات المنظمة (Schema.org): ساعد Google على فهم محتواك لكسب المقتطفات المنسقة.",
            "الربط الداخلي: ابنِ تسلسلاً منطقياً للمحتوى يُرشد المستخدمين والزاحفين معاً.",
            "سرعة الصفحة: كل ثانية تأخير تُقلِّص التحويلات 7% — استخدم Next.js والتحميل الكسول وشبكة CDN.",
            "محتوى طويل وعالي الجودة: المقالات الأطول من 1500 كلمة تحتل مراتب أعلى في الكلمات التنافسية.",
            "عناوين ووصف meta مُحسَّنان: الانطباعات الأولى في نتائج البحث مهمة.",
            "بناء الروابط الخلفية: اكسب روابط من مواقع موثوقة عبر المحتوى والشراكات والعلاقات العامة.",
            "مراجعات دورية للمحتوى: حدِّث المقالات القديمة للحفاظ على الملاءمة والترتيب.",
          ],
        },
      },
      {
        type: "p",
        text: {
          EN: "At Noova Technology, SEO is not an afterthought — it's baked into every website we build. We use Next.js for server-side rendering which dramatically improves crawlability, implement proper meta tags, structured data and semantic HTML from day one, and deliver pagespeed scores above 90 on both mobile and desktop.",
          FR: "Chez Noova Technology, le SEO n'est pas une réflexion après coup — il est intégré dans chaque site que nous construisons. Nous utilisons Next.js pour le rendu côté serveur qui améliore considérablement la crawlabilité, implémentons les bonnes balises meta, les données structurées et le HTML sémantique dès le premier jour, et délivrons des scores PageSpeed au-dessus de 90 sur mobile et desktop.",
          AR: "في نووفا تكنولوجي، تحسين محركات البحث ليس فكرة لاحقة — بل هو مُدمَج في كل موقع نبنيه. نستخدم Next.js للعرض من جانب الخادم مما يُحسِّن قابلية الزحف بشكل كبير، ونُطبِّق meta tags والبيانات المنظمة وHTML الدلالي من اليوم الأول، ونُقدِّم درجات PageSpeed تتجاوز 90 على كل من الجوال وسطح المكتب.",
        },
      },
    ],
  },

  {
    slug: "react-native-vs-flutter-mobile-2025",
    img: "/assets/img/blog/blog-4.jpg",
    date: "Aug 20, 2024",
    author: "Rachid Benkitou",
    authorRole: {
      EN: "Software & GenAI Engineer",
      FR: "Ingénieur Logiciel & IA Générative",
      AR: "مهندس برمجيات وذكاء اصطناعي توليدي",
    },
    authorLinkedin: "",
    authorWebsite: "https://www.rachidbenkitou.online/",
    comments: 14,
    category: { EN: "Mobile Development", FR: "Développement Mobile", AR: "تطوير التطبيقات الجوالة" },
    tags: ["Mobile", "React Native", "Flutter", "iOS", "Android"],
    title: {
      EN: "React Native vs Flutter: Which Should You Choose in 2025?",
      FR: "React Native vs Flutter : Lequel Choisir pour votre App Mobile en 2025 ?",
      AR: "React Native مقابل Flutter: أيهما تختار لتطبيقك الجوال في 2025؟",
    },
    excerpt: {
      EN: "Choosing between React Native and Flutter for your next mobile app is one of the most common questions we get. Both are excellent cross-platform frameworks — but they serve different teams, budgets and project requirements.",
      FR: "Choisir entre React Native et Flutter pour votre prochaine application mobile est l'une des questions les plus fréquentes que nous recevons. Les deux sont d'excellents frameworks cross-platform — mais ils servent des équipes, budgets et exigences de projets différents.",
      AR: "الاختيار بين React Native وFlutter لتطبيقك الجوال القادم هو أحد أكثر الأسئلة شيوعاً لدينا. كلاهما إطار عمل ممتاز متعدد المنصات — لكنهما يخدمان فرقاً وميزانيات ومتطلبات مشاريع مختلفة.",
    },
    content: [
      {
        type: "p",
        text: {
          EN: "The mobile app market is growing at an unprecedented pace, and businesses need to ship fast across both iOS and Android without doubling their development costs. That's why cross-platform frameworks have taken over native development for the majority of commercial applications. React Native (Meta) and Flutter (Google) dominate this space — and choosing between them is a real strategic decision.",
          FR: "Le marché des applications mobiles croît à un rythme sans précédent, et les entreprises doivent déployer rapidement sur iOS et Android sans doubler leurs coûts de développement. C'est pourquoi les frameworks cross-platform ont pris le dessus sur le développement natif pour la majorité des applications commerciales. React Native (Meta) et Flutter (Google) dominent cet espace.",
          AR: "يتنامى سوق تطبيقات الجوال بوتيرة غير مسبوقة، وتحتاج الشركات إلى الإطلاق السريع على كلٍّ من iOS وAndroid دون مضاعفة تكاليف التطوير. لهذا السبب سيطرت أطر العمل متعددة المنصات على التطوير الأصلي لمعظم التطبيقات التجارية. يهيمن React Native (من Meta) وFlutter (من Google) على هذا المجال.",
        },
      },
      {
        type: "blockquote",
        text: {
          EN: "Write once, run everywhere — the promise that's almost true. With modern cross-platform frameworks, you can reach 95% of native performance with a single codebase.",
          FR: "Écrire une fois, exécuter partout — la promesse presque tenue. Avec les frameworks cross-platform modernes, vous pouvez atteindre 95% des performances natives avec une seule base de code.",
          AR: "اكتب مرة واحدة، شغِّل في كل مكان — الوعد الذي بات يكاد يكون حقيقياً. مع أطر العمل الحديثة متعددة المنصات، يمكنك الوصول إلى 95% من أداء التطبيقات الأصلية بقاعدة كود واحدة.",
        },
      },
      {
        type: "h3",
        text: {
          EN: "React Native vs Flutter: Key Differences",
          FR: "React Native vs Flutter : Différences Clés",
          AR: "React Native مقابل Flutter: الاختلافات الجوهرية",
        },
      },
      {
        type: "ul",
        items: {
          EN: [
            "Language — React Native uses JavaScript/TypeScript (familiar to web teams). Flutter uses Dart (fast to learn, less common).",
            "Performance — Flutter compiles to native ARM code directly, giving slightly better performance. React Native uses a JavaScript bridge (improving with the New Architecture).",
            "UI Components — Flutter renders its own widgets (pixel-perfect, consistent). React Native uses native components (looks more OS-native).",
            "Ecosystem — React Native has a larger ecosystem and community. Flutter is growing fast and is backed heavily by Google.",
            "Hot Reload — Both support hot reload for fast development iteration.",
            "Best for — React Native: web teams moving to mobile, apps needing native feel. Flutter: pixel-perfect UIs, gaming-adjacent apps, startups that want one codebase for web + mobile.",
          ],
          FR: [
            "Langage — React Native utilise JavaScript/TypeScript (familier aux équipes web). Flutter utilise Dart (rapide à apprendre, moins courant).",
            "Performance — Flutter compile directement en code ARM natif, offrant de légères meilleures performances. React Native utilise un pont JavaScript (s'améliorant avec la New Architecture).",
            "Composants UI — Flutter rend ses propres widgets (pixel-perfect, cohérents). React Native utilise des composants natifs (aspect plus OS-natif).",
            "Écosystème — React Native a un écosystème et une communauté plus larges. Flutter croît rapidement avec le soutien de Google.",
            "Hot Reload — Les deux supportent le rechargement à chaud pour une itération rapide.",
            "Idéal pour — React Native : équipes web passant au mobile, apps nécessitant un rendu natif. Flutter : UIs pixel-perfect, apps proches du gaming, startups voulant une codebase web + mobile.",
          ],
          AR: [
            "اللغة — يستخدم React Native جافاسكريبت/تايبسكريبت (مألوف لفرق الويب). يستخدم Flutter لغة Dart (سريعة التعلم، أقل شيوعاً).",
            "الأداء — يُترجم Flutter مباشرةً إلى كود ARM أصلي مما يمنحه أداءً أفضل قليلاً. يستخدم React Native جسر جافاسكريبت (يتحسن مع البنية الجديدة).",
            "مكونات واجهة المستخدم — يُصيِّر Flutter عناصره الخاصة (دقة بكسل مثالية، متسقة). يستخدم React Native المكونات الأصلية (مظهر أقرب لنظام التشغيل).",
            "النظام البيئي — لدى React Native نظام بيئي ومجتمع أوسع. Flutter ينمو بسرعة بدعم قوي من Google.",
            "Hot Reload — يدعم كلاهما إعادة التحميل السريع لتسريع دورة التطوير.",
            "الأنسب لـ — React Native: فرق الويب المنتقلة للجوال، التطبيقات التي تحتاج مظهراً أصلياً. Flutter: واجهات دقيقة بكسل مثالي، تطبيقات قريبة من الألعاب، الشركات الناشئة التي تريد قاعدة كود واحدة للويب والجوال.",
          ],
        },
      },
      {
        type: "p",
        text: {
          EN: "At Noova Technology, we work with both frameworks depending on client needs. For teams that already have web developers in JavaScript/TypeScript, React Native is the natural evolution. For clients who want a completely custom, branded UI that looks identical on every device, Flutter is our recommendation. Either way, you get a single codebase, faster time-to-market and a significantly lower development budget compared to building two separate native apps.",
          FR: "Chez Noova Technology, nous travaillons avec les deux frameworks selon les besoins du client. Pour les équipes qui ont déjà des développeurs web en JavaScript/TypeScript, React Native est l'évolution naturelle. Pour les clients qui veulent une UI entièrement personnalisée et identique sur chaque appareil, Flutter est notre recommandation. Dans les deux cas, vous obtenez une base de code unique, un délai de mise sur le marché plus rapide et un budget de développement significativement inférieur à deux apps natives séparées.",
          AR: "في نووفا تكنولوجي، نعمل مع كلا الإطارين بحسب احتياجات العميل. للفرق التي لديها بالفعل مطورو ويب بجافاسكريبت/تايبسكريبت، فإن React Native هو التطور الطبيعي. للعملاء الذين يريدون واجهة مستخدم مخصصة تماماً وهوية مرئية متطابقة على كل جهاز، فإن Flutter هو توصيتنا. في كلتا الحالتين، تحصل على قاعدة كود واحدة وطرح أسرع للسوق وميزانية تطوير أقل بكثير مقارنةً ببناء تطبيقين أصليين منفصلين.",
        },
      },
    ],
  },
];

export default POSTS;
