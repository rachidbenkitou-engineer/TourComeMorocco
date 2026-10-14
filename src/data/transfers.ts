export type TransferCategory = "airport" | "city" | "coast" | "desert";

export type Transfer = {
  to: string;
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
  { to: "Marrakech Menara Airport", price: "€15",  duration: "15 min",  distance: "6 km",   category: "airport" },
  { to: "Mohammed V Airport",       price: "€140", duration: "3 h",     distance: "238 km", category: "airport" },
  { to: "Ibn Battouta Airport",     price: "€330", duration: "9 h 30",  distance: "570 km", category: "airport" },

  /* ── Villes ─────────────────────────────────── */
  { to: "Beni Mellal",              price: "€135", duration: "2 h 30",  distance: "165 km", category: "city"    },
  { to: "El Jadida",                price: "€125", duration: "2 h 45",  distance: "195 km", category: "city"    },
  { to: "Casablanca",               price: "€140", duration: "3 h 15",  distance: "238 km", category: "city"    },
  { to: "Rabat",                    price: "€190", duration: "5 h 30",  distance: "323 km", category: "city"    },
  { to: "Azrou",                    price: "€310", duration: "6 h 15",  distance: "325 km", category: "city"    },
  { to: "Ifrane",                   price: "€330", duration: "6 h 30",  distance: "333 km", category: "city"    },
  { to: "Meknès",                   price: "€330", duration: "6 h 30",  distance: "346 km", category: "city"    },
  { to: "Tanger",                   price: "€330", duration: "9 h 30",  distance: "565 km", category: "city"    },
  { to: "Fès",                      price: "€365", duration: "7 h 30",  distance: "430 km", category: "city"    },
  { to: "Chefchaouen",              price: "€430", duration: "9 h",     distance: "526 km", category: "city"    },

  /* ── Côte & Sud ─────────────────────────────── */
  { to: "Essaouira",                price: "€105", duration: "2 h 30",  distance: "176 km", category: "coast"   },
  { to: "Safi",                     price: "€145", duration: "2 h",     distance: "158 km", category: "coast"   },
  { to: "Agadir",                   price: "€165", duration: "3 h",     distance: "252 km", category: "coast"   },
  { to: "Oualidia",                 price: "€180", duration: "2 h 15",  distance: "195 km", category: "coast"   },
  { to: "Taghazout",                price: "€180", duration: "3 h",     distance: "225 km", category: "coast"   },
  { to: "Taroudant",                price: "€190", duration: "2 h 15",  distance: "224 km", category: "coast"   },

  /* ── Désert & Nature ────────────────────────── */
  { to: "Agafay",                   price: "€60",  duration: "55 min",  distance: "35 km",  category: "desert"  },
  { to: "Ourika Valley",            price: "€60",  duration: "50 min",  distance: "36 km",  category: "desert"  },
  { to: "Imlil",                    price: "€90",  duration: "50 min",  distance: "60 km",  category: "desert"  },
  { to: "Aït Ben Haddou",           price: "€125", duration: "1 h 30",  distance: "132 km", category: "desert"  },
  { to: "Ouarzazate",               price: "€135", duration: "1 h 45",  distance: "205 km", category: "desert"  },
  { to: "Ouzoud Waterfalls",        price: "€135", duration: "1 h 45",  distance: "155 km", category: "desert"  },
  { to: "Dades Valley",             price: "€210", duration: "2 h 45",  distance: "290 km", category: "desert"  },
  { to: "Todra Gorge",              price: "€245", duration: "3 h 15",  distance: "315 km", category: "desert"  },
  { to: "Erfoud",                   price: "€310", duration: "6 h 45",  distance: "418 km", category: "desert"  },
  { to: "Zagora",                   price: "€500", duration: "3 h 45",  distance: "370 km", category: "desert"  },
  { to: "Merzouga",                 price: "€500", duration: "7 h 15",  distance: "545 km", category: "desert"  },
];
