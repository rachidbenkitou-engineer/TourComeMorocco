type I18n<T> = { fr: T; en: T; ar: T; it: T };

export type ExcursionDay = {
  day:         I18n<string>;
  title:       I18n<string>;
  description: I18n<string>;
};
export type ExcursionFaq = {
  question: I18n<string>;
  answer:   I18n<string>;
};

export type Excursion = {
  slug:        string;
  image:       string;
  durationKey: "journee" | "demijournee";
  duration:    I18n<string>;
  fromPrice?:  string;
  title:       I18n<string>;
  short:       I18n<string>;
  intro:       I18n<string>;
  highlights:  I18n<string[]>;
  itinerary:   ExcursionDay[];
  faqs:        ExcursionFaq[];
  featured?:   boolean;
};

export const excursions: Excursion[] = [
  /* ── 1. Vallée de l'Ourika ──────────────────────────── */
  {
    slug: "vallee-ourika-atlas",
    image: "/images/ourikaFalls.jpg",
    durationKey: "journee",
    duration: { fr: "Journée complète", en: "Full day", ar: "يوم كامل", it: "Giornata intera" },
    fromPrice: "€80",
    featured: true,
    title: {
      fr: "Vallée de l'Ourika et Atlas depuis Marrakech",
      en: "Ourika Valley and Atlas from Marrakech",
      ar: "وادي أوريكا والأطلس من مراكش",
      it: "Valle dell'Ourika e Atlante da Marrakech",
    },
    short: {
      fr: "Villages berbères, coopérative d'argan et cascades de Setti Fatma",
      en: "Berber villages, argan cooperative and Setti Fatma waterfalls",
      ar: "القرى البربرية وتعاونية أركان وشلالات سيتي فاطمة",
      it: "Villaggi berberi, cooperativa di argan e cascate di Setti Fatma",
    },
    intro: {
      fr: "À un peu plus d'une heure de Marrakech, la vallée de l'Ourika s'enfonce dans le Haut Atlas entre villages de terre rouge, noyers et rivière vive. Visitez une maison berbère et une coopérative d'argan, puis montez jusqu'aux cascades de Setti Fatma avant un déjeuner au bord de l'eau.",
      en: "Just over an hour from Marrakech, the Ourika Valley stretches into the High Atlas between red-earth villages, walnut trees and a lively river. Visit a Berber home and an argan cooperative, then climb to the Setti Fatma waterfalls before a lunch by the water.",
      ar: "على بعد ساعة من مراكش يمتد وادي أوريكا في قلب الأطلس الكبير بين قرى الطوب الأحمر وأشجار الجوز والنهر المتدفق. زوروا منزلاً بربرياً وتعاونية أركان، ثم صعدوا إلى شلالات سيتي فاطمة قبل الغداء على ضفاف النهر.",
      it: "A poco più di un'ora da Marrakech, la Valle dell'Ourika si addentra nell'Atlante tra villaggi di terra rossa, noci e un vivace fiume. Visitate una casa berbera e una cooperativa di argan, poi salite fino alle cascate di Setti Fatma prima di un pranzo sull'acqua.",
    },
    highlights: {
      fr: ["Cascades de Setti Fatma", "Visite d'une maison berbère", "Coopérative d'huile d'argan", "Panoramas du Haut Atlas", "Déjeuner au bord de la rivière"],
      en: ["Setti Fatma Waterfalls", "Visit to a Berber home", "Argan oil cooperative", "High Atlas panoramas", "Lunch by the riverside"],
      ar: ["شلالات سيتي فاطمة", "زيارة منزل بربري", "تعاونية زيت أركان", "مناظر الأطلس الكبير", "الغداء على ضفاف النهر"],
      it: ["Cascate di Setti Fatma", "Visita a una casa berbera", "Cooperativa di olio d'argan", "Panorami dell'Atlante", "Pranzo lungo il fiume"],
    },
    itinerary: [
      {
        day:         { fr: "Matin",            en: "Morning",       ar: "الصباح",         it: "Mattina"      },
        title:       { fr: "De Marrakech aux contreforts de l'Atlas", en: "From Marrakech to the Atlas foothills", ar: "من مراكش إلى سفوح الأطلس", it: "Da Marrakech ai piedi dell'Atlante" },
        description: { fr: "Prise en charge à votre riad ou hôtel et route vers le sud à travers la plaine du Haouz, face aux sommets enneigés de l'Atlas.", en: "Pick-up at your riad or hotel and south through the Haouz plain, facing the snowy Atlas peaks.", ar: "انطلاق من إقامتك واتجاه جنوباً عبر سهل الحوز تجاه قمم الأطلس المكسوة بالثلوج.", it: "Presa in carico al tuo riad o hotel e strada verso sud attraverso la pianura dello Haouz, di fronte alle vette innevate dell'Atlante." },
      },
      {
        day:         { fr: "Fin de matinée",   en: "Late morning",  ar: "أواخر الصباح",   it: "Fine mattina" },
        title:       { fr: "Village berbère et coopérative d'argan", en: "Berber village and argan cooperative", ar: "القرية البربرية وتعاونية أركان", it: "Villaggio berbero e cooperativa di argan" },
        description: { fr: "Thé dans une maison berbère traditionnelle et visite d'une coopérative féminine d'huile d'argan.", en: "Tea in a traditional Berber home and visit to a women's argan oil cooperative.", ar: "شاي في منزل بربري تقليدي وزيارة تعاونية نسائية لزيت أركان.", it: "Tè in una casa berbera tradizionale e visita a una cooperativa femminile di olio d'argan." },
      },
      {
        day:         { fr: "Midi",             en: "Noon",          ar: "الظهيرة",        it: "Mezzogiorno"  },
        title:       { fr: "Cascades de Setti Fatma", en: "Setti Fatma Waterfalls", ar: "شلالات سيتي فاطمة", it: "Cascate di Setti Fatma" },
        description: { fr: "Marche guidée jusqu'à la première cascade de Setti Fatma ; déjeuner dans un restaurant au bord de la rivière.", en: "Guided walk to the first Setti Fatma waterfall; lunch at a riverside restaurant.", ar: "تجوّل موجّه إلى الشلال الأول بسيتي فاطمة؛ غداء في مطعم على ضفاف النهر.", it: "Passeggiata guidata fino alla prima cascata di Setti Fatma; pranzo in un ristorante sul fiume." },
      },
      {
        day:         { fr: "Après-midi",       en: "Afternoon",     ar: "بعد الظهر",      it: "Pomeriggio"   },
        title:       { fr: "Retour à Marrakech", en: "Return to Marrakech", ar: "العودة إلى مراكش", it: "Ritorno a Marrakech" },
        description: { fr: "Descente de la vallée avec arrêts photo et dépose à votre hébergement.", en: "Descent of the valley with photo stops and drop-off at your accommodation.", ar: "النزول من الوادي مع توقفات للتصوير والعودة إلى إقامتك.", it: "Discesa della valle con soste fotografiche e rientro alla tua struttura." },
      },
    ],
    faqs: [
      {
        question: { fr: "À quelle distance se trouve la vallée de l'Ourika ?", en: "How far is the Ourika Valley?", ar: "كم تبعد وادي أوريكا؟", it: "A che distanza si trova la Valle dell'Ourika?" },
        answer:   { fr: "Environ 70 km, soit 1 h 15 de route jusqu'à Setti Fatma.", en: "About 70 km, around 1 h 15 drive to Setti Fatma.", ar: "حوالي 70 كم، ساعة و15 دقيقة حتى سيتي فاطمة.", it: "Circa 70 km, 1 h 15 di guida fino a Setti Fatma." },
      },
      {
        question: { fr: "La marche jusqu'aux cascades est-elle difficile ?", en: "Is the walk to the waterfalls difficult?", ar: "هل المشي حتى الشلالات صعب؟", it: "Il sentiero alle cascate è difficile?" },
        answer:   { fr: "Le sentier vers la première cascade est court mais rocailleux — prévoyez de bonnes chaussures.", en: "The trail to the first waterfall is short but rocky — wear good shoes. Local guides know the easiest path.", ar: "المسار إلى الشلال الأول قصير لكنه صخري — ارتدِ حذاءً جيداً. المرشدون المحليون يعرفون أسهل طريق.", it: "Il sentiero verso la prima cascata è breve ma sassoso — indossate scarpe adatte. Le guide locali conoscono il percorso più facile." },
      },
      {
        question: { fr: "Quel est le prix ?", en: "What is the price?", ar: "ما هو السعر؟", it: "Qual è il prezzo?" },
        answer:   { fr: "Le prix dépend de votre groupe et du véhicule — envoyez-nous une demande sur WhatsApp pour un devis rapide.", en: "The price depends on your group size and vehicle — send us a request on WhatsApp for a quick quote.", ar: "السعر يعتمد على حجم مجموعتك ونوع السيارة — أرسل لنا طلباً على واتساب للحصول على عرض سريع.", it: "Il prezzo dipende dalla dimensione del gruppo e dal veicolo — inviateci una richiesta su WhatsApp per un preventivo rapido." },
      },
    ],
  },

  /* ── 2. Cascades d'Ouzoud ───────────────────────────── */
  {
    slug: "cascades-ouzoud",
    image: "/images/ouzoud.jpg",
    durationKey: "journee",
    duration: { fr: "Journée complète", en: "Full day", ar: "يوم كامل", it: "Giornata intera" },
    fromPrice: "€160",
    featured: true,
    title: {
      fr: "Cascades d'Ouzoud depuis Marrakech",
      en: "Ouzoud Waterfalls from Marrakech",
      ar: "شلالات أوزود من مراكش",
      it: "Cascate di Ouzoud da Marrakech",
    },
    short: {
      fr: "Les plus hautes cascades du Maroc, oliveraies et singes sauvages",
      en: "Morocco's highest waterfalls, olive groves and wild Barbary macaques",
      ar: "أعلى شلالات المغرب وبساتين الزيتون والقرود البرية",
      it: "Le cascate più alte del Marocco, uliveti e scimmie berbere selvatiche",
    },
    intro: {
      fr: "Les cascades d'Ouzoud chutent de 110 mètres en trois paliers dans une gorge verdoyante d'oliviers et de caroubiers. Descendez les sentiers jusqu'au pied des chutes, faites un tour en barque sous les embruns et observez les singes magots qui vivent sur les falaises.",
      en: "The Ouzoud Falls tumble 110 metres in three tiers down a lush gorge of olive and carob trees. Follow the trails to the foot of the falls, take a boat ride in the mist and spot the Barbary macaques that live on the cliffs.",
      ar: "تتدفق شلالات أوزود من ارتفاع 110 أمتار على ثلاث درجات في خوانق خضراء تكسوها أشجار الزيتون والخروب. انزل المسارات حتى قدم الشلالات واستمتع برحلة بالقارب تحت الضباب وشاهد قرود المكاك البربري على الجرف الصخري.",
      it: "Le Cascate di Ouzoud precipitano per 110 metri su tre livelli in una gola lussureggiante di olivi e carrubi. Seguite i sentieri fino alla base delle cascate, fate un giro in barca nella nebbia e osservate le scimmie berbere che vivono sulle pareti rocciose.",
    },
    highlights: {
      fr: ["Cascade de 110 m sur trois paliers", "Sentier dans la gorge", "Barque sous les chutes", "Singes magots en liberté", "Déjeuner face aux cascades"],
      en: ["110 m waterfall on three tiers", "Gorge trail", "Boat ride under the falls", "Wild Barbary macaques", "Lunch facing the waterfalls"],
      ar: ["شلال 110 م على ثلاث درجات", "مسار في الخوانق", "رحلة بالقارب تحت الشلالات", "قرود المكاك البربري الحرة", "الغداء أمام الشلالات"],
      it: ["Cascata di 110 m su tre livelli", "Sentiero nella gola", "Giro in barca sotto le cascate", "Scimmie berbere selvatiche", "Pranzo di fronte alle cascate"],
    },
    itinerary: [
      {
        day:         { fr: "Matin",          en: "Morning",      ar: "الصباح",       it: "Mattina"     },
        title:       { fr: "De Marrakech à Ouzoud", en: "From Marrakech to Ouzoud", ar: "من مراكش إلى أوزود", it: "Da Marrakech a Ouzoud" },
        description: { fr: "Prise en charge à votre hébergement et environ 2 h 30 de route à travers la campagne des contreforts du Moyen Atlas.", en: "Pick-up at your accommodation and about 2 h 30 drive through the Middle Atlas foothills countryside.", ar: "انطلاق من إقامتك وحوالي 2 ساعة و30 دقيقة عبر ريف سفوح الأطلس المتوسط.", it: "Presa in carico alla tua struttura e circa 2 h 30 di strada attraverso la campagna dei piedi del Medio Atlante." },
      },
      {
        day:         { fr: "Fin de matinée", en: "Late morning", ar: "أواخر الصباح", it: "Fine mattina" },
        title:       { fr: "Sentier jusqu'au pied des chutes", en: "Trail to the foot of the falls", ar: "المسار حتى قدم الشلالات", it: "Sentiero fino alla base delle cascate" },
        description: { fr: "Descente par le sentier, entre moulins et points de vue, jusqu'au bas des cascades.", en: "Descent by path, between mills and viewpoints, to the bottom of the falls.", ar: "النزول عبر المسار بين الطواحين ونقاط المشاهدة حتى قدم الشلالات.", it: "Discesa lungo il sentiero, tra mulini e punti panoramici, fino alla base delle cascate." },
      },
      {
        day:         { fr: "Midi",           en: "Noon",         ar: "الظهيرة",      it: "Mezzogiorno" },
        title:       { fr: "Barque et déjeuner", en: "Boat ride and lunch", ar: "القارب والغداء", it: "Giro in barca e pranzo" },
        description: { fr: "Tour en barque facultatif sous les embruns et déjeuner sur une terrasse face à l'eau.", en: "Optional boat ride in the spray and lunch on a terrace facing the water.", ar: "جولة اختيارية بالقارب تحت الرذاذ والغداء على تراس أمام الماء.", it: "Giro in barca facoltativo nella nebbia delle cascate e pranzo su una terrazza affacciata sull'acqua." },
      },
      {
        day:         { fr: "Après-midi",     en: "Afternoon",    ar: "بعد الظهر",    it: "Pomeriggio"  },
        title:       { fr: "Singes magots et retour", en: "Barbary macaques and return", ar: "قرود المكاك والعودة", it: "Scimmie berbere e ritorno" },
        description: { fr: "Observation des singes sauvages en remontant, puis route vers Marrakech.", en: "Spotting wild macaques on the way back, then drive back to Marrakech.", ar: "مشاهدة القرود البرية عند العودة، ثم العودة إلى مراكش.", it: "Avvistamento delle scimmie selvatiche durante la risalita, poi ritorno a Marrakech." },
      },
    ],
    faqs: [
      {
        question: { fr: "Combien de route jusqu'à Ouzoud ?", en: "How long is the drive to Ouzoud?", ar: "كم تستغرق الرحلة إلى أوزود؟", it: "Quanto dura il tragitto fino a Ouzoud?" },
        answer:   { fr: "Environ 150 km, soit 2 h 30 dans chaque sens — c'est la plus longue des excursions classiques depuis Marrakech.", en: "About 150 km, 2 h 30 each way — the longest of the classic day trips from Marrakech.", ar: "حوالي 150 كم، 2 ساعة و30 دقيقة في كل اتجاه — أطول الرحلات الكلاسيكية من مراكش.", it: "Circa 150 km, 2 h 30 in ogni senso — la più lunga delle escursioni classiche da Marrakech." },
      },
      {
        question: { fr: "Peut-on se baigner à Ouzoud ?", en: "Can you swim at Ouzoud?", ar: "هل يمكن السباحة في أوزود؟", it: "Si può nuotare a Ouzoud?" },
        answer:   { fr: "La baignade est possible dans certains bassins aux beaux jours ; suivez les consignes locales.", en: "Swimming is possible in some pools when the weather is fine; follow local guidelines.", ar: "السباحة ممكنة في بعض البرك عند الطقس الجيد؛ اتبع التعليمات المحلية.", it: "Il nuoto è possibile in alcune vasche nelle belle giornate; seguite le indicazioni locali." },
      },
      {
        question: { fr: "Quel est le prix ?", en: "What is the price?", ar: "ما هو السعر؟", it: "Qual è il prezzo?" },
        answer:   { fr: "Le prix dépend de votre groupe et du véhicule — envoyez-nous une demande sur WhatsApp pour un devis.", en: "Price depends on your group and vehicle — send us a request on WhatsApp for a quote.", ar: "السعر يعتمد على مجموعتك والسيارة — أرسل لنا طلباً على واتساب للحصول على عرض.", it: "Il prezzo dipende dal gruppo e dal veicolo — inviateci una richiesta su WhatsApp per un preventivo." },
      },
    ],
  },

  /* ── 3. Désert d'Agafay ─────────────────────────────── */
  {
    slug: "desert-agafay-coucher-soleil",
    image: "/images/agafay.jpg",
    durationKey: "demijournee",
    duration: { fr: "Demi-journée", en: "Half day", ar: "نصف يوم", it: "Mezza giornata" },
    fromPrice: "€70",
    featured: true,
    title: {
      fr: "Coucher de soleil et dromadaire dans le désert d'Agafay",
      en: "Agafay Desert Sunset and Camel Ride",
      ar: "غروب الشمس وركوب الجمال في صحراء أكافاي",
      it: "Tramonto e cammello nel deserto di Agafay",
    },
    short: {
      fr: "Désert de pierre, balade à dromadaire au coucher du soleil et dîner sous les étoiles",
      en: "Stone desert, camel ride at sunset and dinner under the stars",
      ar: "صحراء حجرية وركوب الجمال عند الغروب وعشاء تحت النجوم",
      it: "Deserto di pietra, giro in cammello al tramonto e cena sotto le stelle",
    },
    intro: {
      fr: "À seulement 40 minutes de Marrakech, l'Agafay offre un paysage lunaire de collines pâles face au Haut Atlas. Balade à dos de dromadaire au coucher du soleil, puis thé ou dîner dans un camp avant de rentrer en ville sous les étoiles.",
      en: "Only 40 minutes from Marrakech, the Agafay offers a lunar landscape of pale hills facing the High Atlas. Camel ride at sunset, then tea or dinner at a desert camp before returning to the city under the stars.",
      ar: "على بعد 40 دقيقة فقط من مراكش تقدم أكافاي منظراً قمرياً من التلال الشاحبة أمام الأطلس الكبير. ركوب الجمال عند الغروب، ثم الشاي أو العشاء في مخيم قبل العودة إلى المدينة تحت النجوم.",
      it: "A soli 40 minuti da Marrakech, l'Agafay offre un paesaggio lunare di colline pallide di fronte all'Atlante. Giro in cammello al tramonto, poi tè o cena in un campo nel deserto prima di rientrare in città sotto le stelle.",
    },
    highlights: {
      fr: ["Dromadaire au coucher du soleil", "Vue sur le Haut Atlas", "Dîner au camp du désert", "Lac Lalla Takerkoust", "Tout près de Marrakech"],
      en: ["Camel ride at sunset", "View of the High Atlas", "Desert camp dinner", "Lalla Takerkoust Lake", "Close to Marrakech"],
      ar: ["ركوب الجمال عند الغروب", "إطلالة على الأطلس الكبير", "عشاء في مخيم الصحراء", "بحيرة لالة تكركوست", "قريب من مراكش"],
      it: ["Giro in cammello al tramonto", "Vista sull'Atlante", "Cena al campo del deserto", "Lago Lalla Takerkoust", "Vicino a Marrakech"],
    },
    itinerary: [
      {
        day:         { fr: "Après-midi",     en: "Afternoon",  ar: "بعد الظهر",      it: "Pomeriggio" },
        title:       { fr: "De Marrakech à l'Agafay", en: "From Marrakech to the Agafay", ar: "من مراكش إلى أكافاي", it: "Da Marrakech all'Agafay" },
        description: { fr: "Prise en charge à votre riad ou hôtel et courte route vers le sud-ouest en passant par le lac Lalla Takerkoust.", en: "Pick-up at your riad or hotel and a short drive south-west past Lalla Takerkoust lake.", ar: "انطلاق من رياضك أو فندقك وقيادة قصيرة جنوباً غرباً عبر بحيرة لالة تكركوست.", it: "Presa in carico al tuo riad o hotel e breve tragitto verso sud-ovest passando per il lago Lalla Takerkoust." },
      },
      {
        day:         { fr: "Coucher du soleil", en: "Sunset",   ar: "غروب الشمس",    it: "Tramonto"   },
        title:       { fr: "Balade à dromadaire", en: "Camel ride", ar: "ركوب الجمال", it: "Giro in cammello" },
        description: { fr: "Traversée des collines pierreuses quand la lumière se fait dorée et que les sommets de l'Atlas rosissent.", en: "Crossing the stony hills as the light turns golden and Atlas peaks turn pink.", ar: "عبور التلال الحجرية والضوء يتحول ذهبياً وقمم الأطلس تحمرّ.", it: "Attraversamento delle colline pietrose mentre la luce diventa dorata e le vette dell'Atlante si tingono di rosa." },
      },
      {
        day:         { fr: "Soir",           en: "Evening",    ar: "المساء",         it: "Sera"       },
        title:       { fr: "Camp du désert", en: "Desert camp", ar: "مخيم الصحراء",   it: "Campo del deserto" },
        description: { fr: "Thé à la menthe ou dîner dans un camp, souvent avec musique autour du feu.", en: "Mint tea or dinner at a camp, often with music around the fire.", ar: "شاي بالنعناع أو عشاء في مخيم، غالباً مع موسيقى حول النار.", it: "Tè alla menta o cena in un campo, spesso con musica intorno al fuoco." },
      },
      {
        day:         { fr: "Nuit",           en: "Night",      ar: "الليل",          it: "Notte"      },
        title:       { fr: "Retour à Marrakech", en: "Return to Marrakech", ar: "العودة إلى مراكش", it: "Ritorno a Marrakech" },
        description: { fr: "Route du retour vers votre hébergement, environ 40 minutes.", en: "Return drive to your accommodation, about 40 minutes.", ar: "العودة إلى إقامتك، حوالي 40 دقيقة.", it: "Tragitto di ritorno verso la tua struttura, circa 40 minuti." },
      },
    ],
    faqs: [
      {
        question: { fr: "L'Agafay est-il un vrai désert de sable ?", en: "Is the Agafay a real sand desert?", ar: "هل أكافاي صحراء رملية حقيقية؟", it: "L'Agafay è un vero deserto di sabbia?" },
        answer:   { fr: "C'est un désert de pierre aux collines ondulées, pas de dunes — pour les grandes dunes, il faut aller à Merzouga.", en: "It is a stone desert of rolling hills, not dunes — for big dunes you need to go to Merzouga.", ar: "إنها صحراء حجرية ذات تلال متموجة وليس كثباناً — للكثبان الكبيرة عليك الذهاب إلى مرزوقة.", it: "È un deserto di pietra con colline ondulate, non dune — per le grandi dune bisogna andare a Merzouga." },
      },
      {
        question: { fr: "Peut-on ajouter du quad ?", en: "Can you add quad biking?", ar: "هل يمكن إضافة رحلة كواد؟", it: "Si può aggiungere il quad?" },
        answer:   { fr: "Oui, le quad est possible dans l'Agafay ; indiquez-le dans les notes de réservation.", en: "Yes, quad biking is possible in the Agafay; mention it in the booking notes.", ar: "نعم يمكن ركوب الكواد في أكافاي؛ اذكره في ملاحظات الحجز.", it: "Sì, il quad è possibile nell'Agafay; indicarlo nelle note della prenotazione." },
      },
      {
        question: { fr: "Quel est le prix ?", en: "What is the price?", ar: "ما هو السعر؟", it: "Qual è il prezzo?" },
        answer:   { fr: "Le prix dépend des activités et de votre groupe — demandez-nous un devis sur WhatsApp.", en: "Price depends on activities and group size — ask us for a quote on WhatsApp.", ar: "السعر يعتمد على الأنشطة وحجم مجموعتك — اسألنا عن عرض السعر على واتساب.", it: "Il prezzo dipende dalle attività e dalla dimensione del gruppo — chiedeteci un preventivo su WhatsApp." },
      },
    ],
  },

  /* ── 4. Imlil et Toubkal ────────────────────────────── */
  {
    slug: "imlil-toubkal-atlas",
    image: "/images/imlil.jpg",
    durationKey: "journee",
    duration: { fr: "Journée complète", en: "Full day", ar: "يوم كامل", it: "Giornata intera" },
    fromPrice: "€140",
    featured: true,
    title: {
      fr: "Imlil et parc national du Toubkal depuis Marrakech",
      en: "Imlil and Toubkal National Park from Marrakech",
      ar: "إملي والمنتزه الوطني للتوبقال من مراكش",
      it: "Imlil e Parco Nazionale del Toubkal da Marrakech",
    },
    short: {
      fr: "Randonnée dans le Haut Atlas jusqu'aux villages berbères sous le plus haut sommet d'Afrique du Nord",
      en: "Hiking in the High Atlas to Berber villages below North Africa's highest peak",
      ar: "المشي في الأطلس الكبير إلى القرى البربرية أسفل أعلى قمة في شمال أفريقيا",
      it: "Trekking nell'Atlante verso villaggi berberi sotto la vetta più alta del Nord Africa",
    },
    intro: {
      fr: "Partez au cœur du Haut Atlas jusqu'à Imlil, village de montagne au pied du Jebel Toubkal (4 167 m). Marchez avec un guide de montagne local entre noyers et cultures en terrasses jusqu'au village d'Aroumd, partagez un déjeuner berbère et profitez des sommets tout autour.",
      en: "Head deep into the High Atlas to Imlil, a mountain village at the foot of Jebel Toubkal (4,167 m). Walk with a local mountain guide among walnut trees and terraced fields to the village of Aroumd, share a Berber lunch and enjoy the surrounding summits.",
      ar: "انطلق في قلب الأطلس الكبير إلى إملي، قرية جبلية عند سفح جبل توبقال (4167 م). تجوّل مع مرشد جبلي محلي بين أشجار الجوز والحقول المدرجة حتى قرية أرومد، شارك في غداء بربري واستمتع بالقمم المحيطة.",
      it: "Avventuratevi nel cuore dell'Atlante fino a Imlil, villaggio di montagna ai piedi del Jebel Toubkal (4.167 m). Camminate con una guida locale tra noci e campi terrazzati fino al villaggio di Aroumd, condividete un pranzo berbero e godete delle cime circostanti.",
    },
    highlights: {
      fr: ["Parc national du Toubkal", "Randonnée guidée jusqu'à Aroumd", "Déjeuner dans un village berbère", "Gorges de Moulay Brahim", "Panoramas du Haut Atlas"],
      en: ["Toubkal National Park", "Guided hike to Aroumd", "Berber lunch in a mountain village", "Moulay Brahim gorge", "High Atlas panoramas"],
      ar: ["المنتزه الوطني للتوبقال", "رحلة مشي موجهة إلى أرومد", "غداء بربري في قرية جبلية", "خوانق مولاي إبراهيم", "مناظر الأطلس الكبير"],
      it: ["Parco Nazionale del Toubkal", "Escursione guidata ad Aroumd", "Pranzo berbero in un villaggio di montagna", "Gole di Moulay Brahim", "Panorami dell'Atlante"],
    },
    itinerary: [
      {
        day:         { fr: "Matin",          en: "Morning",      ar: "الصباح",       it: "Mattina"      },
        title:       { fr: "De Marrakech à Asni et Imlil", en: "From Marrakech to Asni and Imlil", ar: "من مراكش إلى أسني وإملي", it: "Da Marrakech ad Asni e Imlil" },
        description: { fr: "Prise en charge à votre hébergement et environ 1 h 30 par les gorges de Moulay Brahim et le bourg d'Asni.", en: "Pick-up at your accommodation and about 1 h 30 via Moulay Brahim gorge and Asni village.", ar: "انطلاق من إقامتك وحوالي ساعة ونصف عبر خوانق مولاي إبراهيم وقرية أسني.", it: "Presa in carico alla tua struttura e circa 1 h 30 attraverso le gole di Moulay Brahim e il paese di Asni." },
      },
      {
        day:         { fr: "Fin de matinée", en: "Late morning", ar: "أواخر الصباح", it: "Fine mattina" },
        title:       { fr: "Randonnée jusqu'à Aroumd", en: "Hike to Aroumd", ar: "المشي حتى أرومد", it: "Escursione ad Aroumd" },
        description: { fr: "2 à 3 heures de marche avec un guide local dans la vallée jusqu'au village berbère d'Aroumd, face au massif du Toubkal.", en: "2 to 3-hour walk with a local guide in the valley to the Berber village of Aroumd, facing the Toubkal massif.", ar: "2 إلى 3 ساعات مشي مع مرشد محلي في الوادي حتى قرية أرومد البربرية أمام جبل توبقال.", it: "2-3 ore di cammino con guida locale nella valle fino al villaggio berbero di Aroumd, di fronte al massiccio del Toubkal." },
      },
      {
        day:         { fr: "Midi",           en: "Noon",         ar: "الظهيرة",      it: "Mezzogiorno"  },
        title:       { fr: "Déjeuner berbère", en: "Berber lunch", ar: "الغداء البربري", it: "Pranzo berbero" },
        description: { fr: "Déjeuner avec vue dans un gîte du village — tajine et thé à la menthe.", en: "Lunch with a view in a village gite — tagine and mint tea.", ar: "الغداء مع إطلالة في بيت ضيافة بالقرية — طاجين وشاي بالنعناع.", it: "Pranzo con vista in un gite del villaggio — tajine e tè alla menta." },
      },
      {
        day:         { fr: "Après-midi",     en: "Afternoon",    ar: "بعد الظهر",    it: "Pomeriggio"   },
        title:       { fr: "Retour à Marrakech", en: "Return to Marrakech", ar: "العودة إلى مراكش", it: "Ritorno a Marrakech" },
        description: { fr: "Descente vers Imlil et route du retour vers la ville.", en: "Descent to Imlil and return drive to the city.", ar: "النزول إلى إملي والعودة إلى المدينة.", it: "Discesa a Imlil e ritorno in città." },
      },
    ],
    faqs: [
      {
        question: { fr: "La randonnée est-elle difficile ?", en: "Is the hike difficult?", ar: "هل رحلة المشي صعبة؟", it: "L'escursione è difficile?" },
        answer:   { fr: "C'est une marche facile à modérée de 2 à 3 heures sur des sentiers de montagne ; le rythme s'adapte à votre groupe.", en: "It is an easy to moderate 2–3-hour walk on mountain trails; the pace adapts to your group.", ar: "إنها رحلة مشي سهلة إلى معتدلة من 2 إلى 3 ساعات على مسارات جبلية؛ الإيقاع يتكيف مع مجموعتك.", it: "È una passeggiata facile o moderata di 2-3 ore su sentieri di montagna; il ritmo si adatta al gruppo." },
      },
      {
        question: { fr: "Peut-on gravir le Toubkal en une journée ?", en: "Can you climb Toubkal in a day?", ar: "هل يمكن تسلق التوبقال في يوم واحد؟", it: "Si può scalare il Toubkal in un giorno?" },
        answer:   { fr: "Non — l'ascension du Toubkal se fait généralement en 2 jours. Cette excursion est une randonnée à la journée dans la vallée.", en: "No — the Toubkal ascent is usually a 2-day trip. This excursion is a valley day hike.", ar: "لا — تسلق التوبقال يستغرق عادةً يومين. هذه الرحلة هي مشي يومي في الوادي.", it: "No — la salita al Toubkal di solito richiede 2 giorni. Questa escursione è una camminata giornaliera in valle." },
      },
      {
        question: { fr: "Quel est le prix ?", en: "What is the price?", ar: "ما هو السعر؟", it: "Qual è il prezzo?" },
        answer:   { fr: "Le prix dépend de votre groupe et du guide de montagne — demandez-nous sur WhatsApp.", en: "Price depends on your group and mountain guide — ask us on WhatsApp.", ar: "السعر يعتمد على مجموعتك والمرشد الجبلي — اسألنا على واتساب.", it: "Il prezzo dipende dal gruppo e dalla guida di montagna — chiedeteci su WhatsApp." },
      },
    ],
  },

  /* ── 5. Aït Ben Haddou et Ouarzazate ───────────────── */
  {
    slug: "ait-ben-haddou-ouarzazate",
    image: "/images/aitBenHaddou.jpg",
    durationKey: "journee",
    duration: { fr: "Journée complète", en: "Full day", ar: "يوم كامل", it: "Giornata intera" },
    fromPrice: "€70",
    title: {
      fr: "Aït Ben Haddou et Ouarzazate depuis Marrakech",
      en: "Aït Ben Haddou and Ouarzazate from Marrakech",
      ar: "أيت بنحدو وورزازات من مراكش",
      it: "Aït Ben Haddou e Ouarzazate da Marrakech",
    },
    short: {
      fr: "Par le col du Tizi n'Tichka jusqu'à la kasbah UNESCO et la capitale du cinéma",
      en: "Over the Tizi n'Tichka pass to the UNESCO ksar and the film capital",
      ar: "عبر ممر تيزي نتيشكا إلى القصر المدرج في اليونسكو وعاصمة السينما",
      it: "Sul passo del Tizi n'Tichka fino al ksar UNESCO e alla capitale del cinema",
    },
    intro: {
      fr: "Traversez le Haut Atlas par le spectaculaire col du Tizi n'Tichka (2 260 m) jusqu'au ksar de terre d'Aït Ben Haddou, classé à l'UNESCO et décor de nombreux films. Continuez jusqu'à Ouarzazate, la « porte du désert », avant de rentrer à Marrakech.",
      en: "Cross the High Atlas via the spectacular Tizi n'Tichka pass (2,260 m) to the earthen ksar of Aït Ben Haddou, a UNESCO World Heritage Site and film set for many productions. Continue to Ouarzazate, the 'gate of the desert', before returning to Marrakech.",
      ar: "اعبر الأطلس الكبير عبر ممر تيزي نتيشكا المذهل (2260 م) وصولاً إلى قصر أيت بنحدو الترابي المدرج في اليونسكو وديكور أفلام عديدة. واصل إلى ورزازات 'باب الصحراء' قبل العودة إلى مراكش.",
      it: "Attraversate l'Atlante via lo spettacolare passo del Tizi n'Tichka (2.260 m) fino al ksar di terra di Aït Ben Haddou, Patrimonio UNESCO e scenografia di numerosi film. Continuate fino a Ouarzazate, la 'porta del deserto', prima di tornare a Marrakech.",
    },
    highlights: {
      fr: ["Col du Tizi n'Tichka (2 260 m)", "Ksar d'Aït Ben Haddou (UNESCO)", "Kasbah de Taourirt", "Studios de cinéma de Ouarzazate", "Villages du Haut Atlas"],
      en: ["Tizi n'Tichka pass (2,260 m)", "Aït Ben Haddou ksar (UNESCO)", "Taourirt kasbah", "Ouarzazate film studios", "High Atlas villages"],
      ar: ["ممر تيزي نتيشكا (2260 م)", "قصر أيت بنحدو (اليونسكو)", "قصبة تاوريرت", "استوديوهات سينما ورزازات", "قرى الأطلس الكبير"],
      it: ["Passo del Tizi n'Tichka (2.260 m)", "Ksar di Aït Ben Haddou (UNESCO)", "Kasbah di Taourirt", "Studi cinematografici di Ouarzazate", "Villaggi dell'Atlante"],
    },
    itinerary: [
      {
        day:         { fr: "Tôt le matin",   en: "Early morning", ar: "مبكراً",          it: "Mattino presto" },
        title:       { fr: "Col du Tizi n'Tichka", en: "Tizi n'Tichka pass", ar: "ممر تيزي نتيشكا", it: "Passo del Tizi n'Tichka" },
        description: { fr: "Prise en charge à Marrakech et montée à travers villages berbères et lacets jusqu'au plus haut col routier du Haut Atlas.", en: "Pick-up in Marrakech and climb through Berber villages and hairpin bends to the highest road pass in the High Atlas.", ar: "انطلاق من مراكش والتسلق عبر قرى بربرية ومنعرجات حتى أعلى ممر بري في الأطلس الكبير.", it: "Presa in carico a Marrakech e salita attraverso villaggi berberi e tornanti fino al valico stradale più alto dell'Atlante." },
      },
      {
        day:         { fr: "Fin de matinée", en: "Late morning",  ar: "أواخر الصباح",  it: "Fine mattina"   },
        title:       { fr: "Aït Ben Haddou (UNESCO)", en: "Aït Ben Haddou (UNESCO)", ar: "أيت بنحدو (اليونسكو)", it: "Aït Ben Haddou (UNESCO)" },
        description: { fr: "Traversée de la rivière et montée à travers les kasbahs de terre du ksar jusqu'au grenier, au sommet, pour la vue.", en: "Cross the river and climb through the earthen kasbahs of the ksar to the granary at the top for the view.", ar: "عبر النهر واصعد عبر القصبات الطينية للقصر حتى المخزن في الأعلى للاستمتاع بالمنظر.", it: "Attraversate il fiume e salite attraverso le kasbah di terra del ksar fino al granaio in cima per il panorama." },
      },
      {
        day:         { fr: "Après-midi",     en: "Afternoon",     ar: "بعد الظهر",      it: "Pomeriggio"     },
        title:       { fr: "Ouarzazate", en: "Ouarzazate", ar: "ورزازات", it: "Ouarzazate" },
        description: { fr: "Déjeuner, puis la kasbah de Taourirt et visite facultative des studios de cinéma.", en: "Lunch, then the Taourirt kasbah and optional visit to the film studios.", ar: "الغداء، ثم قصبة تاوريرت وزيارة اختيارية لاستوديوهات السينما.", it: "Pranzo, poi la kasbah di Taourirt e visita facoltativa agli studi cinematografici." },
      },
      {
        day:         { fr: "Soir",           en: "Evening",       ar: "المساء",          it: "Sera"           },
        title:       { fr: "Retour à Marrakech", en: "Return to Marrakech", ar: "العودة إلى مراكش", it: "Ritorno a Marrakech" },
        description: { fr: "Retour par le col et dépose à votre hébergement.", en: "Return via the pass and drop-off at your accommodation.", ar: "العودة عبر الممر والإيصال إلى إقامتك.", it: "Ritorno attraverso il passo e rientro alla tua struttura." },
      },
    ],
    faqs: [
      {
        question: { fr: "Est-ce une longue journée ?", en: "Is it a long day?", ar: "هل هو يوم طويل؟", it: "È una giornata lunga?" },
        answer:   { fr: "Oui — environ 4 heures de route dans chaque sens. Pour profiter du sud plus tranquillement, voyez nos circuits désert de 3 jours.", en: "Yes — about 4 hours of driving each way. For a more relaxed southern experience, see our 3-day desert circuits.", ar: "نعم — حوالي 4 ساعات قيادة في كل اتجاه. للاستمتاع بالجنوب بهدوء، انظر إلى دوراتنا الصحراوية لمدة 3 أيام.", it: "Sì — circa 4 ore di guida in ogni senso. Per vivere il sud con più calma, scoprite i nostri circuiti deserto di 3 giorni." },
      },
      {
        question: { fr: "Puis-je continuer vers le désert ?", en: "Can I continue to the desert?", ar: "هل يمكنني مواصلة الرحلة إلى الصحراء؟", it: "Posso continuare verso il deserto?" },
        answer:   { fr: "Oui — cet itinéraire est la première étape de nos circuits Marrakech – Merzouga.", en: "Yes — this itinerary is the first stage of our Marrakech–Merzouga circuits.", ar: "نعم — هذا المسار هو المرحلة الأولى من دوراتنا مراكش–مرزوقة.", it: "Sì — questo itinerario è la prima tappa dei nostri circuiti Marrakech–Merzouga." },
      },
      {
        question: { fr: "Quel est le prix ?", en: "What is the price?", ar: "ما هو السعر؟", it: "Qual è il prezzo?" },
        answer:   { fr: "Le prix dépend de votre groupe et du véhicule — envoyez-nous une demande sur WhatsApp.", en: "Price depends on your group and vehicle — send us a request on WhatsApp.", ar: "السعر يعتمد على مجموعتك والسيارة — أرسل لنا طلباً على واتساب.", it: "Il prezzo dipende dal gruppo e dal veicolo — inviateci una richiesta su WhatsApp." },
      },
    ],
  },

  /* ── 6. Montgolfière ────────────────────────────────── */
  {
    slug: "montgolfiere-lever-soleil",
    image: "/images/hotAirBalloon.jpg",
    durationKey: "demijournee",
    duration: { fr: "Demi-journée", en: "Half day", ar: "نصف يوم", it: "Mezza giornata" },
    fromPrice: "€175",
    title: {
      fr: "Vol en montgolfière au lever du soleil à Marrakech",
      en: "Hot Air Balloon Ride at Sunrise over Marrakech",
      ar: "رحلة المنطاد عند شروق الشمس فوق مراكش",
      it: "Volo in mongolfiera all'alba su Marrakech",
    },
    short: {
      fr: "Lever du soleil sur la palmeraie et l'Atlas, puis petit-déjeuner berbère",
      en: "Sunrise over the palmery and Atlas, then a traditional Berber breakfast",
      ar: "شروق الشمس فوق النخيل والأطلس، ثم إفطار بربري تقليدي",
      it: "Alba sulla palmeraie e sull'Atlante, poi colazione berbera tradizionale",
    },
    intro: {
      fr: "Une prise en charge avant l'aube vous emmène au site de décollage, hors de Marrakech, pour un vol en montgolfière au lever du soleil au-dessus de la palmeraie et des contreforts de l'Atlas, suivi d'un petit-déjeuner berbère traditionnel à l'atterrissage.",
      en: "A pre-dawn pick-up takes you to the launch site outside Marrakech for a hot air balloon flight at sunrise over the palmery and Atlas foothills, followed by a traditional Berber breakfast on landing.",
      ar: "تأخذك رحلة قبل الفجر إلى موقع الإقلاع خارج مراكش للطيران بالمنطاد عند شروق الشمس فوق النخيل وسفوح الأطلس، يليها إفطار بربري تقليدي عند الهبوط.",
      it: "Un trasferimento prima dell'alba vi porta al sito di decollo fuori Marrakech per un volo in mongolfiera all'alba sopra la palmeraie e i piedi dell'Atlante, seguito da una colazione berbera tradizionale all'atterraggio.",
    },
    highlights: {
      fr: ["Vol au lever du soleil", "Vue sur la palmeraie et l'Atlas", "Petit-déjeuner berbère traditionnel", "Prise en charge avant l'aube", "Retour en fin de matinée"],
      en: ["Sunrise flight", "View over palmery and Atlas", "Traditional Berber breakfast", "Pre-dawn pick-up", "Return in late morning"],
      ar: ["رحلة عند الشروق", "إطلالة على النخيل والأطلس", "إفطار بربري تقليدي", "انطلاق قبل الفجر", "العودة في أواخر الصباح"],
      it: ["Volo all'alba", "Vista su palmeraie e Atlante", "Colazione berbera tradizionale", "Presa in carico prima dell'alba", "Ritorno a fine mattina"],
    },
    itinerary: [
      {
        day:         { fr: "Avant l'aube",   en: "Before dawn",  ar: "قبل الفجر",     it: "Prima dell'alba"  },
        title:       { fr: "Prise en charge à Marrakech", en: "Pick-up in Marrakech", ar: "الاستقبال في مراكش", it: "Presa in carico a Marrakech" },
        description: { fr: "Votre chauffeur vient vous chercher à votre riad ou hôtel et vous conduit au site de décollage.", en: "Your driver picks you up at your riad or hotel and takes you to the launch site.", ar: "يأتي سائقك لاصطحابك من رياضك أو فندقك ويقودك إلى موقع الإقلاع.", it: "Il vostro autista vi prende al riad o all'hotel e vi porta al sito di decollo." },
      },
      {
        day:         { fr: "Lever du soleil", en: "Sunrise",      ar: "شروق الشمس",    it: "Alba"             },
        title:       { fr: "Vol en montgolfière", en: "Hot air balloon flight", ar: "رحلة المنطاد", it: "Volo in mongolfiera" },
        description: { fr: "Assistez au gonflage et au décollage, puis survolez villages, palmeraies et contreforts de l'Atlas au lever du jour.", en: "Watch the inflation and launch, then soar over villages, palmeries and Atlas foothills at dawn.", ar: "شاهد نفخ المنطاد والإقلاع، ثم حلّق فوق القرى والنخيل وسفوح الأطلس عند الفجر.", it: "Assistete al gonfiaggio e al decollo, poi volate sopra villaggi, palmerie e piedi dell'Atlante all'alba." },
      },
      {
        day:         { fr: "Matin",          en: "Morning",      ar: "الصباح",         it: "Mattina"          },
        title:       { fr: "Petit-déjeuner berbère", en: "Berber breakfast", ar: "الإفطار البربري", it: "Colazione berbera" },
        description: { fr: "Petit-déjeuner avec thé à la menthe, pain et spécialités locales après l'atterrissage.", en: "Breakfast with mint tea, bread and local specialties after landing.", ar: "إفطار مع شاي بالنعناع وخبز وتخصصات محلية بعد الهبوط.", it: "Colazione con tè alla menta, pane e specialità locali dopo l'atterraggio." },
      },
      {
        day:         { fr: "Fin de matinée", en: "Late morning",  ar: "أواخر الصباح",  it: "Fine mattina"     },
        title:       { fr: "Retour à Marrakech", en: "Return to Marrakech", ar: "العودة إلى مراكش", it: "Ritorno a Marrakech" },
        description: { fr: "Retour à votre hébergement à temps pour profiter du reste de la journée.", en: "Return to your accommodation in time to enjoy the rest of the day.", ar: "العودة إلى إقامتك في الوقت المناسب للاستمتاع ببقية اليوم.", it: "Ritorno alla tua struttura in tempo per godersi il resto della giornata." },
      },
    ],
    faqs: [
      {
        question: { fr: "Le vol dépend-il de la météo ?", en: "Does the flight depend on the weather?", ar: "هل الرحلة تعتمد على الطقس؟", it: "Il volo dipende dalle condizioni meteorologiche?" },
        answer:   { fr: "Oui. Les vols dépendent du vent et de la météo ; l'opérateur peut reporter ou annuler pour votre sécurité.", en: "Yes. Flights depend on wind and weather; the operator may postpone or cancel for your safety.", ar: "نعم. تعتمد الرحلات على الرياح والطقس؛ قد يؤجل المشغل أو يلغي من أجل سلامتك.", it: "Sì. I voli dipendono dal vento e dal tempo; l'operatore può posticipare o annullare per la vostra sicurezza." },
      },
      {
        question: { fr: "Comment s'habiller ?", en: "What to wear?", ar: "ماذا أرتدي؟", it: "Cosa indossare?" },
        answer:   { fr: "En couches chaudes — les matinées sont fraîches avant le lever du soleil, même en été.", en: "Dress in warm layers — mornings are cool before sunrise, even in summer.", ar: "ارتدِ طبقات دافئة — الصباح بارد قبل شروق الشمس حتى في الصيف.", it: "Vestitevi a strati caldi — le mattine sono fresche prima dell'alba, anche in estate." },
      },
      {
        question: { fr: "Quel est le prix ?", en: "What is the price?", ar: "ما هو السعر؟", it: "Qual è il prezzo?" },
        answer:   { fr: "Les vols sont assurés par des opérateurs agréés ; demandez-nous les prix et disponibilités sur WhatsApp.", en: "Flights are operated by licensed operators; ask us for prices and availability on WhatsApp.", ar: "الرحلات تشغلها مشغلون معتمدون؛ اسألنا عن الأسعار والتوافر على واتساب.", it: "I voli sono gestiti da operatori autorizzati; chiedeteci prezzi e disponibilità su WhatsApp." },
      },
    ],
  },

  /* ── 7. Quad et dromadaire ──────────────────────────── */
  {
    slug: "quad-dromadaire-palmeraie",
    image: "/images/quadBiking.jpg",
    durationKey: "demijournee",
    duration: { fr: "Demi-journée", en: "Half day", ar: "نصف يوم", it: "Mezza giornata" },
    fromPrice: "€35",
    title: {
      fr: "Quad et dromadaire dans la palmeraie de Marrakech",
      en: "Quad Biking and Camel Ride in the Marrakech Palmery",
      ar: "الكواد وركوب الجمال في نخيل مراكش",
      it: "Quad e cammello nella Palmeraie di Marrakech",
    },
    short: {
      fr: "Pistes en quad et balade à dromadaire entre les palmiers, aux portes de la ville",
      en: "Quad tracks and camel ride between the palm trees, at the city's edge",
      ar: "مسارات الكواد وركوب الجمال بين النخيل على أطراف المدينة",
      it: "Piste in quad e giro in cammello tra le palme, alle porte della città",
    },
    intro: {
      fr: "Échangez les souks contre les pistes de la Palmeraie, l'immense palmeraie de Marrakech. Pilotez un quad sur les pistes et à travers les villages berbères, puis place à une balade plus paisible à dos de dromadaire entre les palmiers, avec une pause thé à la menthe.",
      en: "Swap the souks for the Palmeraie's tracks, the vast palm grove of Marrakech. Ride a quad on trails through Berber villages, then enjoy a peaceful camel ride between the palms, with a Berber tea break.",
      ar: "استبدل الأسواق بمسارات النخيل، واحة النخيل الشاسعة في مراكش. قُد كواداً على المسارات عبر قرى بربرية، ثم استمتع بركوب الجمال بين النخيل بهدوء مع استراحة للشاي البربري.",
      it: "Scambiate i souq per le piste della Palmeraie, la vasta palmeraie di Marrakech. Guidate un quad sui sentieri tra i villaggi berberi, poi godetevi un tranquillo giro in cammello tra le palme, con una pausa tè berbero.",
    },
    highlights: {
      fr: ["Balade guidée en quad", "Dromadaire entre les palmiers", "Pause thé berbère", "Tout près de la ville", "Le matin ou l'après-midi"],
      en: ["Guided quad ride", "Camel ride between palms", "Berber tea break", "Close to the city", "Morning or afternoon"],
      ar: ["جولة كواد موجهة", "ركوب الجمال بين النخيل", "استراحة شاي بربري", "قريب من المدينة", "الصباح أو بعد الظهر"],
      it: ["Giro guidato in quad", "Giro in cammello tra le palme", "Pausa tè berbero", "Vicino alla città", "Mattino o pomeriggio"],
    },
    itinerary: [
      {
        day:         { fr: "Départ",        en: "Departure",    ar: "الانطلاق",      it: "Partenza"   },
        title:       { fr: "Prise en charge à Marrakech", en: "Pick-up in Marrakech", ar: "الاستقبال في مراكش", it: "Presa in carico a Marrakech" },
        description: { fr: "Votre chauffeur vous conduit à la Palmeraie, à environ 20 minutes de la médina.", en: "Your driver takes you to the Palmeraie, about 20 minutes from the medina.", ar: "سائقك يأخذك إلى النخيل، على بعد حوالي 20 دقيقة من المدينة القديمة.", it: "Il vostro autista vi porta alla Palmeraie, a circa 20 minuti dalla medina." },
      },
      {
        day:         { fr: "Activité 1",    en: "Activity 1",   ar: "النشاط الأول",  it: "Attività 1" },
        title:       { fr: "Quad", en: "Quad biking", ar: "الكواد", it: "Quad" },
        description: { fr: "Briefing sécurité et équipement, puis balade guidée en quad sur les pistes de la palmeraie.", en: "Safety briefing and kit, then guided quad ride on the palmery tracks.", ar: "إحاطة السلامة والتجهيز، ثم جولة موجهة بالكواد على مسارات النخيل.", it: "Briefing di sicurezza e attrezzatura, poi giro guidato in quad sulle piste della palmeraie." },
      },
      {
        day:         { fr: "Pause",         en: "Break",        ar: "استراحة",       it: "Pausa"      },
        title:       { fr: "Thé dans une maison berbère", en: "Berber tea break", ar: "استراحة شاي في منزل بربري", it: "Pausa tè berbero" },
        description: { fr: "Thé à la menthe et pause dans une maison locale.", en: "Mint tea and a break in a local house.", ar: "شاي بالنعناع واستراحة في منزل محلي.", it: "Tè alla menta e pausa in una casa locale." },
      },
      {
        day:         { fr: "Activité 2",    en: "Activity 2",   ar: "النشاط الثاني", it: "Attività 2" },
        title:       { fr: "Dromadaire et retour", en: "Camel ride and return", ar: "ركوب الجمال والعودة", it: "Giro in cammello e ritorno" },
        description: { fr: "Balade tranquille à dos de dromadaire entre les palmiers, puis retour à votre hébergement.", en: "Peaceful camel ride between the palm trees, then return to your accommodation.", ar: "ركوب الجمال بهدوء بين النخيل، ثم العودة إلى إقامتك.", it: "Tranquillo giro in cammello tra le palme, poi rientro alla tua struttura." },
      },
    ],
    faqs: [
      {
        question: { fr: "Faut-il un permis pour le quad ?", en: "Do you need a licence for the quad?", ar: "هل تحتاج رخصة للكواد؟", it: "Serve una patente per il quad?" },
        answer:   { fr: "Aucun permis n'est nécessaire pour les balades guidées ; l'opérateur fournit un briefing et un casque.", en: "No licence is required for guided rides; the operator provides a briefing and helmet.", ar: "لا تحتاج رخصة للجولات الموجهة؛ المشغل يوفر إحاطة وخوذة.", it: "Nessuna patente richiesta per le escursioni guidate; l'operatore fornisce un briefing e un casco." },
      },
      {
        question: { fr: "Les enfants peuvent-ils participer ?", en: "Can children join?", ar: "هل يمكن للأطفال المشاركة؟", it: "Possono partecipare i bambini?" },
        answer:   { fr: "Les enfants montent généralement en passagers ou sur des quads plus petits, selon les règles de l'opérateur.", en: "Children usually ride as passengers or on smaller quads, depending on the operator's rules.", ar: "يركب الأطفال عادةً كركاب أو على كوادات أصغر، حسب قواعد المشغل.", it: "I bambini di solito viaggiano come passeggeri o su quad più piccoli, in base alle regole dell'operatore." },
      },
      {
        question: { fr: "Quel est le prix ?", en: "What is the price?", ar: "ما هو السعر؟", it: "Qual è il prezzo?" },
        answer:   { fr: "Le prix dépend de la durée et de votre groupe — demandez-nous sur WhatsApp.", en: "Price depends on duration and group size — ask us on WhatsApp.", ar: "السعر يعتمد على المدة وحجم مجموعتك — اسألنا على واتساب.", it: "Il prezzo dipende dalla durata e dalla dimensione del gruppo — chiedeteci su WhatsApp." },
      },
    ],
  },

  /* ── 8. Excursion Essaouira ─────────────────────────── */
  {
    slug: "marrakech-essaouira-journee",
    image: "/images/essaouiraPort.jpg",
    durationKey: "journee",
    duration: { fr: "Journée complète", en: "Full day", ar: "يوم كامل", it: "Giornata intera" },
    fromPrice: "€135",
    title: {
      fr: "Excursion d'une journée de Marrakech à Essaouira",
      en: "Day Trip from Marrakech to Essaouira",
      ar: "رحلة يوم كامل من مراكش إلى الصويرة",
      it: "Gita di un giorno da Marrakech a Essaouira",
    },
    short: {
      fr: "Découvrez la charmante ville côtière d'Essaouira",
      en: "Discover the charming wind-swept coastal town of Essaouira",
      ar: "اكتشف مدينة الصويرة الساحلية الخلابة التي تعصف بها الرياح",
      it: "Scopri la deliziosa città costiera ventosa di Essaouira",
    },
    intro: {
      fr: "Une journée reposante loin de la chaleur et de l'agitation de Marrakech, sur la côte atlantique, dans la médina blanche et balayée par les vents d'Essaouira et son port de pêche.",
      en: "A relaxing day away from the heat and bustle of Marrakech, on the Atlantic coast in the white, wind-swept medina of Essaouira and its working fishing port.",
      ar: "يوم مريح بعيداً عن حرارة مراكش وصخبها، على ساحل الأطلسي في المدينة العتيقة البيضاء لمدينة الصويرة التي تعصف بها الرياح وميناء صيدها النشط.",
      it: "Una giornata rilassante lontano dal calore e dal trambusto di Marrakech, sulla costa atlantica nella medina bianca e ventosa di Essaouira e nel suo porto di pesca attivo.",
    },
    highlights: {
      fr: ["Médina et remparts d'Essaouira classés à l'UNESCO", "Le port de pêche en activité et ses grillades de poisson frais", "Temps libre pour flâner dans les souks et les galeries d'art", "Transport privé aller-retour depuis Marrakech en une journée"],
      en: ["UNESCO-listed Essaouira medina and ramparts", "The working fishing port and fresh grilled fish", "Free time in the souks and art galleries", "Private round-trip transfer from Marrakech in a day"],
      ar: ["المدينة العتيقة وأسوار الصويرة المدرجة في اليونسكو", "ميناء الصيد النشط والأسماك المشوية الطازجة", "وقت حر للتجول في الأسواق وصالات الفن", "نقل خاص ذهاباً وإياباً من مراكش في يوم واحد"],
      it: ["Medina e mura di Essaouira patrimonio UNESCO", "Il porto di pesca attivo e pesce fresco alla griglia", "Tempo libero nei souq e nelle gallerie d'arte", "Transfer privato andata e ritorno da Marrakech in un giorno"],
    },
    itinerary: [
      {
        day:         { fr: "Journée complète", en: "Full day",  ar: "يوم كامل",  it: "Giornata intera" },
        title:       { fr: "Marrakech → Essaouira → Marrakech", en: "Marrakech → Essaouira → Marrakech", ar: "مراكش ← الصويرة ← مراكش", it: "Marrakech → Essaouira → Marrakech" },
        description: { fr: "Départ de Marrakech le matin pour un trajet d'environ 2h30 vers Essaouira. Passez la journée à explorer la médina classée à l'UNESCO, le port de pêche et les remparts surplombant l'Atlantique, avec du temps libre pour déjeuner et flâner dans les souks, avant de retourner à Marrakech en soirée.", en: "Leave Marrakech in the morning for about 2h30 to Essaouira. Spend the day exploring the UNESCO medina, fishing port and Atlantic ramparts, with free time for lunch and souks, before returning to Marrakech in the evening.", ar: "غادر مراكش صباحاً لرحلة 2 ساعة و30 دقيقة إلى الصويرة. اقضِ اليوم في استكشاف المدينة العتيقة المدرجة في اليونسكو وميناء الصيد وأسوار الأطلسي مع وقت حر للغداء والأسواق، قبل العودة إلى مراكش مساءً.", it: "Partite da Marrakech al mattino per circa 2h30 verso Essaouira. Trascorrete la giornata esplorando la medina UNESCO, il porto di pesca e le mura atlantiche, con tempo libero per pranzo e souq, prima di tornare a Marrakech la sera." },
      },
    ],
    faqs: [
      {
        question: { fr: "Combien de temps dure le trajet entre Marrakech et Essaouira ?", en: "How long is the drive between Marrakech and Essaouira?", ar: "كم تستغرق الرحلة بين مراكش والصويرة؟", it: "Quanto dura il tragitto tra Marrakech e Essaouira?" },
        answer:   { fr: "Environ 2h30 dans chaque sens sur une bonne route directe — tout à fait confortable pour une excursion d'une journée.", en: "About 2h30 each way on a good direct road — quite comfortable for a day trip.", ar: "حوالي 2 ساعة و30 دقيقة في كل اتجاه على طريق مباشر جيد — مريح جداً لرحلة يوم.", it: "Circa 2h30 in ogni senso su una buona strada diretta — molto comodo per una gita di un giorno." },
      },
      {
        question: { fr: "Le déjeuner est-il inclus ?", en: "Is lunch included?", ar: "هل الغداء مشمول؟", it: "Il pranzo è incluso?" },
        answer:   { fr: "Le déjeuner n'est pas inclus dans le prix fixe, mais votre chauffeur peut vous recommander et vous emmener dans un restaurant de fruits de mer réputé près du port.", en: "Lunch is not included in the fixed price, but your driver can recommend and take you to a reputable seafood restaurant near the port.", ar: "الغداء غير مشمول في السعر الثابت، لكن سائقك يمكنه التوصية بمطعم مأكولات بحرية مشهور قرب الميناء وأخذك إليه.", it: "Il pranzo non è incluso nel prezzo fisso, ma il vostro autista può consigliarvi e portarvi in un noto ristorante di pesce vicino al porto." },
      },
      {
        question: { fr: "Puis-je passer la nuit à Essaouira au lieu de rentrer le jour même ?", en: "Can I spend the night in Essaouira instead of returning the same day?", ar: "هل يمكنني المبيت في الصويرة بدلاً من العودة في نفس اليوم؟", it: "Posso fermarmi a dormire a Essaouira invece di tornare in giornata?" },
        answer:   { fr: "Oui — indiquez-le simplement lors de la réservation et nous transformerons l'excursion en transfert privé aller simple.", en: "Yes — just mention it when booking and we'll convert the excursion into a one-way private transfer.", ar: "نعم — فقط أشر إلى ذلك عند الحجز وسنحول الرحلة إلى نقل خاص ذهاباً فقط.", it: "Sì — indicatelo semplicemente alla prenotazione e trasformeremo l'escursione in un transfer privato di sola andata." },
      },
    ],
  },

  /* ── 9. Oukaimeden ──────────────────────────────────── */
  {
    slug: "oukaimeden-ski-atlas",
    image: "/images/atlasHiking.jpg",
    durationKey: "journee",
    duration: { fr: "Journée complète", en: "Full day", ar: "يوم كامل", it: "Giornata intera" },
    fromPrice: "€100",
    title: {
      fr: "Oukaimeden — station de ski et randonnée dans le Haut Atlas",
      en: "Oukaimeden — Ski Resort and Hiking in the High Atlas",
      ar: "أوكايمدن — محطة التزلج والمشي في الأطلس الكبير",
      it: "Oukaimeden — Stazione sciistica e trekking nell'Atlante",
    },
    short: {
      fr: "La plus haute station de ski d'Afrique, à 2 600 m d'altitude, accessible en une heure depuis Marrakech",
      en: "Africa's highest ski resort, at 2,600 m altitude, less than an hour from Marrakech",
      ar: "أعلى محطة تزلج في أفريقيا على ارتفاع 2600 م، على بعد أقل من ساعة من مراكش",
      it: "La stazione sciistica più alta dell'Africa a 2.600 m, a meno di un'ora da Marrakech",
    },
    intro: {
      fr: "Perché à 2 600 m d'altitude dans le Haut Atlas, Oukaimeden est la station de ski la plus haute d'Afrique. En été, le site se transforme en destination de randonnée et de trekking avec des panoramas à couper le souffle sur les sommets alentour. En hiver, les pistes enneigées accueillent skieurs et snowboardeurs. À moins d'une heure de Marrakech, c'est un contraste saisissant avec l'animation de la médina.",
      en: "Perched at 2,600 m in the High Atlas, Oukaimeden is Africa's highest ski resort. In summer the site transforms into a hiking and trekking destination with breathtaking panoramas over the surrounding summits. In winter the snow-covered slopes welcome skiers and snowboarders. Less than an hour from Marrakech, it provides a striking contrast with the animation of the medina.",
      ar: "متربع على ارتفاع 2600 م في الأطلس الكبير يُعدّ أوكايمدن أعلى محطة تزلج في أفريقيا. في الصيف يتحول الموقع إلى وجهة للمشي والتنزه مع مناظر خلابة على القمم المحيطة. في الشتاء تستقبل المنحدرات المكسوة بالثلوج لاعبي التزلج. على بعد أقل من ساعة من مراكش يقدم تناقضاً مذهلاً مع حيوية المدينة القديمة.",
      it: "Arroccata a 2.600 m nell'Atlante, Oukaimeden è la stazione sciistica più alta dell'Africa. In estate il sito si trasforma in una destinazione per il trekking con panorami mozzafiato sulle cime circostanti. In inverno le piste innevate accolgono sciatori e snowboarder. A meno di un'ora da Marrakech, offre un contrasto sorprendente con l'animazione della medina.",
    },
    highlights: {
      fr: ["La plus haute station de ski d'Afrique", "Panoramas sur le Haut Atlas à 2 600 m", "Randonnée guidée en été", "Ski et luge en hiver", "Villages berbères en chemin"],
      en: ["Africa's highest ski resort", "2,600 m Atlas panoramas", "Guided summer hiking", "Skiing and sledging in winter", "Berber villages along the way"],
      ar: ["أعلى محطة تزلج في أفريقيا", "مناظر الأطلس على ارتفاع 2600 م", "مشي موجه في الصيف", "التزلج والزحليقة في الشتاء", "قرى بربرية في الطريق"],
      it: ["La stazione sciistica più alta dell'Africa", "Panorami sull'Atlante a 2.600 m", "Trekking guidato in estate", "Sci e slittino in inverno", "Villaggi berberi lungo il percorso"],
    },
    itinerary: [
      {
        day:         { fr: "Matin",          en: "Morning",      ar: "الصباح",         it: "Mattina"     },
        title:       { fr: "De Marrakech vers les hauteurs", en: "From Marrakech to the heights", ar: "من مراكش نحو الارتفاعات", it: "Da Marrakech verso le altitudini" },
        description: { fr: "Prise en charge à votre hébergement et montée progressive à travers les contreforts berbères et les pinèdes.", en: "Pick-up at your accommodation and gradual ascent through the Berber foothills and pine forests.", ar: "انطلاق من إقامتك وصعود تدريجي عبر السفوح البربرية وغابات الصنوبر.", it: "Presa in carico alla tua struttura e salita progressiva attraverso le colline berbere e le foreste di pini." },
      },
      {
        day:         { fr: "Fin de matinée", en: "Late morning",  ar: "أواخر الصباح",  it: "Fine mattina" },
        title:       { fr: "Arrivée à 2 600 m", en: "Arrival at 2,600 m", ar: "الوصول إلى 2600 م", it: "Arrivo a 2.600 m" },
        description: { fr: "Découverte de la station, vue panoramique sur les sommets du Haut Atlas. En hiver : ski et luge sur les pistes. En été : randonnée guidée avec un guide local.", en: "Discovery of the resort and panoramic views of the High Atlas peaks. In winter: skiing and sledging. In summer: guided hiking with a local guide.", ar: "اكتشاف المحطة والمناظر البانورامية لقمم الأطلس الكبير. في الشتاء: التزلج والزحليقة. في الصيف: مشي موجه مع مرشد محلي.", it: "Scoperta della stazione e vista panoramica sulle vette dell'Atlante. In inverno: sci e slittino. In estate: escursione guidata con una guida locale." },
      },
      {
        day:         { fr: "Midi",           en: "Noon",         ar: "الظهيرة",        it: "Mezzogiorno"  },
        title:       { fr: "Déjeuner en altitude", en: "Lunch at altitude", ar: "الغداء على الارتفاع", it: "Pranzo in quota" },
        description: { fr: "Repas dans un refuge ou un restaurant de la station, face aux montagnes.", en: "Meal in a mountain refuge or resort restaurant, facing the mountains.", ar: "وجبة في ملجأ جبلي أو مطعم المحطة أمام الجبال.", it: "Pasto in un rifugio o in un ristorante della stazione, di fronte alle montagne." },
      },
      {
        day:         { fr: "Après-midi",     en: "Afternoon",    ar: "بعد الظهر",      it: "Pomeriggio"   },
        title:       { fr: "Villages berbères et retour", en: "Berber villages and return", ar: "القرى البربرية والعودة", it: "Villaggi berberi e ritorno" },
        description: { fr: "Descente en s'arrêtant dans un village berbère typique avant le retour à Marrakech.", en: "Descent with a stop at a typical Berber village before returning to Marrakech.", ar: "النزول مع توقف في قرية بربرية نموذجية قبل العودة إلى مراكش.", it: "Discesa con una sosta in un tipico villaggio berbero prima di tornare a Marrakech." },
      },
    ],
    faqs: [
      {
        question: { fr: "À quelle heure part-on pour Oukaimeden ?", en: "What time do we leave for Oukaimeden?", ar: "في أي وقت نغادر إلى أوكايمدن؟", it: "A che ora si parte per Oukaimeden?" },
        answer:   { fr: "Départ tôt le matin, vers 8 h, pour profiter au maximum de la journée en altitude.", en: "Departure early morning, around 8 a.m., to make the most of the day at altitude.", ar: "المغادرة في الصباح الباكر حوالي الساعة 8 للاستفادة القصوى من اليوم على الارتفاع.", it: "Partenza di buon mattino, intorno alle 8, per sfruttare al massimo la giornata in quota." },
      },
      {
        question: { fr: "Y a-t-il de la neige toute l'année ?", en: "Is there snow all year round?", ar: "هل يوجد ثلج طوال العام؟", it: "C'è neve tutto l'anno?" },
        answer:   { fr: "La neige est présente généralement de décembre à mars. En été, la montagne est verte et idéale pour la randonnée.", en: "Snow is generally present from December to March. In summer the mountain is green and ideal for hiking.", ar: "الثلج موجود عادةً من ديسمبر إلى مارس. في الصيف الجبل أخضر ومثالي للمشي.", it: "La neve è generalmente presente da dicembre a marzo. In estate la montagna è verde e ideale per il trekking." },
      },
      {
        question: { fr: "Faut-il prévoir des vêtements chauds ?", en: "Should we bring warm clothes?", ar: "هل يجب أن نحضر ملابس دافئة؟", it: "Dobbiamo portare abiti caldi?" },
        answer:   { fr: "Oui — même en été, les températures en altitude peuvent être fraîches. En hiver, habillez-vous chaudement en plusieurs couches.", en: "Yes — even in summer, temperatures at altitude can be cool. In winter, dress warmly in several layers.", ar: "نعم — حتى في الصيف يمكن أن تكون درجات الحرارة على الارتفاع باردة. في الشتاء ارتدِ طبقات دافئة عديدة.", it: "Sì — anche in estate le temperature in quota possono essere fresche. In inverno vestitevi caldi a più strati." },
      },
      {
        question: { fr: "Quel est le prix ?", en: "What is the price?", ar: "ما هو السعر؟", it: "Qual è il prezzo?" },
        answer:   { fr: "Le prix dépend de la saison et de votre groupe — contactez-nous sur WhatsApp pour un devis rapide.", en: "Price depends on the season and your group — contact us on WhatsApp for a quick quote.", ar: "السعر يعتمد على الموسم ومجموعتك — تواصل معنا على واتساب للحصول على عرض سريع.", it: "Il prezzo dipende dalla stagione e dal gruppo — contattateci su WhatsApp per un preventivo rapido." },
      },
    ],
  },

  /* ── 10. 3 Douyars berbères ─────────────────────────── */
  {
    slug: "trois-douyars-berberes",
    image: "/images/mideltAtlas.jpg",
    durationKey: "demijournee",
    duration: { fr: "Demi-journée", en: "Half day", ar: "نصف يوم", it: "Mezza giornata" },
    fromPrice: "€150",
    title: {
      fr: "Circuit des 3 Douyars berbères autour de Marrakech",
      en: "Circuit of 3 Berber Douyars around Marrakech",
      ar: "جولة القرى البربرية الثلاث حول مراكش",
      it: "Circuito dei 3 Douyar berberi intorno a Marrakech",
    },
    short: {
      fr: "Immersion authentique dans trois villages berbères traditionnels, artisanat et thé à la menthe",
      en: "Authentic immersion in three traditional Berber villages: crafts, weaving and mint tea",
      ar: "غمر أصيل في ثلاث قرى بربرية تقليدية: حرف ونسيج وشاي بالنعناع",
      it: "Immersione autentica in tre villaggi berberi tradizionali: artigianato, tessitura e tè alla menta",
    },
    intro: {
      fr: "À quelques kilomètres de Marrakech, loin des circuits touristiques, trois douyars (villages) berbères vous ouvrent leurs portes pour une immersion unique dans la vie rurale marocaine. Rencontrez les habitants, observez les femmes tisser à la main, découvrez les techniques ancestrales de poterie et repartez avec le souvenir inoubliable d'un thé à la menthe partagé autour d'un foyer.",
      en: "Just a few kilometres from Marrakech, away from tourist circuits, three Berber douyars (villages) open their doors for a unique dive into rural Moroccan life. Meet the residents, watch women weave by hand, discover ancestral pottery techniques and leave with the unforgettable memory of a shared mint tea around a hearth.",
      ar: "على بعد كيلومترات قليلة من مراكش، بعيداً عن الدوائر السياحية، تفتح ثلاثة دواوير بربرية أبوابها لغمر فريد في الحياة الريفية المغربية. التقِ بالسكان وشاهد النساء ينسجن يدوياً واكتشف تقنيات الفخار الأجدادية وعُد بذكرى لا تُنسى من شاي بالنعناع مشترك حول موقد.",
      it: "A pochi chilometri da Marrakech, lontano dai circuiti turistici, tre douyar berberi aprono le loro porte per un'immersione unica nella vita rurale marocchina. Incontrate gli abitanti, osservate le donne tessere a mano, scoprite le tecniche ancestrali della ceramica e ripartite con il ricordo indimenticabile di un tè alla menta condiviso attorno al focolare.",
    },
    highlights: {
      fr: ["Visite de trois douyars berbères authentiques", "Atelier de tissage traditionnel", "Démonstration de poterie", "Thé à la menthe et pâtisseries berbères", "Rencontre avec les habitants"],
      en: ["Visit to three authentic Berber douyars", "Traditional weaving workshop", "Pottery demonstration", "Mint tea and Berber pastries", "Meeting with local inhabitants"],
      ar: ["زيارة ثلاثة دواوير بربرية أصيلة", "ورشة نسيج تقليدية", "عرض الفخار", "شاي بالنعناع وحلويات بربرية", "لقاء مع السكان المحليين"],
      it: ["Visita a tre douyar berberi autentici", "Laboratorio di tessitura tradizionale", "Dimostrazione di ceramica", "Tè alla menta e dolci berberi", "Incontro con gli abitanti locali"],
    },
    itinerary: [
      {
        day:         { fr: "Matin",          en: "Morning",      ar: "الصباح",         it: "Mattina"      },
        title:       { fr: "Premier douar — tissage et argan", en: "First douar — weaving and argan", ar: "الدوار الأول — النسيج والأركان", it: "Primo douar — tessitura e argan" },
        description: { fr: "Prise en charge à votre hébergement. Premier village : rencontre avec une coopérative féminine, démonstration du métier à tisser et dégustation d'huile d'argan.", en: "Pick-up at your accommodation. First village: meeting with a women's cooperative, weaving loom demonstration and argan oil tasting.", ar: "انطلاق من إقامتك. القرية الأولى: لقاء مع تعاونية نسائية وعرض النول وتذوق زيت الأركان.", it: "Presa in carico alla tua struttura. Primo villaggio: incontro con una cooperativa femminile, dimostrazione del telaio e degustazione di olio d'argan." },
      },
      {
        day:         { fr: "Fin de matinée", en: "Late morning",  ar: "أواخر الصباح",  it: "Fine mattina" },
        title:       { fr: "Deuxième douar — poterie et four traditionnel", en: "Second douar — pottery and traditional kiln", ar: "الدوار الثاني — الفخار والفرن التقليدي", it: "Secondo douar — ceramica e forno tradizionale" },
        description: { fr: "Route vers un second village spécialisé dans la céramique berbère. Observation du tour de potier et des fours traditionnels.", en: "Road to a second village specialised in Berber ceramics. Observation of the potter's wheel and traditional kilns.", ar: "طريق إلى قرية ثانية متخصصة في الفخار البربري. مشاهدة دولاب الفخاري والأفران التقليدية.", it: "Strada verso un secondo villaggio specializzato in ceramica berbera. Osservazione del tornio del vasaio e dei forni tradizionali." },
      },
      {
        day:         { fr: "Midi",           en: "Noon",         ar: "الظهيرة",        it: "Mezzogiorno"  },
        title:       { fr: "Thé et déjeuner berbère", en: "Tea and Berber lunch", ar: "الشاي والغداء البربري", it: "Tè e pranzo berbero" },
        description: { fr: "Accueil dans une maison familiale pour un thé à la menthe et un déjeuner traditionnel (tagine, pain maison).", en: "Welcome in a family home for mint tea and a traditional lunch (tagine, home-made bread).", ar: "استقبال في منزل عائلي مع شاي بالنعناع وغداء تقليدي (طاجين وخبز محلي).", it: "Accoglienza in una casa di famiglia per tè alla menta e un pranzo tradizionale (tajine, pane fatto in casa)." },
      },
      {
        day:         { fr: "Après-midi",     en: "Afternoon",    ar: "بعد الظهر",      it: "Pomeriggio"   },
        title:       { fr: "Troisième douar et retour", en: "Third douar and return", ar: "الدوار الثالث والعودة", it: "Terzo douar e ritorno" },
        description: { fr: "Visite d'un troisième village avec une vue sur les oliveraies et les jardins irrigués. Retour à Marrakech en début d'après-midi.", en: "Visit to a third village with views over olive groves and irrigated gardens. Return to Marrakech in early afternoon.", ar: "زيارة دوار ثالث مع إطلالة على بساتين الزيتون والحدائق المسقية. العودة إلى مراكش في مطلع بعد الظهر.", it: "Visita a un terzo villaggio con vista sugli uliveti e i giardini irrigati. Ritorno a Marrakech nel primo pomeriggio." },
      },
    ],
    faqs: [
      {
        question: { fr: "Les visites sont-elles touristiques ou authentiques ?", en: "Are the visits touristy or authentic?", ar: "هل الزيارات سياحية أم أصيلة؟", it: "Le visite sono turistiche o autentiche?" },
        answer:   { fr: "Nous travaillons avec des familles locales qui nous reçoivent chez elles — ce ne sont pas des sites aménagés. L'expérience est vivante et sincère.", en: "We work with local families who receive us in their homes — these are not staged sites. The experience is lively and sincere.", ar: "نتعامل مع عائلات محلية تستقبلنا في منازلها — ليست مواقع مُعدّة. التجربة حيّة وصادقة.", it: "Lavoriamo con famiglie locali che ci ricevono in casa loro — non si tratta di siti allestiti. L'esperienza è viva e sincera." },
      },
      {
        question: { fr: "Le déjeuner est-il inclus ?", en: "Is lunch included?", ar: "هل الغداء مشمول؟", it: "Il pranzo è incluso?" },
        answer:   { fr: "Le déjeuner berbère chez l'habitant est inclus dans le programme.", en: "The Berber lunch at the host's home is included in the programme.", ar: "الغداء البربري في منزل المضيف مشمول في البرنامج.", it: "Il pranzo berbero a casa dell'ospite è incluso nel programma." },
      },
      {
        question: { fr: "Peut-on acheter de l'artisanat sur place ?", en: "Can you buy crafts on site?", ar: "هل يمكن شراء الحرف اليدوية في الموقع؟", it: "Si può acquistare artigianato sul posto?" },
        answer:   { fr: "Oui — tissus, poteries et huile d'argan sont en vente directement auprès des artisans, à des prix bien inférieurs à ceux des souks.", en: "Yes — fabrics, pottery and argan oil are for sale directly from the craftspeople, at prices well below the souk.", ar: "نعم — الأقمشة والفخار وزيت الأركان متاحة للبيع مباشرة من الحرفيين بأسعار أقل بكثير من الأسواق.", it: "Sì — tessuti, ceramiche e olio d'argan sono in vendita direttamente dagli artigiani, a prezzi ben al di sotto dei souq." },
      },
      {
        question: { fr: "Quel est le prix ?", en: "What is the price?", ar: "ما هو السعر؟", it: "Qual è il prezzo?" },
        answer:   { fr: "€150 par groupe, transport et déjeuner inclus — envoyez-nous une demande sur WhatsApp pour un devis selon la taille de votre groupe.", en: "From €150 per group, transport and lunch included — send us a request on WhatsApp for a quote based on your group size.", ar: "من 150 يورو للمجموعة، النقل والغداء مشمولان — أرسل لنا طلباً على واتساب للحصول على عرض حسب حجم مجموعتك.", it: "A partire da €150 per gruppo, trasporto e pranzo inclusi — inviateci una richiesta su WhatsApp per un preventivo in base alla dimensione del gruppo." },
      },
    ],
  },
];

export function getExcursion(slug: string): Excursion | undefined {
  return excursions.find(e => e.slug === slug);
}

export const featuredExcursions = excursions.filter(e => e.featured);
