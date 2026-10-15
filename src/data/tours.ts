type I18n<T> = { fr: T; en: T; ar: T };

export type TourDay = {
  day:         I18n<string>;
  title:       I18n<string>;
  description: I18n<string>;
};
export type TourFaq = {
  question: I18n<string>;
  answer:   I18n<string>;
};

export type Tour = {
  slug:       string;
  image:      string;
  gallery:    string[];
  days:       I18n<string>;
  daysNum:    number;
  title:      I18n<string>;
  short:      I18n<string>;
  intro:      I18n<string>;
  highlights: I18n<string[]>;
  itinerary:  TourDay[];
  faqs:       TourFaq[];
  featured?:  boolean;
};

export const tours: Tour[] = [
  /* ─────────────────────────────────────────────────────────
     1 — Marrakech → Essaouira Day Trip
  ───────────────────────────────────────────────────────── */
  {
    slug:     "marrakech-essaouira-day-trip",
    image:    "/images/essaouira.jpg",
    gallery:  ["/images/road.jpg", "/images/atlas.jpg"],
    featured: true,
    days:     { fr: "1 Jour", en: "1 Day", ar: "يوم واحد" },
    daysNum:  1,
    title: {
      fr: "Excursion journée Marrakech → Essaouira",
      en: "Marrakech to Essaouira Day Trip",
      ar: "رحلة يوم من مراكش إلى الصويرة",
    },
    short: {
      fr: "Découvrez la charmante ville côtière atlantique d'Essaouira",
      en: "Discover the charming Atlantic coastal city of Essaouira",
      ar: "اكتشف مدينة الصويرة الساحلية الأطلسية الساحرة",
    },
    intro: {
      fr: "Une journée reposante loin de l'agitation de Marrakech, sur la côte atlantique dans la médina blanchie à la chaux d'Essaouira et son port de pêche animé.",
      en: "A relaxed day away from Marrakech's heat and hustle, on the Atlantic coast in Essaouira's whitewashed, wind-swept medina and fishing port.",
      ar: "يوم من الراحة بعيداً عن حرارة وضجيج مراكش، على ساحل المحيط الأطلسي في مدينة الصويرة ذات البياض الناصع وميناء الصيد النشط.",
    },
    highlights: {
      fr: ["Médina d'Essaouira classée à l'UNESCO et ses remparts", "Port de pêche animé et fruits de mer frais", "Temps libre pour les souks et galeries d'art", "Transport privé aller-retour depuis Marrakech"],
      en: ["Essaouira's UNESCO-listed medina and ramparts", "The working fishing port and fresh seafood", "Free time to browse the souks and art galleries", "Round-trip private transport from Marrakech"],
      ar: ["مدينة الصويرة التاريخية المصنفة في اليونسكو وأسوارها", "ميناء الصيد النشط والمأكولات البحرية الطازجة", "وقت حر لاستكشاف الأسواق وصالات الفن", "نقل خاص ذهاباً وإياباً من مراكش"],
    },
    itinerary: [
      {
        day:   { fr: "Journée complète", en: "Full Day", ar: "يوم كامل" },
        title: { fr: "مراكش → الصويرة → مراكش", en: "Marrakech → Essaouira → Marrakech", ar: "مراكش → الصويرة → مراكش" },
        description: {
          fr: "Départ de Marrakech le matin pour le trajet d'environ 2h30 vers Essaouira. Passez la journée à explorer la médina classée à l'UNESCO, le port de pêche et les remparts surplombant l'Atlantique, avec du temps libre pour déjeuner et faire du shopping dans les souks, avant de rentrer à Marrakech en soirée.",
          en: "Depart Marrakech in the morning for the roughly 2.5-hour drive to Essaouira. Spend the day exploring the UNESCO-listed medina, the fishing port, and the ramparts overlooking the Atlantic, with free time for lunch and shopping in the souks, before returning to Marrakech in the evening.",
          ar: "انطلق من مراكش صباحاً للرحلة التي تستغرق حوالي 2.5 ساعة إلى الصويرة. اقضِ اليوم في استكشاف المدينة التاريخية المصنفة في اليونسكو وميناء الصيد والأسوار المطلة على المحيط الأطلسي، مع وقت حر للغداء والتسوق في الأسواق، قبل العودة إلى مراكش مساءً.",
        },
      },
    ],
    faqs: [
      {
        question: { fr: "Combien de temps dure le trajet de Marrakech à Essaouira ?", en: "How long is the drive from Marrakech to Essaouira?", ar: "كم تستغرق الرحلة من مراكش إلى الصويرة؟" },
        answer:   { fr: "Environ 2h30 aller simple sur une bonne route directe — suffisamment confortable pour une excursion à la journée.", en: "Around 2.5 hours each way on a good, direct road — comfortable enough as a day trip.", ar: "حوالي 2.5 ساعة في اتجاه واحد على طريق مباشر جيد — مريح بما يكفي كرحلة ليوم واحد." },
      },
      {
        question: { fr: "Le déjeuner est-il inclus ?", en: "Is lunch included?", ar: "هل الغداء مشمول؟" },
        answer:   { fr: "Le déjeuner n'est pas inclus dans le prix fixe, mais votre chauffeur peut vous recommander un bon restaurant de fruits de mer près du port.", en: "Lunch isn't included in the fixed price, but your driver can recommend a well-regarded seafood restaurant near the port.", ar: "لا يشمل السعر الثابت الغداء، لكن يمكن لسائقك أن يوصيك بمطعم مأكولات بحرية متميز قرب الميناء." },
      },
      {
        question: { fr: "Puis-je rester une nuit à Essaouira au lieu de rentrer le même jour ?", en: "Can I stay overnight in Essaouira instead of returning the same day?", ar: "هل يمكنني المبيت في الصويرة بدلاً من العودة في نفس اليوم؟" },
        answer:   { fr: "Oui — informez-nous lors de la réservation et nous adapterons l'excursion en transfert privé simple au lieu d'un aller-retour.", en: "Yes — just let us know when booking and we'll adjust it to a one-way private transfer instead of a round-trip day tour.", ar: "نعم — فقط أخبرنا عند الحجز وسنحوّلها إلى نقل خاص في اتجاه واحد بدلاً من رحلة ذهاب وإياب." },
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────
     2 — Chefchaouen Day Trip
  ───────────────────────────────────────────────────────── */
  {
    slug:     "chefchaouen-day-trip",
    image:    "/images/chefchaouen.jpg",
    gallery:  ["/images/mountainRoad.jpg", "/images/medina.jpg"],
    featured: true,
    days:     { fr: "1 Jour", en: "1 Day", ar: "يوم واحد" },
    daysNum:  1,
    title: {
      fr: "Excursion journée à Chefchaouen",
      en: "Chefchaouen Day Trip",
      ar: "رحلة يوم إلى شفشاون",
    },
    short: {
      fr: "Visitez la Ville Bleue depuis Marrakech",
      en: "Visit the Blue City from Marrakech",
      ar: "زيارة المدينة الزرقاء من مراكش",
    },
    intro: {
      fr: "Une excursion dans les montagnes du Rif pour se promener dans les ruelles bleutées de Chefchaouen — la ville la plus photogénique du Maroc.",
      en: "A day trip into the Rif Mountains to wander the blue-washed streets of Chefchaouen — Morocco's most photogenic city.",
      ar: "رحلة يوم إلى جبال الريف للتجوال في أزقة شفشاون الزرقاء — أجمل مدن المغرب للتصوير.",
    },
    highlights: {
      fr: ["Médina bleue de Chefchaouen et Plaza Uta el-Hammam", "Paysages des montagnes du Rif tout au long du trajet", "Temps libre pour photos, cafés et artisanat local", "Transport privé aller-retour"],
      en: ["Chefchaouen's blue medina and Plaza Uta el-Hammam", "Rif Mountain scenery along the drive", "Free time for photos, cafés and local crafts", "Private transport both ways"],
      ar: ["المدينة الزرقاء لشفشاون وساحة عطة الحمام", "مناظر جبال الريف على طول الطريق", "وقت حر للتصوير والمقاهي والحرف المحلية", "نقل خاص في الاتجاهين"],
    },
    itinerary: [
      {
        day:   { fr: "Journée complète", en: "Full Day", ar: "يوم كامل" },
        title: { fr: "مراكش → شفشاون → العودة", en: "Marrakech → Chefchaouen → Return", ar: "مراكش → شفشاون → العودة" },
        description: {
          fr: "Départ le matin pour le trajet pittoresque vers Chefchaouen. Passez plusieurs heures à explorer la médina aux murs bleus, le musée de la Kasbah et la place principale, avec le temps de déjeuner, avant le retour.",
          en: "Depart in the morning for the scenic drive to Chefchaouen. Spend several hours exploring the blue-painted medina, the Kasbah museum, and the main square, with time for lunch, before the return drive.",
          ar: "انطلق في الصباح للقيادة الخلابة نحو شفشاون. اقضِ عدة ساعات في استكشاف المدينة المرسومة بالأزرق ومتحف القصبة والساحة الرئيسية مع وقت للغداء قبل العودة.",
        },
      },
    ],
    faqs: [
      {
        question: { fr: "À quelle distance se trouve Chefchaouen de Marrakech ?", en: "How far is Chefchaouen from Marrakech?", ar: "كم تبعد شفشاون عن مراكش؟" },
        answer:   { fr: "Environ 5 à 6 heures par la route — nous recommandons un départ matinal pour maximiser le temps en ville.", en: "Around 5-6 hours by road — we recommend an early departure to maximise time in the city.", ar: "حوالي 5-6 ساعات بالسيارة — نوصي بالمغادرة مبكراً لتعظيم الوقت في المدينة." },
      },
      {
        question: { fr: "Puis-je rester une nuit à Chefchaouen ?", en: "Can I stay overnight in Chefchaouen instead?", ar: "هل يمكنني المبيت في شفشاون؟" },
        answer:   { fr: "Oui, si vous préférez ne pas faire l'aller-retour en une journée, nous pouvons organiser un transfert privé simple à la place.", en: "Yes, if you'd rather not do a long round-trip in one day, we can arrange it as a one-way private transfer instead.", ar: "نعم، إذا كنت تفضل عدم القيام برحلة ذهاب وإياب طويلة في يوم واحد، يمكننا ترتيبها كنقل خاص في اتجاه واحد." },
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────
     3 — Fes & Chefchaouen Tour
  ───────────────────────────────────────────────────────── */
  {
    slug:     "fes-chefchaouen-tour",
    image:    "/images/fes.jpg",
    gallery:  ["/images/chefchaouen.jpg", "/images/spices.jpg"],
    featured: true,
    days:     { fr: "2 Jours", en: "2 Days", ar: "يومان" },
    daysNum:  2,
    title: {
      fr: "Circuit Fès & Chefchaouen",
      en: "Fes & Chefchaouen Tour",
      ar: "جولة فاس وشفشاون",
    },
    short: {
      fr: "Découvrez la médina de Fès et la Ville Bleue en deux jours",
      en: "Discover Fes Medina and the Blue City in two days",
      ar: "اكتشف مدينة فاس التاريخية والمدينة الزرقاء في يومين",
    },
    intro: {
      fr: "Deux des villes les plus photogéniques du Maroc en un court voyage privé — la médina médiévale de Fès et les ruelles bleues de Chefchaouen.",
      en: "Two of Morocco's most photogenic cities in one short private trip — the medieval medina of Fes and the blue streets of Chefchaouen.",
      ar: "مدينتان من أجمل مدن المغرب للتصوير في رحلة خاصة قصيرة — مدينة فاس التاريخية الوسيطة وأزقة شفشاون الزرقاء.",
    },
    highlights: {
      fr: ["Médina de Fès el-Bali, tanneries et souks d'artisans", "Médersa Bou Inania et les portes historiques de la médina", "Médina bleue de Chefchaouen et vues sur les montagnes", "Une nuit à Fès incluse dans le circuit"],
      en: ["Fes el-Bali medina, tanneries and artisan souks", "Bou Inania Madrasa and the historic medina gates", "Chefchaouen's blue medina and mountain views", "One overnight stay in Fes included in the route"],
      ar: ["مدينة فاس البالي والمدابغ والأسواق الحرفية", "مدرسة بو عنانية والأبواب التاريخية للمدينة", "المدينة الزرقاء لشفشاون والمناظر الجبلية", "ليلة واحدة في فاس مشمولة في المسار"],
    },
    itinerary: [
      {
        day:   { fr: "Jour 1", en: "Day 1", ar: "اليوم 1" },
        title: { fr: "فاس — جولة شاملة في المدينة", en: "Fes — Full Medina Tour", ar: "فاس — جولة شاملة في المدينة" },
        description: {
          fr: "Une journée complète à explorer la médina de Fès el-Bali classée à l'UNESCO, incluant le quartier Al Quaraouiyine, la médersa Bou Inania, les célèbres tanneries et les ateliers d'artisans.",
          en: "A full day exploring the UNESCO-listed medina of Fes el-Bali, including the Al Quaraouiyine area, the Bou Inania Madrasa, the famous leather tanneries, and the artisan workshops.",
          ar: "يوم كامل في استكشاف مدينة فاس البالي المدرجة في اليونسكو، بما في ذلك منطقة القرويين ومدرسة بو عنانية والمدابغ الشهيرة والمشاغل الحرفية.",
        },
      },
      {
        day:   { fr: "Jour 2", en: "Day 2", ar: "اليوم 2" },
        title: { fr: "فاس → شفشاون", en: "Fes → Chefchaouen", ar: "فاس → شفشاون" },
        description: {
          fr: "Route vers le nord dans les montagnes du Rif jusqu'à Chefchaouen. Passez l'après-midi à vous promener dans la médina blanchie de bleu et le musée de la Kasbah.",
          en: "Drive north into the Rif Mountains to Chefchaouen. Spend the afternoon wandering the blue-washed medina and the Kasbah museum.",
          ar: "توجه شمالاً إلى جبال الريف نحو شفشاون. اقضِ بعد الظهر في التجوال في المدينة المطلية بالأزرق ومتحف القصبة.",
        },
      },
    ],
    faqs: [
      {
        question: { fr: "À quelle distance se trouve Fès de Chefchaouen ?", en: "How far is Fes to Chefchaouen?", ar: "كم تبعد فاس عن شفشاون؟" },
        answer:   { fr: "Environ 4 heures à travers les montagnes du Rif, avec des arrêts pittoresques possibles en chemin.", en: "Around 4 hours through the Rif Mountains, with scenic stops possible along the way.", ar: "حوالي 4 ساعات عبر جبال الريف، مع توقفات خلابة ممكنة على الطريق." },
      },
      {
        question: { fr: "Un guide local est-il inclus pour la médina de Fès ?", en: "Is a local guide included for the Fes medina?", ar: "هل يشمل الجولة مرشد محلي لمدينة فاس؟" },
        answer:   { fr: "Votre chauffeur peut naviguer les principaux sites, mais pour les ruelles étroites de la médina nous recommandons un guide local agréé, que nous pouvons organiser sur demande.", en: "Your driver can navigate the main sights, but for the medina's narrow alleys we recommend adding a licensed local guide, which we can arrange on request.", ar: "يمكن لسائقك التنقل بين المواقع الرئيسية، لكن للأزقة الضيقة للمدينة نوصي بإضافة مرشد محلي مرخص يمكننا ترتيبه عند الطلب." },
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────
     4 — 9-Day Morocco Tour
  ───────────────────────────────────────────────────────── */
  {
    slug:     "9-day-morocco-sahara-fes-chefchaouen",
    image:    "/images/desertCamels.jpg",
    gallery:  ["/images/aitBenHaddouKasbah.jpg", "/images/chefchaouen.jpg", "/images/fes.jpg"],
    featured: false,
    days:     { fr: "9 Jours", en: "9 Days", ar: "9 أيام" },
    daysNum:  9,
    title: {
      fr: "Circuit 9 Jours : Sahara, Fès & Chefchaouen",
      en: "9-Day Morocco Tour: Sahara, Fes & Chefchaouen",
      ar: "جولة المغرب 9 أيام: الصحراء وفاس وشفشاون",
    },
    short: {
      fr: "مراكش → أيت بنحدو → الصحراء → فاس → شفشاون → الرباط → الدار البيضاء",
      en: "Marrakech → Ait Ben Haddou → Sahara → Fes → Chefchaouen → Rabat → Casablanca",
      ar: "مراكش → أيت بنحدو → الصحراء → فاس → شفشاون → الرباط → الدار البيضاء",
    },
    intro: {
      fr: "Le circuit complet du Maroc en neuf jours : villes impériales, une nuit sous les étoiles au Sahara et la Perle Bleue de Chefchaouen, dans un voyage privé continu depuis Marrakech.",
      en: "The complete Morocco circuit in nine days: imperial cities, a night under the stars in the Sahara, and the Blue Pearl of Chefchaouen, all in one continuous private journey from Marrakech.",
      ar: "الجولة الكاملة للمغرب في تسعة أيام: المدن الإمبراطورية وليلة تحت النجوم في الصحراء ولؤلؤة الريف شفشاون، في رحلة خاصة متواصلة من مراكش.",
    },
    highlights: {
      fr: ["Kasbah d'Aït Ben Haddou classée à l'UNESCO", "Randonnée à dos de chameau et bivouac en plein désert du Sahara", "Médina de Fès, tanneries et la Perle Bleue de Chefchaouen", "Ruines romaines de Volubilis et sites impériaux de Rabat"],
      en: ["UNESCO-listed Ait Ben Haddou kasbah", "Camel trek and overnight desert camp in the Sahara", "Fes medina, tanneries and the Blue Pearl of Chefchaouen", "Roman ruins at Volubilis and Rabat's imperial sites"],
      ar: ["قصبة أيت بنحدو المدرجة في اليونسكو", "رحلة بالجمال والمبيت في مخيم الصحراء", "مدينة فاس والمدابغ ولؤلؤة الريف شفشاون", "أطلال وليلي الرومانية والمواقع الإمبراطورية في الرباط"],
    },
    itinerary: [
      {
        day: { fr: "Jour 1", en: "Day 1", ar: "اليوم 1" },
        title: { fr: "Arrivée à Marrakech", en: "Marrakech Arrival", ar: "الوصول إلى مراكش" },
        description: { fr: "Accueil, temps libre pour explorer Jemaa el-Fnaa et la médina.", en: "Welcome meeting, with free time to explore Jemaa el-Fnaa and the medina.", ar: "استقبال وترحيب، مع وقت حر لاستكشاف جامع الفنا والمدينة القديمة." },
      },
      {
        day: { fr: "Jour 2", en: "Day 2", ar: "اليوم 2" },
        title: { fr: "Marrakech → Vallée du Dadès", en: "Marrakech to Dades Valley", ar: "مراكش → وادي دادس" },
        description: { fr: "Traversez le Haut Atlas via le col de Tizi n'Tichka, arrêt à la kasbah d'Aït Ben Haddou, puis cap vers les gorges du Dadès pour la nuit.", en: "Cross the High Atlas via the Tizi n'Tichka Pass, stop at Ait Ben Haddou kasbah, then continue to the Dades Gorge for the night.", ar: "اعبر جبال الأطلس الكبير عبر ممر تيزي ن'تيشكا، وتوقف عند قصبة أيت بنحدو، ثم تابع إلى وادي دادس لقضاء الليل." },
      },
      {
        day: { fr: "Jour 3", en: "Day 3", ar: "اليوم 3" },
        title: { fr: "Dadès → Merzouga", en: "Dades to Merzouga", ar: "دادس → مرزوقة" },
        description: { fr: "Traversée des gorges du Todra et des plaines sahariennes jusqu'à Merzouga, suivie d'une randonnée au coucher du soleil jusqu'au bivouac dans le désert.", en: "Drive through the Todra Gorge and across the Sahara plains to Merzouga, followed by a sunset camel trek to a desert camp.", ar: "قيادة عبر وادي تودرة وسهول الصحراء إلى مرزوقة، تليها رحلة بالجمال عند الغروب إلى مخيم الصحراء." },
      },
      {
        day: { fr: "Jour 4", en: "Day 4", ar: "اليوم 4" },
        title: { fr: "Sahara → Fès", en: "Sahara to Fes", ar: "الصحراء → فاس" },
        description: { fr: "Lever de soleil sur les dunes, puis route vers le nord via la vallée du Ziz et les forêts de cèdres de Midelt jusqu'à Fès.", en: "Watch the sunrise over the dunes, then drive north via the Ziz Valley and Midelt's cedar forests to Fes.", ar: "مشاهدة شروق الشمس فوق الكثبان، ثم التوجه شمالاً عبر وادي الزيز وغابات الأرز في ميدلت وصولاً إلى فاس." },
      },
      {
        day: { fr: "Jour 5", en: "Day 5", ar: "اليوم 5" },
        title: { fr: "Visite de la médina de Fès", en: "Fes Medina Tour", ar: "جولة في مدينة فاس" },
        description: { fr: "Promenade guidée dans la plus grande médina sans voitures du monde — tanneries, médersas et souks.", en: "A guided walk through the world's largest car-free medina — tanneries, madrasas and souks.", ar: "جولة مرشدة في أكبر مدينة خالية من السيارات في العالم — المدابغ والمدارس والأسواق." },
      },
      {
        day: { fr: "Jour 6", en: "Day 6", ar: "اليوم 6" },
        title: { fr: "Fès → Chefchaouen", en: "Fes to Chefchaouen", ar: "فاس → شفشاون" },
        description: { fr: "Arrêt optionnel aux ruines romaines de Volubilis en route vers la Ville Bleue.", en: "Optional stop at the Roman ruins of Volubilis en route to the Blue City.", ar: "توقف اختياري عند أطلال وليلي الرومانية في الطريق إلى المدينة الزرقاء." },
      },
      {
        day: { fr: "Jour 7", en: "Day 7", ar: "اليوم 7" },
        title: { fr: "Exploration de Chefchaouen", en: "Chefchaouen Exploration", ar: "استكشاف شفشاون" },
        description: { fr: "Matinée libre pour se promener dans les ruelles bleues, puis transfert de l'après-midi vers Rabat.", en: "A free morning to wander the blue-washed lanes, then an afternoon transfer toward Rabat.", ar: "صباح حر للتجوال في الأزقة الزرقاء، ثم تنقل بعد الظهر نحو الرباط." },
      },
      {
        day: { fr: "Jour 8", en: "Day 8", ar: "اليوم 8" },
        title: { fr: "Rabat & Casablanca", en: "Rabat & Casablanca", ar: "الرباط والدار البيضاء" },
        description: { fr: "Visite de la Tour Hassan, du Palais Royal et de la Kasbah des Oudayas, puis direction Casablanca pour la mosquée Hassan II.", en: "Visit the Hassan Tower, the Royal Palace and the Kasbah of the Udayas, then continue to Casablanca for the Hassan II Mosque.", ar: "زيارة صومعة حسان والقصر الملكي وقصبة الأوداية، ثم التوجه إلى الدار البيضاء لزيارة مسجد الحسن الثاني." },
      },
      {
        day: { fr: "Jour 9", en: "Day 9", ar: "اليوم 9" },
        title: { fr: "Départ", en: "Departure", ar: "المغادرة" },
        description: { fr: "Transfert à l'aéroport de Casablanca ou Marrakech pour votre départ.", en: "Transfer to the Casablanca or Marrakech airport for your departure.", ar: "نقل إلى مطار الدار البيضاء أو مراكش لمغادرتك." },
      },
    ],
    faqs: [
      {
        question: { fr: "Ce tour est-il privé ou en petit groupe ?", en: "Is this tour private or a small group?", ar: "هل هذه الجولة خاصة أم في مجموعة صغيرة؟" },
        answer:   { fr: "Les deux sont possibles — rejoignez un départ en petit groupe ou réservez-le comme tour entièrement privé avec votre propre véhicule et chauffeur.", en: "Available both ways — join a small group departure or book it as a fully private tour with your own vehicle and driver.", ar: "متاح بالطريقتين — انضم إلى مغادرة في مجموعة صغيرة أو احجزها كجولة خاصة بسيارتك وسائقك الخاص." },
      },
      {
        question: { fr: "Où se termine le tour ?", en: "Where does the tour end?", ar: "أين تنتهي الجولة؟" },
        answer:   { fr: "La fin standard est à Marrakech, mais une fin à Casablanca peut être arrangée sur demande.", en: "The standard finish is back in Marrakech, but an open-jaw ending in Casablanca can be arranged on request.", ar: "النهاية المعتادة هي العودة إلى مراكش، لكن يمكن ترتيب نهاية في الدار البيضاء عند الطلب." },
      },
      {
        question: { fr: "L'hébergement est-il inclus ?", en: "Is accommodation included?", ar: "هل السكن مشمول؟" },
        answer:   { fr: "L'hébergement et le bivouac dans le désert sont inclus dans les départs en groupe ; pour les tours privés nous recommandons volontiers des riads et hôtels tout au long du parcours.", en: "Accommodation and the Sahara desert camp are included on group departures; for private tours we're happy to recommend riads and hotels along the route.", ar: "السكن ومخيم الصحراء مشمولان في المغادرات الجماعية؛ وللجولات الخاصة نوصي بكل سرور بالرياض والفنادق على طول المسار." },
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────
     5 — 8-Day Morocco Tour
  ───────────────────────────────────────────────────────── */
  {
    slug:     "8-day-morocco-sahara-fes",
    image:    "/images/dunes.jpg",
    gallery:  ["/images/aitBenHaddouKasbah.jpg", "/images/ifraneSnow.jpg", "/images/fes.jpg"],
    featured: false,
    days:     { fr: "8 Jours", en: "8 Days", ar: "8 أيام" },
    daysNum:  8,
    title: {
      fr: "Circuit 8 Jours : Sahara & Fès",
      en: "8-Day Morocco Highlights: Sahara & Fes",
      ar: "جولة المغرب 8 أيام: الصحراء وفاس",
    },
    short: {
      fr: "مراكش → أيت بنحدو → الصحراء → وادي تودرة → فاس → مراكش",
      en: "Marrakech → Ait Ben Haddou → Sahara → Todra Gorge → Fes → Marrakech",
      ar: "مراكش → أيت بنحدو → الصحراء → وادي تودرة → فاس → مراكش",
    },
    intro: {
      fr: "Désert, gorges et Fès en huit jours — tous les points forts essentiels sans la boucle Chefchaouen supplémentaire.",
      en: "Desert, gorges and Fes in eight days — all the essential highlights without the extra Chefchaouen loop.",
      ar: "الصحراء والوديان وفاس في ثمانية أيام — جميع المعالم الأساسية دون حلقة شفشاون الإضافية.",
    },
    highlights: {
      fr: ["Route des kasbahs via Aït Ben Haddou et Ouarzazate", "Randonnée à dos de chameau et bivouac dans le Sahara", "Falaises imposantes des gorges du Todra", "Médina de Fès et les forêts de cèdres d'Ifrane"],
      en: ["Kasbah route via Ait Ben Haddou and Ouarzazate", "Sahara camel trek and overnight desert camp", "Todra Gorge's towering cliffs", "Fes medina and the cedar forests of Ifrane"],
      ar: ["طريق القصبات عبر أيت بنحدو وورزازات", "رحلة بالجمال والمبيت في مخيم الصحراء", "منحدرات وادي تودرة الشاهقة", "مدينة فاس التاريخية وغابات الأرز في إفران"],
    },
    itinerary: [
      {
        day: { fr: "Jour 1", en: "Day 1", ar: "اليوم 1" },
        title: { fr: "Marrakech", en: "Marrakech", ar: "مراكش" },
        description: { fr: "Arrivée et briefing de bienvenue.", en: "Arrival and welcome briefing.", ar: "الوصول واجتماع الترحيب." },
      },
      {
        day: { fr: "Jour 2", en: "Day 2", ar: "اليوم 2" },
        title: { fr: "Marrakech → Aït Ben Haddou → Dadès", en: "Marrakech to Ait Ben Haddou to Dades", ar: "مراكش → أيت بنحدو → دادس" },
        description: { fr: "Col de Tizi n'Tichka, studios cinématographiques d'Ouarzazate (optionnel), kasbah d'Aït Ben Haddou, nuit dans la vallée du Dadès.", en: "Tizi n'Tichka Pass, the Ouarzazate film studios (optional), Ait Ben Haddou kasbah, overnight in the Dades Valley.", ar: "ممر تيزي ن'تيشكا، استوديوهات السينما في ورزازات (اختياري)، قصبة أيت بنحدو، المبيت في وادي دادس." },
      },
      {
        day: { fr: "Jour 3", en: "Day 3", ar: "اليوم 3" },
        title: { fr: "Dadès → Merzouga", en: "Dades to Merzouga", ar: "دادس → مرزوقة" },
        description: { fr: "Promenade dans les gorges du Todra, route vers Merzouga, puis randonnée à dos de chameau dans les dunes pour un bivouac sous les étoiles.", en: "A walk through the Todra Gorge, drive to Merzouga, then a camel trek into the dunes for a desert camp overnight.", ar: "جولة عبر وادي تودرة، ثم القيادة إلى مرزوقة، وأخيراً رحلة بالجمال إلى الكثبان للمبيت في مخيم الصحراء." },
      },
      {
        day: { fr: "Jour 4", en: "Day 4", ar: "اليوم 4" },
        title: { fr: "Lever de soleil sur le Sahara → Fès", en: "Sahara Sunrise to Fes", ar: "شروق الشمس على الصحراء → فاس" },
        description: { fr: "Lever de soleil sur les dunes, puis route via la vallée du Ziz, Midelt et les forêts de cèdres d'Ifrane jusqu'à Fès.", en: "Watch the sunrise over the dunes, then drive via the Ziz Valley, Midelt and the cedar forests of Ifrane to Fes.", ar: "مشاهدة شروق الشمس فوق الكثبان، ثم القيادة عبر وادي الزيز وميدلت وغابات الأرز في إفران وصولاً إلى فاس." },
      },
      {
        day: { fr: "Jour 5", en: "Day 5", ar: "اليوم 5" },
        title: { fr: "Médina de Fès", en: "Fes Medina", ar: "مدينة فاس" },
        description: { fr: "Visite guidée complète des tanneries, médersas et de la vieille ville fortifiée.", en: "A full guided tour of the tanneries, medersas and the ancient walled city.", ar: "جولة مرشدة كاملة في المدابغ والمدارس والمدينة القديمة المسوّرة." },
      },
      {
        day: { fr: "Jour 6", en: "Day 6", ar: "اليوم 6" },
        title: { fr: "Fès → Marrakech (via Moyen Atlas)", en: "Fes to Marrakech (via Middle Atlas)", ar: "فاس → مراكش (عبر الأطلس المتوسط)" },
        description: { fr: "Un trajet panoramique de retour à travers l'Atlas, arrivée à Marrakech en soirée.", en: "A scenic drive back across the Atlas, arriving in Marrakech in the evening.", ar: "رحلة قيادة خلابة عودةً عبر جبال الأطلس، والوصول إلى مراكش في المساء." },
      },
      {
        day: { fr: "Jour 7", en: "Day 7", ar: "اليوم 7" },
        title: { fr: "Journée libre à Marrakech", en: "Marrakech Free Day", ar: "يوم حر في مراكش" },
        description: { fr: "Optionnel : randonnée dans les montagnes de l'Atlas, hammam et spa, ou Jardin Majorelle.", en: "Optional: Atlas Mountain hike, hammam and spa, or Majorelle Garden.", ar: "اختياري: تنزه في جبال الأطلس، الحمام والسبا، أو حديقة ماجوريل." },
      },
      {
        day: { fr: "Jour 8", en: "Day 8", ar: "اليوم 8" },
        title: { fr: "Départ", en: "Departure", ar: "المغادرة" },
        description: { fr: "Transfert à l'aéroport de Marrakech.", en: "Transfer to the Marrakech airport.", ar: "نقل إلى مطار مراكش." },
      },
    ],
    faqs: [
      {
        question: { fr: "Quelle est la différence avec la version 9 jours ?", en: "How is this different from the 9-day version?", ar: "ما الفرق بين هذه الجولة وجولة 9 أيام؟" },
        answer:   { fr: "Mêmes points forts désert et Fès, sans la boucle Chefchaouen — idéal si votre emploi du temps est limité d'un jour.", en: "Same desert and Fes highlights, without the extra Chefchaouen loop — a good fit if your schedule is one day tighter.", ar: "نفس معالم الصحراء وفاس، دون حلقة شفشاون الإضافية — مناسب إذا كان جدولك الزمني أضيق بيوم واحد." },
      },
      {
        question: { fr: "Le tour se termine-t-il à Marrakech ?", en: "Does the tour end back in Marrakech?", ar: "هل تنتهي الجولة في مراكش؟" },
        answer:   { fr: "Oui, ce circuit est une boucle qui commence et se termine à Marrakech.", en: "Yes, this route is a loop starting and ending in Marrakech.", ar: "نعم، هذا المسار عبارة عن حلقة تبدأ وتنتهي في مراكش." },
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────
     6 — Aït Ben Haddou & Ouarzazate Day Trip
  ───────────────────────────────────────────────────────── */
  {
    slug:     "ait-ben-haddou-ouarzazate-day-trip",
    image:    "/images/aitBenHaddouKasbah.jpg",
    gallery:  ["/images/ouarzazate.jpg", "/images/road.jpg"],
    featured: false,
    days:     { fr: "1 Jour", en: "1 Day", ar: "يوم واحد" },
    daysNum:  1,
    title: {
      fr: "Excursion Aït Ben Haddou & Ouarzazate",
      en: "Ait Ben Haddou & Ouarzazate Day Trip",
      ar: "رحلة أيت بنحدو وورزازات",
    },
    short: {
      fr: "Le Hollywood d'Afrique et son ksar classé à l'UNESCO",
      en: "The Hollywood of Africa and its UNESCO ksar",
      ar: "هوليوود أفريقيا وقصرها المصنف في اليونسكو",
    },
    intro: {
      fr: "Une excursion depuis Marrakech à travers le col de Tizi n'Tichka jusqu'à la kasbah d'Aït Ben Haddou classée à l'UNESCO et les studios de cinéma d'Ouarzazate.",
      en: "A day trip from Marrakech through the Tizi n'Tichka Pass to the UNESCO-listed Ait Ben Haddou kasbah and Ouarzazate's film studios.",
      ar: "رحلة من مراكش عبر ممر تيزي ن'تيشكا إلى قصبة أيت بنحدو المصنفة في اليونسكو واستوديوهات السينما في ورزازات.",
    },
    highlights: {
      fr: ["Col de montagne Tizi n'Tichka dans le Haut Atlas", "Kasbah d'Aït Ben Haddou classée Patrimoine UNESCO", "Studios de cinéma d'Ouarzazate (visite optionnelle)", "Paysages époustouflants des montagnes de l'Atlas"],
      en: ["Tizi n'Tichka High Atlas mountain pass", "Ait Ben Haddou UNESCO-listed kasbah", "Ouarzazate film studios (optional visit)", "Stunning Atlas mountain scenery"],
      ar: ["ممر تيزي ن'تيشكا في جبال الأطلس الكبير", "قصبة أيت بنحدو المدرجة في التراث العالمي لليونسكو", "استوديوهات السينما في ورزازات (زيارة اختيارية)", "مناظر جبال الأطلس الخلابة"],
    },
    itinerary: [
      {
        day:   { fr: "Journée complète", en: "Full Day", ar: "يوم كامل" },
        title: { fr: "مراكش → أيت بنحدو → ورزازات → مراكش", en: "Marrakech → Ait Ben Haddou → Ouarzazate → Marrakech", ar: "مراكش → أيت بنحدو → ورزازات → مراكش" },
        description: {
          fr: "Traversée du Haut Atlas via le col de Tizi n'Tichka (2 260 m), visite de la kasbah emblématique d'Aït Ben Haddou — site du Patrimoine Mondial de l'UNESCO ayant servi de décor à d'innombrables films — puis arrêt aux studios de cinéma d'Ouarzazate avant le retour à Marrakech.",
          en: "Cross the High Atlas via the Tizi n'Tichka Pass (2,260m), visit the iconic Ait Ben Haddou kasbah — a UNESCO World Heritage site that has served as a backdrop for countless films — then stop at the film studios in Ouarzazate before the return drive to Marrakech.",
          ar: "اعبر جبال الأطلس الكبير عبر ممر تيزي ن'تيشكا (2,260 م)، وزر قصبة أيت بنحدو الشهيرة — موقع تراث عالمي لليونسكو كان خلفية لأفلام لا تحصى — ثم توقف عند استوديوهات السينما في ورزازات قبل العودة إلى مراكش.",
        },
      },
    ],
    faqs: [
      {
        question: { fr: "Combien de temps dure le trajet via le col de Tizi n'Tichka ?", en: "How long is the drive over the Tizi n'Tichka Pass?", ar: "كم يستغرق الطريق عبر ممر تيزي ن'تيشكا؟" },
        answer:   { fr: "Environ 2h30 à 3h aller simple — un trajet montagnard panoramique avec des arrêts pour les photos en chemin.", en: "About 2.5 to 3 hours each way — a scenic mountain drive with stops for photos along the way.", ar: "حوالي 2.5 إلى 3 ساعات في اتجاه واحد — قيادة جبلية خلابة مع توقفات للتصوير على الطريق." },
      },
      {
        question: { fr: "Puis-je prolonger en séjour d'une nuit ?", en: "Can I extend this into an overnight trip?", ar: "هل يمكنني تمديد الرحلة لليل واحد؟" },
        answer:   { fr: "Oui — nous pouvons organiser une nuit à Ouarzazate ou dans la vallée du Dadès pour profiter au maximum de la région.", en: "Yes — we can arrange an overnight stay in Ouarzazate or the Dades Valley to make the most of the area.", ar: "نعم — يمكننا ترتيب المبيت في ورزازات أو وادي دادس للاستفادة القصوى من المنطقة." },
      },
    ],
  },
];

export function getTour(slug: string): Tour | undefined {
  return tours.find(t => t.slug === slug);
}
