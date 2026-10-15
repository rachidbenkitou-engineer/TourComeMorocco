export type ExcursionDay = { day: string; title: string; description: string };
export type ExcursionFaq = { question: string; answer: string };

export type Excursion = {
  slug: string;
  image: string;
  duration: string;
  fromPrice?: string;
  title: string;
  short: string;
  intro: string;
  highlights: string[];
  itinerary: ExcursionDay[];
  faqs: ExcursionFaq[];
  featured?: boolean;
};

export const excursions: Excursion[] = [
  {
    slug: "vallee-ourika-atlas",
    image: "/images/ourikaFalls.jpg",
    duration: "Journée complète",
    fromPrice: "Dès €45",
    featured: true,
    title: "Vallée de l'Ourika et Atlas depuis Marrakech",
    short: "Villages berbères, coopérative d'argan et cascades de Setti Fatma",
    intro: "À un peu plus d'une heure de Marrakech, la vallée de l'Ourika s'enfonce dans le Haut Atlas entre villages de terre rouge, noyers et rivière vive. Visitez une maison berbère et une coopérative d'argan, puis montez jusqu'aux cascades de Setti Fatma avant un déjeuner au bord de l'eau.",
    highlights: [
      "Cascades de Setti Fatma",
      "Visite d'une maison berbère",
      "Coopérative d'huile d'argan",
      "Panoramas du Haut Atlas",
      "Déjeuner au bord de la rivière",
    ],
    itinerary: [
      { day: "Matin", title: "De Marrakech aux contreforts de l'Atlas", description: "Prise en charge à votre riad ou hôtel et route vers le sud à travers la plaine du Haouz, face aux sommets enneigés de l'Atlas." },
      { day: "Fin de matinée", title: "Village berbère et coopérative d'argan", description: "Thé dans une maison berbère traditionnelle et visite d'une coopérative féminine d'huile d'argan." },
      { day: "Midi", title: "Cascades de Setti Fatma", description: "Marche guidée jusqu'à la première cascade de Setti Fatma ; déjeuner dans un restaurant au bord de la rivière." },
      { day: "Après-midi", title: "Retour à Marrakech", description: "Descente de la vallée avec arrêts photo et dépose à votre hébergement." },
    ],
    faqs: [
      { question: "À quelle distance se trouve la vallée de l'Ourika ?", answer: "Environ 70 km, soit 1 h 15 de route jusqu'à Setti Fatma." },
      { question: "La marche jusqu'aux cascades est-elle difficile ?", answer: "Le sentier vers la première cascade est court mais rocailleux — prévoyez de bonnes chaussures. Les guides locaux connaissent le chemin le plus facile." },
      { question: "Quel est le prix ?", answer: "Le prix dépend de votre groupe et du véhicule — envoyez-nous une demande sur WhatsApp pour un devis rapide." },
    ],
  },
  {
    slug: "cascades-ouzoud",
    image: "/images/ouzoud.jpg",
    duration: "Journée complète",
    fromPrice: "Dès €60",
    featured: true,
    title: "Cascades d'Ouzoud depuis Marrakech",
    short: "Les plus hautes cascades du Maroc, oliveraies et singes sauvages",
    intro: "Les cascades d'Ouzoud chutent de 110 mètres en trois paliers dans une gorge verdoyante d'oliviers et de caroubiers. Descendez les sentiers jusqu'au pied des chutes, faites un tour en barque sous les embruns et observez les singes magots qui vivent sur les falaises.",
    highlights: [
      "Cascade de 110 m sur trois paliers",
      "Sentier dans la gorge",
      "Barque sous les chutes",
      "Singes magots en liberté",
      "Déjeuner face aux cascades",
    ],
    itinerary: [
      { day: "Matin", title: "De Marrakech à Ouzoud", description: "Prise en charge à votre hébergement et environ 2 h 30 de route à travers la campagne des contreforts du Moyen Atlas." },
      { day: "Fin de matinée", title: "Sentier jusqu'au pied des chutes", description: "Descente par le sentier, entre moulins et points de vue, jusqu'au bas des cascades." },
      { day: "Midi", title: "Barque et déjeuner", description: "Tour en barque facultatif sous les embruns et déjeuner sur une terrasse face à l'eau." },
      { day: "Après-midi", title: "Singes magots et retour", description: "Observation des singes sauvages en remontant, puis route vers Marrakech." },
    ],
    faqs: [
      { question: "Combien de route jusqu'à Ouzoud ?", answer: "Environ 150 km, soit 2 h 30 dans chaque sens — c'est la plus longue des excursions classiques depuis Marrakech." },
      { question: "Peut-on se baigner à Ouzoud ?", answer: "La baignade est possible dans certains bassins aux beaux jours ; suivez les consignes locales." },
      { question: "Quel est le prix ?", answer: "Le prix dépend de votre groupe et du véhicule — envoyez-nous une demande sur WhatsApp pour un devis." },
    ],
  },
  {
    slug: "desert-agafay-coucher-soleil",
    image: "/images/agafay.jpg",
    duration: "Demi-journée",
    fromPrice: "Dès €50",
    featured: true,
    title: "Coucher de soleil et dromadaire dans le désert d'Agafay",
    short: "Désert de pierre, balade à dromadaire au coucher du soleil et dîner sous les étoiles",
    intro: "À seulement 40 minutes de Marrakech, l'Agafay offre un paysage lunaire de collines pâles face au Haut Atlas. Balade à dos de dromadaire au coucher du soleil, puis thé ou dîner dans un camp avant de rentrer en ville sous les étoiles.",
    highlights: [
      "Dromadaire au coucher du soleil",
      "Vue sur le Haut Atlas",
      "Dîner au camp du désert",
      "Lac Lalla Takerkoust",
      "Tout près de Marrakech",
    ],
    itinerary: [
      { day: "Après-midi", title: "De Marrakech à l'Agafay", description: "Prise en charge à votre riad ou hôtel et courte route vers le sud-ouest en passant par le lac Lalla Takerkoust." },
      { day: "Coucher du soleil", title: "Balade à dromadaire", description: "Traversée des collines pierreuses quand la lumière se fait dorée et que les sommets de l'Atlas rosissent." },
      { day: "Soir", title: "Camp du désert", description: "Thé à la menthe ou dîner dans un camp, souvent avec musique autour du feu." },
      { day: "Nuit", title: "Retour à Marrakech", description: "Route du retour vers votre hébergement, environ 40 minutes." },
    ],
    faqs: [
      { question: "L'Agafay est-il un vrai désert de sable ?", answer: "C'est un désert de pierre aux collines ondulées, pas de dunes — pour les grandes dunes, il faut aller à Merzouga." },
      { question: "Peut-on ajouter du quad ?", answer: "Oui, le quad est possible dans l'Agafay ; indiquez-le dans les notes de réservation." },
      { question: "Quel est le prix ?", answer: "Le prix dépend des activités et de votre groupe — demandez-nous un devis sur WhatsApp." },
    ],
  },
  {
    slug: "imlil-toubkal-atlas",
    image: "/images/imlil.jpg",
    duration: "Journée complète",
    fromPrice: "Dès €55",
    featured: true,
    title: "Imlil et parc national du Toubkal depuis Marrakech",
    short: "Randonnée dans le Haut Atlas jusqu'aux villages berbères sous le plus haut sommet d'Afrique du Nord",
    intro: "Partez au cœur du Haut Atlas jusqu'à Imlil, village de montagne au pied du Jebel Toubkal (4 167 m). Marchez avec un guide de montagne local entre noyers et cultures en terrasses jusqu'au village d'Aroumd, partagez un déjeuner berbère et profitez des sommets tout autour.",
    highlights: [
      "Parc national du Toubkal",
      "Randonnée guidée jusqu'à Aroumd",
      "Déjeuner dans un village berbère",
      "Gorges de Moulay Brahim",
      "Panoramas du Haut Atlas",
    ],
    itinerary: [
      { day: "Matin", title: "De Marrakech à Asni et Imlil", description: "Prise en charge à votre hébergement et environ 1 h 30 par les gorges de Moulay Brahim et le bourg d'Asni." },
      { day: "Fin de matinée", title: "Randonnée jusqu'à Aroumd", description: "2 à 3 heures de marche avec un guide local dans la vallée jusqu'au village berbère d'Aroumd, face au massif du Toubkal." },
      { day: "Midi", title: "Déjeuner berbère", description: "Déjeuner avec vue dans un gîte du village — tajine et thé à la menthe." },
      { day: "Après-midi", title: "Retour à Marrakech", description: "Descente vers Imlil et route du retour vers la ville." },
    ],
    faqs: [
      { question: "La randonnée est-elle difficile ?", answer: "C'est une marche facile à modérée de 2 à 3 heures sur des sentiers de montagne ; le rythme s'adapte à votre groupe." },
      { question: "Peut-on gravir le Toubkal en une journée ?", answer: "Non — l'ascension du Toubkal se fait généralement en 2 jours. Cette excursion est une randonnée à la journée dans la vallée." },
      { question: "Quel est le prix ?", answer: "Le prix dépend de votre groupe et du guide de montagne — demandez-nous sur WhatsApp." },
    ],
  },
  {
    slug: "ait-ben-haddou-ouarzazate",
    image: "/images/aitBenHaddou.jpg",
    duration: "Journée complète",
    fromPrice: "Dès €70",
    title: "Aït Ben Haddou et Ouarzazate depuis Marrakech",
    short: "Par le col du Tizi n'Tichka jusqu'à la kasbah UNESCO et la capitale du cinéma",
    intro: "Traversez le Haut Atlas par le spectaculaire col du Tizi n'Tichka (2 260 m) jusqu'au ksar de terre d'Aït Ben Haddou, classé à l'UNESCO et décor de nombreux films. Continuez jusqu'à Ouarzazate, la « porte du désert », avant de rentrer à Marrakech.",
    highlights: [
      "Col du Tizi n'Tichka (2 260 m)",
      "Ksar d'Aït Ben Haddou (UNESCO)",
      "Kasbah de Taourirt",
      "Studios de cinéma de Ouarzazate",
      "Villages du Haut Atlas",
    ],
    itinerary: [
      { day: "Tôt le matin", title: "Col du Tizi n'Tichka", description: "Prise en charge à Marrakech et montée à travers villages berbères et lacets jusqu'au plus haut col routier du Haut Atlas." },
      { day: "Fin de matinée", title: "Aït Ben Haddou (UNESCO)", description: "Traversée de la rivière et montée à travers les kasbahs de terre du ksar jusqu'au grenier, au sommet, pour la vue." },
      { day: "Après-midi", title: "Ouarzazate", description: "Déjeuner, puis la kasbah de Taourirt et visite facultative des studios de cinéma." },
      { day: "Soir", title: "Retour à Marrakech", description: "Retour par le col et dépose à votre hébergement." },
    ],
    faqs: [
      { question: "Est-ce une longue journée ?", answer: "Oui — environ 4 heures de route dans chaque sens. Pour profiter du sud plus tranquillement, voyez nos circuits désert de 3 jours." },
      { question: "Puis-je continuer vers le désert ?", answer: "Oui — cet itinéraire est la première étape de nos circuits Marrakech – Merzouga." },
      { question: "Quel est le prix ?", answer: "Le prix dépend de votre groupe et du véhicule — envoyez-nous une demande sur WhatsApp." },
    ],
  },
  {
    slug: "montgolfiere-lever-soleil",
    image: "/images/hotAirBalloon.jpg",
    duration: "Demi-journée",
    fromPrice: "Dès €175",
    title: "Vol en montgolfière au lever du soleil à Marrakech",
    short: "Lever du soleil sur la palmeraie et l'Atlas, puis petit-déjeuner berbère",
    intro: "Une prise en charge avant l'aube vous emmène au site de décollage, hors de Marrakech, pour un vol en montgolfière au lever du soleil au-dessus de la palmeraie et des contreforts de l'Atlas, suivi d'un petit-déjeuner berbère traditionnel à l'atterrissage.",
    highlights: [
      "Vol au lever du soleil",
      "Vue sur la palmeraie et l'Atlas",
      "Petit-déjeuner berbère traditionnel",
      "Prise en charge avant l'aube",
      "Retour en fin de matinée",
    ],
    itinerary: [
      { day: "Avant l'aube", title: "Prise en charge à Marrakech", description: "Votre chauffeur vient vous chercher à votre riad ou hôtel et vous conduit au site de décollage." },
      { day: "Lever du soleil", title: "Vol en montgolfière", description: "Assistez au gonflage et au décollage, puis survolez villages, palmeraies et contreforts de l'Atlas au lever du jour." },
      { day: "Matin", title: "Petit-déjeuner berbère", description: "Petit-déjeuner avec thé à la menthe, pain et spécialités locales après l'atterrissage." },
      { day: "Fin de matinée", title: "Retour à Marrakech", description: "Retour à votre hébergement à temps pour profiter du reste de la journée." },
    ],
    faqs: [
      { question: "Le vol dépend-il de la météo ?", answer: "Oui. Les vols dépendent du vent et de la météo ; l'opérateur peut reporter ou annuler pour votre sécurité." },
      { question: "Comment s'habiller ?", answer: "En couches chaudes — les matinées sont fraîches avant le lever du soleil, même en été." },
      { question: "Quel est le prix ?", answer: "Les vols sont assurés par des opérateurs agréés ; demandez-nous les prix et disponibilités sur WhatsApp." },
    ],
  },
  {
    slug: "quad-dromadaire-palmeraie",
    image: "/images/quadBiking.jpg",
    duration: "Demi-journée",
    fromPrice: "Dès €35",
    title: "Quad et dromadaire dans la palmeraie de Marrakech",
    short: "Pistes en quad et balade à dromadaire entre les palmiers, aux portes de la ville",
    intro: "Échangez les souks contre les pistes de la Palmeraie, l'immense palmeraie de Marrakech. Pilotez un quad sur les pistes et à travers les villages berbères, puis place à une balade plus paisible à dos de dromadaire entre les palmiers, avec une pause thé à la menthe.",
    highlights: [
      "Balade guidée en quad",
      "Dromadaire entre les palmiers",
      "Pause thé berbère",
      "Tout près de la ville",
      "Le matin ou l'après-midi",
    ],
    itinerary: [
      { day: "Départ", title: "Prise en charge à Marrakech", description: "Votre chauffeur vous conduit à la Palmeraie, à environ 20 minutes de la médina." },
      { day: "Activité 1", title: "Quad", description: "Briefing sécurité et équipement, puis balade guidée en quad sur les pistes de la palmeraie." },
      { day: "Pause", title: "Thé dans une maison berbère", description: "Thé à la menthe et pause dans une maison locale." },
      { day: "Activité 2", title: "Dromadaire et retour", description: "Balade tranquille à dos de dromadaire entre les palmiers, puis retour à votre hébergement." },
    ],
    faqs: [
      { question: "Faut-il un permis pour le quad ?", answer: "Aucun permis n'est nécessaire pour les balades guidées ; l'opérateur fournit un briefing et un casque." },
      { question: "Les enfants peuvent-ils participer ?", answer: "Les enfants montent généralement en passagers ou sur des quads plus petits, selon les règles de l'opérateur." },
      { question: "Quel est le prix ?", answer: "Le prix dépend de la durée et de votre groupe — demandez-nous sur WhatsApp." },
    ],
  },
  {
    slug: "marrakech-essaouira-journee",
    image: "/images/essaouiraPort.jpg",
    duration: "Journée complète",
    fromPrice: "€120",
    title: "Excursion d'une journée de Marrakech à Essaouira",
    short: "Découvrez la charmante ville côtière d'Essaouira",
    intro: "Une journée reposante loin de la chaleur et de l'agitation de Marrakech, sur la côte atlantique, dans la médina blanche et balayée par les vents d'Essaouira et son port de pêche.",
    highlights: [
      "Médina et remparts d'Essaouira classés à l'UNESCO",
      "Le port de pêche en activité et ses grillades de poisson frais",
      "Temps libre pour flâner dans les souks et les galeries d'art",
      "Transport privé aller-retour depuis Marrakech en une journée",
    ],
    itinerary: [
      { day: "Journée complète", title: "Marrakech → Essaouira → Marrakech", description: "Départ de Marrakech le matin pour un trajet d'environ 2h30 vers Essaouira. Passez la journée à explorer la médina classée à l'UNESCO, le port de pêche et les remparts surplombant l'Atlantique, avec du temps libre pour déjeuner et flâner dans les souks, avant de retourner à Marrakech en soirée." },
    ],
    faqs: [
      { question: "Combien de temps dure le trajet entre Marrakech et Essaouira ?", answer: "Environ 2h30 dans chaque sens sur une bonne route directe — tout à fait confortable pour une excursion d'une journée." },
      { question: "Le déjeuner est-il inclus ?", answer: "Le déjeuner n'est pas inclus dans le prix fixe, mais votre chauffeur peut vous recommander et vous emmener dans un restaurant de fruits de mer réputé près du port." },
      { question: "Puis-je passer la nuit à Essaouira au lieu de rentrer le jour même ?", answer: "Oui — indiquez-le simplement lors de la réservation et nous transformerons l'excursion en transfert privé aller simple." },
    ],
  },
];

export function getExcursion(slug: string): Excursion | undefined {
  return excursions.find(e => e.slug === slug);
}

export const featuredExcursions = excursions.filter(e => e.featured);
