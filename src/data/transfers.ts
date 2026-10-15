export type TransferCategory = "airport" | "city" | "coast" | "desert";

export type Transfer = {
  slug: string;
  to: { fr: string; en: string; ar: string };
  price: string;
  duration: string;
  distance: string;
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
    price: "€15",  duration: "15 min",  distance: "6 km",   category: "airport",
  },
  {
    slug: "aeroport-mohammed-v",
    to: { fr: "Aéroport Mohammed V",       en: "Mohammed V Airport",       ar: "مطار محمد الخامس" },
    price: "€140", duration: "3 h",     distance: "238 km", category: "airport",
  },
  {
    slug: "aeroport-ibn-battouta",
    to: { fr: "Aéroport Ibn Battouta",     en: "Ibn Battouta Airport",     ar: "مطار ابن بطوطة" },
    price: "€330", duration: "9 h 30",  distance: "570 km", category: "airport",
  },

  /* ── Villes ─────────────────────────────────── */
  {
    slug: "beni-mellal",
    to: { fr: "Béni Mellal",   en: "Beni Mellal",   ar: "بني ملال"       },
    price: "€135", duration: "2 h 30",  distance: "165 km", category: "city",
  },
  {
    slug: "el-jadida",
    to: { fr: "El Jadida",     en: "El Jadida",     ar: "الجديدة"        },
    price: "€125", duration: "2 h 45",  distance: "195 km", category: "city",
  },
  {
    slug: "casablanca",
    to: { fr: "Casablanca",    en: "Casablanca",    ar: "الدار البيضاء"  },
    price: "€140", duration: "3 h 15",  distance: "238 km", category: "city",
  },
  {
    slug: "rabat",
    to: { fr: "Rabat",         en: "Rabat",         ar: "الرباط"         },
    price: "€190", duration: "5 h 30",  distance: "323 km", category: "city",
  },
  {
    slug: "azrou",
    to: { fr: "Azrou",         en: "Azrou",         ar: "أزرو"           },
    price: "€310", duration: "6 h 15",  distance: "325 km", category: "city",
  },
  {
    slug: "ifrane",
    to: { fr: "Ifrane",        en: "Ifrane",        ar: "إفران"          },
    price: "€330", duration: "6 h 30",  distance: "333 km", category: "city",
  },
  {
    slug: "meknes",
    to: { fr: "Meknès",        en: "Meknès",        ar: "مكناس"          },
    price: "€330", duration: "6 h 30",  distance: "346 km", category: "city",
  },
  {
    slug: "tanger",
    to: { fr: "Tanger",        en: "Tangier",       ar: "طنجة"           },
    price: "€330", duration: "9 h 30",  distance: "565 km", category: "city",
  },
  {
    slug: "fes",
    to: { fr: "Fès",           en: "Fez",           ar: "فاس"            },
    price: "€365", duration: "7 h 30",  distance: "430 km", category: "city",
  },
  {
    slug: "chefchaouen",
    to: { fr: "Chefchaouen",   en: "Chefchaouen",   ar: "شفشاون"         },
    price: "€430", duration: "9 h",     distance: "526 km", category: "city",
  },

  /* ── Côte & Sud ─────────────────────────────── */
  {
    slug: "essaouira",
    to: { fr: "Essaouira",     en: "Essaouira",     ar: "الصويرة"        },
    price: "€105", duration: "2 h 30",  distance: "176 km", category: "coast",
  },
  {
    slug: "safi",
    to: { fr: "Safi",          en: "Safi",          ar: "آسفي"           },
    price: "€145", duration: "2 h",     distance: "158 km", category: "coast",
  },
  {
    slug: "agadir",
    to: { fr: "Agadir",        en: "Agadir",        ar: "أكادير"         },
    price: "€165", duration: "3 h",     distance: "252 km", category: "coast",
  },
  {
    slug: "oualidia",
    to: { fr: "Oualidia",      en: "Oualidia",      ar: "أوليدية"        },
    price: "€180", duration: "2 h 15",  distance: "195 km", category: "coast",
  },
  {
    slug: "taghazout",
    to: { fr: "Taghazout",     en: "Taghazout",     ar: "تاغازوت"        },
    price: "€180", duration: "3 h",     distance: "225 km", category: "coast",
  },
  {
    slug: "taroudant",
    to: { fr: "Taroudant",     en: "Taroudant",     ar: "تارودانت"       },
    price: "€190", duration: "2 h 15",  distance: "224 km", category: "coast",
  },

  /* ── Désert & Nature ────────────────────────── */
  {
    slug: "agafay",
    to: { fr: "Agafay",                  en: "Agafay",             ar: "أكافاي"          },
    price: "€60",  duration: "55 min",  distance: "35 km",  category: "desert",
  },
  {
    slug: "ourika",
    to: { fr: "Vallée de l'Ourika",      en: "Ourika Valley",      ar: "وادي أوريكا"     },
    price: "€60",  duration: "50 min",  distance: "36 km",  category: "desert",
  },
  {
    slug: "imlil",
    to: { fr: "Imlil",                   en: "Imlil",              ar: "إملي"            },
    price: "€90",  duration: "50 min",  distance: "60 km",  category: "desert",
  },
  {
    slug: "ait-ben-haddou",
    to: { fr: "Aït Ben Haddou",          en: "Aït Ben Haddou",     ar: "أيت بنحدو"       },
    price: "€125", duration: "1 h 30",  distance: "132 km", category: "desert",
  },
  {
    slug: "ouarzazate",
    to: { fr: "Ouarzazate",              en: "Ouarzazate",         ar: "ورزازات"         },
    price: "€135", duration: "1 h 45",  distance: "205 km", category: "desert",
  },
  {
    slug: "ouzoud",
    to: { fr: "Cascades d'Ouzoud",       en: "Ouzoud Waterfalls",  ar: "شلالات أوزود"    },
    price: "€135", duration: "1 h 45",  distance: "155 km", category: "desert",
  },
  {
    slug: "dades",
    to: { fr: "Vallée du Dadès",         en: "Dades Valley",       ar: "وادي دادس"       },
    price: "€210", duration: "2 h 45",  distance: "290 km", category: "desert",
  },
  {
    slug: "todra",
    to: { fr: "Gorges du Todra",         en: "Todra Gorge",        ar: "وادي تودرة"      },
    price: "€245", duration: "3 h 15",  distance: "315 km", category: "desert",
  },
  {
    slug: "erfoud",
    to: { fr: "Erfoud",                  en: "Erfoud",             ar: "أرفود"           },
    price: "€310", duration: "6 h 45",  distance: "418 km", category: "desert",
  },
  {
    slug: "zagora",
    to: { fr: "Zagora",                  en: "Zagora",             ar: "زاكورة"          },
    price: "€500", duration: "3 h 45",  distance: "370 km", category: "desert",
  },
  {
    slug: "merzouga",
    to: { fr: "Merzouga",                en: "Merzouga",           ar: "مرزوقة"          },
    price: "€500", duration: "7 h 15",  distance: "545 km", category: "desert",
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
    t.to.ar         === dest.trim()
  );
}
