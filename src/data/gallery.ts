export type GalleryCategory = "guests" | "places" | "road";

export type GalleryImage = {
  src: string;
  alt: string;
  category: GalleryCategory;
};

export const GALLERY_CATEGORIES: { id: GalleryCategory | "all"; label: string }[] = [
  { id: "all",    label: "All Photos"     },
  { id: "guests", label: "Our Guests"     },
  { id: "places", label: "Places Visited" },
  { id: "road",   label: "On the Road"    },
];

export const galleryImages: GalleryImage[] = [
  { src: "/gallery/g01.jpg", alt: "Découverte de la vallée des Dades",          category: "guests" },
  { src: "/gallery/g02.jpg", alt: "Volubilis – Arc de Caracalla",               category: "places" },
  { src: "/gallery/g03.jpg", alt: "Panorama sur la médina de Fès",              category: "guests" },
  { src: "/gallery/g04.jpg", alt: "Rencontre avec les singes de l'Atlas",       category: "guests" },
  { src: "/gallery/g05.jpg", alt: "Chefchaouen, la ville bleue",                category: "guests" },
  { src: "/gallery/g06.jpg", alt: "Vallée du Draa",                             category: "places" },
  { src: "/gallery/g07.jpg", alt: "Un message qui nous touche",                 category: "road"   },
  { src: "/gallery/g08.jpg", alt: "Aït Ben Haddou",                             category: "places" },
  { src: "/gallery/g09.jpg", alt: "Place centrale de Safi",                     category: "places" },
  { src: "/gallery/g10.jpg", alt: "Vue sur Agadir et sa baie",                  category: "places" },
  { src: "/gallery/g11.jpg", alt: "Ford Transit Custom – Notre flotte",         category: "road"   },
  { src: "/gallery/g12.jpg", alt: "Arrivée à Chefchaouen",                      category: "road"   },
  { src: "/gallery/g13.jpg", alt: "Renault Trafic Tourisme",                    category: "road"   },
  { src: "/gallery/g14.jpg", alt: "Gorges du Todra avec nos clients",           category: "guests" },
  { src: "/gallery/g15.jpg", alt: "En route dans le Sud marocain",              category: "road"   },
  { src: "/gallery/g16.jpg", alt: "Škoda Kodiaq – Sur la route",               category: "road"   },
  { src: "/gallery/g17.jpg", alt: "Forêt de cèdres d'Azrou",                   category: "places" },
  { src: "/gallery/g18.jpg", alt: "Palais Royal de Fès",                        category: "places" },
  { src: "/gallery/g19.jpg", alt: "Cascades d'Ouzoud",                          category: "places" },
  { src: "/gallery/g20.jpg", alt: "Prise en charge hôtel à Agadir",            category: "road"   },
  { src: "/gallery/g21.jpg", alt: "Ruines romaines de Volubilis",               category: "places" },
  { src: "/gallery/g22.jpg", alt: "Chellah – Rabat",                            category: "places" },
  { src: "/gallery/g23.jpg", alt: "Notre flotte à Marrakech",                   category: "road"   },
  { src: "/gallery/g24.jpg", alt: "Balade à dos de chameau – Merzouga",         category: "places" },
  { src: "/gallery/g25.jpg", alt: "Restaurant au bord de l'Ourika",            category: "places" },
  { src: "/gallery/g26.jpg", alt: "Savoy Le Grand Hôtel – Marrakech",          category: "road"   },
  { src: "/gallery/g27.jpg", alt: "Nos clients dans le désert de Merzouga",    category: "guests" },
  { src: "/gallery/g28.jpg", alt: "Aventure dans les dunes du Sahara",         category: "guests" },
  { src: "/gallery/g29.jpg", alt: "Balade en 4x4 dans les gorges",             category: "guests" },
  { src: "/gallery/g30.jpg", alt: "Coucher de soleil sur l'Atlas",             category: "places" },
  { src: "/gallery/g31.jpg", alt: "Rencontre au coeur de la médina",           category: "guests" },
  { src: "/gallery/g32.jpg", alt: "Route panoramique vers les kasbahs",        category: "road"   },
];
