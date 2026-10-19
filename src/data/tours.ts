type I18n<T> = { fr: T; en: T; ar: T; it: T };

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

  /* ── 1 — Marrakech → Essaouira Day Trip ── */
  {
    slug:     "marrakech-essaouira-day-trip",
    image:    "/images/essaouira.jpg",
    gallery:  ["/images/essaouiraPort.jpg", "/images/road.jpg"],
    featured: true,
    days:     { fr: "1 Jour", en: "1 Day", ar: "يوم واحد", it: "1 Giorno" },
    daysNum:  1,
    title: {
      fr: "Excursion d'une journée de Marrakech à Essaouira",
      en: "Marrakech to Essaouira Day Trip",
      ar: "رحلة يومية من مراكش إلى الصويرة",
      it: "Gita di un giorno da Marrakech a Essaouira",
    },
    short: {
      fr: "Découvrez la charmante ville côtière d'Essaouira",
      en: "Discover the charming coastal city of Essaouira",
      ar: "اكتشف مدينة الصويرة الساحلية الساحرة",
      it: "Scoprite la pittoresca città costiera atlantica di Essaouira",
    },
    intro: {
      fr: "Une journée reposante loin de la chaleur et de l'agitation de Marrakech, sur la côte atlantique, dans la médina blanche et balayée par les vents d'Essaouira et son port de pêche.",
      en: "A relaxed day away from Marrakech's heat and hustle, on the Atlantic coast in Essaouira's whitewashed, wind-swept medina and fishing port.",
      ar: "يوم هادئ بعيداً عن حرارة مراكش وصخبها، على الساحل الأطلسي في أسواق الصويرة البيضاء التي تداعبها الرياح وميناء الصيد الخاص بها.",
      it: "Una giornata rilassante lontano dalla calura e dal trambusto di Marrakech, sulla costa atlantica, nella medina imbiancata e ventosa di Essaouira e nel suo vivace porto dei pescatori.",
    },
    highlights: {
      fr: ["Médina et remparts d'Essaouira classés à l'UNESCO", "Le port de pêche en activité et ses grillades de poisson frais", "Temps libre pour flâner dans les souks et les galeries d'art", "Transport privé aller-retour depuis Marrakech en une journée"],
      en: ["Essaouira's UNESCO-listed medina and ramparts", "The working fishing port and fresh seafood grills", "Free time to browse the souks and art galleries", "Round-trip private transport from Marrakech in one day"],
      ar: ["المدينة القديمة وأسوار الصويرة المصنفة ضمن تراث اليونسكو", "ميناء الصيد النشط ومأكولات البحر الطازجة المشوية", "وقت حر للتجول في الأسواق ومعارض الفن", "نقل خاص ذهاباً وإياباً من مراكش في يوم واحد"],
      it: ["La medina e le mura di Essaouira patrimonio UNESCO", "Il porto dei pescatori attivo e le grigliate di pesce fresco", "Tempo libero per i souk e le gallerie d'arte", "Trasporto privato andata e ritorno da Marrakech in una giornata"],
    },
    itinerary: [
      {
        day:   { fr: "Journée complète", en: "Full Day", ar: "يوم كامل", it: "Giornata intera" },
        title: { fr: "Marrakech → Essaouira → Marrakech", en: "Marrakech → Essaouira → Marrakech", ar: "مراكش ← الصويرة ← مراكش", it: "Marrakech → Essaouira → Marrakech" },
        description: {
          fr: "Départ de Marrakech le matin pour un trajet d'environ 2h30 vers Essaouira. Passez la journée à explorer la médina classée à l'UNESCO, le port de pêche et les remparts surplombant l'Atlantique, avec du temps libre pour déjeuner et flâner dans les souks, avant de retourner à Marrakech en soirée.",
          en: "Depart Marrakech in the morning for the roughly 2.5-hour drive to Essaouira. Spend the day exploring the UNESCO-listed medina, the fishing port, and the ramparts overlooking the Atlantic, with free time for lunch and shopping in the souks, before returning to Marrakech in the evening.",
          ar: "انطلاق من مراكش صباحاً لرحلة تستغرق حوالي 2.5 ساعة نحو الصويرة. اقض اليوم في استكشاف المدينة القديمة المصنفة ضمن تراث اليونسكو، وميناء الصيد، والأسوار المطلة على المحيط الأطلسي، مع وقت حر لتناول الغداء والتسوق في الأسواق، قبل العودة إلى مراكش مساءً.",
          it: "Partenza da Marrakech al mattino per il tragitto di circa 2 ore e mezza verso Essaouira. Trascorrete la giornata esplorando la medina patrimonio UNESCO, il porto dei pescatori e le mura affacciate sull'Atlantico, con tempo libero per il pranzo e lo shopping nei souk, prima di tornare a Marrakech la sera.",
        },
      },
    ],
    faqs: [
      {
        question: { fr: "Combien de temps dure le trajet entre Marrakech et Essaouira ?", en: "How long is the drive from Marrakech to Essaouira?", ar: "كم تستغرق الرحلة من مراكش إلى الصويرة؟", it: "Quanto dura il tragitto da Marrakech a Essaouira?" },
        answer:   { fr: "Environ 2h30 dans chaque sens sur une bonne route directe — tout à fait confortable pour une excursion d'une journée.", en: "Around 2.5 hours each way on a good, direct road — comfortable enough as a day trip.", ar: "حوالي 2.5 ساعة في كل اتجاه عبر طريق جيد ومباشر — مريحة تماماً كرحلة يومية.", it: "Circa 2 ore e mezza in ciascun senso su una buona strada diretta — del tutto comodo per una gita di un giorno." },
      },
      {
        question: { fr: "Le déjeuner est-il inclus ?", en: "Is lunch included?", ar: "هل الغداء مشمول؟", it: "Il pranzo è incluso?" },
        answer:   { fr: "Le déjeuner n'est pas inclus dans le prix fixe, mais votre chauffeur peut vous recommander un restaurant de fruits de mer réputé près du port.", en: "Lunch isn't included in the fixed price, but your driver can recommend a well-regarded seafood restaurant near the port.", ar: "الغداء غير مشمول في السعر الثابت، لكن يمكن لسائقك أن ينصحك بمطعم مأكولات بحرية جيد قرب الميناء.", it: "Il pranzo non è incluso nel prezzo fisso, ma il vostro autista può consigliarvi un ottimo ristorante di pesce vicino al porto." },
      },
      {
        question: { fr: "Puis-je passer la nuit à Essaouira au lieu de rentrer le jour même ?", en: "Can I stay overnight in Essaouira instead of returning the same day?", ar: "هل يمكنني المبيت في الصويرة بدلاً من العودة في نفس اليوم؟", it: "Posso pernottare a Essaouira invece di tornare in giornata?" },
        answer:   { fr: "Oui — indiquez-le lors de la réservation et nous transformerons l'excursion en transfert privé aller simple.", en: "Yes — just let us know when booking and we'll adjust it to a one-way private transfer instead of a round-trip day tour.", ar: "نعم — فقط أخبرنا عند الحجز وسنحول الرحلة إلى نقل خاص باتجاه واحد.", it: "Sì — comunicatecelo al momento della prenotazione e trasformeremo l'escursione in un trasferimento privato di sola andata." },
      },
    ],
  },

  /* ── 2 — Chefchaouen Day Trip ── */
  {
    slug:     "chefchaouen-day-trip",
    image:    "/images/chefchaouen.jpg",
    gallery:  ["/images/chefchaouen.jpg", "/images/mountainRoad.jpg"],
    featured: true,
    days:     { fr: "1 Jour", en: "1 Day", ar: "يوم واحد", it: "1 Giorno" },
    daysNum:  1,
    title: {
      fr: "Excursion d'une journée à Chefchaouen",
      en: "Chefchaouen Day Trip",
      ar: "رحلة يومية إلى شفشاون",
      it: "Gita di un giorno a Chefchaouen",
    },
    short: {
      fr: "Visitez la ville bleue depuis Tanger ou Fès",
      en: "Visit the Blue City from Tangier or Fes",
      ar: "زيارة المدينة الزرقاء من طنجة أو فاس",
      it: "Visitate la Città Blu da Tangeri o Fes",
    },
    intro: {
      fr: "Une excursion d'une journée dans les montagnes du Rif pour flâner dans les rues bleues de Chefchaouen, facilement organisée depuis Tanger ou Fès.",
      en: "A day trip into the Rif Mountains to wander the blue-washed streets of Chefchaouen, easily arranged from either Tangier or Fes.",
      ar: "رحلة يومية إلى جبال الريف للتجول في شوارع شفشاون الزرقاء، يسهل تنظيمها من طنجة أو فاس.",
      it: "Una gita di un giorno nelle montagne del Rif per passeggiare tra i vicoli tinteggiati di blu di Chefchaouen, facilmente organizzabile da Tangeri o Fes.",
    },
    highlights: {
      fr: ["Médina bleue de Chefchaouen et la place principale Uta el-Hammam", "Paysages des montagnes du Rif pendant le trajet", "Temps libre pour des photos, des cafés et l'artisanat local", "Disponible en excursion depuis Tanger ou Fès"],
      en: ["Chefchaouen's blue medina and the main Plaza Uta el-Hammam", "Rif Mountain scenery along the drive", "Free time for photos, cafés, and local crafts shopping", "Available as a day trip from either Tangier or Fes"],
      ar: ["المدينة الزرقاء في شفشاون وساحة وطاء الحمام الرئيسية", "مناظر جبال الريف خلال الطريق", "وقت حر للتصوير والمقاهي والحرف المحلية", "متوفرة كرحلة يومية من طنجة أو فاس"],
      it: ["La medina blu di Chefchaouen e la piazza principale Uta el-Hammam", "I paesaggi delle montagne del Rif lungo il percorso", "Tempo libero per foto, caffè e artigianato locale", "Disponibile come gita giornaliera da Tangeri o Fes"],
    },
    itinerary: [
      {
        day:   { fr: "Journée complète", en: "Full Day", ar: "يوم كامل", it: "Giornata intera" },
        title: { fr: "Tanger ou Fès → Chefchaouen → Retour", en: "Tangier or Fes → Chefchaouen → Return", ar: "طنجة أو فاس ← شفشاون ← العودة", it: "Tangeri o Fes → Chefchaouen → Ritorno" },
        description: {
          fr: "Départ le matin pour la route panoramique à travers les montagnes du Rif. Passez plusieurs heures à explorer la médina bleue de Chefchaouen, le musée de la Kasbah et la place principale, avec du temps pour déjeuner, avant le retour vers votre ville de départ.",
          en: "Depart in the morning for the scenic drive into the Rif Mountains. Spend several hours exploring Chefchaouen's blue-painted medina, the Kasbah museum, and the main square, with time for lunch, before the return drive to your starting city.",
          ar: "الانطلاق صباحاً في طريق بانورامي عبر جبال الريف. اقض عدة ساعات في استكشاف المدينة الزرقاء في شفشاون، متحف القصبة، والساحة الرئيسية، مع وقت لتناول الغداء، قبل رحلة العودة إلى مدينة انطلاقك.",
          it: "Partenza al mattino per il panoramico percorso attraverso le montagne del Rif. Trascorrete alcune ore esplorando la medina tinteggiata di blu, il museo della Kasba e la piazza principale, con tempo per il pranzo, prima del rientro nella vostra città di partenza.",
        },
      },
    ],
    faqs: [
      {
        question: { fr: "Quelle ville de départ est la plus proche de Chefchaouen ?", en: "Which starting city is closer to Chefchaouen?", ar: "أي مدينة انطلاق أقرب إلى شفشاون؟", it: "Quale città di partenza è più vicina a Chefchaouen?" },
        answer:   { fr: "Tanger est plus proche (environ 2 heures) ; depuis Fès le trajet est plus long (environ 4 heures).", en: "Tangier is closer (around 2 hours); from Fes the drive is longer (around 4 hours).", ar: "طنجة أقرب (حوالي ساعتين)؛ من فاس تكون الرحلة أطول (حوالي 4 ساعات).", it: "Tangeri è più vicina (circa 2 ore); da Fes il percorso è più lungo (circa 4 ore)." },
      },
      {
        question: { fr: "Puis-je passer la nuit à Chefchaouen plutôt que de faire l'aller-retour ?", en: "Can I stay overnight in Chefchaouen instead?", ar: "هل يمكنني المبيت في شفشاون بدلاً من رحلة الذهاب والعودة؟", it: "Posso pernottare a Chefchaouen invece di fare l'andata e ritorno?" },
        answer:   { fr: "Oui, si vous préférez éviter un long aller-retour en une journée, nous pouvons l'organiser comme un transfert privé aller simple.", en: "Yes, if you'd rather not do a long round-trip in one day, we can arrange it as a one-way private transfer instead.", ar: "نعم، إذا كنت تفضل تجنب رحلة ذهاب وعودة طويلة في يوم واحد، يمكننا تنظيمها كنقل خاص باتجاه واحد.", it: "Sì, se preferite evitare un lungo andata e ritorno in un giorno, possiamo organizzarlo come trasferimento privato di sola andata." },
      },
      {
        question: { fr: "Chefchaouen vaut-elle une visite d'une journée ?", en: "Is Chefchaouen worth visiting as a day trip?", ar: "هل تستحق شفشاون زيارة يومية؟", it: "Vale la pena visitare Chefchaouen in gita giornaliera?" },
        answer:   { fr: "Oui — la majeure partie de la médina peut être vue confortablement en quelques heures, ce qui en fait une excursion populaire et facile à organiser.", en: "Yes — most of the town's medina can comfortably be seen in a few hours, making it a popular and manageable day trip.", ar: "نعم — يمكن مشاهدة معظم المدينة القديمة بشكل مريح خلال بضع ساعات، مما يجعلها رحلة يومية شائعة وسهلة التنظيم.", it: "Sì — la maggior parte della medina si può vedere comodamente in poche ore, rendendola una gita giornaliera popolare e ben gestibile." },
      },
    ],
  },

  /* ── 3 — Aït Ben Haddou & Ouarzazate Day Trip ── */
  {
    slug:     "ait-ben-haddou-ouarzazate-day-trip",
    image:    "/images/aitBenHaddouKasbah.jpg",
    gallery:  ["/images/ouarzazate.jpg", "/images/road.jpg"],
    featured: true,
    days:     { fr: "1 Jour", en: "1 Day", ar: "يوم واحد", it: "1 Giorno" },
    daysNum:  1,
    title: {
      fr: "Excursion Aït Ben Haddou & Ouarzazate",
      en: "Ait Ben Haddou & Ouarzazate Day Trip",
      ar: "رحلة أيت بنحدو وورزازات",
      it: "Gita di un giorno ad Aït Ben Haddou & Ouarzazate",
    },
    short: {
      fr: "Le Hollywood d'Afrique et son ksar classé à l'UNESCO",
      en: "The Hollywood of Africa and its UNESCO ksar",
      ar: "هوليوود أفريقيا وقصرها المصنف في اليونسكو",
      it: "La Hollywood d'Africa e il suo ksar patrimonio UNESCO",
    },
    intro: {
      fr: "Une excursion depuis Marrakech à travers le col de Tizi n'Tichka jusqu'à la kasbah d'Aït Ben Haddou classée à l'UNESCO et les studios de cinéma d'Ouarzazate.",
      en: "A day trip from Marrakech through the Tizi n'Tichka Pass to the UNESCO-listed Ait Ben Haddou kasbah and Ouarzazate's film studios.",
      ar: "رحلة من مراكش عبر ممر تيزي ن'تيشكا إلى قصبة أيت بنحدو المصنفة في اليونسكو واستوديوهات السينما في ورزازات.",
      it: "Una gita da Marrakech attraverso il Passo Tizi n'Tichka fino alla kasba di Aït Ben Haddou patrimonio UNESCO e agli studi cinematografici di Ouarzazate.",
    },
    highlights: {
      fr: ["Col de montagne Tizi n'Tichka dans le Haut Atlas", "Kasbah d'Aït Ben Haddou classée Patrimoine UNESCO", "Studios de cinéma d'Ouarzazate (visite optionnelle)", "Paysages époustouflants des montagnes de l'Atlas"],
      en: ["Tizi n'Tichka High Atlas mountain pass", "Ait Ben Haddou UNESCO-listed kasbah", "Ouarzazate film studios (optional visit)", "Stunning Atlas mountain scenery"],
      ar: ["ممر تيزي ن'تيشكا في جبال الأطلس الكبير", "قصبة أيت بنحدو المدرجة في التراث العالمي لليونسكو", "استوديوهات السينما في ورزازات (زيارة اختيارية)", "مناظر جبال الأطلس الخلابة"],
      it: ["Il passo alpino Tizi n'Tichka nell'Alto Atlante", "La kasba di Aït Ben Haddou patrimonio UNESCO", "Studi cinematografici di Ouarzazate (visita facoltativa)", "Paesaggi mozzafiato delle montagne dell'Atlante"],
    },
    itinerary: [
      {
        day:   { fr: "Journée complète", en: "Full Day", ar: "يوم كامل", it: "Giornata intera" },
        title: { fr: "Marrakech → Aït Ben Haddou → Ouarzazate → Marrakech", en: "Marrakech → Ait Ben Haddou → Ouarzazate → Marrakech", ar: "مراكش → أيت بنحدو → ورزازات → مراكش", it: "Marrakech → Aït Ben Haddou → Ouarzazate → Marrakech" },
        description: {
          fr: "Traversée du Haut Atlas via le col de Tizi n'Tichka (2 260 m), visite de la kasbah emblématique d'Aït Ben Haddou — site du Patrimoine Mondial de l'UNESCO ayant servi de décor à d'innombrables films — puis arrêt aux studios de cinéma d'Ouarzazate avant le retour à Marrakech.",
          en: "Cross the High Atlas via the Tizi n'Tichka Pass (2,260m), visit the iconic Ait Ben Haddou kasbah — a UNESCO World Heritage site that has served as a backdrop for countless films — then stop at the film studios in Ouarzazate before the return drive to Marrakech.",
          ar: "اعبر جبال الأطلس الكبير عبر ممر تيزي ن'تيشكا (2,260 م)، وزر قصبة أيت بنحدو الشهيرة — موقع تراث عالمي لليونسكو كان خلفية لأفلام لا تحصى — ثم توقف عند استوديوهات السينما في ورزازات قبل العودة إلى مراكش.",
          it: "Attraversate l'Alto Atlante con il Passo Tizi n'Tichka (2.260 m), visitate l'iconica kasba di Aït Ben Haddou — sito Patrimonio UNESCO che ha fatto da sfondo a innumerevoli film — poi fermatevi agli studi cinematografici di Ouarzazate prima del rientro a Marrakech.",
        },
      },
    ],
    faqs: [
      {
        question: { fr: "Combien de temps dure le trajet via le col de Tizi n'Tichka ?", en: "How long is the drive over the Tizi n'Tichka Pass?", ar: "كم يستغرق الطريق عبر ممر تيزي ن'تيشكا؟", it: "Quanto dura il percorso sul Passo Tizi n'Tichka?" },
        answer:   { fr: "Environ 2h30 à 3h aller simple — un trajet montagnard panoramique avec des arrêts pour les photos en chemin.", en: "About 2.5 to 3 hours each way — a scenic mountain drive with stops for photos along the way.", ar: "حوالي 2.5 إلى 3 ساعات في اتجاه واحد — قيادة جبلية خلابة مع توقفات للتصوير على الطريق.", it: "Circa 2 ore e mezza - 3 ore per senso — un panoramico percorso di montagna con soste per le foto." },
      },
      {
        question: { fr: "Puis-je prolonger en séjour d'une nuit ?", en: "Can I extend this into an overnight trip?", ar: "هل يمكنني تمديد الرحلة لليل واحد؟", it: "Posso prolungare in un soggiorno con pernottamento?" },
        answer:   { fr: "Oui — nous pouvons organiser une nuit à Ouarzazate ou dans la vallée du Dadès pour profiter au maximum de la région.", en: "Yes — we can arrange an overnight stay in Ouarzazate or the Dades Valley to make the most of the area.", ar: "نعم — يمكننا ترتيب المبيت في ورزازات أو وادي دادس للاستفادة القصوى من المنطقة.", it: "Sì — possiamo organizzare un pernottamento a Ouarzazate o nella Valle del Dadès per godere al meglio della zona." },
      },
    ],
  },

  /* ── 4 — 3-Day Marrakech → Merzouga Desert Tour ── */
  {
    slug:     "3-day-marrakech-merzouga-sahara-tour",
    image:    "/images/desertCamels.jpg",
    gallery:  ["/images/aitBenHaddouKasbah.jpg", "/images/dunes.jpg", "/images/desertCamels.jpg"],
    featured: true,
    days:     { fr: "3 Jours", en: "3 Days", ar: "3 أيام", it: "3 Giorni" },
    daysNum:  3,
    title: {
      fr: "Circuit désert de 3 jours de Marrakech à Merzouga",
      en: "3 Days Marrakech to Merzouga Desert Tour",
      ar: "جولة صحراوية لمدة 3 أيام من مراكش إلى مرزوكة",
      it: "Tour nel deserto di 3 giorni da Marrakech a Merzouga",
    },
    short: {
      fr: "Marrakech → Haut Atlas → Aït Ben Haddou → Dadès → Gorges du Todra → Merzouga",
      en: "Marrakech → High Atlas → Ait Ben Haddou → Dades → Todra Gorge → Merzouga (Sahara)",
      ar: "مراكش ← الأطلس الكبير ← آيت بن حدو ← دادس ← مضايق تودرا ← مرزوكة",
      it: "Marrakech → Alto Atlante → Aït Ben Haddou → Dadès → Gola di Todra → Merzouga (Sahara)",
    },
    intro: {
      fr: "Un circuit désert privé de trois jours au départ de Marrakech, à travers le Haut Atlas, Aït Ben Haddou, la vallée du Dadès et les gorges du Todra, pour finir par une balade à dos de chameau au coucher du soleil et un camp désertique à Merzouga.",
      en: "A three-day private desert tour from Marrakech through the High Atlas, Ait Ben Haddou, the Dades Valley and the Todra Gorge, ending with a sunset camel trek and a desert camp in Merzouga.",
      ar: "جولة صحراوية خاصة لثلاثة أيام من مراكش عبر الأطلس الكبير وآيت بن حدو ووادي دادس ومضايق تودرا، تنتهي بركوب الجمال عند الغروب ومخيم صحراوي في مرزوكة.",
      it: "Un tour privato di tre giorni nel deserto da Marrakech attraverso l'Alto Atlante, Aït Ben Haddou, la Valle del Dadès e la Gola di Todra, con arrivo a Merzouga per un'escursione al tramonto sui cammelli e un campo nel deserto.",
    },
    highlights: {
      fr: ["Transport privé avec chauffeur professionnel", "Kasbah d'Aït Ben Haddou (Patrimoine UNESCO)", "Vallée du Dadès et gorges du Todra", "Balade à dos de chameau à Merzouga", "Camp désertique au Sahara", "Coucher et lever de soleil dans le désert"],
      en: ["Private transportation with a professional driver", "Ait Ben Haddou UNESCO kasbah", "Dades Valley and Todra Gorge", "Camel trek in Merzouga", "Sahara desert camp", "Sunset and sunrise in the Sahara"],
      ar: ["نقل خاص مع سائق محترف", "قصبة آيت بن حدو (تراث اليونسكو)", "وادي دادس ومضايق تودرا", "ركوب الجمال في مرزوكة", "مخيم صحراوي", "غروب وشروق الشمس في الصحراء"],
      it: ["Trasporto privato con autista professionista", "Kasba di Aït Ben Haddou (Patrimonio UNESCO)", "Valle del Dadès e Gola di Todra", "Escursione in cammello a Merzouga", "Campo nel deserto del Sahara", "Tramonto e alba nel deserto"],
    },
    itinerary: [
      {
        day:   { fr: "Jour 1", en: "Day 1", ar: "اليوم 1", it: "Giorno 1" },
        title: { fr: "Marrakech → Aït Ben Haddou & Vallée du Dadès", en: "Marrakech to Ait Ben Haddou & Dades Valley", ar: "مراكش إلى آيت بن حدو ووادي دادس", it: "Marrakech → Aït Ben Haddou & Valle del Dadès" },
        description: {
          fr: "Traversée du Haut Atlas, visite d'Aït Ben Haddou et d'Ouarzazate, et nuit dans la vallée du Dadès.",
          en: "Cross the High Atlas, visit Ait Ben Haddou and Ouarzazate, and overnight in the Dades Valley.",
          ar: "عبور الأطلس الكبير، زيارة آيت بن حدو وورزازات، وليلة في وادي دادس.",
          it: "Attraversate l'Alto Atlante, visitate Aït Ben Haddou e Ouarzazate, pernottamento nella Valle del Dadès.",
        },
      },
      {
        day:   { fr: "Jour 2", en: "Day 2", ar: "اليوم 2", it: "Giorno 2" },
        title: { fr: "Gorges du Todra → Merzouga", en: "Todra Gorge to Merzouga", ar: "مضايق تودرا إلى مرزوكة", it: "Gola di Todra → Merzouga" },
        description: {
          fr: "Visite des gorges du Todra, puis route vers Merzouga pour une balade à dos de chameau au coucher du soleil et une nuit en camp désertique.",
          en: "Visit the Todra Gorge, then drive to Merzouga for a sunset camel trek and an overnight desert camp.",
          ar: "زيارة مضايق تودرا، ثم التوجه إلى مرزوكة لركوب الجمال عند الغروب وليلة في مخيم صحراوي.",
          it: "Visitate la Gola di Todra, poi proseguite verso Merzouga per un'escursione al tramonto sui cammelli e una notte nel campo del deserto.",
        },
      },
      {
        day:   { fr: "Jour 3", en: "Day 3", ar: "اليوم 3", it: "Giorno 3" },
        title: { fr: "Lever de soleil & retour à Marrakech", en: "Sunrise & return to Marrakech", ar: "شروق الشمس والعودة إلى مراكش", it: "Alba & ritorno a Marrakech" },
        description: {
          fr: "Lever de soleil sur les dunes, puis retour à Marrakech via Ouarzazate et le Haut Atlas.",
          en: "Sunrise over the dunes, then drive back to Marrakech via Ouarzazate and the High Atlas.",
          ar: "شروق الشمس فوق الكثبان، ثم العودة إلى مراكش عبر ورزازات والأطلس الكبير.",
          it: "Alba sulle dune, poi ritorno a Marrakech via Ouarzazate e l'Alto Atlante.",
        },
      },
    ],
    faqs: [
      {
        question: { fr: "Est-ce un circuit privé ?", en: "Is this a private tour?", ar: "هل هذه جولة خاصة؟", it: "È un tour privato?" },
        answer:   { fr: "Oui — votre véhicule et votre chauffeur sont réservés exclusivement pour votre groupe.", en: "Yes — your vehicle and driver are booked exclusively for your group.", ar: "نعم — سيارتك وسائقك محجوزان حصرياً لمجموعتك.", it: "Sì — il veicolo e l'autista sono prenotati esclusivamente per il vostro gruppo." },
      },
      {
        question: { fr: "Qu'est-ce qui est inclus ?", en: "What's included?", ar: "ماذا يشمل السعر؟", it: "Cosa è incluso?" },
        answer:   { fr: "Un véhicule privé climatisé, un chauffeur professionnel anglophone et de l'eau en bouteille tout au long du circuit.", en: "A private, air-conditioned vehicle, a professional English-speaking driver, and bottled water throughout.", ar: "سيارة خاصة مكيفة، وسائق محترف يتحدث الإنجليزية، ومياه معبأة طوال الرحلة.", it: "Un veicolo privato con aria condizionata, un autista professionista di lingua inglese e acqua in bottiglia per tutto il tour." },
      },
      {
        question: { fr: "Où commence et finit le circuit ?", en: "Where does the tour start and end?", ar: "أين تبدأ الجولة وتنتهي؟", it: "Dove inizia e finisce il tour?" },
        answer:   { fr: "À Marrakech — départ et arrivée.", en: "Marrakech — both the start and the finish.", ar: "في مراكش — البداية والنهاية.", it: "A Marrakech — sia la partenza che l'arrivo." },
      },
    ],
  },

  /* ── 5 — 4-Day Marrakech Sahara Private Tour ── */
  {
    slug:     "4-day-marrakech-sahara-private-tour",
    image:    "/images/dunes.jpg",
    gallery:  ["/images/aitBenHaddouKasbah.jpg", "/images/desertCamels.jpg", "/images/ouarzazate.jpg"],
    featured: false,
    days:     { fr: "4 Jours", en: "4 Days", ar: "4 أيام", it: "4 Giorni" },
    daysNum:  4,
    title: {
      fr: "Circuit privé désert du Sahara de 4 jours depuis Marrakech",
      en: "4-Day Marrakech Sahara Desert Private Tour",
      ar: "جولة صحراوية خاصة لمدة 4 أيام من مراكش",
      it: "Tour privato di 4 giorni nel deserto del Sahara da Marrakech",
    },
    short: {
      fr: "Marrakech → Aït Ben Haddou → Dadès → Merzouga (Sahara) → Marrakech",
      en: "Marrakech → Ait Ben Haddou → Dades → Merzouga (Sahara) → Marrakech",
      ar: "مراكش ← آيت بن حدو ← دادس ← مرزوكة (الصحراء) ← مراكش",
      it: "Marrakech → Aït Ben Haddou → Dadès → Merzouga (Sahara) → Marrakech",
    },
    intro: {
      fr: "Un circuit privé de quatre jours au départ de Marrakech : le Haut Atlas, les kasbahs d'Aït Ben Haddou et la vallée du Dadès, les gorges du Todra, et une nuit du coucher au lever du soleil dans les dunes de Merzouga — à un rythme plus détendu que notre circuit de 3 jours.",
      en: "A private four-day desert journey from Marrakech: the High Atlas, the kasbahs of Ait Ben Haddou and the Dades Valley, the Todra Gorge, and a night from sunset to sunrise in the Merzouga dunes — at a more unhurried pace than our three-day route.",
      ar: "رحلة صحراوية خاصة لأربعة أيام من مراكش: جبال الأطلس الكبير، قصبات آيت بن حدو ووادي دادس، مضايق تودرا، وليلة من الغروب إلى الشروق في كثبان مرزوكة — بوتيرة أهدأ من جولتنا لثلاثة أيام.",
      it: "Un viaggio privato nel deserto di quattro giorni da Marrakech: l'Alto Atlante, le kasbah di Aït Ben Haddou e la Valle del Dadès, la Gola di Todra e una notte dal tramonto all'alba nelle dune di Merzouga — a un ritmo più tranquillo rispetto al nostro percorso di tre giorni.",
    },
    highlights: {
      fr: ["Transport privé avec chauffeur professionnel", "Kasbah d'Aït Ben Haddou (UNESCO)", "Vallée du Dadès et gorges du Todra", "Balade à dos de chameau et camp désertique à Merzouga", "Coucher et lever de soleil dans le Sahara"],
      en: ["Private transportation with a professional driver", "Ait Ben Haddou UNESCO kasbah", "Dades Valley and Todra Gorge", "Camel trek and desert camp in Merzouga", "Sunset and sunrise in the Sahara"],
      ar: ["نقل خاص مع سائق محترف", "قصبة آيت بن حدو (تراث اليونسكو)", "وادي دادس ومضايق تودرا", "ركوب الجمال ومخيم صحراوي في مرزوكة", "غروب وشروق الشمس في الصحراء"],
      it: ["Trasporto privato con autista professionista", "Kasba di Aït Ben Haddou (UNESCO)", "Valle del Dadès e Gola di Todra", "Escursione in cammello e campo nel deserto a Merzouga", "Tramonto e alba nel Sahara"],
    },
    itinerary: [
      {
        day:   { fr: "Jour 1", en: "Day 1", ar: "اليوم 1", it: "Giorno 1" },
        title: { fr: "Marrakech → Aït Ben Haddou & Ouarzazate", en: "Marrakech to Ait Ben Haddou & Ouarzazate", ar: "مراكش إلى آيت بن حدو وورزازات", it: "Marrakech → Aït Ben Haddou & Ouarzazate" },
        description: {
          fr: "Départ de Marrakech et traversée du Haut Atlas, visite de la kasbah d'Aït Ben Haddou classée à l'UNESCO, puis route vers Ouarzazate pour la nuit.",
          en: "Depart Marrakech and cross the High Atlas, visit the UNESCO-listed kasbah of Ait Ben Haddou, then continue to Ouarzazate for the night.",
          ar: "انطلاق من مراكش وعبور الأطلس الكبير، زيارة قصبة آيت بن حدو المصنفة ضمن تراث اليونسكو، ثم التوجه إلى ورزازات لقضاء الليلة.",
          it: "Partenza da Marrakech, attraversamento dell'Alto Atlante, visita alla kasba di Aït Ben Haddou patrimonio UNESCO, poi proseguimento verso Ouarzazate per la notte.",
        },
      },
      {
        day:   { fr: "Jour 2", en: "Day 2", ar: "اليوم 2", it: "Giorno 2" },
        title: { fr: "Ouarzazate → Vallée du Dadès", en: "Ouarzazate to the Dades Valley", ar: "ورزازات إلى وادي دادس", it: "Ouarzazate → Valle del Dadès" },
        description: {
          fr: "Route par la vallée des Roses jusqu'à la vallée du Dadès, avec ses kasbahs et ses formations rocheuses spectaculaires ; nuit dans la vallée.",
          en: "Drive through the Valley of Roses to the Dades Valley, with its kasbahs and dramatic rock formations; overnight in the valley.",
          ar: "القيادة عبر وادي الورود إلى وادي دادس، بقصباته وتكويناته الصخرية المذهلة؛ ليلة في الوادي.",
          it: "Percorrete la Valle delle Rose verso la Valle del Dadès, con le sue kasbah e le spettacolari formazioni rocciose; pernottamento nella valle.",
        },
      },
      {
        day:   { fr: "Jour 3", en: "Day 3", ar: "اليوم 3", it: "Giorno 3" },
        title: { fr: "Gorges du Todra → Merzouga", en: "Todra Gorge to Merzouga", ar: "مضايق تودرا إلى مرزوكة", it: "Gola di Todra → Merzouga" },
        description: {
          fr: "Visite des gorges du Todra, puis route vers Merzouga pour une balade à dos de chameau au coucher du soleil dans l'Erg Chebbi et une nuit en camp désertique.",
          en: "Visit the Todra Gorge, then drive to Merzouga for a sunset camel trek into the Erg Chebbi dunes and an overnight desert camp.",
          ar: "زيارة مضايق تودرا، ثم التوجه إلى مرزوكة لركوب الجمال عند الغروب في كثبان عرق الشبي، وليلة في مخيم صحراوي.",
          it: "Visitate la Gola di Todra, poi dirigetevi verso Merzouga per un'escursione al tramonto sui cammelli nell'Erg Chebbi e una notte nel campo del deserto.",
        },
      },
      {
        day:   { fr: "Jour 4", en: "Day 4", ar: "اليوم 4", it: "Giorno 4" },
        title: { fr: "Lever de soleil & retour à Marrakech", en: "Sunrise & return to Marrakech", ar: "شروق الشمس والعودة إلى مراكش", it: "Alba & ritorno a Marrakech" },
        description: {
          fr: "Lever de soleil sur les dunes, puis retour à Marrakech par le Haut Atlas.",
          en: "Watch the sunrise over the dunes, then drive back to Marrakech via the High Atlas.",
          ar: "مشاهدة شروق الشمس فوق الكثبان، ثم العودة إلى مراكش عبر الأطلس الكبير.",
          it: "Ammirate l'alba sulle dune, poi tornate a Marrakech attraverso l'Alto Atlante.",
        },
      },
    ],
    faqs: [
      {
        question: { fr: "Est-ce un circuit privé ?", en: "Is this a private tour?", ar: "هل هذه جولة خاصة؟", it: "È un tour privato?" },
        answer:   { fr: "Oui — votre véhicule et votre chauffeur sont réservés exclusivement pour votre groupe.", en: "Yes — your vehicle and driver are booked exclusively for your group.", ar: "نعم — سيارتك وسائقك محجوزان حصرياً لمجموعتك.", it: "Sì — il veicolo e l'autista sono prenotati esclusivamente per il vostro gruppo." },
      },
      {
        question: { fr: "Qu'est-ce qui est inclus ?", en: "What's included?", ar: "ماذا يشمل السعر؟", it: "Cosa è incluso?" },
        answer:   { fr: "Un véhicule privé climatisé, un chauffeur professionnel anglophone et de l'eau en bouteille tout au long du circuit. La prise en charge à l'hôtel et à l'aéroport est disponible.", en: "A private, air-conditioned vehicle, a professional English-speaking driver, and bottled water throughout. Hotel and airport pickup are available.", ar: "سيارة خاصة مكيفة، وسائق محترف يتحدث الإنجليزية، ومياه معبأة طوال الرحلة. الاستقبال من الفندق والمطار متوفر.", it: "Un veicolo privato con aria condizionata, un autista professionista di lingua inglese e acqua in bottiglia. Disponibile il trasferimento da hotel e aeroporto." },
      },
      {
        question: { fr: "Où commence et finit le circuit ?", en: "Where does the tour start and end?", ar: "أين تبدأ الجولة وتنتهي؟", it: "Dove inizia e finisce il tour?" },
        answer:   { fr: "Il commence et se termine à Marrakech ; la prise en charge à l'hôtel ou à l'aéroport peut être organisée.", en: "It starts and ends in Marrakech; hotel or airport pickup can be arranged.", ar: "تبدأ وتنتهي في مراكش، ويمكن ترتيب الاستقبال من الفندق أو المطار.", it: "Inizia e finisce a Marrakech; il trasferimento da hotel o aeroporto è disponibile su richiesta." },
      },
    ],
  },

  /* ── 6 — 3-Day Marrakech → Fes Desert Tour ── */
  {
    slug:     "3-day-marrakech-fes-desert-tour",
    image:    "/images/aitBenHaddouKasbah.jpg",
    gallery:  ["/images/mideltAtlas.jpg", "/images/fes.jpg", "/images/dunes.jpg"],
    featured: false,
    days:     { fr: "3 Jours", en: "3 Days", ar: "3 أيام", it: "3 Giorni" },
    daysNum:  3,
    title: {
      fr: "Circuit désert de 3 jours de Marrakech à Fès",
      en: "3-Day Marrakech to Fes Desert Tour",
      ar: "جولة صحراوية لمدة 3 أيام من مراكش إلى فاس",
      it: "Tour nel deserto di 3 giorni da Marrakech a Fes",
    },
    short: {
      fr: "Marrakech → Aït Ben Haddou → Dadès → Merzouga (Sahara) → Midelt → Ifrane → Fès",
      en: "Marrakech → Ait Ben Haddou → Dades → Merzouga (Sahara) → Midelt → Ifrane → Fes",
      ar: "مراكش ← آيت بن حدو ← دادس ← مرزوكة (الصحراء) ← ميدلت ← إفران ← فاس",
      it: "Marrakech → Aït Ben Haddou → Dadès → Merzouga (Sahara) → Midelt → Ifrane → Fes",
    },
    intro: {
      fr: "Une traversée désertique de trois jours de Marrakech à Fès : le Haut Atlas, une nuit dans les dunes de Merzouga, puis les forêts de cèdres du Moyen Atlas jusqu'à la ville impériale de Fès.",
      en: "A three-day desert crossing from Marrakech to Fes: cross the High Atlas, spend a night in the Merzouga dunes, then cross the Middle Atlas cedar forests to the imperial city of Fes.",
      ar: "عبور صحراوي لثلاثة أيام من مراكش إلى فاس: عبور الأطلس الكبير، ليلة في كثبان مرزوكة، ثم غابات الأرز في الأطلس المتوسط وصولاً إلى مدينة فاس الإمبراطورية.",
      it: "Un attraversamento del deserto di tre giorni da Marrakech a Fes: l'Alto Atlante, una notte nelle dune di Merzouga, poi le foreste di cedri dell'Atlante Medio fino alla città imperiale di Fes.",
    },
    highlights: {
      fr: ["Traversée du Haut Atlas", "Kasbah d'Aït Ben Haddou", "Vallée du Dadès et gorges du Todra", "Balade à dos de chameau et camp désertique à Merzouga", "Arrivée à Fès via les forêts de cèdres du Moyen Atlas"],
      en: ["Cross the High Atlas Mountains", "Ait Ben Haddou kasbah", "Dades Valley and Todra Gorge", "Camel trek and desert camp in Merzouga", "Arrival in Fes through the Middle Atlas cedar forests"],
      ar: ["عبور الأطلس الكبير", "قصبة آيت بن حدو", "وادي دادس ومضايق تودرا", "ركوب الجمال ومخيم صحراوي في مرزوكة", "الوصول إلى فاس عبر غابات الأرز في الأطلس المتوسط"],
      it: ["Attraversamento dell'Alto Atlante", "Kasba di Aït Ben Haddou", "Valle del Dadès e Gola di Todra", "Escursione in cammello e campo nel deserto a Merzouga", "Arrivo a Fes attraverso le foreste di cedri dell'Atlante Medio"],
    },
    itinerary: [
      {
        day:   { fr: "Jour 1", en: "Day 1", ar: "اليوم 1", it: "Giorno 1" },
        title: { fr: "Marrakech → Aït Ben Haddou & Dadès", en: "Marrakech to Ait Ben Haddou & Dades", ar: "مراكش إلى آيت بن حدو ودادس", it: "Marrakech → Aït Ben Haddou & Dadès" },
        description: {
          fr: "Traversée du Haut Atlas, visite d'Aït Ben Haddou, nuit dans la vallée du Dadès.",
          en: "Cross the High Atlas, visit Ait Ben Haddou, and overnight in the Dades Valley.",
          ar: "عبور الأطلس الكبير، زيارة آيت بن حدو، وليلة في وادي دادس.",
          it: "Attraversate l'Alto Atlante, visitate Aït Ben Haddou, pernottamento nella Valle del Dadès.",
        },
      },
      {
        day:   { fr: "Jour 2", en: "Day 2", ar: "اليوم 2", it: "Giorno 2" },
        title: { fr: "Gorges du Todra → Merzouga", en: "Todra Gorge to Merzouga", ar: "مضايق تودرا إلى مرزوكة", it: "Gola di Todra → Merzouga" },
        description: {
          fr: "Visite des gorges du Todra, route vers Merzouga, nuit en camp désertique après une balade à dos de chameau au coucher du soleil.",
          en: "Visit the Todra Gorge, drive to Merzouga, and spend the night in a desert camp after a sunset camel trek.",
          ar: "زيارة مضايق تودرا، ثم التوجه إلى مرزوكة وليلة في مخيم صحراوي بعد ركوب الجمال عند الغروب.",
          it: "Visitate la Gola di Todra, dirigetevi verso Merzouga e trascorrete la notte in un campo nel deserto dopo un'escursione al tramonto sui cammelli.",
        },
      },
      {
        day:   { fr: "Jour 3", en: "Day 3", ar: "اليوم 3", it: "Giorno 3" },
        title: { fr: "Merzouga → Fès", en: "Merzouga to Fes", ar: "مرزوكة إلى فاس", it: "Merzouga → Fes" },
        description: {
          fr: "Lever de soleil sur les dunes, puis route via Midelt et les forêts de cèdres d'Ifrane jusqu'à Fès.",
          en: "Sunrise over the dunes, then drive via Midelt and the cedar forests of Ifrane to Fes.",
          ar: "شروق الشمس فوق الكثبان، ثم القيادة عبر ميدلت وغابات الأرز في إفران وصولاً إلى فاس.",
          it: "Alba sulle dune, poi proseguite via Midelt e le foreste di cedri di Ifrane fino a Fes.",
        },
      },
    ],
    faqs: [
      {
        question: { fr: "Est-ce un circuit privé ?", en: "Is this a private tour?", ar: "هل هذه جولة خاصة؟", it: "È un tour privato?" },
        answer:   { fr: "Oui — votre véhicule et votre chauffeur sont réservés exclusivement pour votre groupe.", en: "Yes — your vehicle and driver are booked exclusively for your group.", ar: "نعم — سيارتك وسائقك محجوزان حصرياً لمجموعتك.", it: "Sì — il veicolo e l'autista sono prenotati esclusivamente per il vostro gruppo." },
      },
      {
        question: { fr: "Qu'est-ce qui est inclus ?", en: "What's included?", ar: "ماذا يشمل السعر؟", it: "Cosa è incluso?" },
        answer:   { fr: "Un véhicule privé climatisé, un chauffeur professionnel anglophone et de l'eau en bouteille tout au long du circuit. La prise en charge à l'hôtel et à l'aéroport est disponible.", en: "A private, air-conditioned vehicle, a professional English-speaking driver, and bottled water throughout. Hotel and airport pickup are available.", ar: "سيارة خاصة مكيفة، وسائق محترف يتحدث الإنجليزية، ومياه معبأة طوال الرحلة. الاستقبال من الفندق والمطار متوفر.", it: "Un veicolo privato con aria condizionata, un autista professionista di lingua inglese e acqua in bottiglia." },
      },
      {
        question: { fr: "Où se termine le circuit ?", en: "Where does the tour end?", ar: "أين تنتهي الجولة؟", it: "Dove finisce il tour?" },
        answer:   { fr: "À Fès ; votre chauffeur peut vous déposer à votre hôtel ou à l'aéroport de Fès.", en: "In Fes; your driver can drop you at your hotel or at Fes airport.", ar: "في فاس، ويمكن للسائق توصيلك إلى فندقك أو مطار فاس.", it: "A Fes; il vostro autista può accompagnarvi al vostro hotel o all'aeroporto di Fes." },
      },
    ],
  },

  /* ── 7 — 6-Day Marrakech → Sahara, Fès & Chefchaouen ── */
  {
    slug:     "6-day-marrakech-sahara-fes-chefchaouen-tour",
    image:    "/images/chefchaouen.jpg",
    gallery:  ["/images/dunes.jpg", "/images/fes.jpg", "/images/aitBenHaddouKasbah.jpg"],
    featured: false,
    days:     { fr: "6 Jours", en: "6 Days", ar: "6 أيام", it: "6 Giorni" },
    daysNum:  6,
    title: {
      fr: "Circuit de 6 jours de Marrakech au Sahara, Fès et Chefchaouen",
      en: "6-Day Marrakech to Sahara, Fes & Chefchaouen",
      ar: "جولة 6 أيام من مراكش إلى الصحراء وفاس وشفشاون",
      it: "Tour di 6 giorni da Marrakech al Sahara, Fes e Chefchaouen",
    },
    short: {
      fr: "Marrakech → Aït Ben Haddou → Dadès → Merzouga (Sahara) → Fès → Chefchaouen",
      en: "Marrakech → Ait Ben Haddou → Dades → Merzouga (Sahara) → Fes → Chefchaouen",
      ar: "مراكش ← آيت بن حدو ← دادس ← مرزوكة (الصحراء) ← فاس ← شفشاون",
      it: "Marrakech → Aït Ben Haddou → Dadès → Merzouga (Sahara) → Fes → Chefchaouen",
    },
    intro: {
      fr: "Une traversée nord-sud compacte mais complète — kasbahs, camp saharien, médina de Fès et ville bleue — idéale comme itinéraire aller simple de Marrakech vers le nord.",
      en: "A compact but complete north-south crossing — kasbahs, a Sahara camp, the Fes medina and the Blue City — ideal as a one-way Marrakech-to-north itinerary.",
      ar: "عبور شمالي-جنوبي مُصغّر لكنه كامل — قصبات، مخيم صحراوي، مدينة فاس القديمة والمدينة الزرقاء — مثالي كبرنامج ذهاب فقط من مراكش نحو الشمال.",
      it: "Un percorso nord-sud compatto ma completo — kasbah, un campo sahariano, la medina di Fes e la Città Blu — ideale come itinerario di sola andata da Marrakech verso nord.",
    },
    highlights: {
      fr: ["Route des kasbahs via Aït Ben Haddou", "Balade à dos de chameau et nuit en camp désertique au Sahara", "Médina et tanneries de Fès", "Ruelles bleues de Chefchaouen"],
      en: ["Kasbah route via Ait Ben Haddou", "Camel trek and overnight desert camp in the Sahara", "Fes medina and tanneries", "Chefchaouen's blue-washed lanes"],
      ar: ["طريق القصبات عبر آيت بن حدو", "ركوب الجمال وليلة في مخيم صحراوي بالصحراء", "مدينة فاس القديمة ودباغاتها", "أزقة شفشاون الزرقاء"],
      it: ["La rotta delle kasbah via Aït Ben Haddou", "Escursione in cammello e notte nel campo nel deserto del Sahara", "Medina e concerie di Fes", "I vicoli tinteggiati di blu di Chefchaouen"],
    },
    itinerary: [
      {
        day:   { fr: "Jour 1", en: "Day 1", ar: "اليوم 1", it: "Giorno 1" },
        title: { fr: "Marrakech", en: "Marrakech", ar: "مراكش", it: "Marrakech" },
        description: {
          fr: "Arrivée et briefing de bienvenue.",
          en: "Arrival and welcome briefing.",
          ar: "الوصول وجلسة إحاطة ترحيبية.",
          it: "Arrivo e briefing di benvenuto.",
        },
      },
      {
        day:   { fr: "Jour 2", en: "Day 2", ar: "اليوم 2", it: "Giorno 2" },
        title: { fr: "Marrakech → Vallée du Dadès", en: "Marrakech to Dades Valley", ar: "مراكش إلى وادي دادس", it: "Marrakech → Valle del Dadès" },
        description: {
          fr: "Col du Tizi n'Tichka, kasbah d'Aït Ben Haddou, nuit dans les gorges du Dadès.",
          en: "Tizi n'Tichka Pass, Ait Ben Haddou kasbah, overnight in the Dades Gorge.",
          ar: "ممر تيزي ن تيشكا، قصبة آيت بن حدو، ليلة في مضايق دادس.",
          it: "Passo Tizi n'Tichka, kasba di Aït Ben Haddou, pernottamento nella Gola del Dadès.",
        },
      },
      {
        day:   { fr: "Jour 3", en: "Day 3", ar: "اليوم 3", it: "Giorno 3" },
        title: { fr: "Dadès → Merzouga", en: "Dades to Merzouga", ar: "دادس إلى مرزوكة", it: "Dadès → Merzouga" },
        description: {
          fr: "Gorges du Todra, arrivée à Merzouga, balade à dos de chameau vers un camp désertique.",
          en: "Todra Gorge, arrival in Merzouga, camel trek to a desert camp.",
          ar: "مضايق تودرا، الوصول إلى مرزوكة، ركوب الجمال نحو مخيم صحراوي.",
          it: "Gola di Todra, arrivo a Merzouga, escursione in cammello verso un campo nel deserto.",
        },
      },
      {
        day:   { fr: "Jour 4", en: "Day 4", ar: "اليوم 4", it: "Giorno 4" },
        title: { fr: "Sahara → Fès", en: "Sahara to Fes", ar: "الصحراء إلى فاس", it: "Sahara → Fes" },
        description: {
          fr: "Lever de soleil dans les dunes, route vers le nord via Midelt et les forêts de cèdres jusqu'à Fès ; soirée libre.",
          en: "Sunrise in the dunes, drive north via Midelt and the cedar forests to Fes; evening free.",
          ar: "شروق الشمس في الكثبان، القيادة شمالاً عبر ميدلت وغابات الأرز وصولاً إلى فاس؛ مساء حر.",
          it: "Alba nelle dune, guida verso nord via Midelt e le foreste di cedri fino a Fes; serata libera.",
        },
      },
      {
        day:   { fr: "Jour 5", en: "Day 5", ar: "اليوم 5", it: "Giorno 5" },
        title: { fr: "Fès → Chefchaouen", en: "Fes to Chefchaouen", ar: "فاس إلى شفشاون", it: "Fes → Chefchaouen" },
        description: {
          fr: "Une visite matinale de la médina de Fès, puis route vers Chefchaouen ; après-midi libre pour explorer les ruelles bleues.",
          en: "A morning medina tour in Fes, then a drive to Chefchaouen; afternoon free to explore the blue lanes.",
          ar: "جولة صباحية في مدينة فاس القديمة، ثم القيادة نحو شفشاون؛ بعد ظهر حر لاستكشاف الأزقة الزرقاء.",
          it: "Una mattinata nella medina di Fes, poi guida verso Chefchaouen; pomeriggio libero per esplorare i vicoli blu.",
        },
      },
      {
        day:   { fr: "Jour 6", en: "Day 6", ar: "اليوم 6", it: "Giorno 6" },
        title: { fr: "Départ", en: "Departure", ar: "المغادرة", it: "Partenza" },
        description: {
          fr: "Transfert de Chefchaouen vers l'aéroport de Tanger ou de Fès (ou transfert retour, selon la réservation).",
          en: "Transfer from Chefchaouen to the Tangier or Fes airport (or a return transfer, per booking).",
          ar: "النقل من شفشاون إلى مطار طنجة أو فاس (أو نقل عودة، حسب الحجز).",
          it: "Trasferimento da Chefchaouen all'aeroporto di Tangeri o Fes (o trasferimento di ritorno, a seconda della prenotazione).",
        },
      },
    ],
    faqs: [
      {
        question: { fr: "Est-ce un circuit aller simple ?", en: "Is this a one-way tour?", ar: "هل هذه جولة ذهاب فقط؟", it: "È un tour di sola andata?" },
        answer:   { fr: "Oui, il est conçu comme un itinéraire aller simple de Marrakech vers le nord — un transfert retour peut être organisé si vous préférez repartir de Marrakech.", en: "Yes, it's designed as a one-way Marrakech-to-north route — a return transfer can be arranged instead if you prefer to fly out of Marrakech.", ar: "نعم، مصممة كمسار ذهاب فقط من مراكش نحو الشمال — يمكن ترتيب نقل عودة بدلاً من ذلك إذا كنت تفضل المغادرة من مراكش.", it: "Sì, è progettato come itinerario di sola andata da Marrakech verso nord — è possibile organizzare un trasferimento di ritorno se si preferisce partire da Marrakech." },
      },
      {
        question: { fr: "De quel aéroport dois-je repartir à la fin ?", en: "Which airport should I fly out of at the end?", ar: "من أي مطار يجب أن أغادر في النهاية؟", it: "Da quale aeroporto dovrei partire alla fine?" },
        answer:   { fr: "Tanger est le plus proche de Chefchaouen ; Fès est également possible avec un transfert plus long.", en: "Tangier is the closest to Chefchaouen; Fes is also workable with a longer transfer.", ar: "طنجة هي الأقرب إلى شفشاون؛ فاس ممكنة أيضاً مع نقل أطول.", it: "Tangeri è la più vicina a Chefchaouen; Fes è praticabile con un trasferimento più lungo." },
      },
      {
        question: { fr: "6 jours suffisent-ils pour cet itinéraire ?", en: "Is 6 days enough for this route?", ar: "هل تكفي 6 أيام لهذا المسار؟", it: "Sono sufficienti 6 giorni per questo percorso?" },
        answer:   { fr: "Oui, bien que le rythme soit plus soutenu — notre version de 9 jours couvre les mêmes villes à un rythme plus détendu.", en: "Yes, though it's a faster pace — our 9-day version covers the same cities at a more relaxed rhythm.", ar: "نعم، رغم أن الوتيرة أسرع — نسختنا من 9 أيام تغطي نفس المدن بوتيرة أكثر هدوءاً.", it: "Sì, sebbene sia un ritmo più veloce — la nostra versione di 9 giorni copre le stesse città con un ritmo più rilassato." },
      },
    ],
  },

  /* ── 8 — 7-Day Marrakech → Sahara Tour ── */
  {
    slug:     "7-day-marrakech-sahara-tour",
    image:    "/images/dunes.jpg",
    gallery:  ["/images/aitBenHaddouKasbah.jpg", "/images/waterfall.jpg", "/images/ouarzazate.jpg"],
    featured: false,
    days:     { fr: "7 Jours", en: "7 Days", ar: "7 أيام", it: "7 Giorni" },
    daysNum:  7,
    title: {
      fr: "Circuit de 7 jours au Maroc depuis Marrakech via le Sahara",
      en: "7-Day Morocco Tour from Marrakech via Sahara",
      ar: "جولة مغربية لمدة 7 أيام من مراكش عبر الصحراء",
      it: "Tour del Marocco di 7 giorni da Marrakech via Sahara",
    },
    short: {
      fr: "Marrakech → Aït Ben Haddou → Dadès → Merzouga (Sahara) → Gorges du Todra → Marrakech",
      en: "Marrakech → Ait Ben Haddou → Dades → Merzouga (Sahara) → Todra Gorge → Marrakech",
      ar: "مراكش ← آيت بن حدو ← دادس ← مرزوكة (الصحراء) ← مضايق تودرا ← مراكش",
      it: "Marrakech → Aït Ben Haddou → Dadès → Merzouga (Sahara) → Gola di Todra → Marrakech",
    },
    intro: {
      fr: "Une semaine ciblée, entièrement centrée sur le désert et la route des kasbahs, sans les villes impériales du nord.",
      en: "A focused week centered entirely on the desert and the kasbah route, without the northern imperial cities.",
      ar: "أسبوع مركّز يتمحور بالكامل حول الصحراء وطريق القصبات، دون المدن الإمبراطورية الشمالية.",
      it: "Una settimana focalizzata interamente sul deserto e sulla rotta delle kasbah, senza le città imperiali del nord.",
    },
    highlights: {
      fr: ["Kasbah d'Aït Ben Haddou et la zone des studios de cinéma d'Ouarzazate", "Balade à dos de chameau et nuit en camp désertique au Sahara", "Gorges du Todra et la route des mille kasbahs", "Retour paisible par le Haut Atlas avec soirée libre à Marrakech"],
      en: ["Ait Ben Haddou kasbah and the Ouarzazate film-studio area", "Camel trek and overnight desert camp in the Sahara", "Todra Gorge and the Road of a Thousand Kasbahs", "A relaxed return via the High Atlas with a free evening in Marrakech"],
      ar: ["قصبة آيت بن حدو ومنطقة استوديوهات ورزازات السينمائية", "ركوب الجمال وليلة في مخيم صحراوي بالصحراء", "مضايق تودرا وطريق الألف قصبة", "عودة هادئة عبر الأطلس الكبير مع مساء حر في مراكش"],
      it: ["Kasba di Aït Ben Haddou e la zona degli studi cinematografici di Ouarzazate", "Escursione in cammello e notte nel campo nel deserto del Sahara", "Gola di Todra e la Strada delle Mille Kasbah", "Ritorno rilassante attraverso l'Alto Atlante con una serata libera a Marrakech"],
    },
    itinerary: [
      {
        day:   { fr: "Jour 1", en: "Day 1", ar: "اليوم 1", it: "Giorno 1" },
        title: { fr: "Marrakech", en: "Marrakech", ar: "مراكش", it: "Marrakech" },
        description: { fr: "Arrivée, réunion de bienvenue.", en: "Arrival, welcome meeting.", ar: "الوصول، لقاء ترحيبي.", it: "Arrivo, riunione di benvenuto." },
      },
      {
        day:   { fr: "Jour 2", en: "Day 2", ar: "اليوم 2", it: "Giorno 2" },
        title: { fr: "Marrakech → Vallée du Dadès", en: "Marrakech to Dades Valley", ar: "مراكش إلى وادي دادس", it: "Marrakech → Valle del Dadès" },
        description: { fr: "Col du Tizi n'Tichka, kasbah d'Aït Ben Haddou, Ouarzazate, nuit dans les gorges du Dadès.", en: "Tizi n'Tichka Pass, Ait Ben Haddou kasbah, Ouarzazate, overnight in the Dades Gorge.", ar: "ممر تيزي ن تيشكا، قصبة آيت بن حدو، ورزازات، ليلة في مضايق دادس.", it: "Passo Tizi n'Tichka, kasba di Aït Ben Haddou, Ouarzazate, pernottamento nella Gola del Dadès." },
      },
      {
        day:   { fr: "Jour 3", en: "Day 3", ar: "اليوم 3", it: "Giorno 3" },
        title: { fr: "Dadès → Merzouga", en: "Dades to Merzouga", ar: "دادس إلى مرزوكة", it: "Dadès → Merzouga" },
        description: { fr: "Gorges du Todra, route vers Merzouga, balade à dos de chameau vers un camp désertique pour la nuit.", en: "Todra Gorge, drive to Merzouga, camel trek to a desert camp for the night.", ar: "مضايق تودرا، القيادة نحو مرزوكة، ركوب الجمال نحو مخيم صحراوي لقضاء الليلة.", it: "Gola di Todra, guida verso Merzouga, escursione in cammello verso un campo nel deserto per la notte." },
      },
      {
        day:   { fr: "Jour 4", en: "Day 4", ar: "اليوم 4", it: "Giorno 4" },
        title: { fr: "Sahara → Marrakech (ou nuit supplémentaire)", en: "Sahara to Marrakech (or extra night)", ar: "الصحراء إلى مراكش (أو ليلة إضافية)", it: "Sahara → Marrakech (o notte extra)" },
        description: { fr: "Lever de soleil sur les dunes, début du retour via Rissani et la vallée du Ziz.", en: "Sunrise over the dunes, begin the return journey via Rissani and the Ziz Valley.", ar: "شروق الشمس فوق الكثبان، بدء رحلة العودة عبر رسّاني ووادي زيز.", it: "Alba sulle dune, inizio del viaggio di ritorno via Rissani e la Valle dello Ziz." },
      },
      {
        day:   { fr: "Jour 5", en: "Day 5", ar: "اليوم 5", it: "Giorno 5" },
        title: { fr: "Vallée du Ziz → Ouarzazate", en: "Ziz Valley to Ouarzazate", ar: "وادي زيز إلى ورزازات", it: "Valle dello Ziz → Ouarzazate" },
        description: { fr: "Poursuite par Tinghir et la route des kasbahs, nuit près d'Ouarzazate.", en: "Continue through Tinghir and the kasbah route, overnight near Ouarzazate.", ar: "المتابعة عبر تنغير وطريق القصبات، ليلة قرب ورزازات.", it: "Proseguite attraverso Tinghir e la rotta delle kasbah, pernottamento vicino a Ouarzazate." },
      },
      {
        day:   { fr: "Jour 6", en: "Day 6", ar: "اليوم 6", it: "Giorno 6" },
        title: { fr: "Ouarzazate → Marrakech", en: "Ouarzazate to Marrakech", ar: "ورزازات إلى مراكش", it: "Ouarzazate → Marrakech" },
        description: { fr: "Traversée du Haut Atlas, arrivée à Marrakech l'après-midi ; soirée libre dans la médina.", en: "Cross the High Atlas, arrive in Marrakech in the afternoon; free evening in the medina.", ar: "عبور جبال الأطلس الكبير، الوصول إلى مراكش بعد الظهر؛ مساء حر في المدينة القديمة.", it: "Attraversate l'Alto Atlante, arrivate a Marrakech nel pomeriggio; serata libera nella medina." },
      },
      {
        day:   { fr: "Jour 7", en: "Day 7", ar: "اليوم 7", it: "Giorno 7" },
        title: { fr: "Départ", en: "Departure", ar: "المغادرة", it: "Partenza" },
        description: { fr: "Transfert vers l'aéroport de Marrakech.", en: "Transfer to the Marrakech airport.", ar: "النقل إلى مطار مراكش.", it: "Trasferimento all'aeroporto di Marrakech." },
      },
    ],
    faqs: [
      {
        question: { fr: "Pourquoi l'itinéraire mentionne-t-il une « nuit supplémentaire » au jour 4 ?", en: "Why does the itinerary mention an 'extra night' on Day 4?", ar: "لماذا يذكر البرنامج 'ليلة إضافية' في اليوم 4؟", it: "Perché l'itinerario menziona una 'notte extra' al giorno 4?" },
        answer:   { fr: "Le trajet du Sahara à Marrakech est long, donc certains voyageurs préfèrent le diviser en deux jours via la vallée du Ziz.", en: "The Sahara-to-Marrakech drive is long, so some travelers prefer to break it into two days via the Ziz Valley.", ar: "رحلة القيادة من الصحراء إلى مراكش طويلة، لذا يفضل بعض المسافرين تقسيمها على يومين عبر وادي زيز.", it: "Il percorso dal Sahara a Marrakech è lungo, quindi alcuni viaggiatori preferiscono dividerlo in due giorni via la Valle dello Ziz." },
      },
      {
        question: { fr: "Ce circuit convient-il mieux aux voyageurs axés sur le désert ?", en: "Is this tour better for desert-focused travelers?", ar: "هل تناسب هذه الجولة المسافرين المهتمين بالصحراء أكثر؟", it: "Questo tour è più adatto ai viaggiatori orientati al deserto?" },
        answer:   { fr: "Oui — il évite entièrement les villes du nord pour se concentrer sur la route des kasbahs et le Sahara.", en: "Yes — it skips the northern cities entirely to concentrate on the kasbah route and the Sahara.", ar: "نعم — تتجاوز المدن الشمالية بالكامل للتركيز على طريق القصبات والصحراء.", it: "Sì — salta completamente le città del nord per concentrarsi sulla rotta delle kasbah e il Sahara." },
      },
    ],
  },

  /* ── 9 — Fes & Chefchaouen Tour (2 days) ── */
  {
    slug:     "fes-chefchaouen-tour",
    image:    "/images/fes.jpg",
    gallery:  ["/images/chefchaouen.jpg", "/images/spices.jpg"],
    featured: true,
    days:     { fr: "2 Jours", en: "2 Days", ar: "يومان", it: "2 Giorni" },
    daysNum:  2,
    title: {
      fr: "Circuit Fès et Chefchaouen",
      en: "Fes & Chefchaouen Tour",
      ar: "جولة فاس وشفشاون",
      it: "Tour di Fes e Chefchaouen",
    },
    short: {
      fr: "Découvrez la médina de Fès et la ville bleue",
      en: "Discover Fes Medina and the Blue City",
      ar: "اكتشف مدينة فاس القديمة والمدينة الزرقاء",
      it: "Scoprite la medina di Fes e la Città Blu",
    },
    intro: {
      fr: "Deux des villes les plus photogéniques du Maroc en un court voyage privé — la médina médiévale de Fès et les rues bleues de Chefchaouen.",
      en: "Two of Morocco's most photogenic cities in one short private trip — the medieval medina of Fes and the blue streets of Chefchaouen.",
      ar: "اثنتان من أكثر مدن المغرب سحراً بصرياً في رحلة خاصة قصيرة واحدة — المدينة القديمة في فاس والشوارع الزرقاء في شفشاون.",
      it: "Due delle città più fotogeniche del Marocco in un breve viaggio privato — la medina medievale di Fes e i vicoli blu di Chefchaouen.",
    },
    highlights: {
      fr: ["Médina de Fès el-Bali, tanneries et souks d'artisans", "Médersa Bou Inania et les portes historiques de la médina", "Médina bleue de Chefchaouen et vues sur la montagne", "Une nuitée à Fès incluse dans le circuit"],
      en: ["Fes el-Bali medina, tanneries and artisan souks", "Bou Inania Madrasa and the historic medina gates", "Chefchaouen's blue medina and mountain views", "One overnight stay in Fes included in the route"],
      ar: ["مدينة فاس البالي القديمة، الدباغات وأسواق الحرفيين", "مدرسة بوعنانية وأبواب المدينة التاريخية", "المدينة الزرقاء في شفشاون وإطلالات الجبال", "ليلة واحدة في فاس مشمولة ضمن المسار"],
      it: ["Medina di Fes el-Bali, concerie e souk degli artigiani", "Madrasa Bou Inania e le porte storiche della medina", "La medina blu di Chefchaouen e le viste sulla montagna", "Una notte a Fes inclusa nel percorso"],
    },
    itinerary: [
      {
        day:   { fr: "Jour 1", en: "Day 1", ar: "اليوم 1", it: "Giorno 1" },
        title: { fr: "Fès — visite complète de la médina", en: "Fes — Full Medina Tour", ar: "فاس — جولة كاملة في المدينة القديمة", it: "Fes — Tour completo della medina" },
        description: {
          fr: "Une journée complète à explorer la médina classée à l'UNESCO de Fès el-Bali, incluant le quartier d'Al Quaraouiyine, la médersa Bou Inania, les célèbres tanneries et les ateliers d'artisans des souks.",
          en: "A full day exploring the UNESCO-listed medina of Fes el-Bali, including the Al Quaraouiyine area, the Bou Inania Madrasa, the famous leather tanneries, and the artisan workshops of the souks.",
          ar: "يوم كامل لاستكشاف مدينة فاس البالي القديمة المصنفة ضمن تراث اليونسكو، بما في ذلك منطقة القرويين، مدرسة بوعنانية، الدباغات الشهيرة، وورش الحرفيين في الأسواق.",
          it: "Una giornata intera esplorando la medina di Fes el-Bali patrimonio UNESCO, inclusa la zona di Al Quaraouiyine, la Madrasa Bou Inania, le famose concerie di cuoio e i laboratori artigianali dei souk.",
        },
      },
      {
        day:   { fr: "Jour 2", en: "Day 2", ar: "اليوم 2", it: "Giorno 2" },
        title: { fr: "Fès → Chefchaouen", en: "Fes → Chefchaouen", ar: "فاس ← شفشاون", it: "Fes → Chefchaouen" },
        description: {
          fr: "Route vers le nord, à travers les montagnes du Rif, jusqu'à Chefchaouen. Passez l'après-midi à flâner dans la médina bleue et le musée de la Kasbah avant votre transfert ou retour.",
          en: "Drive north into the Rif Mountains to Chefchaouen. Spend the afternoon wandering the blue-washed medina and the Kasbah museum before your onward transfer or return journey.",
          ar: "القيادة شمالاً عبر جبال الريف وصولاً إلى شفشاون. اقض بعد الظهر في التجول في المدينة الزرقاء ومتحف القصبة قبل النقل التالي أو رحلة العودة.",
          it: "Guidate verso nord nelle montagne del Rif fino a Chefchaouen. Trascorrete il pomeriggio passeggiando nella medina tinteggiata di blu e nel museo della Kasba prima del vostro trasferimento o del viaggio di ritorno.",
        },
      },
    ],
    faqs: [
      {
        question: { fr: "Quelle est la distance entre Fès et Chefchaouen ?", en: "How far is the drive from Fes to Chefchaouen?", ar: "كم تبعد فاس عن شفشاون؟", it: "Quanto è distante Fes da Chefchaouen?" },
        answer:   { fr: "Environ 4 heures à travers les montagnes du Rif, avec des arrêts panoramiques possibles en chemin.", en: "Around 4 hours through the Rif Mountains, with scenic stops possible along the way.", ar: "حوالي 4 ساعات عبر جبال الريف، مع إمكانية توقفات بانورامية في الطريق.", it: "Circa 4 ore attraverso le montagne del Rif, con possibili soste panoramiche lungo il percorso." },
      },
      {
        question: { fr: "Un guide local est-il inclus pour la médina de Fès ?", en: "Is a local guide included for the Fes medina?", ar: "هل يوجد مرشد محلي مشمول لمدينة فاس القديمة؟", it: "È inclusa una guida locale per la medina di Fes?" },
        answer:   { fr: "Votre chauffeur peut vous orienter, mais pour les ruelles de la médina nous recommandons d'ajouter un guide local agréé, que nous pouvons organiser sur demande.", en: "Your driver can navigate the main sights, but for the medina's narrow alleys we recommend adding a licensed local guide, which we can arrange on request.", ar: "يمكن لسائقك توجيهك إلى المعالم الرئيسية، لكن للأزقة الضيقة للمدينة نوصي بإضافة مرشد محلي مرخص يمكننا ترتيبه عند الطلب.", it: "Il vostro autista può navigare i principali siti, ma per i vicoli stretti della medina consigliamo di aggiungere una guida locale autorizzata, che possiamo organizzare su richiesta." },
      },
      {
        question: { fr: "Ce circuit peut-il se terminer à Tanger plutôt qu'à Chefchaouen ?", en: "Can this tour end in Tangier instead of Chefchaouen?", ar: "هل يمكن أن تنتهي هذه الجولة في طنجة بدلاً من شفشاون؟", it: "Può questo tour finire a Tangeri invece di Chefchaouen?" },
        answer:   { fr: "Oui — Tanger se trouve à environ 2 heures au-delà de Chefchaouen et peut être ajoutée en extension ou comme point de dépose final.", en: "Yes — Tangier is about 2 hours past Chefchaouen and can be added as an extension or as your final drop-off point.", ar: "نعم — تبعد طنجة حوالي ساعتين بعد شفشاون ويمكن إضافتها كامتداد أو كنقطة نزول نهائية.", it: "Sì — Tangeri si trova a circa 2 ore oltre Chefchaouen e può essere aggiunta come estensione o come punto finale di destinazione." },
      },
    ],
  },

  /* ── 10 — 8-Day Morocco Highlights: Sahara & Fes ── */
  {
    slug:     "8-day-morocco-sahara-fes",
    image:    "/images/dunes.jpg",
    gallery:  ["/images/aitBenHaddouKasbah.jpg", "/images/ifraneSnow.jpg", "/images/fes.jpg"],
    featured: false,
    days:     { fr: "8 Jours", en: "8 Days", ar: "8 أيام", it: "8 Giorni" },
    daysNum:  8,
    title: {
      fr: "Circuit de 8 jours des incontournables : Sahara & Fès",
      en: "8-Day Morocco Highlights Tour from Marrakech via Sahara & Fes",
      ar: "جولة أبرز معالم المغرب لمدة 8 أيام من مراكش عبر الصحراء وفاس",
      it: "Tour di 8 giorni dei punti salienti del Marocco da Marrakech via Sahara & Fes",
    },
    short: {
      fr: "Marrakech → Aït Ben Haddou → Dadès → Merzouga (Sahara) → Gorges du Todra → Fès → Ifrane → Marrakech",
      en: "Marrakech → Ait Ben Haddou → Dades → Merzouga (Sahara) → Todra Gorge → Fes → Ifrane → Marrakech",
      ar: "مراكش ← آيت بن حدو ← دادس ← مرزوكة (الصحراء) ← مضايق تودرا ← فاس ← إفران ← مراكش",
      it: "Marrakech → Aït Ben Haddou → Dadès → Merzouga (Sahara) → Gola di Todra → Fes → Ifrane → Marrakech",
    },
    intro: {
      fr: "Désert, gorges et Fès en huit jours pour les voyageurs disposant de peu de temps mais souhaitant tout de même les incontournables, sans la boucle supplémentaire par Chefchaouen.",
      en: "Desert, gorges and Fes in eight days for travelers with limited time who still want the complete highlights without the extra Chefchaouen loop.",
      ar: "صحراء ومضايق وفاس في ثمانية أيام للمسافرين ذوي الوقت المحدود الراغبين مع ذلك في أبرز المعالم دون الجولة الإضافية إلى شفشاون.",
      it: "Deserto, gole e Fes in otto giorni per i viaggiatori con poco tempo che vogliono comunque i punti salienti completi senza l'extra di Chefchaouen.",
    },
    highlights: {
      fr: ["Route des kasbahs via Aït Ben Haddou et Ouarzazate", "Balade à dos de chameau et nuit en camp désertique au Sahara", "Falaises impressionnantes des gorges du Todra", "Médina de Fès et forêts de cèdres d'Ifrane et Azrou"],
      en: ["Kasbah route via Ait Ben Haddou and Ouarzazate", "Sahara camel trek and overnight desert camp", "Todra Gorge's towering cliffs", "Fes medina and the cedar forests of Ifrane and Azrou"],
      ar: ["طريق القصبات عبر آيت بن حدو وورزازات", "ركوب الجمال والمبيت في مخيم الصحراء", "جدران مضايق تودرا الشاهقة", "مدينة فاس القديمة وغابات الأرز في إفران وأزرو"],
      it: ["Rotta delle kasbah via Aït Ben Haddou e Ouarzazate", "Escursione in cammello nel Sahara e notte nel campo nel deserto", "Le scogliere imponenti della Gola di Todra", "Medina di Fes e foreste di cedri di Ifrane e Azrou"],
    },
    itinerary: [
      {
        day:   { fr: "Jour 1", en: "Day 1", ar: "اليوم 1", it: "Giorno 1" },
        title: { fr: "Marrakech", en: "Marrakech", ar: "مراكش", it: "Marrakech" },
        description: { fr: "Arrivée et briefing de bienvenue.", en: "Arrival and welcome briefing.", ar: "الوصول واجتماع الترحيب.", it: "Arrivo e briefing di benvenuto." },
      },
      {
        day:   { fr: "Jour 2", en: "Day 2", ar: "اليوم 2", it: "Giorno 2" },
        title: { fr: "Marrakech → Aït Ben Haddou → Dadès", en: "Marrakech to Ait Ben Haddou to Dades", ar: "مراكش → آيت بن حدو → دادس", it: "Marrakech → Aït Ben Haddou → Dadès" },
        description: { fr: "Col de Tizi n'Tichka, studios d'Ouarzazate (optionnel), kasbah d'Aït Ben Haddou, nuit dans la vallée du Dadès.", en: "Tizi n'Tichka Pass, the Ouarzazate film studios (optional), Ait Ben Haddou kasbah, overnight in the Dades Valley.", ar: "ممر تيزي ن'تيشكا، استوديوهات السينما في ورزازات (اختياري)، قصبة آيت بن حدو، المبيت في وادي دادس.", it: "Passo Tizi n'Tichka, studi cinematografici di Ouarzazate (facoltativo), kasba di Aït Ben Haddou, pernottamento nella Valle del Dadès." },
      },
      {
        day:   { fr: "Jour 3", en: "Day 3", ar: "اليوم 3", it: "Giorno 3" },
        title: { fr: "Dadès → Merzouga", en: "Dades to Merzouga", ar: "دادس → مرزوكة", it: "Dadès → Merzouga" },
        description: { fr: "Promenade dans les gorges du Todra, route vers Merzouga, puis balade à dos de chameau dans les dunes pour un bivouac sous les étoiles.", en: "A walk through the Todra Gorge, drive to Merzouga, then a camel trek into the dunes for a desert camp overnight.", ar: "جولة عبر وادي تودرة، ثم القيادة إلى مرزوقة، وأخيراً رحلة بالجمال إلى الكثبان للمبيت في مخيم الصحراء.", it: "Una passeggiata nella Gola di Todra, guida verso Merzouga, poi un'escursione in cammello nelle dune per una notte nel campo del deserto." },
      },
      {
        day:   { fr: "Jour 4", en: "Day 4", ar: "اليوم 4", it: "Giorno 4" },
        title: { fr: "Lever de soleil au Sahara → Fès", en: "Sahara Sunrise to Fes", ar: "شروق الشمس على الصحراء → فاس", it: "Alba nel Sahara → Fes" },
        description: { fr: "Lever de soleil sur les dunes, puis route via la vallée du Ziz, Midelt et les forêts de cèdres d'Ifrane jusqu'à Fès.", en: "Watch the sunrise over the dunes, then drive via the Ziz Valley, Midelt and the cedar forests of Ifrane to Fes.", ar: "مشاهدة شروق الشمس فوق الكثبان، ثم القيادة عبر وادي الزيز وميدلت وغابات الأرز في إفران وصولاً إلى فاس.", it: "Ammirate l'alba sulle dune, poi guidate via la Valle dello Ziz, Midelt e le foreste di cedri di Ifrane fino a Fes." },
      },
      {
        day:   { fr: "Jour 5", en: "Day 5", ar: "اليوم 5", it: "Giorno 5" },
        title: { fr: "Médina de Fès", en: "Fes Medina", ar: "مدينة فاس", it: "Medina di Fes" },
        description: { fr: "Une visite guidée complète des tanneries, médersas et de la cité fortifiée ancienne.", en: "A full guided tour of the tanneries, medersas and the ancient walled city.", ar: "جولة مرشدة كاملة في المدابغ والمدارس والمدينة القديمة المسوّرة.", it: "Una visita guidata completa delle concerie, delle madrasse e dell'antica città murata." },
      },
      {
        day:   { fr: "Jour 6", en: "Day 6", ar: "اليوم 6", it: "Giorno 6" },
        title: { fr: "Fès → Marrakech (via le Moyen Atlas)", en: "Fes to Marrakech (via Middle Atlas)", ar: "فاس → مراكش (عبر الأطلس المتوسط)", it: "Fes → Marrakech (via Atlante Medio)" },
        description: { fr: "Un trajet panoramique de retour à travers l'Atlas ou via Beni Mellal, arrivée à Marrakech en soirée.", en: "A scenic drive back across the Atlas or via Beni Mellal, arriving in Marrakech in the evening.", ar: "رحلة قيادة خلابة عودةً عبر جبال الأطلس أو عبر بني ملال، والوصول إلى مراكش في المساء.", it: "Un panoramico viaggio di ritorno attraverso l'Atlante o via Beni Mellal, arrivando a Marrakech la sera." },
      },
      {
        day:   { fr: "Jour 7", en: "Day 7", ar: "اليوم 7", it: "Giorno 7" },
        title: { fr: "Journée libre à Marrakech", en: "Marrakech Free Day", ar: "يوم حر في مراكش", it: "Giornata libera a Marrakech" },
        description: { fr: "Options possibles : randonnée dans l'Atlas, hammam et spa, ou visite du Jardin Majorelle.", en: "Optional add-ons: an Atlas Mountain hike, a hammam and spa, or a visit to the Majorelle Garden.", ar: "اختياري: تسلق جبال الأطلس، الحمام والسبا، أو حديقة ماجوريل.", it: "Opzioni: escursione sull'Atlante, hammam e spa, o visita al Giardino Majorelle." },
      },
      {
        day:   { fr: "Jour 8", en: "Day 8", ar: "اليوم 8", it: "Giorno 8" },
        title: { fr: "Départ", en: "Departure", ar: "المغادرة", it: "Partenza" },
        description: { fr: "Transfert vers l'aéroport de Marrakech.", en: "Transfer to the Marrakech airport.", ar: "نقل إلى مطار مراكش.", it: "Trasferimento all'aeroporto di Marrakech." },
      },
    ],
    faqs: [
      {
        question: { fr: "Quelle est la différence avec la version de 9 jours ?", en: "How is this different from the 9-day version?", ar: "ما الفرق بينها وبين نسخة الـ9 أيام؟", it: "Qual è la differenza rispetto alla versione di 9 giorni?" },
        answer:   { fr: "Les mêmes points forts du désert et de Fès, sans la boucle supplémentaire par Chefchaouen — une bonne option si votre emploi du temps est plus serré d'une journée.", en: "Same desert and Fes highlights, without the extra Chefchaouen loop — a good fit if your schedule is one day tighter.", ar: "نفس أبرز معالم الصحراء وفاس، دون الجولة الإضافية إلى شفشاون — خيار جيد إذا كان جدولك أضيق بيوم واحد.", it: "Stessi punti salienti del deserto e di Fes, senza il giro extra di Chefchaouen — adatto se il vostro programma è più ristretto di un giorno." },
      },
      {
        question: { fr: "Le circuit se termine-t-il vraiment à Marrakech ?", en: "Does the tour really end back in Marrakech?", ar: "هل تنتهي الجولة فعلاً في مراكش؟", it: "Il tour finisce davvero a Marrakech?" },
        answer:   { fr: "Oui, cet itinéraire est une boucle qui commence et se termine à Marrakech.", en: "Yes, this route is a loop starting and ending in Marrakech.", ar: "نعم، هذا المسار عبارة عن حلقة تبدأ وتنتهي في مراكش.", it: "Sì, questo percorso è un circuito che inizia e finisce a Marrakech." },
      },
    ],
  },

  /* ── 11 — 9-Day Morocco: Sahara, Fes & Chefchaouen ── */
  {
    slug:     "9-day-morocco-sahara-fes-chefchaouen",
    image:    "/images/desertCamels.jpg",
    gallery:  ["/images/aitBenHaddouKasbah.jpg", "/images/chefchaouen.jpg", "/images/fes.jpg"],
    featured: true,
    days:     { fr: "9 Jours", en: "9 Days", ar: "9 أيام", it: "9 Giorni" },
    daysNum:  9,
    title: {
      fr: "Circuit de 9 jours au Maroc : Sahara, Fès & Chefchaouen",
      en: "9-Day Morocco Tour from Marrakech via Sahara, Fes & Chefchaouen",
      ar: "جولة مغربية لمدة 9 أيام من مراكش عبر الصحراء وفاس وشفشاون",
      it: "Tour del Marocco di 9 giorni da Marrakech via Sahara, Fes & Chefchaouen",
    },
    short: {
      fr: "Marrakech → Aït Ben Haddou → Dadès → Merzouga (Sahara) → Fès → Chefchaouen → Rabat → Casablanca",
      en: "Marrakech → Ait Ben Haddou → Dades → Merzouga (Sahara) → Fes → Chefchaouen → Rabat → Casablanca",
      ar: "مراكش ← آيت بن حدو ← دادس ← مرزوكة (الصحراء) ← فاس ← شفشاون ← الرباط ← الدار البيضاء",
      it: "Marrakech → Aït Ben Haddou → Dadès → Merzouga (Sahara) → Fes → Chefchaouen → Rabat → Casablanca",
    },
    intro: {
      fr: "Le circuit marocain complet en neuf jours : villes impériales, une nuit sous les étoiles dans le Sahara, et la perle bleue de Chefchaouen, le tout en un seul voyage privé continu depuis Marrakech.",
      en: "The complete Morocco circuit in nine days: imperial cities, a night under the stars in the Sahara, and the Blue Pearl of Chefchaouen, all in one continuous private journey from Marrakech.",
      ar: "الجولة المغربية الكاملة في تسعة أيام: المدن الإمبراطورية، ليلة تحت النجوم في الصحراء الكبرى، ولؤلؤة شفشاون الزرقاء، كل ذلك في رحلة خاصة واحدة متواصلة من مراكش.",
      it: "Il circuito completo del Marocco in nove giorni: città imperiali, una notte sotto le stelle nel Sahara e la Perla Blu di Chefchaouen, tutto in un unico viaggio privato continuo da Marrakech.",
    },
    highlights: {
      fr: ["Kasbah d'Aït Ben Haddou classée à l'UNESCO", "Balade à dos de chameau et nuit en camp désertique dans le Sahara", "Médina de Fès, tanneries et la perle bleue de Chefchaouen", "Ruines romaines de Volubilis et sites impériaux de Rabat"],
      en: ["UNESCO-listed Ait Ben Haddou kasbah", "Camel trek and overnight desert camp in the Sahara", "Fes medina, tanneries and the Blue Pearl of Chefchaouen", "Roman ruins at Volubilis and Rabat's imperial sites"],
      ar: ["قصبة آيت بن حدو المصنفة ضمن تراث اليونسكو", "ركوب الجمال وليلة في مخيم صحراوي بالصحراء الكبرى", "مدينة فاس القديمة، الدباغات، ولؤلؤة شفشاون الزرقاء", "أطلال فوليبيليس الرومانية والمواقع الإمبراطورية في الرباط"],
      it: ["Kasba di Aït Ben Haddou patrimonio UNESCO", "Escursione in cammello e notte nel campo nel deserto del Sahara", "Medina di Fes, concerie e la Perla Blu di Chefchaouen", "Rovine romane di Volubilis e siti imperiali di Rabat"],
    },
    itinerary: [
      {
        day:   { fr: "Jour 1", en: "Day 1", ar: "اليوم 1", it: "Giorno 1" },
        title: { fr: "Arrivée à Marrakech", en: "Marrakech Arrival", ar: "الوصول إلى مراكش", it: "Arrivo a Marrakech" },
        description: { fr: "Réunion d'accueil, avec du temps libre pour explorer la place Jemaa el-Fnaa et la médina.", en: "Welcome meeting, with free time to explore Jemaa el-Fnaa and the medina.", ar: "لقاء ترحيبي، مع وقت حر لاستكشاف ساحة جامع الفنا والمدينة القديمة.", it: "Riunione di benvenuto, con tempo libero per esplorare Jemaa el-Fnaa e la medina." },
      },
      {
        day:   { fr: "Jour 2", en: "Day 2", ar: "اليوم 2", it: "Giorno 2" },
        title: { fr: "Marrakech → Vallée du Dadès", en: "Marrakech to Dades Valley", ar: "مراكش إلى وادي دادس", it: "Marrakech → Valle del Dadès" },
        description: { fr: "Traversée du Haut Atlas par le col du Tizi n'Tichka, arrêt à la kasbah d'Aït Ben Haddou, puis poursuite vers les gorges du Dadès pour la nuit.", en: "Cross the High Atlas via the Tizi n'Tichka Pass, stop at the Ait Ben Haddou kasbah, then continue to the Dades Gorge for the night.", ar: "عبور جبال الأطلس الكبير عبر ممر تيزي ن تيشكا، توقف عند قصبة آيت بن حدو، ثم المتابعة نحو مضايق دادس لقضاء الليلة.", it: "Attraversate l'Alto Atlante con il Passo Tizi n'Tichka, fermatevi alla kasba di Aït Ben Haddou, poi proseguite verso la Gola del Dadès per la notte." },
      },
      {
        day:   { fr: "Jour 3", en: "Day 3", ar: "اليوم 3", it: "Giorno 3" },
        title: { fr: "Dadès → Merzouga", en: "Dades to Merzouga", ar: "دادس إلى مرزوكة", it: "Dadès → Merzouga" },
        description: { fr: "Route à travers les gorges du Todra et les plaines du Sahara jusqu'à Merzouga, suivie d'une balade à dos de chameau au coucher du soleil vers un camp désertique.", en: "Drive through the Todra Gorge and across the Sahara plains to Merzouga, followed by a sunset camel trek to a desert camp.", ar: "القيادة عبر وادي تودرة وسهول الصحراء إلى مرزوقة، تليها رحلة بالجمال عند الغروب إلى مخيم الصحراء.", it: "Guidate attraverso la Gola di Todra e le pianure del Sahara fino a Merzouga, seguita da un'escursione al tramonto in cammello verso un campo nel deserto." },
      },
      {
        day:   { fr: "Jour 4", en: "Day 4", ar: "اليوم 4", it: "Giorno 4" },
        title: { fr: "Sahara → Fès", en: "Sahara to Fes", ar: "الصحراء إلى فاس", it: "Sahara → Fes" },
        description: { fr: "Admirez le lever du soleil sur les dunes, puis route vers le nord via la vallée du Ziz et les forêts de cèdres du Moyen Atlas à Midelt jusqu'à Fès.", en: "Watch the sunrise over the dunes, then drive north via the Ziz Valley and Midelt's Middle Atlas cedar forests to Fes.", ar: "شاهد شروق الشمس فوق الكثبان، ثم التوجه شمالاً عبر وادي الزيز وغابات الأرز في الأطلس المتوسط بميدلت وصولاً إلى فاس.", it: "Ammirate l'alba sulle dune, poi guidate verso nord via la Valle dello Ziz e le foreste di cedri dell'Atlante Medio di Midelt fino a Fes." },
      },
      {
        day:   { fr: "Jour 5", en: "Day 5", ar: "اليوم 5", it: "Giorno 5" },
        title: { fr: "Visite de la médina de Fès", en: "Fes Medina Tour", ar: "جولة في مدينة فاس", it: "Tour della medina di Fes" },
        description: { fr: "Une promenade guidée à travers la plus grande médina sans voitures au monde — tanneries, médersas et souks.", en: "A guided walk through the world's largest car-free medina — tanneries, madrasas and souks.", ar: "جولة مرشدة في أكبر مدينة خالية من السيارات في العالم — المدابغ والمدارس والأسواق.", it: "Una passeggiata guidata attraverso la più grande medina car-free del mondo — concerie, madrasse e souk." },
      },
      {
        day:   { fr: "Jour 6", en: "Day 6", ar: "اليوم 6", it: "Giorno 6" },
        title: { fr: "Fès → Chefchaouen", en: "Fes to Chefchaouen", ar: "فاس إلى شفشاون", it: "Fes → Chefchaouen" },
        description: { fr: "Un arrêt optionnel aux ruines romaines de Volubilis et à Moulay Idriss en chemin vers la ville bleue.", en: "An optional stop at the Roman ruins of Volubilis and Moulay Idriss en route to the Blue City.", ar: "توقف اختياري عند أطلال فوليبيليس الرومانية ومولاي إدريس في الطريق إلى المدينة الزرقاء.", it: "Una sosta facoltativa alle rovine romane di Volubilis e Moulay Idriss in route verso la Città Blu." },
      },
      {
        day:   { fr: "Jour 7", en: "Day 7", ar: "اليوم 7", it: "Giorno 7" },
        title: { fr: "Découverte de Chefchaouen", en: "Chefchaouen Exploration", ar: "استكشاف شفشاون", it: "Esplorazione di Chefchaouen" },
        description: { fr: "Une matinée libre pour flâner dans les ruelles bleues, puis un transfert l'après-midi vers Rabat.", en: "A free morning to wander the blue-washed lanes, then an afternoon transfer toward Rabat.", ar: "صباح حر للتجوال في الأزقة الزرقاء، ثم تنقل بعد الظهر نحو الرباط.", it: "Una mattinata libera per passeggiare nei vicoli tinteggiati di blu, poi un trasferimento pomeridiano verso Rabat." },
      },
      {
        day:   { fr: "Jour 8", en: "Day 8", ar: "اليوم 8", it: "Giorno 8" },
        title: { fr: "Rabat et Casablanca", en: "Rabat & Casablanca", ar: "الرباط والدار البيضاء", it: "Rabat & Casablanca" },
        description: { fr: "Visite de la tour Hassan, du palais royal et de la kasbah des Oudayas, puis poursuite vers Casablanca pour la mosquée Hassan II.", en: "Visit the Hassan Tower, the Royal Palace and the Kasbah of the Udayas, then continue to Casablanca for the Hassan II Mosque.", ar: "زيارة صومعة حسان والقصر الملكي وقصبة الأوداية، ثم التوجه إلى الدار البيضاء لزيارة مسجد الحسن الثاني.", it: "Visitate la Torre Hassan, il Palazzo Reale e la Kasba degli Udaias, poi proseguite verso Casablanca per la Moschea Hassan II." },
      },
      {
        day:   { fr: "Jour 9", en: "Day 9", ar: "اليوم 9", it: "Giorno 9" },
        title: { fr: "Départ", en: "Departure", ar: "المغادرة", it: "Partenza" },
        description: { fr: "Transfert vers l'aéroport de Casablanca ou de Marrakech pour votre départ.", en: "Transfer to the Casablanca or Marrakech airport for your departure.", ar: "النقل إلى مطار الدار البيضاء أو مراكش للمغادرة.", it: "Trasferimento all'aeroporto di Casablanca o Marrakech per la vostra partenza." },
      },
    ],
    faqs: [
      {
        question: { fr: "Ce circuit est-il privé ou en petit groupe ?", en: "Is this tour private or a small group?", ar: "هل هذه الجولة خاصة أم في مجموعة صغيرة؟", it: "Questo tour è privato o in piccolo gruppo?" },
        answer:   { fr: "Disponible dans les deux formules — rejoignez un départ en petit groupe ou réservez-le en circuit entièrement privé avec votre propre véhicule et chauffeur.", en: "Available both ways — join a small group departure or book it as a fully private tour with your own vehicle and driver.", ar: "متوفر بالطريقتين — انضم إلى مغادرة بمجموعة صغيرة أو احجزها كجولة خاصة بالكامل مع سيارتك وسائقك الخاصين.", it: "Disponibile in entrambe le modalità — unitevi a una partenza in piccolo gruppo o prenotatelo come tour completamente privato con il vostro veicolo e autista." },
      },
      {
        question: { fr: "Où se termine le circuit ?", en: "Where does the tour end?", ar: "أين تنتهي الجولة؟", it: "Dove finisce il tour?" },
        answer:   { fr: "La fin standard est à Marrakech, mais une fin ouverte à Casablanca peut être organisée sur demande.", en: "The standard finish is back in Marrakech, but an open-jaw ending in Casablanca can be arranged on request.", ar: "النهاية القياسية في مراكش، لكن يمكن ترتيب نهاية مفتوحة في الدار البيضاء عند الطلب.", it: "La fine standard è a Marrakech, ma un finale open-jaw a Casablanca può essere organizzato su richiesta." },
      },
      {
        question: { fr: "L'hébergement est-il inclus ?", en: "Is accommodation included?", ar: "هل الإقامة مشمولة؟", it: "L'alloggio è incluso?" },
        answer:   { fr: "L'hébergement et le camp désertique du Sahara sont inclus pour les départs en groupe ; pour les circuits privés, nous sommes heureux de recommander des riads et hôtels le long de la route.", en: "Accommodation and the Sahara desert camp are included on group departures; for private tours we're happy to recommend riads and hotels along the route.", ar: "الإقامة والمخيم الصحراوي مشمولان في المغادرات الجماعية؛ وللجولات الخاصة نوصي بكل سرور بالرياض والفنادق على طول المسار.", it: "L'alloggio e il campo nel deserto del Sahara sono inclusi nelle partenze di gruppo; per i tour privati siamo lieti di consigliare riad e hotel lungo il percorso." },
      },
    ],
  },

  /* ── 12 — 10-Day Imperial Cities & Sahara ── */
  {
    slug:     "10-day-morocco-imperial-cities-sahara-tour",
    image:    "/images/rabatCity.jpg",
    gallery:  ["/images/meknesGate.jpg", "/images/dunes.jpg", "/images/aitBenHaddouKasbah.jpg"],
    featured: false,
    days:     { fr: "10 Jours", en: "10 Days", ar: "10 أيام", it: "10 Giorni" },
    daysNum:  10,
    title: {
      fr: "Circuit de 10 jours des villes impériales et du Sahara marocain",
      en: "10-Day Morocco Imperial Cities & Sahara Tour",
      ar: "جولة المدن الإمبراطورية والصحراء المغربية لمدة 10 أيام",
      it: "Tour di 10 giorni delle Città Imperiali e del Sahara marocchino",
    },
    short: {
      fr: "Casablanca/Marrakech → Rabat → Meknès → Volubilis → Fès → Merzouga (Sahara) → Dadès → Aït Ben Haddou → Marrakech",
      en: "Casablanca/Marrakech → Rabat → Meknes → Volubilis → Fes → Merzouga (Sahara) → Dades → Ait Ben Haddou → Marrakech",
      ar: "الدار البيضاء/مراكش ← الرباط ← مكناس ← فوليبيليس ← فاس ← مرزوكة (الصحراء) ← دادس ← آيت بن حدو ← مراكش",
      it: "Casablanca/Marrakech → Rabat → Meknès → Volubilis → Fes → Merzouga (Sahara) → Dadès → Aït Ben Haddou → Marrakech",
    },
    intro: {
      fr: "Les quatre villes impériales, l'histoire romaine, et un véritable camp saharien en un circuit approfondi et culturel de dix jours.",
      en: "All four imperial cities, Roman history, and a genuine Sahara camp in one deep, culture-focused circuit of ten days.",
      ar: "المدن الإمبراطورية الأربع، التاريخ الروماني، ومخيم صحراوي حقيقي في جولة ثقافية عميقة مدتها عشرة أيام.",
      it: "Tutte e quattro le città imperiali, la storia romana e un autentico campo sahariano in un circuito culturale approfondito di dieci giorni.",
    },
    highlights: {
      fr: ["Les quatre villes impériales : Rabat, Meknès, Fès et Marrakech", "Ruines romaines de Volubilis", "Une nuit en camp désertique dans le Sahara", "Les gorges du Dadès et du Todra ainsi que la kasbah d'Aït Ben Haddou"],
      en: ["All four imperial cities: Rabat, Meknes, Fes and Marrakech", "Roman ruins of Volubilis", "An overnight Sahara desert camp", "Both the Dades and Todra gorges plus the Ait Ben Haddou kasbah"],
      ar: ["المدن الإمبراطورية الأربع: الرباط، مكناس، فاس ومراكش", "أطلال فوليبيليس الرومانية", "ليلة في مخيم صحراوي بالصحراء الكبرى", "مضايق دادس وتودرا بالإضافة إلى قصبة آيت بن حدو"],
      it: ["Tutte e quattro le città imperiali: Rabat, Meknès, Fes e Marrakech", "Rovine romane di Volubilis", "Una notte nel campo del deserto del Sahara", "Entrambe le gole del Dadès e di Todra più la kasba di Aït Ben Haddou"],
    },
    itinerary: [
      {
        day:   { fr: "Jour 1", en: "Day 1", ar: "اليوم 1", it: "Giorno 1" },
        title: { fr: "Arrivée (Casablanca ou Marrakech)", en: "Arrival (Casablanca or Marrakech)", ar: "الوصول (الدار البيضاء أو مراكش)", it: "Arrivo (Casablanca o Marrakech)" },
        description: { fr: "Accueil et orientation.", en: "Welcome and orientation.", ar: "استقبال وتوجيه.", it: "Benvenuto e orientamento." },
      },
      {
        day:   { fr: "Jour 2", en: "Day 2", ar: "اليوم 2", it: "Giorno 2" },
        title: { fr: "Casablanca → Rabat", en: "Casablanca to Rabat", ar: "الدار البيضاء إلى الرباط", it: "Casablanca → Rabat" },
        description: { fr: "Mosquée Hassan II, puis la kasbah des Oudayas et le palais royal de Rabat.", en: "Hassan II Mosque, then Rabat's Kasbah of the Udayas and Royal Palace.", ar: "مسجد الحسن الثاني، ثم قصبة الأوداية والقصر الملكي بالرباط.", it: "Moschea Hassan II, poi la Kasba degli Udaias e il Palazzo Reale di Rabat." },
      },
      {
        day:   { fr: "Jour 3", en: "Day 3", ar: "اليوم 3", it: "Giorno 3" },
        title: { fr: "Rabat → Meknès & Volubilis", en: "Rabat to Meknes & Volubilis", ar: "الرباط إلى مكناس وفوليبيليس", it: "Rabat → Meknès & Volubilis" },
        description: { fr: "Découverte de la porte Bab Mansour et des écuries royales de Meknès, puis les ruines romaines de Volubilis.", en: "Explore Meknes' Bab Mansour gate and royal stables, then the Roman ruins of Volubilis.", ar: "استكشاف باب منصور والإسطبلات الملكية بمكناس، ثم أطلال فوليبيليس الرومانية.", it: "Esplorate la porta Bab Mansour e le scuderie reali di Meknès, poi le rovine romane di Volubilis." },
      },
      {
        day:   { fr: "Jour 4", en: "Day 4", ar: "اليوم 4", it: "Giorno 4" },
        title: { fr: "Médina de Fès", en: "Fes Medina", ar: "مدينة فاس القديمة", it: "Medina di Fes" },
        description: { fr: "Une journée complète de visite guidée de la médina, des tanneries et des ateliers d'artisans.", en: "A full day guided tour of the medina, tanneries and artisan workshops.", ar: "يوم كامل بجولة مصحوبة بمرشد في المدينة القديمة والدباغات وورش الحرفيين.", it: "Una giornata intera di visita guidata della medina, delle concerie e dei laboratori artigianali." },
      },
      {
        day:   { fr: "Jour 5", en: "Day 5", ar: "اليوم 5", it: "Giorno 5" },
        title: { fr: "Fès → Merzouga", en: "Fes to Merzouga", ar: "فاس إلى مرزوكة", it: "Fes → Merzouga" },
        description: { fr: "Traversée des forêts de cèdres du Moyen Atlas et des oasis de la vallée du Ziz jusqu'au Sahara ; balade à dos de chameau vers le camp.", en: "Cross the Middle Atlas cedar forests and Ziz Valley oases to the Sahara; camel trek to camp.", ar: "عبور غابات الأرز في الأطلس المتوسط وواحات وادي زيز وصولاً إلى الصحراء؛ ركوب الجمال نحو المخيم.", it: "Attraversate le foreste di cedri dell'Atlante Medio e le oasi della Valle dello Ziz fino al Sahara; escursione in cammello verso il campo." },
      },
      {
        day:   { fr: "Jour 6", en: "Day 6", ar: "اليوم 6", it: "Giorno 6" },
        title: { fr: "Exploration du Sahara", en: "Sahara Exploration", ar: "استكشاف الصحراء", it: "Esplorazione del Sahara" },
        description: { fr: "Lever de soleil sur les dunes, excursion optionnelle en surf des sables ou en 4x4, puis route vers les gorges du Todra.", en: "Sunrise over the dunes, an optional sandboarding or 4x4 desert excursion, then a drive to the Todra Gorge.", ar: "شروق الشمس فوق الكثبان، رحلة اختيارية للتزلج على الرمال أو بسيارات الدفع الرباعي، ثم القيادة نحو مضايق تودرا.", it: "Alba sulle dune, un'escursione facoltativa su sabbia o in fuoristrada, poi guida verso la Gola di Todra." },
      },
      {
        day:   { fr: "Jour 7", en: "Day 7", ar: "اليوم 7", it: "Giorno 7" },
        title: { fr: "Todra → Gorges du Dadès", en: "Todra to Dades Gorge", ar: "تودرا إلى مضايق دادس", it: "Todra → Gola del Dadès" },
        description: { fr: "Marches dans les gorges et villages berbères le long de la route des mille kasbahs.", en: "Gorge walks and Berber villages along the Road of a Thousand Kasbahs.", ar: "نزهات في المضايق وقرى بربرية على طول طريق الألف قصبة.", it: "Passeggiate nelle gole e villaggi berberi lungo la Strada delle Mille Kasbah." },
      },
      {
        day:   { fr: "Jour 8", en: "Day 8", ar: "اليوم 8", it: "Giorno 8" },
        title: { fr: "Dadès → Aït Ben Haddou", en: "Dades to Ait Ben Haddou", ar: "دادس إلى آيت بن حدو", it: "Dadès → Aït Ben Haddou" },
        description: { fr: "Visite de la kasbah classée à l'UNESCO, puis poursuite par le col du Tizi n'Tichka vers Marrakech.", en: "Visit the UNESCO kasbah, then continue over the Tizi n'Tichka Pass toward Marrakech.", ar: "زيارة القصبة المصنفة ضمن تراث اليونسكو، ثم المتابعة عبر ممر تيزي ن تيشكا نحو مراكش.", it: "Visitate la kasba patrimonio UNESCO, poi proseguite attraverso il Passo Tizi n'Tichka verso Marrakech." },
      },
      {
        day:   { fr: "Jour 9", en: "Day 9", ar: "اليوم 9", it: "Giorno 9" },
        title: { fr: "Marrakech", en: "Marrakech", ar: "مراكش", it: "Marrakech" },
        description: { fr: "Une visite guidée de la médina — le palais de la Bahia, la mosquée Koutoubia, les souks et la place Jemaa el-Fnaa la nuit.", en: "A guided medina tour — the Bahia Palace, the Koutoubia Mosque, the souks, and Jemaa el-Fnaa by night.", ar: "جولة مصحوبة بمرشد في المدينة القديمة — قصر الباهية، مسجد الكتبية، الأسواق، وساحة جامع الفنا ليلاً.", it: "Una visita guidata della medina — il Palazzo della Bahia, la Moschea Koutoubia, i souk e Jemaa el-Fnaa di notte." },
      },
      {
        day:   { fr: "Jour 10", en: "Day 10", ar: "اليوم 10", it: "Giorno 10" },
        title: { fr: "Départ", en: "Departure", ar: "المغادرة", it: "Partenza" },
        description: { fr: "Transfert vers l'aéroport de Marrakech.", en: "Transfer to the Marrakech airport.", ar: "النقل إلى مطار مراكش.", it: "Trasferimento all'aeroporto di Marrakech." },
      },
    ],
    faqs: [
      {
        question: { fr: "Ce circuit est-il plus axé sur l'histoire que les autres ?", en: "Is this tour more history-focused than the others?", ar: "هل هذه الجولة أكثر تركيزاً على التاريخ من غيرها؟", it: "Questo tour è più orientato alla storia rispetto agli altri?" },
        answer:   { fr: "Oui — il est conçu pour les voyageurs passionnés de culture, avec plus de temps dans les villes impériales avant la partie désertique.", en: "Yes — it's built for culture-focused travelers, spending more time in the imperial cities before the desert section.", ar: "نعم — مصممة للمسافرين المهتمين بالثقافة، مع وقت أطول في المدن الإمبراطورية قبل قسم الصحراء.", it: "Sì — è pensato per i viaggiatori appassionati di cultura, che trascorrono più tempo nelle città imperiali prima della sezione del deserto." },
      },
      {
        question: { fr: "Le circuit peut-il commencer à Marrakech plutôt qu'à Casablanca ?", en: "Can the tour start in Marrakech instead of Casablanca?", ar: "هل يمكن أن تبدأ الجولة من مراكش بدلاً من الدار البيضاء؟", it: "Il tour può iniziare da Marrakech invece di Casablanca?" },
        answer:   { fr: "Oui, l'itinéraire peut fonctionner dans les deux sens selon votre aéroport d'arrivée.", en: "Yes, the route can run in either direction depending on your arrival airport.", ar: "نعم، يمكن للمسار أن يعمل في كلا الاتجاهين حسب مطار وصولك.", it: "Sì, il percorso può procedere in entrambe le direzioni a seconda dell'aeroporto di arrivo." },
      },
      {
        question: { fr: "Une excursion en surf des sables ou en 4x4 est-elle incluse ?", en: "Is a sandboarding or 4x4 excursion included?", ar: "هل رحلة التزلج على الرمال أو الدفع الرباعي مشمولة؟", it: "È inclusa un'escursione su sabbia o in fuoristrada?" },
        answer:   { fr: "Elle est proposée en option à Merzouga, non incluse dans le prix de base.", en: "It's offered as an optional add-on in Merzouga, not included in the base price.", ar: "تُقدَّم كخيار إضافي في مرزوكة، وغير مشمولة في السعر الأساسي.", it: "È offerta come add-on opzionale a Merzouga, non inclusa nel prezzo base." },
      },
    ],
  },

  /* ── 13 — 5-Day Tangier → Marrakech via Chefchaouen & Sahara ── */
  {
    slug:     "5-day-tangier-marrakech-chefchaouen-sahara-tour",
    image:    "/images/tangerCity.jpg",
    gallery:  ["/images/chefchaouen.jpg", "/images/dunes.jpg", "/images/aitBenHaddouKasbah.jpg"],
    featured: false,
    days:     { fr: "5 Jours", en: "5 Days", ar: "5 أيام", it: "5 Giorni" },
    daysNum:  5,
    title: {
      fr: "Circuit de 5 jours au Maroc de Tanger à Marrakech via Chefchaouen et le Sahara",
      en: "5-Day Morocco Tour from Tangier to Marrakech via Chefchaouen & Sahara",
      ar: "جولة مغربية لمدة 5 أيام من طنجة إلى مراكش عبر شفشاون والصحراء",
      it: "Tour del Marocco di 5 giorni da Tangeri a Marrakech via Chefchaouen & Sahara",
    },
    short: {
      fr: "Tanger → Chefchaouen → Fès → Merzouga (Sahara) → Dadès → Aït Ben Haddou → Marrakech",
      en: "Tangier → Chefchaouen → Fes → Merzouga (Sahara) → Dades → Ait Ben Haddou → Marrakech",
      ar: "طنجة ← شفشاون ← فاس ← مرزوكة (الصحراء) ← دادس ← آيت بن حدو ← مراكش",
      it: "Tangeri → Chefchaouen → Fes → Merzouga (Sahara) → Dadès → Aït Ben Haddou → Marrakech",
    },
    intro: {
      fr: "Une traversée nord-sud rythmée — la ville bleue, Fès, un camp saharien, et la route des kasbahs, se terminant à Marrakech.",
      en: "A fast-paced north-to-south crossing — the Blue City, Fes, a Sahara camp, and the kasbah route, ending in Marrakech.",
      ar: "عبور شمالي-جنوبي سريع الوتيرة — المدينة الزرقاء، فاس، مخيم صحراوي، وطريق القصبات، لينتهي في مراكش.",
      it: "Un attraversamento nord-sud a ritmo sostenuto — la Città Blu, Fes, un campo sahariano e la rotta delle kasbah, che termina a Marrakech.",
    },
    highlights: {
      fr: ["Médina bleue de Chefchaouen dans les montagnes du Rif", "Médina et tanneries de Fès", "Balade à dos de chameau et nuit en camp désertique au Sahara", "Gorges du Todra et du Dadès ainsi que la kasbah d'Aït Ben Haddou"],
      en: ["Chefchaouen's blue medina in the Rif Mountains", "Fes medina and tanneries", "Camel trek and overnight desert camp in the Sahara", "Todra & Dades gorges and the Ait Ben Haddou kasbah"],
      ar: ["المدينة الزرقاء بشفشاون في جبال الريف", "مدينة فاس القديمة ودباغاتها", "ركوب الجمال وليلة في مخيم صحراوي بالصحراء", "مضايق تودرا ودادس بالإضافة إلى قصبة آيت بن حدو"],
      it: ["La medina blu di Chefchaouen nelle montagne del Rif", "Medina e concerie di Fes", "Escursione in cammello e notte nel campo nel deserto del Sahara", "Gole di Todra e Dadès più la kasba di Aït Ben Haddou"],
    },
    itinerary: [
      {
        day:   { fr: "Jour 1", en: "Day 1", ar: "اليوم 1", it: "Giorno 1" },
        title: { fr: "Tanger → Chefchaouen", en: "Tangier to Chefchaouen", ar: "طنجة إلى شفشاون", it: "Tangeri → Chefchaouen" },
        description: { fr: "Prise en charge à Tanger, traversée des montagnes du Rif, après-midi libre dans la médina bleue de Chefchaouen.", en: "Pick-up in Tangier, a drive through the Rif Mountains, afternoon free in Chefchaouen's blue medina.", ar: "استقبال في طنجة، قيادة عبر جبال الريف، بعد ظهر حر في المدينة الزرقاء بشفشاون.", it: "Ritiro a Tangeri, guida attraverso le montagne del Rif, pomeriggio libero nella medina blu di Chefchaouen." },
      },
      {
        day:   { fr: "Jour 2", en: "Day 2", ar: "اليوم 2", it: "Giorno 2" },
        title: { fr: "Chefchaouen → Fès", en: "Chefchaouen to Fes", ar: "شفشاون إلى فاس", it: "Chefchaouen → Fes" },
        description: { fr: "Départ matinal, arrivée à Fès pour une visite de la médina l'après-midi.", en: "Morning departure, arriving in Fes for an afternoon medina tour.", ar: "انطلاق صباحي، الوصول إلى فاس لجولة في المدينة القديمة بعد الظهر.", it: "Partenza mattutina, arrivo a Fes per un tour pomeridiano della medina." },
      },
      {
        day:   { fr: "Jour 3", en: "Day 3", ar: "اليوم 3", it: "Giorno 3" },
        title: { fr: "Fès → Merzouga", en: "Fes to Merzouga", ar: "فاس إلى مرزوكة", it: "Fes → Merzouga" },
        description: { fr: "Traversée du Moyen Atlas et de la vallée du Ziz jusqu'au Sahara ; balade à dos de chameau vers un camp désertique pour la nuit.", en: "Cross the Middle Atlas and the Ziz Valley to the Sahara; camel trek to a desert camp for the night.", ar: "عبور الأطلس المتوسط ووادي زيز وصولاً إلى الصحراء؛ ركوب الجمال نحو مخيم صحراوي لقضاء الليلة.", it: "Attraversate l'Atlante Medio e la Valle dello Ziz fino al Sahara; escursione in cammello verso un campo nel deserto per la notte." },
      },
      {
        day:   { fr: "Jour 4", en: "Day 4", ar: "اليوم 4", it: "Giorno 4" },
        title: { fr: "Sahara → Gorges du Dadès", en: "Sahara to Dades Gorge", ar: "الصحراء إلى مضايق دادس", it: "Sahara → Gola del Dadès" },
        description: { fr: "Lever de soleil sur les dunes, arrêt aux gorges du Todra, nuit dans la vallée du Dadès.", en: "Sunrise over the dunes, a Todra Gorge stop, overnight in the Dades Valley.", ar: "شروق الشمس فوق الكثبان، توقف عند مضايق تودرا، ليلة في وادي دادس.", it: "Alba sulle dune, sosta alla Gola di Todra, pernottamento nella Valle del Dadès." },
      },
      {
        day:   { fr: "Jour 5", en: "Day 5", ar: "اليوم 5", it: "Giorno 5" },
        title: { fr: "Dadès → Marrakech", en: "Dades to Marrakech", ar: "دادس إلى مراكش", it: "Dadès → Marrakech" },
        description: { fr: "Aït Ben Haddou, le col du Tizi n'Tichka, arrivée à Marrakech ; dépose à votre hôtel ou à l'aéroport.", en: "Ait Ben Haddou, the Tizi n'Tichka Pass, arrival in Marrakech; drop-off at your hotel or the airport.", ar: "آيت بن حدو، ممر تيزي ن تيشكا، الوصول إلى مراكش؛ التوصيل إلى فندقك أو المطار.", it: "Aït Ben Haddou, il Passo Tizi n'Tichka, arrivo a Marrakech; accompagnamento al vostro hotel o all'aeroporto." },
      },
    ],
    faqs: [
      {
        question: { fr: "Cet itinéraire est-il précipité ?", en: "Is this a rushed itinerary?", ar: "هل هذا البرنامج متسرع؟", it: "È un itinerario frettoloso?" },
        answer:   { fr: "Il est effectivement rythmé avec quelques longues journées de route — bien adapté aux voyageurs avec un emploi du temps serré.", en: "It's genuinely fast-paced with some long driving days — a good fit for travelers on a tight schedule.", ar: "إنه فعلاً سريع الوتيرة مع بعض أيام القيادة الطويلة — مناسب للمسافرين ذوي الجدول الضيق.", it: "È genuinamente a ritmo sostenuto con alcune lunghe giornate di guida — adatto ai viaggiatori con un programma serrato." },
      },
      {
        question: { fr: "Se termine-t-il vraiment à Marrakech, sans boucler vers Tanger ?", en: "Does it really end in Marrakech, not loop back to Tangier?", ar: "هل تنتهي فعلاً في مراكش دون العودة إلى طنجة؟", it: "Finisce davvero a Marrakech, senza ritornare a Tangeri?" },
        answer:   { fr: "Exact — c'est un itinéraire aller simple ; un retour à Tanger n'est pas inclus mais peut être organisé séparément.", en: "Correct — this is a one-way route; a return to Tangier isn't included but can be arranged separately.", ar: "صحيح — هذا مسار ذهاب فقط؛ العودة إلى طنجة غير مشمولة لكن يمكن ترتيبها بشكل منفصل.", it: "Corretto — questo è un percorso di sola andata; un ritorno a Tangeri non è incluso ma può essere organizzato separatamente." },
      },
    ],
  },

  /* ── 14 — 3-Day Fes → Merzouga → Marrakech ── */
  {
    slug:     "3-day-fes-merzouga-marrakech-sahara-tour",
    image:    "/images/fes.jpg",
    gallery:  ["/images/dunes.jpg", "/images/aitBenHaddouKasbah.jpg"],
    featured: false,
    days:     { fr: "3 Jours", en: "3 Days", ar: "3 أيام", it: "3 Giorni" },
    daysNum:  3,
    title: {
      fr: "Circuit de 3 jours de Fès à Merzouga, désert du Sahara, se terminant à Marrakech",
      en: "3-Day Fes to Merzouga Sahara Desert Tour Ending in Marrakech",
      ar: "جولة صحراء لمدة 3 أيام من فاس إلى مرزوكة تنتهي في مراكش",
      it: "Tour di 3 giorni da Fes a Merzouga nel deserto del Sahara con arrivo a Marrakech",
    },
    short: {
      fr: "Fès → Vallée du Ziz → Merzouga (Sahara) → Gorges du Dadès et du Todra → Aït Ben Haddou → Marrakech",
      en: "Fes → Ziz Valley → Merzouga (Sahara) → Dades & Todra Gorges → Ait Ben Haddou → Marrakech",
      ar: "فاس ← وادي زيز ← مرزوكة (الصحراء) ← مضايق دادس وتودرا ← آيت بن حدو ← مراكش",
      it: "Fes → Valle dello Ziz → Merzouga (Sahara) → Gole del Dadès e Todra → Aït Ben Haddou → Marrakech",
    },
    intro: {
      fr: "Une traversée désertique aller simple de Fès à Marrakech : une balade à dos de chameau, un camp désertique, les deux grandes gorges, et la route des kasbahs.",
      en: "A one-way desert crossing from Fes to Marrakech: a camel trek, a desert camp, both major gorges, and the kasbah route.",
      ar: "عبور صحراوي ذهاباً فقط من فاس إلى مراكش: ركوب الجمال، مخيم صحراوي، المضايق الرئيسية، وطريق القصبات.",
      it: "Un attraversamento del deserto di sola andata da Fes a Marrakech: un'escursione in cammello, un campo nel deserto, entrambe le gole principali e la rotta delle kasbah.",
    },
    highlights: {
      fr: ["Forêts de cèdres du Moyen Atlas et oasis de la vallée du Ziz", "Balade à dos de chameau et nuit en camp désertique au Sahara", "Les gorges du Todra et du Dadès", "La kasbah d'Aït Ben Haddou en chemin vers Marrakech"],
      en: ["Middle Atlas cedar forests and Ziz Valley oases", "Camel trek and overnight desert camp in the Sahara", "Both the Todra and Dades gorges", "The Ait Ben Haddou kasbah on the way into Marrakech"],
      ar: ["غابات الأرز في الأطلس المتوسط وواحات وادي زيز", "ركوب الجمال وليلة في مخيم صحراوي بالصحراء", "مضايق تودرا ودادس معاً", "قصبة آيت بن حدو في الطريق نحو مراكش"],
      it: ["Foreste di cedri dell'Atlante Medio e oasi della Valle dello Ziz", "Escursione in cammello e notte nel campo nel deserto del Sahara", "Entrambe le gole di Todra e Dadès", "La kasba di Aït Ben Haddou sulla via verso Marrakech"],
    },
    itinerary: [
      {
        day:   { fr: "Jour 1", en: "Day 1", ar: "اليوم 1", it: "Giorno 1" },
        title: { fr: "Fès → Merzouga", en: "Fes to Merzouga", ar: "فاس إلى مرزوكة", it: "Fes → Merzouga" },
        description: { fr: "Traversée des forêts de cèdres du Moyen Atlas et des oasis de la vallée du Ziz, arrivée à Merzouga l'après-midi, puis balade à dos de chameau au coucher du soleil vers un camp désertique pour la nuit.", en: "Cross the Middle Atlas cedar forests and the Ziz Valley oases, arriving in Merzouga by afternoon, then a sunset camel trek to a desert camp for the night.", ar: "عبور غابات الأرز في الأطلس المتوسط وواحات وادي زيز، الوصول إلى مرزوكة بعد الظهر، ثم ركوب الجمال عند الغروب نحو مخيم صحراوي لقضاء الليلة.", it: "Attraversate le foreste di cedri dell'Atlante Medio e le oasi della Valle dello Ziz, arrivando a Merzouga nel pomeriggio, poi un'escursione al tramonto in cammello verso un campo nel deserto per la notte." },
      },
      {
        day:   { fr: "Jour 2", en: "Day 2", ar: "اليوم 2", it: "Giorno 2" },
        title: { fr: "Sahara → Gorges du Dadès", en: "Sahara to Dades Gorge", ar: "الصحراء إلى مضايق دادس", it: "Sahara → Gola del Dadès" },
        description: { fr: "Lever de soleil sur les dunes, marche dans les gorges du Todra, puis direction la vallée du Dadès pour une nuit parmi les kasbahs.", en: "Sunrise over the dunes, a Todra Gorge walk, then on to the Dades Valley for an overnight among the kasbahs.", ar: "شروق الشمس فوق الكثبان، نزهة في مضايق تودرا، ثم التوجه نحو وادي دادس لقضاء ليلة بين القصبات.", it: "Alba sulle dune, passeggiata nella Gola di Todra, poi verso la Valle del Dadès per una notte tra le kasbah." },
      },
      {
        day:   { fr: "Jour 3", en: "Day 3", ar: "اليوم 3", it: "Giorno 3" },
        title: { fr: "Dadès → Marrakech", en: "Dades to Marrakech", ar: "دادس إلى مراكش", it: "Dadès → Marrakech" },
        description: { fr: "La kasbah d'Aït Ben Haddou, le col du Tizi n'Tichka, arrivée à Marrakech en soirée ; dépose à votre hôtel ou à l'aéroport.", en: "The Ait Ben Haddou kasbah, the Tizi n'Tichka Pass, arrival in Marrakech in the evening; drop-off at your hotel or the airport.", ar: "قصبة آيت بن حدو، ممر تيزي ن تيشكا، الوصول إلى مراكش مساءً؛ التوصيل إلى فندقك أو المطار.", it: "La kasba di Aït Ben Haddou, il Passo Tizi n'Tichka, arrivo a Marrakech la sera; accompagnamento al vostro hotel o all'aeroporto." },
      },
    ],
    faqs: [
      {
        question: { fr: "Est-ce l'inverse du circuit Marrakech-Merzouga ?", en: "Is this the reverse of the Marrakech-to-Merzouga tour?", ar: "هل هذه عكس جولة مراكش-مرزوكة؟", it: "È l'inverso del tour Marrakech-Merzouga?" },
        answer:   { fr: "Un itinéraire similaire, dans le sens opposé — idéal si vous arrivez à Fès et repartez de Marrakech, sans faire demi-tour.", en: "Similar route, opposite direction — ideal if you're landing in Fes and departing from Marrakech, so there's no backtracking.", ar: "مسار مشابه لكن بالاتجاه المعاكس — مثالية إذا كنت ستصل إلى فاس وتغادر من مراكش، دون العودة إلى الوراء.", it: "Percorso simile, direzione opposta — ideale se arrivate a Fes e partite da Marrakech, senza ritornare sui propri passi." },
      },
      {
        question: { fr: "Combien de temps dure le trajet du jour 1 ?", en: "How long is the drive on Day 1?", ar: "كم تستغرق القيادة في اليوم الأول؟", it: "Quanto dura il tragitto nel Giorno 1?" },
        answer:   { fr: "C'est une journée complète, environ 5 à 6 heures de route avec des arrêts, arrivant à Merzouga à temps pour la balade au coucher du soleil.", en: "It's a full day, roughly 5-6 hours of driving with stops, arriving in Merzouga in time for the sunset camel trek.", ar: "إنه يوم كامل، حوالي 5-6 ساعات قيادة مع توقفات، للوصول إلى مرزوكة في الوقت المناسب لركوب الجمال عند الغروب.", it: "È una giornata intera, circa 5-6 ore di guida con soste, arrivando a Merzouga in tempo per l'escursione al tramonto in cammello." },
      },
    ],
  },

  /* ── 15 — Casablanca to Marrakech Private Transfer / Day Tour ── */
  {
    slug:     "casablanca-to-marrakech-private-tour",
    image:    "/images/marrakech.jpg",
    gallery:  ["/images/medina.jpg", "/images/road.jpg"],
    featured: false,
    days:     { fr: "1 Jour", en: "1 Day", ar: "يوم واحد", it: "1 Giorno" },
    daysNum:  1,
    title: {
      fr: "Transfert ou visite privée de Casablanca à Marrakech",
      en: "Casablanca to Marrakech Private Tour or Transfer",
      ar: "جولة أو نقل خاص من الدار البيضاء إلى مراكش",
      it: "Tour privato o trasferimento da Casablanca a Marrakech",
    },
    short: {
      fr: "Casablanca → Settat → Khouribga → Marrakech avec arrêts optionnels en route",
      en: "Casablanca → Settat → Khouribga → Marrakech with optional stops en route",
      ar: "الدار البيضاء ← سطات ← خريبكة ← مراكش مع توقفات اختيارية",
      it: "Casablanca → Settat → Khouribga → Marrakech con soste opzionali lungo il percorso",
    },
    intro: {
      fr: "Un transfert confortable de Casablanca à Marrakech, avec la possibilité d'ajouter des arrêts touristiques en chemin pour en faire une demi-journée culturelle.",
      en: "A comfortable transfer from Casablanca to Marrakech, with the option to add sightseeing stops along the way and turn it into a cultural half-day.",
      ar: "نقل مريح من الدار البيضاء إلى مراكش، مع إمكانية إضافة توقفات سياحية على الطريق وتحويله إلى نصف يوم ثقافي.",
      it: "Un comodo trasferimento da Casablanca a Marrakech, con la possibilità di aggiungere soste turistiche lungo il percorso e trasformarlo in una mezza giornata culturale.",
    },
    highlights: {
      fr: ["Prise en charge directe à votre hôtel ou à l'aéroport de Casablanca", "Arrêt optionnel à Settat ou dans une ville du Maroc central", "Dépose à votre hébergement ou à l'aéroport de Marrakech", "Véhicule privé climatisé tout au long du trajet"],
      en: ["Direct pick-up from your Casablanca hotel or airport", "Optional stop in Settat or a central Morocco town", "Drop-off at your Marrakech accommodation or airport", "Private air-conditioned vehicle throughout"],
      ar: ["استقبال مباشر من فندقك أو مطار الدار البيضاء", "توقف اختياري في سطات أو مدينة في وسط المغرب", "التوصيل إلى إقامتك أو مطار مراكش", "سيارة خاصة مكيفة طوال الرحلة"],
      it: ["Ritiro diretto dal vostro hotel o aeroporto di Casablanca", "Sosta facoltativa a Settat o in una città del Marocco centrale", "Accompagnamento al vostro alloggio o aeroporto di Marrakech", "Veicolo privato climatizzato per tutto il viaggio"],
    },
    itinerary: [
      {
        day:   { fr: "Jour 1", en: "Day 1", ar: "اليوم 1", it: "Giorno 1" },
        title: { fr: "Casablanca → Marrakech", en: "Casablanca to Marrakech", ar: "الدار البيضاء إلى مراكش", it: "Casablanca → Marrakech" },
        description: {
          fr: "Départ de Casablanca le matin, avec des arrêts optionnels en route. Le trajet dure environ 3 heures selon les arrêts. Arrivée à Marrakech et dépose à votre hébergement.",
          en: "Depart Casablanca in the morning, with optional stops along the way. The journey takes approximately 3 hours depending on stops. Arrive in Marrakech and drop off at your accommodation.",
          ar: "المغادرة من الدار البيضاء صباحاً مع توقفات اختيارية على الطريق. تستغرق الرحلة حوالي 3 ساعات حسب التوقفات. الوصول إلى مراكش والتوصيل إلى إقامتك.",
          it: "Partenza da Casablanca al mattino, con soste facoltative lungo il percorso. Il viaggio dura circa 3 ore a seconda delle soste. Arrivo a Marrakech e accompagnamento al vostro alloggio.",
        },
      },
    ],
    faqs: [
      {
        question: { fr: "S'agit-il d'un transfert ou d'une visite guidée ?", en: "Is this a transfer or a guided tour?", ar: "هل هذه رحلة نقل أم جولة مع مرشد؟", it: "È un trasferimento o una visita guidata?" },
        answer:   { fr: "Les deux — c'est un transfert privé de point à point, mais nous pouvons ajouter des arrêts touristiques pour en faire une demi-journée culturelle.", en: "Both — it's a private point-to-point transfer, but we can add sightseeing stops to make it a cultural half-day.", ar: "كلاهما — إنه نقل خاص من نقطة إلى أخرى، لكن يمكننا إضافة توقفات سياحية لتحويله إلى نصف يوم ثقافي.", it: "Entrambe — è un trasferimento privato da punto a punto, ma possiamo aggiungere soste turistiche per farne una mezza giornata culturale." },
      },
      {
        question: { fr: "Combien de temps dure le trajet ?", en: "How long does the drive take?", ar: "كم تستغرق الرحلة؟", it: "Quanto dura il tragitto?" },
        answer:   { fr: "Environ 3 heures sans arrêts, ou jusqu'à 4 à 5 heures si vous ajoutez des visites en chemin.", en: "About 3 hours with no stops, or up to 4-5 hours if you add visits along the way.", ar: "حوالي 3 ساعات بدون توقفات، أو حتى 4-5 ساعات إذا أضفت زيارات في الطريق.", it: "Circa 3 ore senza soste, o fino a 4-5 ore se aggiungete visite lungo il percorso." },
      },
    ],
  },

  /* ── 16 — Casablanca City Tour (half-day) ── */
  {
    slug:     "casablanca-city-tour",
    image:    "/images/casablanca.jpg",
    gallery:  ["/images/essaouiraPort.jpg"],
    featured: false,
    days:     { fr: "Demi-journée", en: "Half Day", ar: "نصف يوم", it: "Mezza giornata" },
    daysNum:  1,
    title: {
      fr: "Visite privée de la ville de Casablanca",
      en: "Casablanca Private City Tour",
      ar: "جولة خاصة في مدينة الدار البيضاء",
      it: "Tour privato della città di Casablanca",
    },
    short: {
      fr: "Mosquée Hassan II · Corniche · Ancienne médina · Quartier des Habous",
      en: "Hassan II Mosque · Corniche · Old Medina · Habous Quarter",
      ar: "مسجد الحسن الثاني · كورنيش · المدينة القديمة · حي الحبوس",
      it: "Moschea Hassan II · Corniche · Medina Vecchia · Quartiere Habous",
    },
    intro: {
      fr: "Une demi-journée privée pour découvrir la métropole économique du Maroc — la mosquée emblématique, le front de mer et les quartiers historiques.",
      en: "A private half-day discovering Morocco's economic capital — the iconic mosque, the waterfront, and the historic quarters.",
      ar: "نصف يوم خاص لاكتشاف العاصمة الاقتصادية للمغرب — المسجد الشهير والواجهة البحرية والأحياء التاريخية.",
      it: "Una mezza giornata privata per scoprire la capitale economica del Marocco — la moschea iconica, il lungomare e i quartieri storici.",
    },
    highlights: {
      fr: ["Mosquée Hassan II — l'une des plus grandes mosquées du monde", "La corniche de Casablanca et le quartier d'affaires", "L'ancienne médina et ses marchés traditionnels", "Le quartier des Habous, construit à l'époque coloniale française"],
      en: ["Hassan II Mosque — one of the world's largest mosques", "The Casablanca Corniche and business district", "The old medina and its traditional markets", "The Habous Quarter, built in the French colonial era"],
      ar: ["مسجد الحسن الثاني — من بين أكبر المساجد في العالم", "كورنيش الدار البيضاء وحي الأعمال", "المدينة القديمة وأسواقها التقليدية", "حي الحبوس الذي بُني في عهد الاستعمار الفرنسي"],
      it: ["Moschea Hassan II — una delle moschee più grandi del mondo", "La Corniche di Casablanca e il distretto degli affari", "La medina vecchia e i suoi mercati tradizionali", "Il Quartiere Habous, costruito durante l'era coloniale francese"],
    },
    itinerary: [
      {
        day:   { fr: "Demi-journée", en: "Half Day", ar: "نصف يوم", it: "Mezza giornata" },
        title: { fr: "Visite de Casablanca", en: "Casablanca Tour", ar: "جولة الدار البيضاء", it: "Tour di Casablanca" },
        description: {
          fr: "Prise en charge à votre hôtel ou à l'aéroport. Visite de la mosquée Hassan II (extérieur et intérieur sur option), promenade sur la corniche, passage par l'ancienne médina et le quartier des Habous. Dépose à votre hébergement ou à la gare.",
          en: "Pick-up at your hotel or airport. Visit the Hassan II Mosque (exterior and optional interior), stroll the corniche, explore the old medina and the Habous Quarter. Drop-off at your accommodation or train station.",
          ar: "استقبال من فندقك أو المطار. زيارة مسجد الحسن الثاني (الخارج والداخل اختياري)، نزهة على الكورنيش، استكشاف المدينة القديمة وحي الحبوس. التوصيل إلى إقامتك أو محطة القطار.",
          it: "Ritiro al vostro hotel o aeroporto. Visita alla Moschea Hassan II (esterno e interno opzionale), passeggiata sulla corniche, esplorazione della medina vecchia e del Quartiere Habous. Accompagnamento al vostro alloggio o alla stazione ferroviaria.",
        },
      },
    ],
    faqs: [
      {
        question: { fr: "La visite intérieure de la mosquée est-elle incluse ?", en: "Is the interior mosque visit included?", ar: "هل زيارة داخل المسجد مشمولة؟", it: "È inclusa la visita all'interno della moschea?" },
        answer:   { fr: "La visite extérieure est toujours incluse. L'entrée intérieure est payante et dépend des horaires des visites guidées officielles.", en: "The exterior visit is always included. The interior entry is ticketed and subject to official guided tour schedules.", ar: "الزيارة الخارجية مشمولة دائماً. الدخول الداخلي مدفوع ويعتمد على جداول الجولات الإرشادية الرسمية.", it: "La visita esterna è sempre inclusa. L'ingresso interno è a pagamento e dipende dagli orari delle visite guidate ufficiali." },
      },
      {
        question: { fr: "Peut-on combiner cette visite avec un transfert vers Marrakech ou Rabat ?", en: "Can this be combined with a transfer to Marrakech or Rabat?", ar: "هل يمكن دمج هذه الجولة مع نقل إلى مراكش أو الرباط؟", it: "Può essere combinato con un trasferimento a Marrakech o Rabat?" },
        answer:   { fr: "Oui — une visite matinale de Casablanca peut facilement se combiner avec un départ l'après-midi vers Marrakech ou Rabat.", en: "Yes — a morning Casablanca tour pairs well with an afternoon departure to Marrakech or Rabat.", ar: "نعم — تنسجم جولة صباحية في الدار البيضاء بشكل جيد مع مغادرة بعد الظهر نحو مراكش أو الرباط.", it: "Sì — un tour mattutino di Casablanca si abbina bene a una partenza pomeridiana verso Marrakech o Rabat." },
      },
    ],
  },

  /* ── 17 — 8-Day Casablanca → Marrakech via Sahara ── */
  {
    slug:     "8-day-casablanca-marrakech-sahara-tour",
    image:    "/images/casablanca.jpg",
    gallery:  ["/images/rabatCity.jpg", "/images/chefchaouen.jpg", "/images/mideltAtlas.jpg"],
    featured: false,
    days:     { fr: "8 Jours", en: "8 Days", ar: "8 أيام", it: "8 Giorni" },
    daysNum:  8,
    title: {
      fr: "Circuit de 8 jours de Casablanca à Marrakech via le Sahara",
      en: "8-Day Casablanca to Marrakech Tour via Sahara",
      ar: "جولة من الدار البيضاء إلى مراكش لمدة 8 أيام عبر الصحراء",
      it: "Tour di 8 giorni da Casablanca a Marrakech via Sahara",
    },
    short: {
      fr: "Casablanca → Rabat → Meknès → Fès → Merzouga (Sahara) → Dadès → Aït Ben Haddou → Marrakech",
      en: "Casablanca → Rabat → Meknes → Fes → Merzouga (Sahara) → Dades → Ait Ben Haddou → Marrakech",
      ar: "الدار البيضاء ← الرباط ← مكناس ← فاس ← مرزوكة (الصحراء) ← دادس ← آيت بن حدو ← مراكش",
      it: "Casablanca → Rabat → Meknès → Fes → Merzouga (Sahara) → Dadès → Aït Ben Haddou → Marrakech",
    },
    intro: {
      fr: "Un itinéraire nord-sud classique qui traverse les trois grandes villes impériales du nord avant de plonger dans le Sahara et de remonter vers Marrakech.",
      en: "A classic north-to-south route that crosses three major imperial cities before plunging into the Sahara and rising back to Marrakech.",
      ar: "مسار شمالي-جنوبي كلاسيكي يعبر ثلاث مدن إمبراطورية كبرى قبل الانغماس في الصحراء والعودة إلى مراكش.",
      it: "Un classico percorso da nord a sud che attraversa tre grandi città imperiali prima di immergersi nel Sahara e risalire verso Marrakech.",
    },
    highlights: {
      fr: ["La mosquée Hassan II de Casablanca et les sites impériaux de Rabat", "Meknès, Volubilis et la médina de Fès", "Balade à dos de chameau et nuit en camp désertique au Sahara", "Route des kasbahs via les gorges du Dadès et Aït Ben Haddou"],
      en: ["Casablanca's Hassan II Mosque and Rabat's imperial sites", "Meknes, Volubilis and the Fes medina", "Camel trek and overnight desert camp in the Sahara", "Kasbah route via Dades Gorge and Ait Ben Haddou"],
      ar: ["مسجد الحسن الثاني بالدار البيضاء والمواقع الإمبراطورية بالرباط", "مكناس وفوليبيليس ومدينة فاس القديمة", "ركوب الجمال وليلة في مخيم صحراوي بالصحراء", "طريق القصبات عبر مضايق دادس وآيت بن حدو"],
      it: ["La Moschea Hassan II di Casablanca e i siti imperiali di Rabat", "Meknès, Volubilis e la medina di Fes", "Escursione in cammello e notte nel campo nel deserto del Sahara", "Rotta delle kasbah via Gola del Dadès e Aït Ben Haddou"],
    },
    itinerary: [
      {
        day:   { fr: "Jour 1", en: "Day 1", ar: "اليوم 1", it: "Giorno 1" },
        title: { fr: "Casablanca", en: "Casablanca", ar: "الدار البيضاء", it: "Casablanca" },
        description: { fr: "Arrivée, mosquée Hassan II (extérieur), accueil.", en: "Arrival, Hassan II Mosque (exterior), welcome.", ar: "الوصول، مسجد الحسن الثاني (الخارج)، استقبال.", it: "Arrivo, Moschea Hassan II (esterno), benvenuto." },
      },
      {
        day:   { fr: "Jour 2", en: "Day 2", ar: "اليوم 2", it: "Giorno 2" },
        title: { fr: "Rabat", en: "Rabat", ar: "الرباط", it: "Rabat" },
        description: { fr: "Tour Hassan, mausolée Mohammed V, kasbah des Oudayas, vieille médina.", en: "Hassan Tower, Mausoleum of Mohammed V, Kasbah of the Udayas, old medina.", ar: "صومعة حسان، ضريح محمد الخامس، قصبة الأوداية، المدينة القديمة.", it: "Torre Hassan, Mausoleo di Mohammed V, Kasba degli Udaias, medina vecchia." },
      },
      {
        day:   { fr: "Jour 3", en: "Day 3", ar: "اليوم 3", it: "Giorno 3" },
        title: { fr: "Meknès & Volubilis", en: "Meknes & Volubilis", ar: "مكناس وفوليبيليس", it: "Meknès & Volubilis" },
        description: { fr: "Bab Mansour, écuries royales, greniers ismaïliens, puis ruines romaines de Volubilis.", en: "Bab Mansour, royal stables, Ismaili granaries, then the Roman ruins of Volubilis.", ar: "باب منصور، الإسطبلات الملكية، مخازن إسماعيل، ثم أطلال فوليبيليس الرومانية.", it: "Bab Mansour, scuderie reali, granai ismaeliti, poi le rovine romane di Volubilis." },
      },
      {
        day:   { fr: "Jour 4", en: "Day 4", ar: "اليوم 4", it: "Giorno 4" },
        title: { fr: "Médina de Fès", en: "Fes Medina", ar: "مدينة فاس القديمة", it: "Medina di Fes" },
        description: { fr: "Journée complète : tanneries, médersas Bou Inania et Attarine, souks.", en: "Full day: tanneries, Bou Inania and Attarine medersas, souks.", ar: "يوم كامل: الدباغات، مدرستا بوعنانية والعطارين، الأسواق.", it: "Giornata intera: concerie, madrasse Bou Inania e Attarine, souk." },
      },
      {
        day:   { fr: "Jour 5", en: "Day 5", ar: "اليوم 5", it: "Giorno 5" },
        title: { fr: "Fès → Merzouga", en: "Fes to Merzouga", ar: "فاس إلى مرزوكة", it: "Fes → Merzouga" },
        description: { fr: "Traversée du Moyen Atlas, vallée du Ziz, arrivée au Sahara ; balade à dos de chameau et camp désertique.", en: "Cross the Middle Atlas, Ziz Valley, arrive at the Sahara; camel trek and desert camp.", ar: "عبور الأطلس المتوسط، وادي زيز، الوصول إلى الصحراء؛ ركوب الجمال والمخيم الصحراوي.", it: "Attraversate l'Atlante Medio, la Valle dello Ziz, arrivate al Sahara; escursione in cammello e campo nel deserto." },
      },
      {
        day:   { fr: "Jour 6", en: "Day 6", ar: "اليوم 6", it: "Giorno 6" },
        title: { fr: "Sahara → Gorges du Dadès", en: "Sahara to Dades Gorge", ar: "الصحراء إلى مضايق دادس", it: "Sahara → Gola del Dadès" },
        description: { fr: "Lever de soleil, gorges du Todra, route des kasbahs, nuit à Dadès.", en: "Sunrise, Todra Gorge, kasbah route, overnight at Dades.", ar: "شروق الشمس، مضايق تودرا، طريق القصبات، مبيت في دادس.", it: "Alba, Gola di Todra, rotta delle kasbah, pernottamento a Dadès." },
      },
      {
        day:   { fr: "Jour 7", en: "Day 7", ar: "اليوم 7", it: "Giorno 7" },
        title: { fr: "Dadès → Marrakech", en: "Dades to Marrakech", ar: "دادس إلى مراكش", it: "Dadès → Marrakech" },
        description: { fr: "Kasbah d'Aït Ben Haddou, col du Tizi n'Tichka, arrivée à Marrakech.", en: "Ait Ben Haddou kasbah, Tizi n'Tichka Pass, arrive in Marrakech.", ar: "قصبة آيت بن حدو، ممر تيزي ن تيشكا، الوصول إلى مراكش.", it: "Kasba di Aït Ben Haddou, Passo Tizi n'Tichka, arrivo a Marrakech." },
      },
      {
        day:   { fr: "Jour 8", en: "Day 8", ar: "اليوم 8", it: "Giorno 8" },
        title: { fr: "Départ depuis Marrakech", en: "Departure from Marrakech", ar: "المغادرة من مراكش", it: "Partenza da Marrakech" },
        description: { fr: "Transfert vers l'aéroport de Marrakech Ménara.", en: "Transfer to Marrakech Menara Airport.", ar: "النقل إلى مطار مراكش المنارة.", it: "Trasferimento all'aeroporto di Marrakech Menara." },
      },
    ],
    faqs: [
      {
        question: { fr: "Peut-on commencer ce circuit à l'aéroport de Casablanca ?", en: "Can this tour start at the Casablanca airport?", ar: "هل يمكن أن تبدأ هذه الجولة من مطار الدار البيضاء؟", it: "Questo tour può iniziare dall'aeroporto di Casablanca?" },
        answer:   { fr: "Oui, nous vous prenons directement à l'aéroport Mohammed V de Casablanca.", en: "Yes, we pick you up directly from Casablanca Mohammed V Airport.", ar: "نعم، نستقبلك مباشرة من مطار محمد الخامس بالدار البيضاء.", it: "Sì, vi raccogliamo direttamente dall'Aeroporto Mohammed V di Casablanca." },
      },
      {
        question: { fr: "Quelle est la différence avec le circuit de 9 ou 10 jours ?", en: "How does this differ from the 9- or 10-day tour?", ar: "ما الفرق بين هذه الجولة وجولة 9 أو 10 أيام؟", it: "Come si differenzia dal tour di 9 o 10 giorni?" },
        answer:   { fr: "Il saute Chefchaouen pour maintenir un rythme de 8 jours, ce qui le rend idéal si vous avez une semaine entière mais pas plus.", en: "It skips Chefchaouen to keep to an 8-day pace, making it ideal if you have a full week but no more.", ar: "يتجاوز شفشاون للحفاظ على وتيرة 8 أيام، مما يجعله مثالياً إذا كان لديك أسبوع كامل لا أكثر.", it: "Salta Chefchaouen per mantenere un ritmo di 8 giorni, rendendolo ideale se avete una settimana intera ma non di più." },
      },
    ],
  },

  /* ── 18 — 9-Day Casablanca: Desert, Mountains & Discovery ── */
  {
    slug:     "9-day-casablanca-desert-mountains-discovery",
    image:    "/images/mideltAtlas.jpg",
    gallery:  ["/images/meknesGate.jpg", "/images/dunes.jpg", "/images/aitBenHaddouKasbah.jpg"],
    featured: false,
    days:     { fr: "9 Jours", en: "9 Days", ar: "9 أيام", it: "9 Giorni" },
    daysNum:  9,
    title: {
      fr: "Circuit de 9 jours depuis Casablanca : Désert, Montagnes & Découverte",
      en: "9-Day Casablanca Desert, Mountains & Discovery Tour",
      ar: "جولة من الدار البيضاء لمدة 9 أيام: الصحراء والجبال والاكتشاف",
      it: "Tour di 9 giorni da Casablanca: Deserto, Montagne & Scoperta",
    },
    short: {
      fr: "Casablanca → Rabat → Meknès → Volubilis → Fès → Ifrane → Midelt → Merzouga → Dadès → Marrakech",
      en: "Casablanca → Rabat → Meknes → Volubilis → Fes → Ifrane → Midelt → Merzouga → Dades → Marrakech",
      ar: "الدار البيضاء ← الرباط ← مكناس ← فوليبيليس ← فاس ← إفران ← ميدلت ← مرزوكة ← دادس ← مراكش",
      it: "Casablanca → Rabat → Meknès → Volubilis → Fes → Ifrane → Midelt → Merzouga → Dadès → Marrakech",
    },
    intro: {
      fr: "La version 9 jours au départ de Casablanca, ajoutant Ifrane et les forêts de cèdres du Moyen Atlas pour une journée de montagne avant le désert.",
      en: "The 9-day version from Casablanca, adding Ifrane and the Middle Atlas cedar forests for a mountain day before the desert.",
      ar: "النسخة المدتها 9 أيام من الدار البيضاء، مع إضافة إفران وغابات الأرز في الأطلس المتوسط ليوم جبلي قبل الصحراء.",
      it: "La versione di 9 giorni da Casablanca, aggiungendo Ifrane e le foreste di cedri dell'Atlante Medio per una giornata in montagna prima del deserto.",
    },
    highlights: {
      fr: ["Villes impériales du nord : Rabat, Meknès et Fès", "Forêts de cèdres d'Ifrane, parfois enneigées en hiver", "Gorge du Ziz et oasis de Midelt en route vers Merzouga", "Nuit en camp désertique au Sahara et route des kasbahs"],
      en: ["Northern imperial cities: Rabat, Meknes and Fes", "Ifrane cedar forests, sometimes snow-capped in winter", "Ziz Gorge and Midelt oasis en route to Merzouga", "Overnight desert camp in the Sahara and the kasbah route"],
      ar: ["المدن الإمبراطورية الشمالية: الرباط، مكناس وفاس", "غابات الأرز في إفران، التي قد تكون مغطاة بالثلج شتاءً", "وادي زيز وواحة ميدلت في الطريق إلى مرزوكة", "ليلة في مخيم صحراوي بالصحراء وطريق القصبات"],
      it: ["Città imperiali del nord: Rabat, Meknès e Fes", "Foreste di cedri di Ifrane, a volte innevate d'inverno", "Gola dello Ziz e oasi di Midelt sulla via verso Merzouga", "Notte nel campo del deserto del Sahara e rotta delle kasbah"],
    },
    itinerary: [
      {
        day:   { fr: "Jour 1", en: "Day 1", ar: "اليوم 1", it: "Giorno 1" },
        title: { fr: "Casablanca → Rabat", en: "Casablanca to Rabat", ar: "الدار البيضاء إلى الرباط", it: "Casablanca → Rabat" },
        description: { fr: "Mosquée Hassan II, puis la kasbah des Oudayas et le tour Hassan à Rabat.", en: "Hassan II Mosque, then Rabat's Kasbah of the Udayas and Hassan Tower.", ar: "مسجد الحسن الثاني، ثم قصبة الأوداية وصومعة حسان في الرباط.", it: "Moschea Hassan II, poi la Kasba degli Udaias e la Torre Hassan a Rabat." },
      },
      {
        day:   { fr: "Jour 2", en: "Day 2", ar: "اليوم 2", it: "Giorno 2" },
        title: { fr: "Meknès & Volubilis", en: "Meknes & Volubilis", ar: "مكناس وفوليبيليس", it: "Meknès & Volubilis" },
        description: { fr: "Bab Mansour, greniers royaux, ruines romaines de Volubilis.", en: "Bab Mansour, royal granaries, Roman ruins of Volubilis.", ar: "باب منصور، مخازن ملكية، أطلال فوليبيليس الرومانية.", it: "Bab Mansour, granai reali, rovine romane di Volubilis." },
      },
      {
        day:   { fr: "Jour 3", en: "Day 3", ar: "اليوم 3", it: "Giorno 3" },
        title: { fr: "Médina de Fès", en: "Fes Medina", ar: "مدينة فاس القديمة", it: "Medina di Fes" },
        description: { fr: "Journée complète de visite guidée des tanneries, médersas et souks.", en: "Full guided day through the tanneries, medersas and souks.", ar: "يوم كامل بجولة مرشدة في الدباغات والمدارس والأسواق.", it: "Giornata guidata completa attraverso le concerie, le madrasse e i souk." },
      },
      {
        day:   { fr: "Jour 4", en: "Day 4", ar: "اليوم 4", it: "Giorno 4" },
        title: { fr: "Fès → Ifrane → Midelt", en: "Fes to Ifrane to Midelt", ar: "فاس إلى إفران إلى ميدلت", it: "Fes → Ifrane → Midelt" },
        description: { fr: "Forêts de cèdres d'Azrou, la ville alpine d'Ifrane, descente vers la vallée oasienne de Midelt.", en: "Azrou cedar forests, the alpine town of Ifrane, descent into the oasis valley of Midelt.", ar: "غابات أرز أزرو، المدينة الجبلية إفران، النزول نحو وادي ميدلت الواحي.", it: "Foreste di cedri di Azrou, la città alpina di Ifrane, discesa nella valle oasiana di Midelt." },
      },
      {
        day:   { fr: "Jour 5", en: "Day 5", ar: "اليوم 5", it: "Giorno 5" },
        title: { fr: "Midelt → Merzouga", en: "Midelt to Merzouga", ar: "ميدلت إلى مرزوكة", it: "Midelt → Merzouga" },
        description: { fr: "Gorges du Ziz et oasis de palmeraies, arrivée à Merzouga pour une balade à dos de chameau et une nuit en camp désertique.", en: "Ziz Gorge and palm oases, arrive at Merzouga for a camel trek and overnight desert camp.", ar: "مضايق زيز وواحات النخيل، الوصول إلى مرزوكة لركوب الجمال وليلة في مخيم صحراوي.", it: "Gola dello Ziz e oasi di palme, arrivo a Merzouga per un'escursione in cammello e una notte nel campo del deserto." },
      },
      {
        day:   { fr: "Jour 6", en: "Day 6", ar: "اليوم 6", it: "Giorno 6" },
        title: { fr: "Sahara → Gorges du Todra", en: "Sahara to Todra Gorge", ar: "الصحراء إلى مضايق تودرا", it: "Sahara → Gola di Todra" },
        description: { fr: "Lever de soleil sur les dunes de l'Erg Chebbi, route vers les gorges du Todra.", en: "Sunrise over the Erg Chebbi dunes, drive to the Todra Gorge.", ar: "شروق الشمس فوق كثبان إرق شبي، قيادة نحو مضايق تودرا.", it: "Alba sulle dune dell'Erg Chebbi, guida verso la Gola di Todra." },
      },
      {
        day:   { fr: "Jour 7", en: "Day 7", ar: "اليوم 7", it: "Giorno 7" },
        title: { fr: "Route des Kasbahs → Gorges du Dadès", en: "Kasbah Route to Dades Gorge", ar: "طريق القصبات إلى مضايق دادس", it: "Rotta delle Kasbah → Gola del Dadès" },
        description: { fr: "Kasbahs de Tinghir et Boumalne Dadès, nuit dans les gorges.", en: "Kasbahs of Tinghir and Boumalne Dades, overnight in the gorge.", ar: "قصبات تنغير وبوملن دادس، مبيت في المضايق.", it: "Kasbah di Tinghir e Boumalne Dadès, pernottamento nella gola." },
      },
      {
        day:   { fr: "Jour 8", en: "Day 8", ar: "اليوم 8", it: "Giorno 8" },
        title: { fr: "Dadès → Marrakech", en: "Dades to Marrakech", ar: "دادس إلى مراكش", it: "Dadès → Marrakech" },
        description: { fr: "Kasbah d'Aït Ben Haddou, col du Tizi n'Tichka, arrivée à Marrakech.", en: "Ait Ben Haddou kasbah, Tizi n'Tichka Pass, arrive in Marrakech.", ar: "قصبة آيت بن حدو، ممر تيزي ن تيشكا، الوصول إلى مراكش.", it: "Kasba di Aït Ben Haddou, Passo Tizi n'Tichka, arrivo a Marrakech." },
      },
      {
        day:   { fr: "Jour 9", en: "Day 9", ar: "اليوم 9", it: "Giorno 9" },
        title: { fr: "Départ", en: "Departure", ar: "المغادرة", it: "Partenza" },
        description: { fr: "Transfert vers l'aéroport de Marrakech.", en: "Transfer to Marrakech airport.", ar: "النقل إلى مطار مراكش.", it: "Trasferimento all'aeroporto di Marrakech." },
      },
    ],
    faqs: [
      {
        question: { fr: "Pourquoi Ifrane est-elle appelée « la Suisse du Maroc » ?", en: "Why is Ifrane called the 'Switzerland of Morocco'?", ar: "لماذا تُسمى إفران 'سويسرا المغرب'؟", it: "Perché Ifrane è chiamata la 'Svizzera del Marocco'?" },
        answer:   { fr: "Ses chalets à toits pointus, ses parcs verts et son altitude (1 650 m) lui donnent une apparence surprenante de ville alpine européenne.", en: "Its chalet-style roofs, green parks and altitude (1,650 m) give it a surprisingly European alpine-town feel.", ar: "مبانيها ذات الأسقف الحادة وحدائقها الخضراء وارتفاعها (1650 م) تمنحها مظهراً أوروبياً جبلياً مفاجئاً.", it: "I suoi tetti a chalet, i parchi verdi e l'altitudine (1.650 m) le conferiscono un aspetto sorprendentemente da città alpina europea." },
      },
      {
        question: { fr: "Peut-on voir des singes de Barbarie à Azrou ?", en: "Can you see Barbary macaques at Azrou?", ar: "هل يمكن رؤية قرود البربر في أزرو؟", it: "Si possono vedere i macachi berberi ad Azrou?" },
        answer:   { fr: "Oui — les forêts de cèdres autour d'Azrou sont l'un des meilleurs endroits du Maroc pour observer les macaques de Barbarie en liberté.", en: "Yes — the cedar forests around Azrou are one of the best places in Morocco to spot Barbary macaques in the wild.", ar: "نعم — غابات الأرز حول أزرو هي أحد أفضل الأماكن في المغرب لمشاهدة قردة البربر في البرية.", it: "Sì — le foreste di cedri intorno ad Azrou sono uno dei migliori posti in Marocco per avvistare i macachi berberi in natura." },
      },
    ],
  },

  /* ── 19 — 3-Day Casablanca → Merzouga Sahara Tour ── */
  {
    slug:     "3-day-casablanca-merzouga-sahara-tour",
    image:    "/images/casablanca.jpg",
    gallery:  ["/images/mideltAtlas.jpg", "/images/dunes.jpg", "/images/desertCamels.jpg"],
    featured: false,
    days:     { fr: "3 Jours", en: "3 Days", ar: "3 أيام", it: "3 Giorni" },
    daysNum:  3,
    title: {
      fr: "Circuit de 3 jours de Casablanca au désert du Sahara à Merzouga",
      en: "3-Day Casablanca to Merzouga Sahara Desert Tour",
      ar: "جولة من الدار البيضاء إلى صحراء مرزوكة لمدة 3 أيام",
      it: "Tour di 3 giorni da Casablanca al deserto del Sahara a Merzouga",
    },
    short: {
      fr: "Casablanca → Fès → Ifrane → Midelt → Merzouga (Sahara) → retour via Dadès & Marrakech",
      en: "Casablanca → Fes → Ifrane → Midelt → Merzouga (Sahara) → return via Dades & Marrakech",
      ar: "الدار البيضاء ← فاس ← إفران ← ميدلت ← مرزوكة (الصحراء) ← العودة عبر دادس ومراكش",
      it: "Casablanca → Fes → Ifrane → Midelt → Merzouga (Sahara) → ritorno via Dadès & Marrakech",
    },
    intro: {
      fr: "La façon la plus rapide d'aller des côtes atlantiques du Maroc jusqu'au désert du Sahara et de retour, en passant par les montagnes de l'Atlas.",
      en: "The fastest way to get from Morocco's Atlantic coast to the Sahara Desert and back, via the Atlas Mountains.",
      ar: "أسرع طريقة للوصول من السواحل الأطلسية للمغرب إلى الصحراء الكبرى والعودة، عبر جبال الأطلس.",
      it: "Il modo più rapido per andare dalla costa atlantica del Marocco al deserto del Sahara e tornare, attraverso le montagne dell'Atlante.",
    },
    highlights: {
      fr: ["Traversée des forêts de cèdres et des montagnes de l'Atlas depuis Casablanca", "Oasis de la vallée du Ziz en route vers le désert", "Balade à dos de chameau et lever de soleil sur les dunes de l'Erg Chebbi", "Retour optionnel via la route des kasbahs et Marrakech"],
      en: ["Cross the cedar forests and Atlas Mountains from Casablanca", "Ziz Valley oasis on the way to the desert", "Camel ride and sunrise over the Erg Chebbi dunes", "Optional return via the kasbah route and Marrakech"],
      ar: ["عبور غابات الأرز وجبال الأطلس من الدار البيضاء", "واحة وادي زيز في الطريق إلى الصحراء", "ركوب الجمال وشروق الشمس فوق كثبان إرق شبي", "عودة اختيارية عبر طريق القصبات ومراكش"],
      it: ["Attraversate le foreste di cedri e le montagne dell'Atlante da Casablanca", "Oasi della Valle dello Ziz sulla via verso il deserto", "Giro in cammello e alba sulle dune dell'Erg Chebbi", "Ritorno facoltativo via la rotta delle kasbah e Marrakech"],
    },
    itinerary: [
      {
        day:   { fr: "Jour 1", en: "Day 1", ar: "اليوم 1", it: "Giorno 1" },
        title: { fr: "Casablanca → Midelt", en: "Casablanca to Midelt", ar: "الدار البيضاء إلى ميدلت", it: "Casablanca → Midelt" },
        description: { fr: "Départ de Casablanca, traversée du Moyen Atlas via Ifrane et ses forêts de cèdres, arrivée à Midelt pour la nuit.", en: "Leave Casablanca, cross the Middle Atlas via Ifrane and its cedar forests, arrive in Midelt for the night.", ar: "المغادرة من الدار البيضاء، عبور الأطلس المتوسط عبر إفران وغابات الأرز، الوصول إلى ميدلت لقضاء الليل.", it: "Lasciate Casablanca, attraversate l'Atlante Medio via Ifrane e le sue foreste di cedri, arrivate a Midelt per la notte." },
      },
      {
        day:   { fr: "Jour 2", en: "Day 2", ar: "اليوم 2", it: "Giorno 2" },
        title: { fr: "Midelt → Merzouga", en: "Midelt to Merzouga", ar: "ميدلت إلى مرزوكة", it: "Midelt → Merzouga" },
        description: { fr: "Gorges du Ziz et palmeraies, arrivée à Merzouga l'après-midi, balade à dos de chameau au coucher du soleil et nuit en camp désertique.", en: "Ziz Gorge and palm groves, arrive in Merzouga by afternoon, sunset camel ride and overnight desert camp.", ar: "وادي زيز وبساتين النخيل، الوصول إلى مرزوكة بعد الظهر، ركوب الجمال عند الغروب وليلة في مخيم صحراوي.", it: "Gola dello Ziz e palmeti, arrivate a Merzouga nel pomeriggio, giro in cammello al tramonto e notte nel campo del deserto." },
      },
      {
        day:   { fr: "Jour 3", en: "Day 3", ar: "اليوم 3", it: "Giorno 3" },
        title: { fr: "Merzouga → Marrakech (ou retour à Casablanca)", en: "Merzouga to Marrakech (or back to Casablanca)", ar: "مرزوكة إلى مراكش (أو العودة إلى الدار البيضاء)", it: "Merzouga → Marrakech (o ritorno a Casablanca)" },
        description: { fr: "Lever de soleil sur les dunes, puis route vers Marrakech via Aït Ben Haddou et le col du Tizi n'Tichka, ou retour direct vers Casablanca via Meknès.", en: "Sunrise over the dunes, then drive to Marrakech via Ait Ben Haddou and the Tizi n'Tichka Pass, or return directly to Casablanca via Meknes.", ar: "شروق الشمس فوق الكثبان، ثم القيادة إلى مراكش عبر آيت بن حدو وممر تيزي ن تيشكا، أو العودة مباشرة إلى الدار البيضاء عبر مكناس.", it: "Alba sulle dune, poi guida verso Marrakech via Aït Ben Haddou e il Passo Tizi n'Tichka, o ritorno diretto a Casablanca via Meknès." },
      },
    ],
    faqs: [
      {
        question: { fr: "Ce circuit se termine-t-il à Marrakech ou à Casablanca ?", en: "Does this tour end in Marrakech or Casablanca?", ar: "هل تنتهي هذه الجولة في مراكش أم الدار البيضاء؟", it: "Questo tour termina a Marrakech o a Casablanca?" },
        answer:   { fr: "Les deux options sont disponibles selon votre plan de vol — faites-nous savoir lors de la réservation.", en: "Either is available depending on your flight plan — just let us know at the time of booking.", ar: "كلا الخيارين متاح حسب خطة رحلتك — فقط أخبرنا عند الحجز.", it: "Entrambe sono disponibili a seconda del vostro piano di volo — fatecelo sapere al momento della prenotazione." },
      },
      {
        question: { fr: "Peut-on voir Fès pendant ce circuit ?", en: "Can Fes be included in this tour?", ar: "هل يمكن تضمين فاس في هذه الجولة؟", it: "Fes può essere inclusa in questo tour?" },
        answer:   { fr: "Oui, avec une nuit à Fès ajoutée, le circuit peut facilement devenir 4 jours.", en: "Yes, with an added overnight in Fes the tour can easily become 4 days.", ar: "نعم، بإضافة ليلة في فاس يمكن أن تصبح الجولة 4 أيام بسهولة.", it: "Sì, con una notte aggiuntiva a Fes il tour può diventare facilmente di 4 giorni." },
      },
    ],
  },

  /* ── 20 — 5-Day Marrakech → Casablanca via Sahara ── */
  {
    slug:     "5-day-marrakech-casablanca-sahara-tour",
    image:    "/images/marrakech.jpg",
    gallery:  ["/images/aitBenHaddouKasbah.jpg", "/images/fes.jpg", "/images/desertCamels.jpg"],
    featured: false,
    days:     { fr: "5 Jours", en: "5 Days", ar: "5 أيام", it: "5 Giorni" },
    daysNum:  5,
    title: {
      fr: "Circuit de 5 jours de Marrakech à Casablanca via le Sahara",
      en: "5-Day Marrakech to Casablanca Tour via Sahara",
      ar: "جولة من مراكش إلى الدار البيضاء لمدة 5 أيام عبر الصحراء",
      it: "Tour di 5 giorni da Marrakech a Casablanca via Sahara",
    },
    short: {
      fr: "Marrakech → Aït Ben Haddou → Dadès → Merzouga (Sahara) → Fès → Casablanca",
      en: "Marrakech → Ait Ben Haddou → Dades → Merzouga (Sahara) → Fes → Casablanca",
      ar: "مراكش ← آيت بن حدو ← دادس ← مرزوكة (الصحراء) ← فاس ← الدار البيضاء",
      it: "Marrakech → Aït Ben Haddou → Dadès → Merzouga (Sahara) → Fes → Casablanca",
    },
    intro: {
      fr: "Un circuit compact de cinq jours aller simple, passant par les kasbahs, le désert et Fès, pour se terminer à Casablanca.",
      en: "A compact five-day one-way trip through the kasbahs, desert, and Fes, finishing in Casablanca.",
      ar: "رحلة مدتها خمسة أيام ذهاباً فقط عبر القصبات والصحراء وفاس، لتنتهي في الدار البيضاء.",
      it: "Un compatto viaggio di andata di cinque giorni attraverso le kasbah, il deserto e Fes, con arrivo a Casablanca.",
    },
    highlights: {
      fr: ["Kasbah d'Aït Ben Haddou et la route des mille kasbahs via Dadès", "Balade à dos de chameau et nuit en camp désertique au Sahara", "Médina de Fès, tanneries et souks", "Arrivée à Casablanca pour le vol retour"],
      en: ["Ait Ben Haddou kasbah and the Road of a Thousand Kasbahs via Dades", "Camel trek and overnight desert camp in the Sahara", "Fes medina, tanneries and souks", "Finish in Casablanca for a return flight"],
      ar: ["قصبة آيت بن حدو وطريق الألف قصبة عبر دادس", "ركوب الجمال وليلة في مخيم صحراوي بالصحراء", "مدينة فاس القديمة ودباغاتها وأسواقها", "الانتهاء في الدار البيضاء للرحلة الجوية العودة"],
      it: ["Kasba di Aït Ben Haddou e la Strada delle Mille Kasbah via Dadès", "Escursione in cammello e notte nel campo nel deserto del Sahara", "Medina di Fes, concerie e souk", "Arrivo a Casablanca per il volo di ritorno"],
    },
    itinerary: [
      {
        day:   { fr: "Jour 1", en: "Day 1", ar: "اليوم 1", it: "Giorno 1" },
        title: { fr: "Marrakech → Gorges du Dadès", en: "Marrakech to Dades Gorge", ar: "مراكش إلى مضايق دادس", it: "Marrakech → Gola del Dadès" },
        description: { fr: "Col du Tizi n'Tichka, kasbah d'Aït Ben Haddou, route des kasbahs, nuit à Dadès.", en: "Tizi n'Tichka Pass, Ait Ben Haddou kasbah, kasbah route, overnight at Dades.", ar: "ممر تيزي ن تيشكا، قصبة آيت بن حدو، طريق القصبات، مبيت في دادس.", it: "Passo Tizi n'Tichka, kasba di Aït Ben Haddou, rotta delle kasbah, pernottamento a Dadès." },
      },
      {
        day:   { fr: "Jour 2", en: "Day 2", ar: "اليوم 2", it: "Giorno 2" },
        title: { fr: "Dadès → Merzouga", en: "Dades to Merzouga", ar: "دادس إلى مرزوكة", it: "Dadès → Merzouga" },
        description: { fr: "Gorges du Todra, route vers Merzouga, balade à dos de chameau au coucher du soleil et nuit en camp désertique.", en: "Todra Gorge, drive to Merzouga, sunset camel trek and overnight desert camp.", ar: "مضايق تودرا، القيادة نحو مرزوكة، ركوب الجمال عند الغروب وليلة في مخيم صحراوي.", it: "Gola di Todra, guida verso Merzouga, escursione al tramonto in cammello e notte nel campo del deserto." },
      },
      {
        day:   { fr: "Jour 3", en: "Day 3", ar: "اليوم 3", it: "Giorno 3" },
        title: { fr: "Sahara → Fès", en: "Sahara to Fes", ar: "الصحراء إلى فاس", it: "Sahara → Fes" },
        description: { fr: "Lever de soleil sur les dunes, route vers le nord via la vallée du Ziz jusqu'à Fès.", en: "Sunrise over the dunes, drive north via the Ziz Valley to Fes.", ar: "شروق الشمس فوق الكثبان، القيادة شمالاً عبر وادي زيز إلى فاس.", it: "Alba sulle dune, guida verso nord via la Valle dello Ziz fino a Fes." },
      },
      {
        day:   { fr: "Jour 4", en: "Day 4", ar: "اليوم 4", it: "Giorno 4" },
        title: { fr: "Médina de Fès", en: "Fes Medina", ar: "مدينة فاس القديمة", it: "Medina di Fes" },
        description: { fr: "Visite guidée des tanneries et du cœur historique de la médina.", en: "Guided tour of the tanneries and the historic medina core.", ar: "جولة مرشدة في الدباغات وقلب المدينة القديمة التاريخي.", it: "Visita guidata delle concerie e del nucleo storico della medina." },
      },
      {
        day:   { fr: "Jour 5", en: "Day 5", ar: "اليوم 5", it: "Giorno 5" },
        title: { fr: "Fès → Casablanca", en: "Fes to Casablanca", ar: "فاس إلى الدار البيضاء", it: "Fes → Casablanca" },
        description: { fr: "Arrêt optionnel à Meknès et Volubilis en chemin vers l'aéroport Mohammed V de Casablanca.", en: "Optional stop at Meknes and Volubilis on the way to Casablanca Mohammed V Airport.", ar: "توقف اختياري في مكناس وفوليبيليس في الطريق إلى مطار الدار البيضاء محمد الخامس.", it: "Sosta facoltativa a Meknès e Volubilis sulla via verso l'Aeroporto Mohammed V di Casablanca." },
      },
    ],
    faqs: [
      {
        question: { fr: "Peut-on ajouter Chefchaouen à cet itinéraire ?", en: "Can Chefchaouen be added to this itinerary?", ar: "هل يمكن إضافة شفشاون إلى هذا البرنامج؟", it: "Può essere aggiunta Chefchaouen a questo itinerario?" },
        answer:   { fr: "Oui — avec deux jours supplémentaires, vous pouvez ajouter Chefchaouen entre Fès et Casablanca.", en: "Yes — with two extra days you can add Chefchaouen between Fes and Casablanca.", ar: "نعم — بإضافة يومين إضافيين يمكنك إضافة شفشاون بين فاس والدار البيضاء.", it: "Sì — con due giorni extra potete aggiungere Chefchaouen tra Fes e Casablanca." },
      },
      {
        question: { fr: "Le circuit commence-t-il toujours depuis Marrakech ?", en: "Does the tour always start from Marrakech?", ar: "هل تبدأ الجولة دائماً من مراكش؟", it: "Il tour inizia sempre da Marrakech?" },
        answer:   { fr: "Oui, il part de Marrakech et se termine à Casablanca — un circuit aller simple idéal pour les voyageurs à l'itinéraire ouvert.", en: "Yes, it departs from Marrakech and ends in Casablanca — a one-way route ideal for travelers with an open-jaw itinerary.", ar: "نعم، ينطلق من مراكش وينتهي في الدار البيضاء — مسار ذهاب فقط مثالي للمسافرين ذوي خطط الطيران المفتوحة.", it: "Sì, parte da Marrakech e finisce a Casablanca — un percorso di sola andata ideale per i viaggiatori con un itinerario open-jaw." },
      },
    ],
  },

  /* ── 21 — 7-Day Marrakech → Casablanca Private Tour ── */
  {
    slug:     "7-day-marrakech-casablanca-private-tour",
    image:    "/images/rabatCity.jpg",
    gallery:  ["/images/chefchaouen.jpg", "/images/fes.jpg", "/images/dunes.jpg"],
    featured: false,
    days:     { fr: "7 Jours", en: "7 Days", ar: "7 أيام", it: "7 Giorni" },
    daysNum:  7,
    title: {
      fr: "Circuit privé de 7 jours de Marrakech à Casablanca",
      en: "7-Day Private Tour from Marrakech to Casablanca",
      ar: "جولة خاصة من مراكش إلى الدار البيضاء لمدة 7 أيام",
      it: "Tour privato di 7 giorni da Marrakech a Casablanca",
    },
    short: {
      fr: "Marrakech → Aït Ben Haddou → Merzouga (Sahara) → Fès → Chefchaouen → Rabat → Casablanca",
      en: "Marrakech → Ait Ben Haddou → Merzouga (Sahara) → Fes → Chefchaouen → Rabat → Casablanca",
      ar: "مراكش ← آيت بن حدو ← مرزوكة (الصحراء) ← فاس ← شفشاون ← الرباط ← الدار البيضاء",
      it: "Marrakech → Aït Ben Haddou → Merzouga (Sahara) → Fes → Chefchaouen → Rabat → Casablanca",
    },
    intro: {
      fr: "Une traversée complète du Maroc d'est en ouest en 7 jours, du désert du Sahara aux côtes atlantiques, en passant par les villes impériales et la ville bleue.",
      en: "A complete east-to-west crossing of Morocco in 7 days, from the Sahara Desert to the Atlantic coast, passing through imperial cities and the Blue City.",
      ar: "عبور كامل للمغرب من الشرق إلى الغرب في 7 أيام، من الصحراء الكبرى إلى السواحل الأطلسية، مروراً بالمدن الإمبراطورية والمدينة الزرقاء.",
      it: "Un attraversamento completo del Marocco da est a ovest in 7 giorni, dal deserto del Sahara alla costa atlantica, passando per le città imperiali e la Città Blu.",
    },
    highlights: {
      fr: ["Kasbah d'Aït Ben Haddou et route des kasbahs", "Nuit en camp désertique au Sahara de Merzouga", "Médina de Fès et ville bleue de Chefchaouen", "Sites royaux de Rabat et la mosquée Hassan II de Casablanca"],
      en: ["Ait Ben Haddou kasbah and the kasbah route", "Overnight desert camp in the Merzouga Sahara", "Fes medina and the Blue City of Chefchaouen", "Rabat's royal sites and Casablanca's Hassan II Mosque"],
      ar: ["قصبة آيت بن حدو وطريق القصبات", "ليلة في مخيم صحراوي بصحراء مرزوكة", "مدينة فاس القديمة والمدينة الزرقاء شفشاون", "المواقع الملكية في الرباط ومسجد الحسن الثاني بالدار البيضاء"],
      it: ["Kasba di Aït Ben Haddou e la rotta delle kasbah", "Notte nel campo del deserto nel Sahara di Merzouga", "Medina di Fes e la Città Blu di Chefchaouen", "Siti reali di Rabat e la Moschea Hassan II di Casablanca"],
    },
    itinerary: [
      {
        day:   { fr: "Jour 1", en: "Day 1", ar: "اليوم 1", it: "Giorno 1" },
        title: { fr: "Marrakech → Aït Ben Haddou", en: "Marrakech to Ait Ben Haddou", ar: "مراكش إلى آيت بن حدو", it: "Marrakech → Aït Ben Haddou" },
        description: { fr: "Col du Tizi n'Tichka, visite de la kasbah, nuit à Ouarzazate.", en: "Tizi n'Tichka Pass, kasbah visit, overnight near Ouarzazate.", ar: "ممر تيزي ن تيشكا، زيارة القصبة، مبيت بالقرب من ورزازات.", it: "Passo Tizi n'Tichka, visita alla kasba, pernottamento vicino a Ouarzazate." },
      },
      {
        day:   { fr: "Jour 2", en: "Day 2", ar: "اليوم 2", it: "Giorno 2" },
        title: { fr: "Ouarzazate → Merzouga", en: "Ouarzazate to Merzouga", ar: "ورزازات إلى مرزوكة", it: "Ouarzazate → Merzouga" },
        description: { fr: "Route des kasbahs, gorges du Todra, arrivée à Merzouga, balade à dos de chameau et camp désertique.", en: "Kasbah route, Todra Gorge, arrive at Merzouga, camel trek and desert camp.", ar: "طريق القصبات، مضايق تودرا، الوصول إلى مرزوكة، ركوب الجمال ومخيم صحراوي.", it: "Rotta delle kasbah, Gola di Todra, arrivo a Merzouga, escursione in cammello e campo nel deserto." },
      },
      {
        day:   { fr: "Jour 3", en: "Day 3", ar: "اليوم 3", it: "Giorno 3" },
        title: { fr: "Sahara → Fès", en: "Sahara to Fes", ar: "الصحراء إلى فاس", it: "Sahara → Fes" },
        description: { fr: "Lever de soleil, traversée du Moyen Atlas via Midelt et la vallée du Ziz jusqu'à Fès.", en: "Sunrise, cross the Middle Atlas via Midelt and the Ziz Valley to Fes.", ar: "شروق الشمس، عبور الأطلس المتوسط عبر ميدلت ووادي زيز إلى فاس.", it: "Alba, attraversate l'Atlante Medio via Midelt e la Valle dello Ziz fino a Fes." },
      },
      {
        day:   { fr: "Jour 4", en: "Day 4", ar: "اليوم 4", it: "Giorno 4" },
        title: { fr: "Médina de Fès", en: "Fes Medina", ar: "مدينة فاس القديمة", it: "Medina di Fes" },
        description: { fr: "Journée complète : tanneries, Al Quaraouiyine, médersas et souks historiques.", en: "Full day: tanneries, Al Quaraouiyine, madrasas and historic souks.", ar: "يوم كامل: الدباغات، القرويين، المدارس والأسواق التاريخية.", it: "Giornata intera: concerie, Al Quaraouiyine, madrasse e souk storici." },
      },
      {
        day:   { fr: "Jour 5", en: "Day 5", ar: "اليوم 5", it: "Giorno 5" },
        title: { fr: "Fès → Chefchaouen", en: "Fes to Chefchaouen", ar: "فاس إلى شفشاون", it: "Fes → Chefchaouen" },
        description: { fr: "Arrêt à Volubilis, après-midi libre dans les ruelles bleues de Chefchaouen.", en: "Stop at Volubilis, free afternoon in Chefchaouen's blue lanes.", ar: "توقف في فوليبيليس، بعد ظهر حر في الأزقة الزرقاء لشفشاون.", it: "Sosta a Volubilis, pomeriggio libero nei vicoli blu di Chefchaouen." },
      },
      {
        day:   { fr: "Jour 6", en: "Day 6", ar: "اليوم 6", it: "Giorno 6" },
        title: { fr: "Chefchaouen → Rabat", en: "Chefchaouen to Rabat", ar: "شفشاون إلى الرباط", it: "Chefchaouen → Rabat" },
        description: { fr: "Descente des montagnes du Rif, visite de la kasbah des Oudayas et du tour Hassan à Rabat.", en: "Descend from the Rif Mountains, visit the Kasbah of the Udayas and Hassan Tower in Rabat.", ar: "النزول من جبال الريف، زيارة قصبة الأوداية وصومعة حسان في الرباط.", it: "Discesa dalle montagne del Rif, visita alla Kasba degli Udaias e alla Torre Hassan a Rabat." },
      },
      {
        day:   { fr: "Jour 7", en: "Day 7", ar: "اليوم 7", it: "Giorno 7" },
        title: { fr: "Rabat → Casablanca", en: "Rabat to Casablanca", ar: "الرباط إلى الدار البيضاء", it: "Rabat → Casablanca" },
        description: { fr: "Arrivée à Casablanca, mosquée Hassan II, dépose à l'aéroport Mohammed V.", en: "Arrive in Casablanca, Hassan II Mosque, drop-off at Mohammed V Airport.", ar: "الوصول إلى الدار البيضاء، مسجد الحسن الثاني، التوصيل إلى مطار محمد الخامس.", it: "Arrivo a Casablanca, Moschea Hassan II, accompagnamento all'Aeroporto Mohammed V." },
      },
    ],
    faqs: [
      {
        question: { fr: "Ce circuit peut-il fonctionner en sens inverse depuis Casablanca ?", en: "Can this tour run in reverse from Casablanca?", ar: "هل يمكن إجراء هذه الجولة بالاتجاه العكسي من الدار البيضاء؟", it: "Questo tour può funzionare al contrario da Casablanca?" },
        answer:   { fr: "Absolument — c'est l'une des options les plus populaires pour les voyageurs arrivant à Casablanca et repartant de Marrakech.", en: "Absolutely — it's one of the most popular options for travelers flying into Casablanca and out of Marrakech.", ar: "بالتأكيد — إنه أحد أكثر الخيارات شعبية للمسافرين الذين يصلون إلى الدار البيضاء ويغادرون من مراكش.", it: "Assolutamente — è una delle opzioni più popolari per i viaggiatori che arrivano a Casablanca e partono da Marrakech." },
      },
      {
        question: { fr: "Le prix comprend-il les billets d'entrée des sites ?", en: "Does the price include site entrance fees?", ar: "هل السعر يشمل رسوم دخول المواقع؟", it: "Il prezzo include le quote di ingresso ai siti?" },
        answer:   { fr: "Le transport et le camp désertique sont inclus ; les billets d'entrée des sites sont en supplément mais restent modestes.", en: "Transport and the desert camp are included; site entrance fees are additional but modest.", ar: "النقل والمخيم الصحراوي مشمولان؛ رسوم دخول المواقع إضافية لكنها معقولة.", it: "Il trasporto e il campo nel deserto sono inclusi; le quote di ingresso ai siti sono aggiuntive ma modeste." },
      },
    ],
  },

  /* ── Grand Tour 8 Jours — Essaouira · Agadir · Sahara · Kasbahs ── */
  {
    slug:     "8-day-grand-tour-marrakech-essaouira-agadir-sahara",
    image:    "/images/aitBenHaddouKasbah.jpg",
    gallery:  ["/images/essaouira.jpg", "/images/agadirBeach.jpg", "/images/ouarzazate.jpg", "/images/dunes.jpg"],
    featured: true,
    days:    { fr: "8 Jours", en: "8 Days", ar: "8 أيام", it: "8 Giorni" },
    daysNum: 8,
    title: {
      fr: "Grand Tour du Maroc en 8 Jours — Essaouira, Agadir, Sahara & Kasbahs depuis Marrakech",
      en: "8-Day Grand Morocco Tour from Marrakech — Essaouira, Agadir, Sahara & Kasbahs",
      ar: "جولة المغرب الكبرى 8 أيام — الصويرة وأكادير والصحراء والقصبات من مراكش",
      it: "Grand Tour del Marocco in 8 Giorni da Marrakech — Essaouira, Agadir, Sahara e Kasbah",
    },
    short: {
      fr: "Boucle complète Atlantique–Désert–Kasbahs avec safran de Taliouine, poterie de Zagora et ksar d'Aït Ben Haddou",
      en: "Complete Atlantic–Desert–Kasbahs loop with Taliouine saffron, Zagora pottery and the Aït Ben Haddou UNESCO ksar",
      ar: "حلقة كاملة أطلسي–صحراء–قصبات مع زعفران تاليوين وفخار زاكورة وقصر أيت بنحدو يونسكو",
      it: "Loop completo Atlantico–Deserto–Kasbah con zafferano di Taliouine, ceramica di Zagora e ksar UNESCO di Aït Ben Haddou",
    },
    intro: {
      fr: "Huit jours pour traverser en boucle le Maroc le plus authentique depuis Marrakech. Ce grand circuit longe la côte atlantique jusqu'à Agadir, plonge dans les coopératives de safran de Taliouine et les ateliers de tapis berbères de Taznakht, remonte le Draa jusqu'au désert de Zagora, frôle les dunes d'Erfoud et les gorges de granit du Todra, avant de remonter par les kasbahs millénaires d'Ouarzazate et le ksar classé UNESCO d'Aït Ben Haddou. Un voyage qui conjugue Atlantique, désert, montagne et artisanat berbère — sans jamais précipiter les étapes.",
      en: "Eight days circling the most authentic Morocco from Marrakech. This grand loop follows the Atlantic coast to Agadir, dives into Taliouine's saffron cooperatives and Taznakht's Berber carpet workshops, traces the Draa Valley down to Zagora's pre-Saharan desert, brushes past Erfoud's dunes and the Todra granite gorge, before rising back through Ouarzazate's ancient kasbahs and the UNESCO-listed ksar of Aït Ben Haddou. A journey that weaves together ocean, desert, mountain and Berber craft — without rushing any of it.",
      ar: "ثمانية أيام في رحلة دائرية عبر أكثر المغرب أصالة انطلاقاً من مراكش. تتبع هذه الجولة الكبرى الساحل الأطلسي حتى أكادير، وتغوص في تعاونيات زعفران تاليوين وورش السجاد البربري في تازناخت، وتتتبع وادي درعة حتى صحراء زاكورة، وتمر قرب كثبان أرفود ووادي تودرة الغرانيتي، قبل الصعود مجدداً عبر قصبات ورزازات العريقة وقصر أيت بنحدو المدرج في اليونسكو. رحلة تجمع بين المحيط والصحراء والجبل والحرف البربرية — دون تسرع في أي محطة.",
      it: "Otto giorni in un grand tour circolare del Marocco più autentico da Marrakech. Questo grande loop segue la costa atlantica fino ad Agadir, si immerge nelle cooperative di zafferano di Taliouine e nei laboratori di tappeti berberi di Taznakht, percorre la Valle del Draa fino al deserto pre-sahariano di Zagora, sfiora le dune di Erfoud e la gola di granito del Todra, prima di risalire attraverso le antiche kasbah di Ouarzazate e il ksar patrimonio UNESCO di Aït Ben Haddou. Un viaggio che intreccia oceano, deserto, montagna e artigianato berbero — senza fretta.",
    },
    highlights: {
      fr: [
        "Médina d'Essaouira classée UNESCO et coopérative d'huile d'argan",
        "Safran de Taliouine — la meilleure épice du Maroc",
        "Tapis berbères artisanaux de Taznakht",
        "Bibliothèque coranique de Tamegroute (XIIIe s.) et poterie verte de Zagora",
        "Souk de Rissani et dattes Majhoul d'Erfoud avec fossiles marins",
        "Gorges du Todra (300 m) et palmeraie de Skoura",
        "Kasbahs d'Ouarzazate et ksar d'Aït Ben Haddou (UNESCO)",
      ],
      en: [
        "Essaouira UNESCO medina and argan oil cooperative",
        "Taliouine saffron — Morocco's finest spice",
        "Handmade Berber carpets at Taznakht workshops",
        "Tamegroute Koranic library (13th c.) and Zagora green pottery",
        "Rissani desert souk and Erfoud Medjoul dates with marine fossils",
        "Todra Gorge (300 m) and Skoura palmery",
        "Ouarzazate kasbahs and Aït Ben Haddou UNESCO ksar",
      ],
      ar: [
        "مدينة الصويرة العتيقة المدرجة في اليونسكو وتعاونية زيت أركان",
        "زعفران تاليوين — أفضل بهارات المغرب",
        "السجاد البربري اليدوي في ورش تازناخت",
        "المكتبة القرآنية بتامكروت (ق 13) والفخار الأخضر بزاكورة",
        "سوق الرسانة التقليدي وتمور مجهول وأحافير بحرية بأرفود",
        "وادي تودرة (300 م) ونخيل سكورة",
        "قصبات ورزازات وقصر أيت بنحدو (اليونسكو)",
      ],
      it: [
        "Medina UNESCO di Essaouira e cooperativa di olio d'argan",
        "Zafferano di Taliouine — la migliore spezia del Marocco",
        "Tappeti berberi artigianali nei laboratori di Taznakht",
        "Biblioteca coranica di Tamegroute (XIII sec.) e ceramica verde di Zagora",
        "Souk tradizionale di Rissani e datteri Medjoul con fossili marini di Erfoud",
        "Gola del Todra (300 m) e palmeraie di Skoura",
        "Kasbah di Ouarzazate e ksar UNESCO di Aït Ben Haddou",
      ],
    },
    itinerary: [
      {
        day:   { fr: "Jour 1", en: "Day 1", ar: "اليوم 1", it: "Giorno 1" },
        title: { fr: "Marrakech → Essaouira", en: "Marrakech → Essaouira", ar: "مراكش ← الصويرة", it: "Marrakech → Essaouira" },
        description: {
          fr: "Départ de Marrakech tôt le matin en direction de la côte Atlantique (~2 h 30 à travers la plaine du Haouz et les collines couvertes d'arganiers). Arrivée à Essaouira en fin de matinée. Visite d'une coopérative féminine d'huile d'argan, puis exploration à pied de la médina blanche classée à l'UNESCO : remparts sur l'Atlantique, port de pêche actif, galeries d'art et souks odorants. Dîner de poissons grillés face au port.",
          en: "Early departure from Marrakech towards the Atlantic coast (~2.5 h through the Haouz plain and argan tree-covered hills). Arrive in Essaouira late morning. Visit a women's argan oil cooperative, then explore the UNESCO-listed white medina on foot: Atlantic ramparts, working fishing port, art galleries and fragrant souks. Grilled-fish dinner by the port.",
          ar: "مغادرة مبكرة من مراكش نحو الساحل الأطلسي (~2.5 ساعة عبر سهل الحوز والتلال المكسوة بأشجار الأركان). الوصول إلى الصويرة في أواخر الصباح. زيارة تعاونية نسائية لزيت الأركان، ثم استكشاف المدينة العتيقة البيضاء المدرجة في اليونسكو سيراً على الأقدام: الأسوار الأطلسية، ميناء الصيد النشط، المعارض الفنية والأسواق العطرة. عشاء سمك مشوي أمام الميناء.",
          it: "Partenza anticipata da Marrakech verso la costa atlantica (~2,5 h attraverso la pianura dello Haouz e le colline di argan). Arrivo a Essaouira a fine mattina. Visita a una cooperativa femminile di olio d'argan, poi esplorazione a piedi della medina bianca UNESCO: mura atlantiche, porto dei pescatori attivo, gallerie d'arte e souk profumati. Cena a base di pesce grigliato al porto.",
        },
      },
      {
        day:   { fr: "Jour 2", en: "Day 2", ar: "اليوم 2", it: "Giorno 2" },
        title: { fr: "Essaouira → Agadir", en: "Essaouira → Agadir", ar: "الصويرة ← أكادير", it: "Essaouira → Agadir" },
        description: {
          fr: "Matinée libre à Essaouira pour acheter de l'huile d'argan pure, des épices ou flâner dans les ruelles bleues et blanches. Départ après le déjeuner vers Agadir (~2 h 30 le long du littoral atlantique). Promenade en soirée sur la grande plage et la corniche d'Agadir. Découverte des spécialités du Souss : miel de thym, amlou (pâte d'amandes et argan) et cuisine amazigh.",
          en: "Free morning in Essaouira to buy pure argan oil, spices or stroll the blue-and-white lanes. Depart after lunch for Agadir (~2.5 h along the Atlantic coast). Evening walk along Agadir's long beach and corniche. Taste the Souss specialties: thyme honey, amlou (almond and argan paste) and Amazigh cuisine.",
          ar: "صباح حر في الصويرة لشراء زيت الأركان النقي والبهارات أو التجول في الأزقة الزرقاء والبيضاء. مغادرة بعد الغداء نحو أكادير (~2.5 ساعة بمحاذاة الساحل الأطلسي). مساء: التمشي على شاطئ أكادير الطويل والكورنيش. تذوق منتجات سوس: عسل الزعتر، أملو (معجون اللوز والأركان) والمطبخ الأمازيغي.",
          it: "Mattinata libera a Essaouira per acquistare olio d'argan puro, spezie o passeggiare tra i vicoli bianchi e blu. Partenza dopo pranzo per Agadir (~2,5 h lungo la costa atlantica). Passeggiata serale sulla lunga spiaggia e la corniche di Agadir. Degustazione delle specialità del Souss: miele di timo, amlou (pasta di mandorle e argan) e cucina amazigh.",
        },
      },
      {
        day:   { fr: "Jour 3", en: "Day 3", ar: "اليوم 3", it: "Giorno 3" },
        title: { fr: "Agadir → Taliouine → Taznakht", en: "Agadir → Taliouine → Taznakht", ar: "أكادير ← تاليوين ← تازناخت", it: "Agadir → Taliouine → Taznakht" },
        description: {
          fr: "Départ d'Agadir en direction de l'Anti-Atlas. La route serpente entre amandiers et genévriers, avec des vues saisissantes sur les gorges. Arrêt à Taliouine, capitale mondiale du safran marocain : visite de la coopérative Souktana du Safran, explication du cycle de la fleur Crocus sativus (floraison en octobre–novembre), dégustation de thé au safran. Déjeuner berbère en altitude. Poursuite vers Taznakht, réputé pour ses tapis aux motifs géométriques : visite d'un atelier de tissage familial où les femmes perpétuent l'art ancestral sur des métiers en bois. Nuit à Zagora.",
          en: "Depart Agadir into the Anti-Atlas mountains. The road winds through almond and juniper trees with dramatic gorge views. Stop in Taliouine, the world capital of Moroccan saffron: visit the Souktana Saffron Cooperative, learn the Crocus sativus flower cycle (bloom: October–November), taste saffron tea. Berber lunch at altitude. Continue to Taznakht, famed for geometric Berber carpets: visit a family weaving workshop where women keep the ancestral art alive on wooden looms. Night in Zagora.",
          ar: "مغادرة أكادير نحو جبال الأطلس الصغير. الطريق يلتوي بين أشجار اللوز والعرعر مع مشاهد رائعة للأودية. توقف في تاليوين، عاصمة الزعفران المغربي في العالم: زيارة تعاونية سوكتانا للزعفران، التعرف على دورة زهرة Crocus sativus (تزهر في أكتوبر–نوفمبر)، تذوق شاي الزعفران. غداء بربري على الارتفاع. الاستمرار نحو تازناخت، المشهورة بسجادها البربري ذي النقوش الهندسية: زيارة ورشة نسيج عائلية حيث تواصل النساء الفن الأصيل على أنوال خشبية. ليلة في زاكورة.",
          it: "Partenza da Agadir verso le montagne dell'Anti-Atlante. La strada serpeggia tra mandorli e ginepri con viste spettacolari sulle gole. Tappa a Taliouine, capitale mondiale dello zafferano marocchino: visita alla Cooperativa Souktana dello Zafferano, ciclo del fiore Crocus sativus (fioritura: ottobre–novembre), degustazione del tè allo zafferano. Pranzo berbero in quota. Continuazione verso Taznakht, famosa per i tappeti berberi a motivi geometrici: visita a un laboratorio di tessitura familiare dove le donne mantengono viva l'arte ancestrale su telai in legno. Notte a Zagora.",
        },
      },
      {
        day:   { fr: "Jour 4", en: "Day 4", ar: "اليوم 4", it: "Giorno 4" },
        title: { fr: "Zagora → Tamegroute → Palmeraies du Draa", en: "Zagora → Tamegroute → Draa Palmeries", ar: "زاكورة ← تامكروت ← نخيل درعة", it: "Zagora → Tamegroute → Palmerie del Draa" },
        description: {
          fr: "Matinée à Zagora. Excursion de 20 km vers Tamegroute : la zaouia Nassiriya abrite une bibliothèque coranique fondée au XIIIe siècle, conservant plus de 4 000 manuscrits enluminés sur parchemin. En face, des potiers perpétuent la tradition de la céramique verte à glaçure plombée, unique au Maroc — vous pouvez acheter directement à l'atelier. Déjeuner dans une maison berbère. Exploration des palmeraies du Draa en fin d'après-midi — la plus longue oasis du Maroc s'étire sur 200 km entre Agdez et M'Hamid. Retour à Zagora pour la nuit.",
          en: "Morning in Zagora. Short drive 20 km south to Tamegroute: the Nassiriya Zaouia houses a Koranic library founded in the 13th century, preserving over 4,000 illuminated manuscripts on parchment. Opposite, potters continue the tradition of green lead-glazed pottery, unique to Morocco — buy directly from the workshop. Berber lunch. Afternoon exploration of the Draa palmeries — Morocco's longest oasis stretches 200 km from Agdez to M'Hamid. Return to Zagora for the night.",
          ar: "صباح في زاكورة. رحلة قصيرة 20 كم جنوباً إلى تامكروت: تضم زاوية الناصرية مكتبة قرآنية أُسست في القرن الثالث عشر، تحتضن أكثر من 4000 مخطوطة مزخرفة على رق. أمامها يواصل الفخارون تقليد الخزف الأخضر ذي الطلاء الرصاصي الفريد في المغرب — يمكن الشراء مباشرة من الورشة. غداء بربري. استكشاف نخيل درعة بعد الظهر — أطول واحة في المغرب تمتد 200 كم من أكدز إلى مامد. العودة إلى زاكورة للمبيت.",
          it: "Mattinata a Zagora. Breve trasferimento di 20 km a sud verso Tamegroute: la Zaouia Nassiriya ospita una biblioteca coranica fondata nel XIII secolo con oltre 4.000 manoscritti miniati su pergamena. Di fronte, i vasai continuano la tradizione della ceramica verde piombata, unica in Marocco — acquisto diretto in laboratorio. Pranzo berbero. Esplorazione pomeridiana delle palmerie del Draa — la più lunga oasi del Marocco si estende per 200 km da Agdez a M'Hamid. Rientro a Zagora per la notte.",
        },
      },
      {
        day:   { fr: "Jour 5", en: "Day 5", ar: "اليوم 5", it: "Giorno 5" },
        title: { fr: "Zagora → Rissani → Erfoud", en: "Zagora → Rissani → Erfoud", ar: "زاكورة ← الرسانة ← أرفود", it: "Zagora → Rissani → Erfoud" },
        description: {
          fr: "Longue et belle journée à travers le Jbel Sarhro et le Tafilalet. Arrêt à Rissani, berceau de la dynastie alaouite régnante : visite du souk traditionnel — l'un des plus authentiques du Maroc, avec ses ânes chargés, ses marchands de dattes, de henné et de poteries. Le mausolée de Moulay Ali Cherif marque l'origine de la famille royale. Poursuite vers Erfoud, capitale des dattes Majhoul (Medjool) : dégustation de cette variété reine, visite d'un artisan spécialisé dans la sculpture de trilobites et fossiles marins vieux de 350 millions d'années. Nuit à Erfoud.",
          en: "A long, beautiful day through Jbel Sarhro and the Tafilalet. Stop in Rissani, cradle of the ruling Alaouite dynasty: visit the traditional souk — one of Morocco's most authentic, with loaded donkeys, date and henna vendors and pottery stalls. The mausoleum of Moulay Ali Cherif marks the royal family's origin. Continue to Erfoud, capital of Medjoul dates: taste this queen variety, visit a craftsman specialising in trilobite and marine fossil carving, 350 million years old. Night in Erfoud.",
          ar: "يوم طويل وجميل عبر جبل صرهرو والتافيلالت. توقف في الرسانة، مهد الأسرة العلوية الحاكمة: زيارة السوق التقليدي — أحد أكثر أسواق المغرب أصالة، مع الحمير المحملة وباعة التمور والحناء والفخار. ضريح مولاي علي الشريف يمثل أصل الأسرة الملكية. الاستمرار نحو أرفود، عاصمة تمور مجهول: تذوق هذا الصنف الملكي، زيارة حرفي متخصص في نحت ثلاثيات الفصوص والأحافير البحرية عمرها 350 مليون سنة. ليلة في أرفود.",
          it: "Una lunga e bellissima giornata attraverso Jbel Sarhro e il Tafilalet. Tappa a Rissani, culla della dinastia Alaouite regnante: visita al souk tradizionale — uno dei più autentici del Marocco, con asini carichi, venditori di datteri, henné e ceramiche. Il mausoleo di Moulay Ali Cherif segna l'origine della famiglia reale. Continuazione verso Erfoud, capitale dei datteri Medjoul: degustazione di questa varietà regina, visita a un artigiano specializzato nella scultura di trilobiti e fossili marini di 350 milioni di anni fa. Notte a Erfoud.",
        },
      },
      {
        day:   { fr: "Jour 6", en: "Day 6", ar: "اليوم 6", it: "Giorno 6" },
        title: { fr: "Erfoud → Gorges du Todra → Tinghir", en: "Erfoud → Todra Gorge → Tinghir", ar: "أرفود ← وادي تودرة ← تينغير", it: "Erfoud → Gola del Todra → Tinghir" },
        description: {
          fr: "Cap vers les gorges du Todra. La route traverse Tinejdad et les palmeraies de la vallée du Ghéris. Arrivée aux gorges : deux parois de granit rose s'élèvent à 300 mètres au-dessus du lit de la rivière Todra sur une largeur de 10 mètres à peine — l'un des sites d'escalade les plus réputés d'Afrique. Marche dans la gorge, pause dans un café berbère au pied des rochers. L'après-midi, exploration de Tinghir et de son immense palmeraie en terrasses — une des oasis les plus spectaculaires du Maroc. Nuit à Tinghir.",
          en: "Head for the Todra Gorge. The road crosses Tinejdad and the palm groves of the Ghéris valley. Arrive at the gorge: two pink granite walls rise 300 m above the Todra riverbed, barely 10 m wide in places — one of Africa's most renowned climbing sites. Walk through the gorge, pause at a Berber café at the cliff base. Afternoon: explore Tinghir and its vast terraced palmery — one of Morocco's most spectacular oases. Night in Tinghir.",
          ar: "التوجه نحو وادي تودرة. يعبر الطريق تينجداد ونخيل وادي الغريس. الوصول إلى الوادي: جدارا غرانيت وردي يرتفعان 300 م فوق مجرى نهر تودرة بعرض 10 أمتار فحسب في بعض الأماكن — من أشهر مواقع التسلق في أفريقيا. تمشٍّ في الوادي، استراحة في مقهى بربري عند قاعدة الصخور. بعد الظهر: استكشاف تينغير ونخيلها المدرج الشاسع — من أروع الواحات في المغرب. ليلة في تينغير.",
          it: "Direzione Gola del Todra. La strada attraversa Tinejdad e le palmerie della valle del Ghéris. Arrivo alla gola: due pareti di granito rosa si alzano per 300 m sopra il letto del fiume Todra, larghezza appena 10 m in certi punti — uno dei siti di arrampicata più rinomati d'Africa. Camminata nella gola, pausa in un caffè berbero alla base delle rocce. Nel pomeriggio, esplorazione di Tinghir e della sua vasta palmeria a terrazze — una delle oasi più spettacolari del Marocco. Notte a Tinghir.",
        },
      },
      {
        day:   { fr: "Jour 7", en: "Day 7", ar: "اليوم 7", it: "Giorno 7" },
        title: { fr: "Tinghir → Skoura → Ouarzazate", en: "Tinghir → Skoura → Ouarzazate", ar: "تينغير ← سكورة ← ورزازات", it: "Tinghir → Skoura → Ouarzazate" },
        description: {
          fr: "Traversée de la vallée du Dadès avec ses kasbahs de pisé rose qui se reflètent dans la rivière. Arrêt à Skoura, palmeraie sauvage où la kasbah Amerhidil restaurée se dresse parmi les palmiers. Skoura est aussi la Vallée des Roses : en avril les damaskinas (roses de Damas) parfument toute la région. Visite d'une distillerie d'eau de rose artisanale. Arrivée à Ouarzazate en début d'après-midi. Visite de la kasbah de Taourirt (ancienne résidence des Glaoui), puis exploration des Atlas Studios — les plus grands studios de cinéma d'Afrique, décors de Lawrence d'Arabie, Gladiator et Game of Thrones. Nuit à Ouarzazate.",
          en: "Cross the Dades Valley with its pink earthen kasbahs reflected in the river. Stop at Skoura, a wild palmery where the restored Amerhidil kasbah stands among the palms. Skoura is also the Valley of Roses: in April, Damask roses perfume the entire region. Visit an artisanal rose water distillery. Arrive in Ouarzazate early afternoon. Visit the Taourirt Kasbah (former Glaoui residence), then explore the Atlas Studios — Africa's largest film studios, sets for Lawrence of Arabia, Gladiator and Game of Thrones. Night in Ouarzazate.",
          ar: "عبور وادي دادس بقصباته الطينية الوردية المنعكسة على النهر. توقف في سكورة، نخيل بري تنتصب فيه قصبة أمريهدل المرممة وسط النخيل. سكورة معروفة أيضاً بوادي الورود: في أبريل تعطر أزهار الدردار الدمشقي المنطقة بأسرها. زيارة معمل تقطير ماء الورد الحرفي. الوصول إلى ورزازات في مطلع بعد الظهر. زيارة قصبة تاوريرت (إقامة الكلاوي السابقة)، ثم استكشاف استوديوهات أطلس — أكبر استوديوهات السينما في أفريقيا، مواقع لورانس العرب وغلاديتور وغيم أوف ثرونز. ليلة في ورزازات.",
          it: "Attraversamento della Valle del Dades con le sue kasbah di terra rosa riflesse nel fiume. Sosta a Skoura, palmeria selvatica dove la kasbah Amerhidil restaurata si erge tra le palme. Skoura è anche la Valle delle Rose: in aprile, le rose di Damasco profumano tutta la regione. Visita a una distilleria artigianale di acqua di rose. Arrivo a Ouarzazate nel primo pomeriggio. Visita alla Kasbah Taourirt (ex residenza dei Glaoui), poi esplorazione degli Atlas Studios — i più grandi studi cinematografici d'Africa, set di Lawrence d'Arabia, Gladiatore e Game of Thrones. Notte a Ouarzazate.",
        },
      },
      {
        day:   { fr: "Jour 8", en: "Day 8", ar: "اليوم 8", it: "Giorno 8" },
        title: { fr: "Ouarzazate → Aït Ben Haddou → Marrakech", en: "Ouarzazate → Aït Ben Haddou → Marrakech", ar: "ورزازات ← أيت بنحدو ← مراكش", it: "Ouarzazate → Aït Ben Haddou → Marrakech" },
        description: {
          fr: "Dernière matinée consacrée à une visite approfondie d'Aït Ben Haddou, à 30 minutes d'Ouarzazate. Ce ksar de terre inscrit au patrimoine mondial de l'UNESCO est l'une des architectures en pisé les mieux préservées au monde et le décor de tournage le plus célèbre du Maroc (Game of Thrones, Gladiator, Lawrence d'Arabie, Babel…). Traversée de la rivière à pied, montée jusqu'au grenier au sommet de la colline, panorama à 360° sur la vallée de l'Ounila. Déjeuner sur place. Remontée par le spectaculaire col du Tizi n'Tichka (2 260 m) à travers le Haut Atlas enneigé. Retour à Marrakech en soirée.",
          en: "Final morning dedicated to an in-depth visit to Aït Ben Haddou, 30 minutes from Ouarzazate. This earthen ksar, inscribed on the UNESCO World Heritage List, is one of the world's best-preserved pisé architectures and Morocco's most famous film set (Game of Thrones, Gladiator, Lawrence of Arabia, Babel…). Wade across the river, climb to the granary at the hill's summit, 360° panorama over the Ounila valley. Lunch on site. Return via the spectacular Tizi n'Tichka pass (2,260 m) through the snow-capped High Atlas. Back in Marrakech by evening.",
          ar: "صباح أخير مخصص لزيارة معمقة لأيت بنحدو على بعد 30 دقيقة من ورزازات. هذا القصر الطيني المدرج في قائمة التراث العالمي لليونسكو من أفضل عمارات الطابية المحفوظة في العالم وأشهر مواقع التصوير في المغرب (غيم أوف ثرونز، غلاديتور، لورانس العرب، بابل...). عبور النهر سيراً، الصعود إلى المخزن على قمة التل، بانوراما 360 درجة على وادي الونيلة. غداء في الموقع. العودة عبر ممر تيزي نتيشكا المذهل (2260 م) عبر الأطلس الكبير المكسو بالثلج. العودة إلى مراكش مساءً.",
          it: "Mattinata finale dedicata a una visita approfondita ad Aït Ben Haddou, a 30 minuti da Ouarzazate. Questo ksar di terra, iscritto nella Lista del Patrimonio Mondiale UNESCO, è una delle architetture in pisé meglio conservate al mondo e il set cinematografico più famoso del Marocco (Game of Thrones, Gladiatore, Lawrence d'Arabia, Babel…). Attraversamento del fiume a piedi, salita al granaio in cima alla collina, panorama a 360° sulla valle dell'Ounila. Pranzo sul posto. Ritorno via il spettacolare Passo Tizi n'Tichka (2.260 m) attraverso l'Alto Atlante innevato. Rientro a Marrakech in serata.",
        },
      },
    ],
    faqs: [
      {
        question: {
          fr: "Ce circuit est-il accessible toute l'année ?",
          en: "Is this tour available year-round?",
          ar: "هل هذه الجولة متاحة طوال العام؟",
          it: "Questo tour è disponibile tutto l'anno?",
        },
        answer: {
          fr: "Oui, mais les meilleures périodes sont le printemps (mars–mai) et l'automne (septembre–novembre). En été, les températures dans le désert peuvent dépasser 45 °C ; en hiver, le col du Tizi n'Tichka peut être enneigé mais reste généralement praticable.",
          en: "Yes, but the best periods are spring (March–May) and autumn (September–November). In summer, desert temperatures can exceed 45 °C; in winter, the Tizi n'Tichka pass may be snowy but is generally passable.",
          ar: "نعم، لكن أفضل الفترات هي الربيع (مارس–مايو) والخريف (سبتمبر–نوفمبر). في الصيف قد تتجاوز درجات الحرارة في الصحراء 45 درجة مئوية؛ في الشتاء قد يكون ممر تيزي نتيشكا مكسواً بالثلج لكنه عادة سالك.",
          it: "Sì, ma i periodi migliori sono la primavera (marzo–maggio) e l'autunno (settembre–novembre). In estate le temperature nel deserto possono superare i 45 °C; in inverno il passo Tizi n'Tichka può essere innevato ma è generalmente percorribile.",
        },
      },
      {
        question: {
          fr: "Qu'est-ce qui est inclus dans le prix ?",
          en: "What is included in the price?",
          ar: "ما الذي يشمله السعر؟",
          it: "Cosa è incluso nel prezzo?",
        },
        answer: {
          fr: "Le prix comprend le véhicule privé climatisé avec chauffeur pour toute la durée, les transferts hôtel-à-hôtel et les entrées des coopératives mentionnées (safran, tapis, poterie). Les hébergements (7 nuits), les repas et les entrées payantes des monuments sont à votre charge.",
          en: "The price includes the private air-conditioned vehicle with driver for the full duration, hotel-to-hotel transfers and entrance to the named cooperatives (saffron, carpets, pottery). Accommodation (7 nights), meals and paid monument admissions are not included.",
          ar: "يشمل السعر السيارة الخاصة المكيفة مع السائق طوال المدة، ونقل من فندق إلى فندق، ودخول التعاونيات المذكورة (الزعفران، السجاد، الفخار). الإقامة (7 ليالٍ) والوجبات ورسوم دخول المعالم المدفوعة غير مشمولة.",
          it: "Il prezzo include il veicolo privato con aria condizionata con autista per tutta la durata, i trasferimenti da hotel a hotel e l'ingresso alle cooperative menzionate (zafferano, tappeti, ceramica). Alloggio (7 notti), pasti e biglietti di ingresso a pagamento ai monumenti non sono inclusi.",
        },
      },
      {
        question: {
          fr: "Peut-on prolonger ou modifier l'itinéraire ?",
          en: "Can the itinerary be extended or modified?",
          ar: "هل يمكن تمديد المسار أو تعديله؟",
          it: "L'itinerario può essere esteso o modificato?",
        },
        answer: {
          fr: "Oui — chaque circuit est entièrement personnalisable. Vous pouvez ajouter une nuit à Merzouga pour les dunes de l'Erg Chebbi, raccourcir à 6 ou 7 jours, ou intégrer Taroudant (la 'Petite Marrakech'). Contactez-nous sur WhatsApp pour un devis adapté.",
          en: "Yes — every tour is fully customisable. You can add a night in Merzouga for the Erg Chebbi dunes, shorten to 6 or 7 days, or include Taroudant (the 'Little Marrakech'). Contact us on WhatsApp for a tailored quote.",
          ar: "نعم — كل جولة قابلة للتخصيص الكامل. يمكنك إضافة ليلة في مرزوقة لكثبان إرق شبي أو تقليصها إلى 6 أو 7 أيام أو إدراج تارودانت ('مراكش الصغيرة'). تواصل معنا على واتساب للحصول على عرض مخصص.",
          it: "Sì — ogni tour è completamente personalizzabile. Potete aggiungere una notte a Merzouga per le dune dell'Erg Chebbi, accorciare a 6 o 7 giorni, o includere Taroudant ('la Piccola Marrakech'). Contattateci su WhatsApp per un preventivo su misura.",
        },
      },
      {
        question: {
          fr: "Combien de personnes par véhicule ?",
          en: "How many people per vehicle?",
          ar: "كم شخصاً في كل سيارة؟",
          it: "Quante persone per veicolo?",
        },
        answer: {
          fr: "Le tarif est par véhicule, pas par personne. Un SUV confort accueille 1 à 4 passagers ; un van Mercedes Sprinter peut emmener jusqu'à 7 personnes. Un groupe de 4 paie le même prix qu'un voyageur seul.",
          en: "The price is per vehicle, not per person. A comfort SUV fits 1–4 passengers; a Mercedes Sprinter van can take up to 7 people. A group of 4 pays the same price as a solo traveller.",
          ar: "السعر للسيارة وليس للشخص. يستوعب الـ SUV المريح من 1 إلى 4 ركاب؛ فان مرسيدس سبرينتر يستوعب حتى 7 أشخاص. مجموعة من 4 تدفع نفس سعر المسافر المنفرد.",
          it: "Il prezzo è per veicolo, non per persona. Un SUV comfort accoglie 1-4 passeggeri; un van Mercedes Sprinter può portare fino a 7 persone. Un gruppo di 4 paga lo stesso prezzo di un viaggiatore singolo.",
        },
      },
    ],
  },
];

export function getTour(slug: string): Tour | undefined {
  return tours.find(t => t.slug === slug);
}
