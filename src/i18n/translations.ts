export type Locale = "fr" | "en" | "ar" | "it";
export const LOCALES: Locale[] = ["en", "fr", "it", "ar"];
export const LOCALE_NAMES: Record<Locale, string> = { fr: "Français", en: "English", ar: "العربية", it: "Italiano" };
export const LOCALE_LABELS: Record<Locale, string> = { fr: "FR", en: "EN", ar: "AR", it: "IT" };

type Slide = { script: string; titleLine1: string; titleLine2: string; desc: string };
type Point = { label: string; desc: string };
type Review = { name: string; text: string };

export type T = {
  dir: "ltr" | "rtl";
  nav: {
    transfers: string; tours: string; excursions: string;
    gallery: string; contact: string; bookNow: string; whatsapp: string; language: string;
  };
  hero: {
    slides: [Slide, Slide];
    cta1: string; cta2: string;
  };
  searchBar: {
    tabs: {
      circuit: { label: string; sub: string };
      transfert: { label: string; sub: string };
      excursion: { label: string; sub: string };
    };
    placeholders: { allDurations: string; departure: string; destination: string; allCities: string };
    buttons: { circuit: string; transfert: string; excursion: string };
  };
  stats: { transferRoutes: string; privateTours: string; excursions: string; destinations: string };
  transfers: {
    script: string; title: string; subtitle: string;
    cardFrom: string; cardOrigin: string; cardFixed: string; seeAll: string;
  };
  tours: {
    script: string; title: string; subtitle: string;
    cardLabel: string; cardView: string; seeAll: string;
  };
  excursions: {
    script: string; title: string; subtitle: string;
    cardLabel: string; cardView: string; seeAll: string;
  };
  destinations: { script: string; title: string; subtitle: string; viewAll: string };
  about: {
    eyebrow: string; title: string; desc: string; cta: string; caption: string;
    points: [Point, Point, Point, Point];
  };
  testimonials: { eyebrow: string; title: string; reviews: [Review, Review, Review] };
  cta: { title: string; subtitle: string; button: string };
  booking: {
    label: string; fixedPrice: string; submit: string; waNote: string;
    moreOptions: string; hideOptions: string;
    fields: {
      name: string; date: string; time: string; passengers: string; vehicle: string;
      pickup: string; dropoff: string; flight: string; extras: string; notes: string;
    };
    placeholders: {
      name: string; pickup: string; dropoff: string; flight: string;
      notes: string; vehicleChoice: string;
    };
    extras: { sim: string; simHint: string; child: string; childHint: string; baby: string; babyHint: string };
    errors: { name: string; date: string; time: string };
  };
  footer: {
    tagline: string; popularTransfers: string; excursionsTitle: string; toursTitle: string;
    helpTitle: string; viewAll: string; instagram: string; whatsapp: string;
    available: string; rights: string;
    helpLinks: { gallery: string; contact: string; bookNow: string };
    transferLinks: string[]; excursionLinks: string[]; tourLinks: string[];
  };
  pages: {
    transfers: {
      heroTitle: string; heroSubtitle: string;
      guarantees: [string, string, string, string];
      cardFrom: string; cardArrival: string; cardPrice: string; bookBtn: string;
      ctaScript: string; ctaSubtitle: string; ctaBtn: string;
      categories: { all: string; airport: string; city: string; coast: string; desert: string };
      detail: {
        privateTransfer: string; bookTransfer: string; backToTransfers: string;
        labelDuration: string; labelDistance: string; labelFrom: string; labelTo: string; labelPrice: string;
        included: string[]; notIncluded: string[];
        related: string; ctaTitle: string; ctaDesc: string; quoteDesc: string;
      };
    };
    tours: {
      heroTitle: string; heroSubtitle: string;
      ctaScript: string; ctaSubtitle: string; ctaBtn: string;
      filter: { all: string; court: string; moyen: string; long: string };
      detail: {
        privateTour: string; getQuote: string; quoteDesc: string;
        bookTour: string; backToTours: string;
        itinerary: string; highlights: string; gallery: string; faq: string;
        ctaTitle: string; ctaDesc: string;
        similarTours: string;
      };
    };
    excursions: {
      heroTitle: string; heroSubtitle: string;
      guarantees: [string, string, string, string];
      from: string;
      filter: { all: string; journee: string; demijournee: string };
      ctaScript: string; ctaSubtitle: string; ctaBtn: string;
      detail: {
        privateExcursion: string; getQuote: string; quoteDesc: string;
        bookExcursion: string; backToExcursions: string;
        itinerary: string; highlights: string; faq: string;
        ctaTitle: string; ctaDesc: string;
        overview: string; fromMarrakech: string;
        perGroup: string; priceByGroup: string;
        included: string; notIncluded: string;
        includedItems: [string, string, string, string];
        notIncludedItems: [string, string, string, string];
        sidebarItems: [string, string, string];
        alsoDiscover: string; home: string;
        factDuration: string; factDeparture: string;
        factGroup: string; factLanguage: string;
        factGroupValue: string; factLanguageValue: string;
      };
    };
    gallery: {
      heroScript: string; heroTitle: string; heroSubtitle: string;
      statsPhotos: string; statsGuests: string; statsDest: string;
      ctaScript: string; ctaSubtitle: string; ctaBtn: string;
      homeScript: string; homeTitle: string; homeSubtitle: string; viewAll: string;
    };
  };
};

/* ─── FRANÇAIS ───────────────────────────────────── */
const FR: T = {
  dir: "ltr",
  nav: {
    transfers: "Transferts", tours: "Tours", excursions: "Excursions",
    gallery: "Galerie", contact: "Contact", bookNow: "Réserver", whatsapp: "WhatsApp", language: "Langue",
  },
  hero: {
    slides: [
      { script: "Aventure & Désert", titleLine1: "L'aventure ultime", titleLine2: "au cœur du Sahara",
        desc: "Partez à l'assaut des dunes d'or à bord d'un 4x4 privé et vivez l'expérience inoubliable du grand désert marocain." },
      { script: "Atlas & Kasbahs", titleLine1: "Les trésors cachés", titleLine2: "de l'Atlas marocain",
        desc: "Des kasbahs dorées aux sommets enneigés de l'Atlas, découvrez un Maroc authentique et grandiose à votre propre rythme." },
    ],
    cta1: "Explorer nos voyages", cta2: "Réserver maintenant",
  },
  searchBar: {
    tabs: {
      circuit:   { label: "Circuit",   sub: "De ville en ville" },
      transfert: { label: "Transfert", sub: "Un trajet, simplement" },
      excursion: { label: "Excursion", sub: "Une journée d'évasion" },
    },
    placeholders: { allDurations: "Toutes durées", departure: "Ville de départ", destination: "Destination", allCities: "Toutes les villes" },
    buttons: { circuit: "Voir les circuits", transfert: "Voir les prix", excursion: "Voir les excursions" },
  },
  stats: { transferRoutes: "Routes de transfert", privateTours: "Tours privés", excursions: "Excursions", destinations: "Destinations" },
  transfers: {
    script: "Depuis Marrakech", title: "Transferts Populaires", subtitle: "Prix fixes et tout compris depuis Marrakech — sans compteur, sans surprise.",
    cardFrom: "Dès", cardOrigin: "Marrakech →", cardFixed: "Prix fixe", seeAll: "Voir tous les transferts",
  },
  tours: {
    script: "Tours Privés", title: "Nos Meilleurs Tours", subtitle: "Circuits en chauffeur privé à la journée ou multi-jours — prix fixes, sans surprises.",
    cardLabel: "Tour Privé", cardView: "Voir le tour", seeAll: "Voir tous les tours",
  },
  excursions: {
    script: "Depuis Marrakech", title: "Excursions Privées", subtitle: "Cascades, désert, montagne et côte atlantique — avec votre chauffeur privé, partez à votre rythme.",
    cardLabel: "Excursion Privée", cardView: "Voir", seeAll: "Voir toutes les excursions",
  },
  destinations: {
    script: "Depuis Marrakech", title: "Nos Destinations", subtitle: "Explorez des lieux extraordinaires au cœur du Maroc — depuis Marrakech, à votre rythme.",
    viewAll: "Voir tout",
  },
  about: {
    eyebrow: "POURQUOI CHOISIR TRANSFER MAROC ?",
    title: "Une agence de voyage passionnée par l'exploration",
    desc: "Chez Tour Me Morocco, nous transformons vos rêves en réalité. Que vous recherchiez une aventure dans le Sahara, une immersion dans la médina de Fès ou une escapade à Chefchaouen, nous vous offrons des voyages sur mesure avec un service d'exception.",
    cta: "En savoir plus",
    caption: "Le Maroc\nvous attend...",
    points: [
      { label: "Expertise et expérience", desc: "Plus de 10 ans dans le voyage" },
      { label: "Offres sur mesure",        desc: "Des voyages adaptés à vos envies" },
      { label: "Service client dédié",     desc: "Une équipe à votre écoute" },
      { label: "Paiement sécurisé",        desc: "Voyagez en toute confiance" },
    ],
  },
  testimonials: {
    eyebrow: "TÉMOIGNAGES",
    title: "Ils ont vécu une expérience inoubliable",
    reviews: [
      { name: "Sophie L.", text: "« Une agence au top ! Mon voyage au Maroc a été parfait, une organisation impeccable et une équipe très professionnelle. Je recommande vivement ! »" },
      { name: "Karim B.",  text: "« Tour Me Morocco a transformé notre rêve en réalité. Un service exceptionnel et des souvenirs pour la vie. »" },
      { name: "Nadia T.",  text: "« Une expérience magique ! Je remercie toute l'équipe pour leur professionnalisme et leur bienveillance. »" },
    ],
  },
  cta: { title: "Prêt pour votre prochaine aventure ?", subtitle: "Partez à la découverte du Maroc avec Tour Me Morocco", button: "Réserver maintenant" },
  booking: {
    label: "Réservation", fixedPrice: "Prix fixe :", submit: "Réserver", waNote: "Votre demande sera transmise via WhatsApp.",
    moreOptions: "Dépose, vol, extras & notes", hideOptions: "Masquer les options",
    fields: {
      name: "Nom complet *", date: "Date *", time: "Heure *", passengers: "Passagers", vehicle: "Véhicule",
      pickup: "Lieu de prise en charge", dropoff: "Lieu de dépose", flight: "N° de vol", extras: "Extras", notes: "Notes",
    },
    placeholders: {
      name: "Votre nom et prénom", pickup: "Hôtel, riad, adresse...", dropoff: "Destination, hôtel, adresse...",
      flight: "Ex: AT 622", notes: "Demandes spéciales, bagages volumineux...", vehicleChoice: "Au choix",
    },
    extras: { sim: "Carte SIM locale", simHint: "Connexion internet Maroc", child: "Siège enfant", childHint: "3 – 12 ans", baby: "Siège bébé", babyHint: "0 – 3 ans" },
    errors: { name: "Veuillez entrer votre nom complet.", date: "Veuillez choisir une date.", time: "Veuillez indiquer l'heure souhaitée." },
  },
  footer: {
    tagline: "Votre partenaire de confiance pour explorer le Maroc avec style et confort.",
    popularTransfers: "Transferts Populaires", excursionsTitle: "Nos Excursions", toursTitle: "Tours Privés",
    helpTitle: "Informations", viewAll: "Voir tout →", instagram: "Instagram", whatsapp: "WhatsApp",
    available: "Disponible 24h/24 · 7j/7", rights: "Tour Me Morocco. Tous droits réservés.",
    helpLinks: { gallery: "Galerie Photos", contact: "Nous Contacter", bookNow: "Réserver" },
    transferLinks: ["Marrakech → Casablanca","Marrakech → Essaouira","Marrakech → Agadir","Marrakech → Ouarzazate","Marrakech → Aéroport RAK","Marrakech → Fès"],
    excursionLinks: ["Vallée de l'Ourika","Cascades d'Ouzoud","Désert d'Agafay","Imlil & Toubkal"],
    tourLinks: ["Marrakech → Essaouira","Chefchaouen Day Trip","Fès & Chefchaouen","Circuit Sahara 9 Jours"],
  },
  pages: {
    transfers: {
      heroTitle: "Transferts Privés",
      heroSubtitle: "Chauffeur privé dédié, prix fixe tout inclus. Aucune surprise à l'arrivée.",
      guarantees: ["Prix fixe tout inclus", "Chauffeur privé", "Retour au même tarif", "Disponible 24h/24"],
      cardFrom: "Départ", cardArrival: "Arrivée", cardPrice: "Prix aller", bookBtn: "Réserver",
      ctaScript: "Votre destination n'est pas listée ?",
      ctaSubtitle: "Contactez-nous pour organiser votre transfert sur mesure depuis Marrakech.",
      ctaBtn: "Nous contacter",
      categories: { all: "Tous", airport: "Aéroports", city: "Villes", coast: "Côte & Sud", desert: "Désert & Nature" },
      detail: {
        privateTransfer: "Transfert Privé",
        bookTransfer: "Réserver ce transfert",
        backToTransfers: "← Retour aux transferts",
        labelDuration: "Durée", labelDistance: "Distance", labelFrom: "Départ", labelTo: "Arrivée", labelPrice: "Prix fixe",
        included: ["Chauffeur privé dédié", "Climatisation & Wi-Fi", "Prise en charge à l'adresse", "Prix tout compris"],
        notIncluded: ["Pourboire chauffeur (optionnel)"],
        related: "Autres transferts depuis Marrakech",
        ctaTitle: "Prêt à partir ?",
        ctaDesc: "Prix fixe tout inclus, sans compteur ni surprise.",
        quoteDesc: "Confirmez votre réservation via WhatsApp — réponse en moins d'une heure.",
      },
    },
    tours: {
      heroTitle: "Tours Privés depuis Marrakech",
      heroSubtitle: "Circuits en chauffeur privé à travers le Maroc — excursions à la journée, multi-jours et bien plus.",
      filter: { all: "Tous", court: "1 – 3 jours", moyen: "4 – 7 jours", long: "8 jours et +" },
      ctaScript: "Sur mesure",
      ctaSubtitle: "Vous ne trouvez pas ce que vous cherchez ? Chaque tour peut être personnalisé — contactez-nous pour un itinéraire sur mesure.",
      ctaBtn: "Réserver un tour",
      detail: {
        privateTour: "Tour Privé", getQuote: "Demander un devis",
        quoteDesc: "Chaque tour est tarifé selon vos dates et la taille de votre groupe. Envoyez une demande et nous vous répondrons avec un devis fixe sous une heure.",
        bookTour: "Réserver ce tour", backToTours: "← Retour aux tours",
        itinerary: "Programme", highlights: "Points forts du tour",
        gallery: "Galerie", faq: "Questions fréquentes",
        ctaTitle: "Prêt à explorer ?", ctaDesc: "Contactez-nous pour obtenir un devis personnalisé pour ce tour.",
        similarTours: "Tours similaires",
      },
    },
    excursions: {
      heroTitle: "Excursions Privées",
      heroSubtitle: "Des excursions sur mesure depuis Marrakech — cascades, désert, montagne, côte atlantique. Chauffeur privé dédié, départ à votre rythme.",
      guarantees: ["Chauffeur privé", "Prix fixe tout inclus", "Départ à votre heure", "Disponible 24h/24"],
      from: "Dès",
      filter: { all: "Toutes", journee: "Journée complète", demijournee: "Demi-journée" },
      ctaScript: "Sur mesure",
      ctaSubtitle: "Vous cherchez une excursion personnalisée ? Contactez-nous et nous organisons votre journée idéale depuis Marrakech.",
      ctaBtn: "Réserver une excursion",
      detail: {
        privateExcursion: "Excursion Privée", getQuote: "Demander un devis",
        quoteDesc: "Chaque excursion est tarifée selon la taille de votre groupe. Envoyez une demande et nous vous répondrons avec un devis fixe sous une heure.",
        bookExcursion: "Réserver cette excursion", backToExcursions: "← Retour aux excursions",
        itinerary: "Programme de la journée", highlights: "Points forts",
        faq: "Questions fréquentes",
        ctaTitle: "Prêt pour l'aventure ?", ctaDesc: "Contactez-nous pour un devis personnalisé pour cette excursion.",
        overview: "Vue d'ensemble", fromMarrakech: "Depuis Marrakech",
        perGroup: "par groupe · véhicule privé", priceByGroup: "Prix selon groupe et véhicule",
        included: "Inclus", notIncluded: "Non inclus",
        includedItems: ["Chauffeur privé tout au long du trajet", "Prise en charge depuis votre hébergement", "Eau minérale à bord", "Guide local parlant français, italien, anglais et arabe"],
        notIncludedItems: ["Déjeuner et dîner", "Billets d'entrée des sites", "Pourboires (au bon vouloir)", "Activités optionnelles"],
        sidebarItems: ["Prise en charge depuis votre hôtel", "Réponse en moins d'une heure", "Groupe privé · jusqu'à 7 personnes"],
        alsoDiscover: "À découvrir aussi", home: "Accueil",
        factDuration: "Durée", factDeparture: "Départ", factGroup: "Groupe", factLanguage: "Langue",
        factGroupValue: "Privé · jusqu'à 7", factLanguageValue: "FR · EN · AR · IT",
      },
    },
    gallery: {
      heroScript: "Nos moments partagés",
      heroTitle: "Galerie Photos",
      heroSubtitle: "Destinations traversées, clients rencontrés, routes empruntées — chaque photo raconte une histoire vraie.",
      statsPhotos: "Photos", statsGuests: "Clients", statsDest: "Destinations",
      ctaScript: "Votre voyage, vos souvenirs",
      ctaSubtitle: "Rejoignez nos clients et créez vos propres moments inoubliables au Maroc.",
      ctaBtn: "Réserver maintenant",
      homeScript: "Ils nous ont fait confiance",
      homeTitle: "Moments partagés",
      homeSubtitle: "Chaque photo raconte une aventure vécue par nos clients au cœur du Maroc.",
      viewAll: "Voir toute la galerie",
    },
  },
};

/* ─── ENGLISH ────────────────────────────────────── */
const EN: T = {
  dir: "ltr",
  nav: {
    transfers: "Transfers", tours: "Tours", excursions: "Excursions",
    gallery: "Gallery", contact: "Contact", bookNow: "Book Now", whatsapp: "WhatsApp", language: "Language",
  },
  hero: {
    slides: [
      { script: "Desert Adventure", titleLine1: "The ultimate adventure", titleLine2: "in the heart of the Sahara",
        desc: "Conquer the golden dunes in a private 4x4 and live the unforgettable experience of the great Moroccan desert." },
      { script: "Atlas & Kasbahs", titleLine1: "The hidden treasures", titleLine2: "of the Moroccan Atlas",
        desc: "From golden kasbahs to the snow-capped Atlas peaks, discover an authentic and majestic Morocco at your own pace." },
    ],
    cta1: "Explore our tours", cta2: "Book now",
  },
  searchBar: {
    tabs: {
      circuit:   { label: "Circuit",   sub: "City to city" },
      transfert: { label: "Transfer",  sub: "One ride, simply" },
      excursion: { label: "Excursion", sub: "A day of escape" },
    },
    placeholders: { allDurations: "All durations", departure: "Departure city", destination: "Destination", allCities: "All cities" },
    buttons: { circuit: "See circuits", transfert: "See prices", excursion: "See excursions" },
  },
  stats: { transferRoutes: "Transfer Routes", privateTours: "Private Tours", excursions: "Excursions", destinations: "Destinations" },
  transfers: {
    script: "From Marrakech", title: "Popular Transfer Routes", subtitle: "Fixed all-inclusive prices from Marrakech — no meters, no surprises.",
    cardFrom: "From", cardOrigin: "Marrakech →", cardFixed: "Fixed price", seeAll: "See all transfers",
  },
  tours: {
    script: "Private Tours", title: "Our Best Tours", subtitle: "Chauffeur-driven private day trips and multi-day circuits — fixed prices, no surprises.",
    cardLabel: "Private Tour", cardView: "View Tour", seeAll: "See all tours",
  },
  excursions: {
    script: "From Marrakech", title: "Private Excursions", subtitle: "Waterfalls, desert, mountain and Atlantic coast — with your private driver, go at your own pace.",
    cardLabel: "Private Excursion", cardView: "View", seeAll: "See all excursions",
  },
  destinations: {
    script: "From Marrakech", title: "Our Destinations", subtitle: "Explore extraordinary places in the heart of Morocco — from Marrakech, at your own pace.",
    viewAll: "View all",
  },
  about: {
    eyebrow: "WHY CHOOSE TRANSFER MAROC?",
    title: "A travel agency passionate about exploration",
    desc: "At Tour Me Morocco, we turn your dreams into reality. Whether you're seeking a Sahara adventure, an immersion in the Fès medina or an escape to Chefchaouen, we offer tailor-made journeys with exceptional service.",
    cta: "Learn more",
    caption: "Morocco\nawaits you...",
    points: [
      { label: "Expertise & experience", desc: "Over 10 years in travel" },
      { label: "Tailor-made packages",   desc: "Trips adapted to your wishes" },
      { label: "Dedicated support",      desc: "A team here for you" },
      { label: "Secure payment",         desc: "Travel with confidence" },
    ],
  },
  testimonials: {
    eyebrow: "TESTIMONIALS",
    title: "They lived an unforgettable experience",
    reviews: [
      { name: "Sophie L.", text: "« A top agency! My trip to Morocco was perfect — impeccable organisation and a very professional team. Highly recommended! »" },
      { name: "Karim B.",  text: "« Tour Me Morocco turned our dream into reality. Exceptional service and memories for life. »" },
      { name: "Nadia T.",  text: "« A magical experience! I thank the whole team for their professionalism and kindness. »" },
    ],
  },
  cta: { title: "Ready for your next adventure?", subtitle: "Discover Morocco with Tour Me Morocco", button: "Book now" },
  booking: {
    label: "Booking", fixedPrice: "Fixed price:", submit: "Book", waNote: "Your request will be sent via WhatsApp.",
    moreOptions: "Drop-off, flight, extras & notes", hideOptions: "Hide options",
    fields: {
      name: "Full name *", date: "Date *", time: "Time *", passengers: "Passengers", vehicle: "Vehicle",
      pickup: "Pick-up location", dropoff: "Drop-off location", flight: "Flight number", extras: "Extras", notes: "Notes",
    },
    placeholders: {
      name: "Your full name", pickup: "Hotel, riad, address...", dropoff: "Destination, hotel, address...",
      flight: "e.g. AT 622", notes: "Special requests, large luggage...", vehicleChoice: "Driver's choice",
    },
    extras: { sim: "Local SIM card", simHint: "Morocco internet", child: "Child seat", childHint: "3 – 12 yrs", baby: "Baby seat", babyHint: "0 – 3 yrs" },
    errors: { name: "Please enter your full name.", date: "Please choose a date.", time: "Please indicate the desired time." },
  },
  footer: {
    tagline: "Your trusted partner for exploring Morocco in style and comfort.",
    popularTransfers: "Popular Transfers", excursionsTitle: "Our Excursions", toursTitle: "Private Tours",
    helpTitle: "Information", viewAll: "View All →", instagram: "Instagram", whatsapp: "WhatsApp",
    available: "Available 24/7", rights: "Tour Me Morocco. All rights reserved.",
    helpLinks: { gallery: "Photo Gallery", contact: "Contact Us", bookNow: "Book Now" },
    transferLinks: ["Marrakech → Casablanca","Marrakech → Essaouira","Marrakech → Agadir","Marrakech → Ouarzazate","Marrakech Airport Transfer","Marrakech → Fes"],
    excursionLinks: ["Ourika Valley","Ouzoud Waterfalls","Agafay Desert","Imlil & Toubkal"],
    tourLinks: ["Marrakech → Essaouira","Chefchaouen Day Trip","Fes & Chefchaouen","9-Day Sahara Tour"],
  },
  pages: {
    transfers: {
      heroTitle: "Private Transfers",
      heroSubtitle: "Dedicated private driver, all-inclusive fixed price. No surprises on arrival.",
      guarantees: ["All-inclusive fixed price", "Private driver", "Same price return", "Available 24/7"],
      cardFrom: "Departure", cardArrival: "Arrival", cardPrice: "One-way price", bookBtn: "Book",
      ctaScript: "Can't find your destination?",
      ctaSubtitle: "Contact us to arrange your custom transfer from Marrakech.",
      ctaBtn: "Contact us",
      categories: { all: "All", airport: "Airports", city: "Cities", coast: "Coast & South", desert: "Desert & Nature" },
      detail: {
        privateTransfer: "Private Transfer",
        bookTransfer: "Book this transfer",
        backToTransfers: "← Back to all transfers",
        labelDuration: "Duration", labelDistance: "Distance", labelFrom: "From", labelTo: "To", labelPrice: "Fixed price",
        included: ["Dedicated private driver", "A/C & Wi-Fi", "Pick-up from your address", "All-inclusive price"],
        notIncluded: ["Driver tip (optional)"],
        related: "Other transfers from Marrakech",
        ctaTitle: "Ready to go?",
        ctaDesc: "Fixed all-inclusive price, no meter, no surprises.",
        quoteDesc: "Confirm your booking via WhatsApp — reply within the hour.",
      },
    },
    tours: {
      heroTitle: "Private Tours from Marrakech",
      heroSubtitle: "Chauffeur-driven private tours across Morocco — day trips, multi-day circuits, and everything in between.",
      filter: { all: "All", court: "1 – 3 days", moyen: "4 – 7 days", long: "8 days +" },
      ctaScript: "Tailor-made",
      ctaSubtitle: "Can't find what you're looking for? Every tour can be customised — contact us for a personalised itinerary.",
      ctaBtn: "Book a tour",
      detail: {
        privateTour: "Private Tour", getQuote: "Get a Quote",
        quoteDesc: "Every tour is priced for your exact dates and group size. Send an enquiry and we'll come back with a fixed quote within the hour.",
        bookTour: "Book this tour", backToTours: "← Back to all tours",
        itinerary: "Itinerary", highlights: "Tour Highlights",
        gallery: "Gallery", faq: "Frequently Asked Questions",
        ctaTitle: "Ready to explore?", ctaDesc: "Contact us now to get a personalised quote for this tour.",
        similarTours: "Similar Tours",
      },
    },
    excursions: {
      heroTitle: "Private Excursions",
      heroSubtitle: "Tailor-made excursions from Marrakech — waterfalls, desert, mountains, Atlantic coast. Dedicated private driver, leave at your own pace.",
      guarantees: ["Private driver", "All-inclusive fixed price", "Depart at your time", "Available 24/7"],
      from: "From",
      filter: { all: "All", journee: "Full day", demijournee: "Half day" },
      ctaScript: "Tailor-made",
      ctaSubtitle: "Looking for a personalised excursion? Contact us and we'll plan your ideal day from Marrakech.",
      ctaBtn: "Book an excursion",
      detail: {
        privateExcursion: "Private Excursion", getQuote: "Get a Quote",
        quoteDesc: "Every excursion is priced for your group size. Send an enquiry and we'll come back with a fixed quote within the hour.",
        bookExcursion: "Book this excursion", backToExcursions: "← Back to all excursions",
        itinerary: "Day Programme", highlights: "Highlights",
        faq: "Frequently Asked Questions",
        ctaTitle: "Ready for the adventure?", ctaDesc: "Contact us for a personalised quote for this excursion.",
        overview: "Overview", fromMarrakech: "From Marrakech",
        perGroup: "per group · private vehicle", priceByGroup: "Price per group and vehicle",
        included: "Included", notIncluded: "Not included",
        includedItems: ["Private driver throughout", "Pick-up from your accommodation", "Bottled water on board", "Local guide speaking French, Italian, English and Arabic"],
        notIncludedItems: ["Lunch and dinner", "Site entrance fees", "Tips (discretionary)", "Optional activities"],
        sidebarItems: ["Pick-up from your hotel", "Response in under one hour", "Private group · up to 7 people"],
        alsoDiscover: "Also discover", home: "Home",
        factDuration: "Duration", factDeparture: "Departure", factGroup: "Group", factLanguage: "Language",
        factGroupValue: "Private · up to 7", factLanguageValue: "FR · EN · AR · IT",
      },
    },
    gallery: {
      heroScript: "Our shared moments",
      heroTitle: "Photo Gallery",
      heroSubtitle: "Destinations crossed, clients met, roads taken — each photo tells a true story.",
      statsPhotos: "Photos", statsGuests: "Clients", statsDest: "Destinations",
      ctaScript: "Your journey, your memories",
      ctaSubtitle: "Join our clients and create your own unforgettable moments in Morocco.",
      ctaBtn: "Book now",
      homeScript: "They trusted us",
      homeTitle: "Shared Moments",
      homeSubtitle: "Every photo tells an adventure lived by our clients across the heart of Morocco.",
      viewAll: "View full gallery",
    },
  },
};

/* ─── ARABIC ─────────────────────────────────────── */
const AR: T = {
  dir: "rtl",
  nav: {
    transfers: "التنقلات", tours: "الجولات", excursions: "الرحلات",
    gallery: "المعرض", contact: "اتصل بنا", bookNow: "احجز الآن", whatsapp: "واتساب", language: "اللغة",
  },
  hero: {
    slides: [
      { script: "مغامرة الصحراء", titleLine1: "المغامرة الكبرى", titleLine2: "في قلب الصحراء الكبرى",
        desc: "اقتحم الكثبان الذهبية على متن سيارة 4×4 خاصة وعش تجربة لا تُنسى في قلب الصحراء المغربية العظيمة." },
      { script: "الأطلس والقصبات", titleLine1: "الكنوز الخفية", titleLine2: "لجبال الأطلس المغربية",
        desc: "من القصبات الذهبية إلى قمم الأطلس المكسوة بالثلوج، اكتشف مغربًا أصيلًا وعظيمًا بإيقاعك الخاص." },
    ],
    cta1: "استكشف رحلاتنا", cta2: "احجز الآن",
  },
  searchBar: {
    tabs: {
      circuit:   { label: "مسار",   sub: "من مدينة لأخرى" },
      transfert: { label: "نقل",    sub: "رحلة واحدة ببساطة" },
      excursion: { label: "رحلة",   sub: "يوم من المغامرة" },
    },
    placeholders: { allDurations: "جميع المدد", departure: "مدينة المغادرة", destination: "الوجهة", allCities: "جميع المدن" },
    buttons: { circuit: "عرض المسارات", transfert: "عرض الأسعار", excursion: "عرض الرحلات" },
  },
  stats: { transferRoutes: "مسارات النقل", privateTours: "جولات خاصة", excursions: "رحلات يومية", destinations: "وجهات" },
  transfers: {
    script: "من مراكش", title: "مسارات النقل الشهيرة", subtitle: "أسعار ثابتة وشاملة من مراكش — بدون عداد، بدون مفاجآت.",
    cardFrom: "من", cardOrigin: "مراكش ←", cardFixed: "سعر ثابت", seeAll: "عرض جميع النقلات",
  },
  tours: {
    script: "جولات خاصة", title: "أفضل جولاتنا", subtitle: "رحلات يومية وجولات متعددة الأيام بسائق خاص — أسعار ثابتة، بدون مفاجآت.",
    cardLabel: "جولة خاصة", cardView: "عرض الجولة", seeAll: "عرض جميع الجولات",
  },
  excursions: {
    script: "من مراكش", title: "رحلات خاصة", subtitle: "الشلالات، الصحراء، الجبال والساحل الأطلسي — مع سائقك الخاص، انطلق بإيقاعك.",
    cardLabel: "رحلة خاصة", cardView: "عرض", seeAll: "عرض جميع الرحلات",
  },
  destinations: {
    script: "من مراكش", title: "وجهاتنا", subtitle: "اكتشف أماكن رائعة في قلب المغرب — من مراكش، بإيقاعك الخاص.",
    viewAll: "عرض الكل",
  },
  about: {
    eyebrow: "لماذا تختار تور كم موروكو؟",
    title: "وكالة سفر شغوفة بالاستكشاف",
    desc: "في Tour Me Morocco، نحول أحلامك إلى واقع. سواء كنت تبحث عن مغامرة في الصحراء، أو غمر في مدينة فاس العتيقة، أو هروب إلى شفشاون، نقدم لك رحلات مصممة خصيصاً مع خدمة استثنائية.",
    cta: "اعرف المزيد",
    caption: "المغرب\nينتظرك...",
    points: [
      { label: "الخبرة والتجربة",    desc: "أكثر من 10 سنوات في السفر" },
      { label: "عروض مخصصة",         desc: "رحلات تتناسب مع رغباتك" },
      { label: "خدمة عملاء مخصصة",   desc: "فريق في خدمتك دائماً" },
      { label: "دفع آمن",             desc: "سافر بكل ثقة" },
    ],
  },
  testimonials: {
    eyebrow: "آراء العملاء",
    title: "عاشوا تجربة لا تُنسى",
    reviews: [
      { name: "سوفي ل.", text: "« وكالة رائعة! كانت رحلتي إلى المغرب مثالية، تنظيم لا تشوبه شائبة وفريق محترف جداً. أوصي بها بشدة! »" },
      { name: "كريم ب.", text: "« حوّل Tour Me Morocco حلمنا إلى واقع. خدمة استثنائية وذكريات للحياة. »" },
      { name: "نادية ت.", text: "« تجربة ساحرة! أشكر الفريق كله على احترافيتهم وطيبتهم. »" },
    ],
  },
  cta: { title: "مستعد لمغامرتك القادمة؟", subtitle: "اكتشف المغرب مع Tour Me Morocco", button: "احجز الآن" },
  booking: {
    label: "حجز", fixedPrice: "السعر الثابت:", submit: "احجز", waNote: "سيتم إرسال طلبك عبر واتساب.",
    moreOptions: "المغادرة، الرحلة، الإضافات والملاحظات", hideOptions: "إخفاء الخيارات",
    fields: {
      name: "الاسم الكامل *", date: "التاريخ *", time: "الوقت *", passengers: "المسافرون", vehicle: "السيارة",
      pickup: "موقع الاصطحاب", dropoff: "موقع الإيصال", flight: "رقم الرحلة", extras: "إضافات", notes: "ملاحظات",
    },
    placeholders: {
      name: "اسمك الكامل", pickup: "الفندق، الرياض، العنوان...", dropoff: "الوجهة، الفندق، العنوان...",
      flight: "مثال: AT 622", notes: "طلبات خاصة، أمتعة كبيرة...", vehicleChoice: "حسب اختيار السائق",
    },
    extras: { sim: "شريحة SIM محلية", simHint: "إنترنت المغرب", child: "مقعد الطفل", childHint: "3 – 12 سنة", baby: "مقعد الرضيع", babyHint: "0 – 3 سنوات" },
    errors: { name: "الرجاء إدخال اسمك الكامل.", date: "الرجاء اختيار تاريخ.", time: "الرجاء تحديد الوقت المطلوب." },
  },
  footer: {
    tagline: "شريكك الموثوق لاستكشاف المغرب بأناقة وراحة.",
    popularTransfers: "التنقلات الشائعة", excursionsTitle: "رحلاتنا اليومية", toursTitle: "الجولات الخاصة",
    helpTitle: "معلومات", viewAll: "← عرض الكل", instagram: "إنستغرام", whatsapp: "واتساب",
    available: "متاح 24/7", rights: "تور كم موروكو. جميع الحقوق محفوظة.",
    helpLinks: { gallery: "معرض الصور", contact: "اتصل بنا", bookNow: "احجز الآن" },
    transferLinks: ["مراكش ← الدار البيضاء","مراكش ← الصويرة","مراكش ← أكادير","مراكش ← ورزازات","مراكش ← المطار","مراكش ← فاس"],
    excursionLinks: ["وادي أوريكا","شلالات أوزود","صحراء أكافاي","إملي وتوبقال"],
    tourLinks: ["مراكش ← الصويرة","رحلة شفشاون","فاس وشفشاون","جولة الصحراء 9 أيام"],
  },
  pages: {
    transfers: {
      heroTitle: "التنقلات الخاصة",
      heroSubtitle: "سائق خاص مخصص، سعر ثابت وشامل. لا مفاجآت عند الوصول.",
      guarantees: ["سعر ثابت وشامل", "سائق خاص", "نفس السعر للعودة", "متاح 24/7"],
      cardFrom: "المغادرة", cardArrival: "الوصول", cardPrice: "سعر ذهاب", bookBtn: "احجز",
      ctaScript: "لم تجد وجهتك؟",
      ctaSubtitle: "اتصل بنا لترتيب نقلك المخصص من مراكش.",
      ctaBtn: "اتصل بنا",
      categories: { all: "الكل", airport: "المطارات", city: "المدن", coast: "الساحل والجنوب", desert: "الصحراء والطبيعة" },
      detail: {
        privateTransfer: "نقل خاص",
        bookTransfer: "احجز هذا النقل",
        backToTransfers: "→ العودة إلى النقلات",
        labelDuration: "المدة", labelDistance: "المسافة", labelFrom: "من", labelTo: "إلى", labelPrice: "سعر ثابت",
        included: ["سائق خاص مخصص", "تكييف وواي فاي", "الانطلاق من عنوانك", "سعر شامل"],
        notIncluded: ["إكرامية السائق (اختيارية)"],
        related: "نقلات أخرى من مراكش",
        ctaTitle: "هل أنت مستعد للمغادرة؟",
        ctaDesc: "سعر ثابت وشامل، بدون عداد ولا مفاجآت.",
        quoteDesc: "تأكيد الحجز عبر واتساب — رد في غضون ساعة.",
      },
    },
    tours: {
      heroTitle: "جولات خاصة من مراكش",
      heroSubtitle: "جولات خاصة بسائق في أنحاء المغرب — رحلات يومية، مسارات متعددة الأيام وغير ذلك.",
      filter: { all: "الكل", court: "1 – 3 أيام", moyen: "4 – 7 أيام", long: "8 أيام وأكثر" },
      ctaScript: "مخصص لك",
      ctaSubtitle: "لم تجد ما تبحث عنه؟ كل جولة يمكن تخصيصها — تواصل معنا لوضع خط سير مخصص.",
      ctaBtn: "احجز جولة",
      detail: {
        privateTour: "جولة خاصة", getQuote: "طلب عرض سعر",
        quoteDesc: "يتم تسعير كل جولة وفق تواريخك وحجم مجموعتك. أرسل استفساراً وسنعود إليك بعرض سعر ثابت خلال ساعة.",
        bookTour: "احجز هذه الجولة", backToTours: "→ العودة إلى الجولات",
        itinerary: "البرنامج", highlights: "أبرز معالم الجولة",
        gallery: "معرض الصور", faq: "الأسئلة الشائعة",
        ctaTitle: "مستعد للاستكشاف؟", ctaDesc: "تواصل معنا الآن للحصول على عرض سعر مخصص لهذه الجولة.",
        similarTours: "جولات مشابهة",
      },
    },
    excursions: {
      heroTitle: "رحلات خاصة",
      heroSubtitle: "رحلات مخصصة من مراكش — الشلالات، الصحراء، الجبال، الساحل الأطلسي. سائق خاص مخصص، انطلق بإيقاعك.",
      guarantees: ["سائق خاص", "سعر ثابت وشامل", "المغادرة في وقتك", "متاح 24/7"],
      from: "من",
      filter: { all: "الكل", journee: "يوم كامل", demijournee: "نصف يوم" },
      ctaScript: "مخصص لك",
      ctaSubtitle: "تبحث عن رحلة شخصية؟ تواصل معنا وسنخطط ليومك المثالي من مراكش.",
      ctaBtn: "احجز رحلة",
      detail: {
        privateExcursion: "رحلة خاصة", getQuote: "طلب عرض سعر",
        quoteDesc: "يتم تسعير كل رحلة وفق حجم مجموعتك. أرسل استفساراً وسنعود إليك بعرض سعر ثابت خلال ساعة.",
        bookExcursion: "احجز هذه الرحلة", backToExcursions: "→ العودة إلى الرحلات",
        itinerary: "برنامج اليوم", highlights: "أبرز المحطات",
        faq: "الأسئلة الشائعة",
        ctaTitle: "مستعد للمغامرة؟", ctaDesc: "تواصل معنا للحصول على عرض سعر مخصص لهذه الرحلة.",
        overview: "نظرة عامة", fromMarrakech: "من مراكش",
        perGroup: "للمجموعة · سيارة خاصة", priceByGroup: "السعر حسب المجموعة والسيارة",
        included: "يشمل", notIncluded: "لا يشمل",
        includedItems: ["سائق خاص طوال الرحلة", "الاستقبال من إقامتك", "مياه معدنية على متن السيارة", "مرشد محلي يتحدث الفرنسية والإيطالية والإنجليزية والعربية"],
        notIncludedItems: ["الغداء والعشاء", "رسوم دخول المواقع", "الإكرامية (اختيارية)", "الأنشطة الاختيارية"],
        sidebarItems: ["الاستقبال من فندقك", "رد خلال أقل من ساعة", "مجموعة خاصة · حتى 7 أشخاص"],
        alsoDiscover: "اكتشف أيضاً", home: "الرئيسية",
        factDuration: "المدة", factDeparture: "الانطلاق", factGroup: "المجموعة", factLanguage: "اللغة",
        factGroupValue: "خاص · حتى 7", factLanguageValue: "FR · EN · AR · IT",
      },
    },
    gallery: {
      heroScript: "لحظاتنا المشتركة",
      heroTitle: "معرض الصور",
      heroSubtitle: "وجهات اجتزناها، عملاء قابلناهم، طرق سلكناها — كل صورة تحكي قصة حقيقية.",
      statsPhotos: "صورة", statsGuests: "عميل", statsDest: "وجهة",
      ctaScript: "رحلتك، ذكرياتك",
      ctaSubtitle: "انضم إلى عملائنا واصنع لحظاتك التي لا تُنسى في المغرب.",
      ctaBtn: "احجز الآن",
      homeScript: "وثقوا بنا",
      homeTitle: "لحظات مشتركة",
      homeSubtitle: "كل صورة تحكي مغامرة عاشها عملاؤنا في أرجاء المغرب.",
      viewAll: "عرض المعرض كاملاً",
    },
  },
};

/* ─── ITALIANO ───────────────────────────────────── */
const IT: T = {
  dir: "ltr",
  nav: {
    transfers: "Trasferimenti", tours: "Tour", excursions: "Escursioni",
    gallery: "Galleria", contact: "Contatti", bookNow: "Prenota ora", whatsapp: "WhatsApp", language: "Lingua",
  },
  hero: {
    slides: [
      { script: "Avventura & Deserto", titleLine1: "L'avventura suprema", titleLine2: "nel cuore del Sahara",
        desc: "Conquista le dune dorate a bordo di un 4x4 privato e vivi l'esperienza indimenticabile del grande deserto marocchino." },
      { script: "Atlante & Kasbah", titleLine1: "I tesori nascosti", titleLine2: "dell'Atlante marocchino",
        desc: "Dalle kasbah dorate alle vette innevate dell'Atlante, scopri un Marocco autentico e maestoso al tuo ritmo." },
    ],
    cta1: "Esplora i nostri viaggi", cta2: "Prenota ora",
  },
  searchBar: {
    tabs: {
      circuit:   { label: "Circuito",     sub: "Di città in città" },
      transfert: { label: "Trasferimento", sub: "Un viaggio, semplicemente" },
      excursion: { label: "Escursione",    sub: "Una giornata di evasione" },
    },
    placeholders: { allDurations: "Tutte le durate", departure: "Città di partenza", destination: "Destinazione", allCities: "Tutte le città" },
    buttons: { circuit: "Vedi i circuiti", transfert: "Vedi i prezzi", excursion: "Vedi le escursioni" },
  },
  stats: { transferRoutes: "Rotte di trasferimento", privateTours: "Tour privati", excursions: "Escursioni", destinations: "Destinazioni" },
  transfers: {
    script: "Da Marrakech", title: "Trasferimenti Popolari", subtitle: "Prezzi fissi tutto incluso da Marrakech — nessun tassametro, nessuna sorpresa.",
    cardFrom: "Da", cardOrigin: "Marrakech →", cardFixed: "Prezzo fisso", seeAll: "Vedi tutti i trasferimenti",
  },
  tours: {
    script: "Tour Privati", title: "I Nostri Migliori Tour", subtitle: "Circuiti con autista privato giornalieri o multi-giorno — prezzi fissi, senza sorprese.",
    cardLabel: "Tour Privato", cardView: "Vedi il tour", seeAll: "Vedi tutti i tour",
  },
  excursions: {
    script: "Da Marrakech", title: "Escursioni Private", subtitle: "Cascate, deserto, montagna e costa atlantica — con il tuo autista privato, vai al tuo ritmo.",
    cardLabel: "Escursione Privata", cardView: "Vedi", seeAll: "Vedi tutte le escursioni",
  },
  destinations: {
    script: "Da Marrakech", title: "Le Nostre Destinazioni", subtitle: "Esplora luoghi straordinari nel cuore del Marocco — da Marrakech, al tuo ritmo.",
    viewAll: "Vedi tutto",
  },
  about: {
    eyebrow: "PERCHÉ SCEGLIERE TRANSFER MAROC?",
    title: "Un'agenzia di viaggi appassionata dell'esplorazione",
    desc: "Da Tour Me Morocco trasformiamo i tuoi sogni in realtà. Che tu cerchi un'avventura nel Sahara, un'immersione nella medina di Fès o una fuga a Chefchaouen, offriamo viaggi su misura con un servizio eccezionale.",
    cta: "Scopri di più",
    caption: "Il Marocco\nti aspetta...",
    points: [
      { label: "Competenza ed esperienza", desc: "Oltre 10 anni nel settore viaggi" },
      { label: "Offerte su misura",         desc: "Viaggi adattati ai tuoi desideri" },
      { label: "Supporto dedicato",         desc: "Un team sempre a tua disposizione" },
      { label: "Pagamento sicuro",          desc: "Viaggia in tutta tranquillità" },
    ],
  },
  testimonials: {
    eyebrow: "TESTIMONIANZE",
    title: "Hanno vissuto un'esperienza indimenticabile",
    reviews: [
      { name: "Sophie L.", text: "« Un'agenzia eccellente! Il mio viaggio in Marocco è stato perfetto, organizzazione impeccabile e un team molto professionale. Consiglio vivamente! »" },
      { name: "Karim B.",  text: "« Tour Me Morocco ha trasformato il nostro sogno in realtà. Servizio eccezionale e ricordi per tutta la vita. »" },
      { name: "Nadia T.",  text: "« Un'esperienza magica! Ringrazio tutto il team per la loro professionalità e gentilezza. »" },
    ],
  },
  cta: { title: "Pronto per la tua prossima avventura?", subtitle: "Scopri il Marocco con Tour Me Morocco", button: "Prenota ora" },
  booking: {
    label: "Prenotazione", fixedPrice: "Prezzo fisso:", submit: "Prenota", waNote: "La tua richiesta sarà inviata via WhatsApp.",
    moreOptions: "Destinazione, volo, extra e note", hideOptions: "Nascondi le opzioni",
    fields: {
      name: "Nome completo *", date: "Data *", time: "Ora *", passengers: "Passeggeri", vehicle: "Veicolo",
      pickup: "Luogo di ritiro", dropoff: "Luogo di consegna", flight: "N° volo", extras: "Extra", notes: "Note",
    },
    placeholders: {
      name: "Il tuo nome e cognome", pickup: "Hotel, riad, indirizzo...", dropoff: "Destinazione, hotel, indirizzo...",
      flight: "Es: AT 622", notes: "Richieste speciali, bagagli ingombranti...", vehicleChoice: "A scelta",
    },
    extras: { sim: "SIM locale", simHint: "Internet Marocco", child: "Seggiolino bambino", childHint: "3 – 12 anni", baby: "Seggiolino neonato", babyHint: "0 – 3 anni" },
    errors: { name: "Inserisci il tuo nome completo.", date: "Scegli una data.", time: "Indica l'orario desiderato." },
  },
  footer: {
    tagline: "Il tuo partner di fiducia per esplorare il Marocco con stile e comfort.",
    popularTransfers: "Trasferimenti Popolari", excursionsTitle: "Le Nostre Escursioni", toursTitle: "Tour Privati",
    helpTitle: "Informazioni", viewAll: "Vedi tutto →", instagram: "Instagram", whatsapp: "WhatsApp",
    available: "Disponibile 24h/24 · 7g/7", rights: "Tour Me Morocco. Tutti i diritti riservati.",
    helpLinks: { gallery: "Galleria Foto", contact: "Contattaci", bookNow: "Prenota" },
    transferLinks: ["Marrakech → Casablanca","Marrakech → Essaouira","Marrakech → Agadir","Marrakech → Ouarzazate","Marrakech → Aeroporto RAK","Marrakech → Fès"],
    excursionLinks: ["Valle dell'Ourika","Cascate di Ouzoud","Deserto di Agafay","Imlil & Toubkal"],
    tourLinks: ["Marrakech → Essaouira","Escursione a Chefchaouen","Fès e Chefchaouen","Circuito Sahara 9 giorni"],
  },
  pages: {
    transfers: {
      heroTitle: "Trasferimenti Privati",
      heroSubtitle: "Autista privato dedicato, prezzo fisso tutto incluso. Nessuna sorpresa all'arrivo.",
      guarantees: ["Prezzo fisso tutto incluso", "Autista privato", "Stesso prezzo al ritorno", "Disponibile 24h/24"],
      cardFrom: "Partenza", cardArrival: "Arrivo", cardPrice: "Prezzo andata", bookBtn: "Prenota",
      ctaScript: "La tua destinazione non è in elenco?",
      ctaSubtitle: "Contattaci per organizzare il tuo trasferimento su misura da Marrakech.",
      ctaBtn: "Contattaci",
      categories: { all: "Tutti", airport: "Aeroporti", city: "Città", coast: "Costa & Sud", desert: "Deserto & Natura" },
      detail: {
        privateTransfer: "Trasferimento Privato",
        bookTransfer: "Prenota questo trasferimento",
        backToTransfers: "← Torna ai trasferimenti",
        labelDuration: "Durata", labelDistance: "Distanza", labelFrom: "Partenza", labelTo: "Arrivo", labelPrice: "Prezzo fisso",
        included: ["Autista privato dedicato", "Aria condizionata & Wi-Fi", "Ritiro all'indirizzo", "Prezzo tutto incluso"],
        notIncluded: ["Mancia autista (facoltativa)"],
        related: "Altri trasferimenti da Marrakech",
        ctaTitle: "Pronto a partire?",
        ctaDesc: "Prezzo fisso tutto incluso, senza tassametro né sorprese.",
        quoteDesc: "Conferma la prenotazione via WhatsApp — risposta entro un'ora.",
      },
    },
    tours: {
      heroTitle: "Tour Privati da Marrakech",
      heroSubtitle: "Tour privati con autista attraverso il Marocco — escursioni giornaliere, multi-giorno e molto altro.",
      filter: { all: "Tutti", court: "1 – 3 giorni", moyen: "4 – 7 giorni", long: "8 giorni e +" },
      ctaScript: "Su misura",
      ctaSubtitle: "Non trovi quello che cerchi? Ogni tour può essere personalizzato — contattaci per un itinerario su misura.",
      ctaBtn: "Prenota un tour",
      detail: {
        privateTour: "Tour Privato", getQuote: "Richiedi un preventivo",
        quoteDesc: "Ogni tour è quotato in base alle tue date e alla dimensione del gruppo. Invia una richiesta e ti risponderemo con un preventivo fisso entro un'ora.",
        bookTour: "Prenota questo tour", backToTours: "← Torna a tutti i tour",
        itinerary: "Programma", highlights: "Punti salienti del tour",
        gallery: "Galleria", faq: "Domande frequenti",
        ctaTitle: "Pronto ad esplorare?", ctaDesc: "Contattaci ora per un preventivo personalizzato per questo tour.",
        similarTours: "Tour simili",
      },
    },
    excursions: {
      heroTitle: "Escursioni Private",
      heroSubtitle: "Escursioni su misura da Marrakech — cascate, deserto, montagna, costa atlantica. Autista privato dedicato, parti al tuo ritmo.",
      guarantees: ["Autista privato", "Prezzo fisso tutto incluso", "Partenza all'ora scelta", "Disponibile 24h/24"],
      from: "Da",
      filter: { all: "Tutte", journee: "Giornata intera", demijournee: "Mezza giornata" },
      ctaScript: "Su misura",
      ctaSubtitle: "Cerchi un'escursione personalizzata? Contattaci e organizzeremo la tua giornata ideale da Marrakech.",
      ctaBtn: "Prenota un'escursione",
      detail: {
        privateExcursion: "Escursione Privata", getQuote: "Richiedi un preventivo",
        quoteDesc: "Ogni escursione è quotata in base alla dimensione del gruppo. Invia una richiesta e ti risponderemo con un preventivo fisso entro un'ora.",
        bookExcursion: "Prenota questa escursione", backToExcursions: "← Torna a tutte le escursioni",
        itinerary: "Programma della giornata", highlights: "Punti salienti",
        faq: "Domande frequenti",
        ctaTitle: "Pronto per l'avventura?", ctaDesc: "Contattaci per un preventivo personalizzato per questa escursione.",
        overview: "Panoramica", fromMarrakech: "Da Marrakech",
        perGroup: "per gruppo · veicolo privato", priceByGroup: "Prezzo per gruppo e veicolo",
        included: "Incluso", notIncluded: "Non incluso",
        includedItems: ["Autista privato per tutto il percorso", "Ritiro dalla tua struttura", "Acqua minerale a bordo", "Guida locale che parla francese, italiano, inglese e arabo"],
        notIncludedItems: ["Pranzo e cena", "Biglietti d'ingresso ai siti", "Mance (a discrezione)", "Attività facoltative"],
        sidebarItems: ["Ritiro dal tuo hotel", "Risposta entro meno di un'ora", "Gruppo privato · fino a 7 persone"],
        alsoDiscover: "Scopri anche", home: "Home",
        factDuration: "Durata", factDeparture: "Partenza", factGroup: "Gruppo", factLanguage: "Lingua",
        factGroupValue: "Privato · fino a 7", factLanguageValue: "FR · EN · AR · IT",
      },
    },
    gallery: {
      heroScript: "I nostri momenti condivisi",
      heroTitle: "Galleria Fotografica",
      heroSubtitle: "Destinazioni attraversate, clienti incontrati, strade percorse — ogni foto racconta una storia vera.",
      statsPhotos: "Foto", statsGuests: "Clienti", statsDest: "Destinazioni",
      ctaScript: "Il tuo viaggio, i tuoi ricordi",
      ctaSubtitle: "Unisciti ai nostri clienti e crea i tuoi momenti indimenticabili in Marocco.",
      ctaBtn: "Prenota ora",
      homeScript: "Si sono fidati di noi",
      homeTitle: "Momenti condivisi",
      homeSubtitle: "Ogni foto racconta un'avventura vissuta dai nostri clienti nel cuore del Marocco.",
      viewAll: "Vedi tutta la galleria",
    },
  },
};

export const TRANSLATIONS: Record<Locale, T> = { fr: FR, en: EN, ar: AR, it: IT };
