export type Locale = "fr" | "en" | "ar";
export const LOCALES: Locale[] = ["fr", "en", "ar"];
export const LOCALE_NAMES: Record<Locale, string> = { fr: "Français", en: "English", ar: "العربية" };
export const LOCALE_LABELS: Record<Locale, string> = { fr: "FR", en: "EN", ar: "AR" };

type Slide = { script: string; titleLine1: string; titleLine2: string; desc: string };
type Point = { label: string; desc: string };
type Review = { name: string; text: string };

export type T = {
  dir: "ltr" | "rtl";
  nav: {
    transfers: string; tours: string; excursions: string; fleet: string;
    gallery: string; contact: string; bookNow: string; whatsapp: string; language: string;
  };
  hero: {
    slides: [Slide, Slide, Slide];
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
    helpLinks: { fleet: string; gallery: string; contact: string; bookNow: string };
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
      };
    };
    excursions: {
      heroTitle: string; heroSubtitle: string;
      guarantees: [string, string, string, string];
      filter: { all: string; journee: string; demijournee: string };
      ctaScript: string; ctaSubtitle: string; ctaBtn: string;
      detail: {
        privateExcursion: string; getQuote: string; quoteDesc: string;
        bookExcursion: string; backToExcursions: string;
        itinerary: string; highlights: string; faq: string;
        ctaTitle: string; ctaDesc: string;
      };
    };
    gallery: {
      heroScript: string; heroTitle: string; heroSubtitle: string;
      statsPhotos: string; statsGuests: string; statsDest: string;
      ctaScript: string; ctaSubtitle: string; ctaBtn: string;
    };
    fleet: {
      heroScript: string; heroTitle: string; heroSubtitle: string;
      guarantees: [string, string, string, string];
      plateLabel: string; expandBtn: string; bookVehicle: string;
      ctaScript: string; ctaSubtitle: string; ctaBtn: string;
    };
  };
};

/* ─── FRANÇAIS ───────────────────────────────────── */
const FR: T = {
  dir: "ltr",
  nav: {
    transfers: "Transferts", tours: "Tours", excursions: "Excursions", fleet: "Flotte",
    gallery: "Galerie", contact: "Contact", bookNow: "Réserver", whatsapp: "WhatsApp", language: "Langue",
  },
  hero: {
    slides: [
      { script: "Kasbah & Montagnes", titleLine1: "Entre kasbahs et", titleLine2: "horizons dorés",
        desc: "Partez à la découverte des villages berbères et des kasbahs millénaires au cœur des montagnes marocaines." },
      { script: "Désert du Sahara", titleLine1: "L'immensité dorée", titleLine2: "du Grand Erg",
        desc: "Vivez l'aventure ultime entre dunes à perte de vue et couchers de soleil inoubliables sur l'Erg Chebbi." },
      { script: "Médinas & Riads", titleLine1: "L'âme du Maroc", titleLine2: "authentique",
        desc: "Perdez-vous dans les ruelles colorées des médinas, entre épices envoûtantes, riads fleuris et artisanat d'exception." },
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
    eyebrow: "POURQUOI CHOISIR TOUR COME MOROCCO ?",
    title: "Une agence de voyage passionnée par l'exploration",
    desc: "Chez Tour Come Morocco, nous transformons vos rêves en réalité. Que vous recherchiez une aventure dans le Sahara, une immersion dans la médina de Fès ou une escapade à Chefchaouen, nous vous offrons des voyages sur mesure avec un service d'exception.",
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
      { name: "Karim B.",  text: "« Tour Come Morocco a transformé notre rêve en réalité. Un service exceptionnel et des souvenirs pour la vie. »" },
      { name: "Nadia T.",  text: "« Une expérience magique ! Je remercie toute l'équipe pour leur professionnalisme et leur bienveillance. »" },
    ],
  },
  cta: { title: "Prêt pour votre prochaine aventure ?", subtitle: "Partez à la découverte du Maroc avec Tour Come Morocco", button: "Réserver maintenant" },
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
    available: "Disponible 24h/24 · 7j/7", rights: "Tour Come Morocco. Tous droits réservés.",
    helpLinks: { fleet: "Notre Flotte", gallery: "Galerie Photos", contact: "Nous Contacter", bookNow: "Réserver" },
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
      },
    },
    excursions: {
      heroTitle: "Excursions Privées",
      heroSubtitle: "Des excursions sur mesure depuis Marrakech — cascades, désert, montagne, côte atlantique. Chauffeur privé dédié, départ à votre rythme.",
      guarantees: ["Chauffeur privé", "Prix fixe tout inclus", "Départ à votre heure", "Disponible 24h/24"],
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
    },
    fleet: {
      heroScript: "Nos véhicules",
      heroTitle: "Notre Flotte Privée",
      heroSubtitle: "Véhicules récents, climatisés et parfaitement entretenus. Chaque trajet est assuré par un chauffeur professionnel diplômé.",
      guarantees: ["Véhicules récents", "Chauffeurs certifiés", "A/C & Wi-Fi", "Assurance incluse"],
      plateLabel: "Immatriculation", expandBtn: "Agrandir", bookVehicle: "Réserver ce véhicule",
      ctaScript: "Prêt à partir ?",
      ctaSubtitle: "Tous nos véhicules sont disponibles avec chauffeur privé dédié — contactez-nous pour un devis.",
      ctaBtn: "Demander un devis",
    },
  },
};

/* ─── ENGLISH ────────────────────────────────────── */
const EN: T = {
  dir: "ltr",
  nav: {
    transfers: "Transfers", tours: "Tours", excursions: "Excursions", fleet: "Fleet",
    gallery: "Gallery", contact: "Contact", bookNow: "Book Now", whatsapp: "WhatsApp", language: "Language",
  },
  hero: {
    slides: [
      { script: "Kasbahs & Mountains", titleLine1: "Between kasbahs and", titleLine2: "golden horizons",
        desc: "Discover Berber villages and ancient kasbahs in the heart of the Moroccan mountains." },
      { script: "Sahara Desert", titleLine1: "The golden vastness", titleLine2: "of the Grand Erg",
        desc: "Live the ultimate adventure among endless dunes and unforgettable sunsets over Erg Chebbi." },
      { script: "Medinas & Riads", titleLine1: "The soul of", titleLine2: "authentic Morocco",
        desc: "Wander through colourful medina alleyways, among enchanting spices, blooming riads and exceptional crafts." },
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
    eyebrow: "WHY CHOOSE TOUR COME MOROCCO?",
    title: "A travel agency passionate about exploration",
    desc: "At Tour Come Morocco, we turn your dreams into reality. Whether you're seeking a Sahara adventure, an immersion in the Fès medina or an escape to Chefchaouen, we offer tailor-made journeys with exceptional service.",
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
      { name: "Karim B.",  text: "« Tour Come Morocco turned our dream into reality. Exceptional service and memories for life. »" },
      { name: "Nadia T.",  text: "« A magical experience! I thank the whole team for their professionalism and kindness. »" },
    ],
  },
  cta: { title: "Ready for your next adventure?", subtitle: "Discover Morocco with Tour Come Morocco", button: "Book now" },
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
    available: "Available 24/7", rights: "Tour Come Morocco. All rights reserved.",
    helpLinks: { fleet: "Our Fleet", gallery: "Photo Gallery", contact: "Contact Us", bookNow: "Book Now" },
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
      },
    },
    excursions: {
      heroTitle: "Private Excursions",
      heroSubtitle: "Tailor-made excursions from Marrakech — waterfalls, desert, mountains, Atlantic coast. Dedicated private driver, leave at your own pace.",
      guarantees: ["Private driver", "All-inclusive fixed price", "Depart at your time", "Available 24/7"],
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
    },
    fleet: {
      heroScript: "Our vehicles",
      heroTitle: "Our Private Fleet",
      heroSubtitle: "Recent, air-conditioned and perfectly maintained vehicles. Every journey is handled by a certified professional driver.",
      guarantees: ["Recent vehicles", "Certified drivers", "A/C & Wi-Fi", "Insurance included"],
      plateLabel: "Registration", expandBtn: "Expand", bookVehicle: "Book this vehicle",
      ctaScript: "Ready to go?",
      ctaSubtitle: "All our vehicles are available with a dedicated private driver — contact us for a quote.",
      ctaBtn: "Get a quote",
    },
  },
};

/* ─── ARABIC ─────────────────────────────────────── */
const AR: T = {
  dir: "rtl",
  nav: {
    transfers: "التنقلات", tours: "الجولات", excursions: "الرحلات", fleet: "الأسطول",
    gallery: "المعرض", contact: "اتصل بنا", bookNow: "احجز الآن", whatsapp: "واتساب", language: "اللغة",
  },
  hero: {
    slides: [
      { script: "القصبات والجبال", titleLine1: "بين القصبات", titleLine2: "والآفاق الذهبية",
        desc: "اكتشف القرى البربرية والقصبات العريقة في قلب جبال المغرب الخلابة." },
      { script: "صحراء الصحراء الكبرى", titleLine1: "الشساعة الذهبية", titleLine2: "للعرق الكبير",
        desc: "عيش المغامرة الكبرى بين كثبان رملية لا تنتهي وغروب شمس لا يُنسى فوق إرق الشبي." },
      { script: "المدن العتيقة والرياض", titleLine1: "روح المغرب", titleLine2: "الأصيل",
        desc: "تيه في أزقة المدن الملونة بين التوابل الساحرة والرياض المزهرة والحرف الاستثنائية." },
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
    desc: "في Tour Come Morocco، نحول أحلامك إلى واقع. سواء كنت تبحث عن مغامرة في الصحراء، أو غمر في مدينة فاس العتيقة، أو هروب إلى شفشاون، نقدم لك رحلات مصممة خصيصاً مع خدمة استثنائية.",
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
      { name: "كريم ب.", text: "« حوّل Tour Come Morocco حلمنا إلى واقع. خدمة استثنائية وذكريات للحياة. »" },
      { name: "نادية ت.", text: "« تجربة ساحرة! أشكر الفريق كله على احترافيتهم وطيبتهم. »" },
    ],
  },
  cta: { title: "مستعد لمغامرتك القادمة؟", subtitle: "اكتشف المغرب مع Tour Come Morocco", button: "احجز الآن" },
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
    helpLinks: { fleet: "أسطولنا", gallery: "معرض الصور", contact: "اتصل بنا", bookNow: "احجز الآن" },
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
      },
    },
    excursions: {
      heroTitle: "رحلات خاصة",
      heroSubtitle: "رحلات مخصصة من مراكش — الشلالات، الصحراء، الجبال، الساحل الأطلسي. سائق خاص مخصص، انطلق بإيقاعك.",
      guarantees: ["سائق خاص", "سعر ثابت وشامل", "المغادرة في وقتك", "متاح 24/7"],
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
    },
    fleet: {
      heroScript: "سياراتنا",
      heroTitle: "أسطولنا الخاص",
      heroSubtitle: "مركبات حديثة، مكيفة ومصانة بشكل مثالي. كل رحلة يديرها سائق محترف معتمد.",
      guarantees: ["مركبات حديثة", "سائقون معتمدون", "تكييف وواي فاي", "تأمين شامل"],
      plateLabel: "رقم اللوحة", expandBtn: "تكبير", bookVehicle: "احجز هذه السيارة",
      ctaScript: "مستعد للانطلاق؟",
      ctaSubtitle: "جميع مركباتنا متاحة مع سائق خاص مخصص — اتصل بنا للحصول على عرض سعر.",
      ctaBtn: "طلب عرض سعر",
    },
  },
};

export const TRANSLATIONS: Record<Locale, T> = { fr: FR, en: EN, ar: AR };
