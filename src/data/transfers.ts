export type TransferCategory = "airport" | "city" | "coast" | "desert";

export type Transfer = {
  slug: string;
  to: { fr: string; en: string; ar: string };
  price: string;
  prices: { sedan: number; van: number; luxuryVan: number };
  duration: string;
  distance: string;
  distanceKm: number;
  image: string;
  category: TransferCategory;
};

export const CATEGORIES: { id: TransferCategory | "all"; label: string }[] = [
  { id: "all",     label: "Tous"            },
  { id: "airport", label: "Aéroports"       },
  { id: "city",    label: "Villes"          },
  { id: "coast",   label: "Côte & Sud"      },
  { id: "desert",  label: "Désert & Nature" },
];

/* All transfers depart from Marrakech */
export const transfers: Transfer[] = [
  /* ── Aéroports ─────────────────────────────── */
  {
    slug: "aeroport-menara",
    to: { fr: "Aéroport Marrakech Menara", en: "Marrakech Menara Airport", ar: "مطار مراكش المنارة" },
    price: "€15",
    prices: { sedan: 15, van: 20, luxuryVan: 20 },
    duration: "15 min", distance: "6 km", distanceKm: 6,
    image: "airport.jpg", category: "airport",
  },
  {
    slug: "aeroport-mohammed-v",
    to: { fr: "Aéroport Mohammed V", en: "Mohammed V Airport", ar: "مطار محمد الخامس" },
    price: "€140",
    prices: { sedan: 140, van: 150, luxuryVan: 150 },
    duration: "3 h", distance: "238 km", distanceKm: 238,
    image: "casablanca.jpg", category: "airport",
  },
  {
    slug: "aeroport-ibn-battouta",
    to: { fr: "Aéroport Ibn Battouta", en: "Ibn Battouta Airport", ar: "مطار ابن بطوطة" },
    price: "€330",
    prices: { sedan: 330, van: 410, luxuryVan: 460 },
    duration: "9 h 30", distance: "570 km", distanceKm: 570,
    image: "tangerCity.jpg", category: "airport",
  },

  /* ── Villes ─────────────────────────────────── */
  {
    slug: "beni-mellal",
    to: { fr: "Béni Mellal", en: "Beni Mellal", ar: "بني ملال" },
    price: "€135",
    prices: { sedan: 135, van: 165, luxuryVan: 190 },
    duration: "2 h 30", distance: "165 km", distanceKm: 165,
    image: "beniMellalCity.jpg", category: "city",
  },
  {
    slug: "el-jadida",
    to: { fr: "El Jadida", en: "El Jadida", ar: "الجديدة" },
    price: "€125",
    prices: { sedan: 125, van: 150, luxuryVan: 175 },
    duration: "2 h 45", distance: "195 km", distanceKm: 195,
    image: "elJadidaFort.jpg", category: "city",
  },
  {
    slug: "casablanca",
    to: { fr: "Casablanca", en: "Casablanca", ar: "الدار البيضاء" },
    price: "€140",
    prices: { sedan: 140, van: 150, luxuryVan: 150 },
    duration: "3 h 15", distance: "238 km", distanceKm: 238,
    image: "casablanca.jpg", category: "city",
  },
  {
    slug: "rabat",
    to: { fr: "Rabat", en: "Rabat", ar: "الرباط" },
    price: "€190",
    prices: { sedan: 190, van: 235, luxuryVan: 260 },
    duration: "5 h 30", distance: "323 km", distanceKm: 323,
    image: "rabatCity.jpg", category: "city",
  },
  {
    slug: "azrou",
    to: { fr: "Azrou", en: "Azrou", ar: "أزرو" },
    price: "€310",
    prices: { sedan: 310, van: 380, luxuryVan: 430 },
    duration: "6 h 15", distance: "325 km", distanceKm: 325,
    image: "azrouMosque.jpg", category: "city",
  },
  {
    slug: "ifrane",
    to: { fr: "Ifrane", en: "Ifrane", ar: "إفران" },
    price: "€330",
    prices: { sedan: 330, van: 410, luxuryVan: 460 },
    duration: "6 h 30", distance: "333 km", distanceKm: 333,
    image: "ifraneSnow.jpg", category: "city",
  },
  {
    slug: "meknes",
    to: { fr: "Meknès", en: "Meknès", ar: "مكناس" },
    price: "€330",
    prices: { sedan: 330, van: 410, luxuryVan: 460 },
    duration: "6 h 30", distance: "346 km", distanceKm: 346,
    image: "meknesGate.jpg", category: "city",
  },
  {
    slug: "tanger",
    to: { fr: "Tanger", en: "Tangier", ar: "طنجة" },
    price: "€330",
    prices: { sedan: 330, van: 410, luxuryVan: 460 },
    duration: "9 h 30", distance: "565 km", distanceKm: 565,
    image: "tangerCity.jpg", category: "city",
  },
  {
    slug: "fes",
    to: { fr: "Fès", en: "Fez", ar: "فاس" },
    price: "€365",
    prices: { sedan: 365, van: 450, luxuryVan: 510 },
    duration: "7 h 30", distance: "430 km", distanceKm: 430,
    image: "fes.jpg", category: "city",
  },
  {
    slug: "chefchaouen",
    to: { fr: "Chefchaouen", en: "Chefchaouen", ar: "شفشاون" },
    price: "€430",
    prices: { sedan: 430, van: 530, luxuryVan: 595 },
    duration: "9 h", distance: "526 km", distanceKm: 526,
    image: "chefchaouen.jpg", category: "city",
  },

  /* ── Côte & Sud ─────────────────────────────── */
  {
    slug: "essaouira",
    to: { fr: "Essaouira", en: "Essaouira", ar: "الصويرة" },
    price: "€105",
    prices: { sedan: 105, van: 135, luxuryVan: 150 },
    duration: "2 h 30", distance: "176 km", distanceKm: 176,
    image: "essaouira.jpg", category: "coast",
  },
  {
    slug: "safi",
    to: { fr: "Safi", en: "Safi", ar: "آسفي" },
    price: "€145",
    prices: { sedan: 145, van: 180, luxuryVan: 200 },
    duration: "2 h", distance: "158 km", distanceKm: 158,
    image: "safiCity.jpg", category: "coast",
  },
  {
    slug: "agadir",
    to: { fr: "Agadir", en: "Agadir", ar: "أكادير" },
    price: "€165",
    prices: { sedan: 165, van: 205, luxuryVan: 235 },
    duration: "3 h", distance: "252 km", distanceKm: 252,
    image: "agadirBeach.jpg", category: "coast",
  },
  {
    slug: "oualidia",
    to: { fr: "Oualidia", en: "Oualidia", ar: "أوليدية" },
    price: "€180",
    prices: { sedan: 180, van: 225, luxuryVan: 250 },
    duration: "2 h 15", distance: "195 km", distanceKm: 195,
    image: "oualidiaLagoon.jpg", category: "coast",
  },
  {
    slug: "taghazout",
    to: { fr: "Taghazout", en: "Taghazout", ar: "تاغازوت" },
    price: "€180",
    prices: { sedan: 180, van: 225, luxuryVan: 250 },
    duration: "3 h", distance: "225 km", distanceKm: 225,
    image: "taghazoutVillage.jpg", category: "coast",
  },
  {
    slug: "taroudant",
    to: { fr: "Taroudant", en: "Taroudant", ar: "تارودانت" },
    price: "€190",
    prices: { sedan: 190, van: 235, luxuryVan: 260 },
    duration: "2 h 15", distance: "224 km", distanceKm: 224,
    image: "taroudantGate.jpg", category: "coast",
  },

  /* ── Désert & Nature ────────────────────────── */
  {
    slug: "agafay",
    to: { fr: "Agafay", en: "Agafay", ar: "أكافاي" },
    price: "€110",
    prices: { sedan: 110, van: 75, luxuryVan: 80 },
    duration: "55 min", distance: "35 km", distanceKm: 35,
    image: "agafay.jpg", category: "desert",
  },
  {
    slug: "ourika",
    to: { fr: "Vallée de l'Ourika", en: "Ourika Valley", ar: "وادي أوريكا" },
    price: "€110",
    prices: { sedan: 110, van: 75, luxuryVan: 80 },
    duration: "50 min", distance: "36 km", distanceKm: 36,
    image: "ourikaFalls.jpg", category: "desert",
  },
  {
    slug: "imlil",
    to: { fr: "Imlil", en: "Imlil", ar: "إملي" },
    price: "€90",
    prices: { sedan: 90, van: 115, luxuryVan: 130 },
    duration: "50 min", distance: "60 km", distanceKm: 60,
    image: "imlil.jpg", category: "desert",
  },
  {
    slug: "ait-ben-haddou",
    to: { fr: "Aït Ben Haddou", en: "Aït Ben Haddou", ar: "أيت بنحدو" },
    price: "€125",
    prices: { sedan: 125, van: 150, luxuryVan: 175 },
    duration: "1 h 30", distance: "132 km", distanceKm: 132,
    image: "aitBenHaddouKasbah.jpg", category: "desert",
  },
  {
    slug: "ouarzazate",
    to: { fr: "Ouarzazate", en: "Ouarzazate", ar: "ورزازات" },
    price: "€135",
    prices: { sedan: 135, van: 165, luxuryVan: 190 },
    duration: "1 h 45", distance: "205 km", distanceKm: 205,
    image: "ouarzazate.jpg", category: "desert",
  },
  {
    slug: "ouzoud",
    to: { fr: "Cascades d'Ouzoud", en: "Ouzoud Waterfalls", ar: "شلالات أوزود" },
    price: "€135",
    prices: { sedan: 135, van: 165, luxuryVan: 190 },
    duration: "1 h 45", distance: "155 km", distanceKm: 155,
    image: "ouzoud.jpg", category: "desert",
  },
  {
    slug: "dades",
    to: { fr: "Vallée du Dadès", en: "Dades Valley", ar: "وادي دادس" },
    price: "€210",
    prices: { sedan: 210, van: 260, luxuryVan: 295 },
    duration: "2 h 45", distance: "290 km", distanceKm: 290,
    image: "mountainRoad.jpg", category: "desert",
  },
  {
    slug: "todra",
    to: { fr: "Gorges du Todra", en: "Todra Gorge", ar: "وادي تودرة" },
    price: "€245",
    prices: { sedan: 245, van: 300, luxuryVan: 340 },
    duration: "3 h 15", distance: "315 km", distanceKm: 315,
    image: "atlas.jpg", category: "desert",
  },
  {
    slug: "erfoud",
    to: { fr: "Erfoud", en: "Erfoud", ar: "أرفود" },
    price: "€310",
    prices: { sedan: 310, van: 380, luxuryVan: 430 },
    duration: "6 h 45", distance: "418 km", distanceKm: 418,
    image: "dunes.jpg", category: "desert",
  },
  {
    slug: "zagora",
    to: { fr: "Zagora", en: "Zagora", ar: "زاكورة" },
    price: "€500",
    prices: { sedan: 500, van: 500, luxuryVan: 500 },
    duration: "3 h 45", distance: "370 km", distanceKm: 370,
    image: "dunes.jpg", category: "desert",
  },
  {
    slug: "merzouga",
    to: { fr: "Merzouga", en: "Merzouga", ar: "مرزوقة" },
    price: "€500",
    prices: { sedan: 500, van: 500, luxuryVan: 500 },
    duration: "7 h 15", distance: "545 km", distanceKm: 545,
    image: "desertCamels.jpg", category: "desert",
  },
];

export function getTransferBySlug(slug: string): Transfer | undefined {
  return transfers.find(t => t.slug === slug);
}

/** Match a destination name (any locale) to a transfer record */
export function findTransferByDest(dest: string): Transfer | undefined {
  const d = dest.trim().toLowerCase();
  return transfers.find(t =>
    t.to.fr.toLowerCase() === d ||
    t.to.en.toLowerCase() === d ||
    t.to.ar === dest.trim()
  );
}
