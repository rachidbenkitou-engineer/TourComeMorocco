export type TourDay = { day: string; title: string; description: string };
export type TourFaq = { question: string; answer: string };

export type Tour = {
  slug: string;
  image: string;
  gallery: string[];
  days: string;
  title: string;
  short: string;
  intro: string;
  highlights: string[];
  itinerary: TourDay[];
  faqs: TourFaq[];
  featured?: boolean;
};

export const tours: Tour[] = [
  {
    slug: "marrakech-essaouira-day-trip",
    image: "/images/essaouira.jpg",
    gallery: ["/images/road.jpg", "/images/atlas.jpg"],
    days: "1 Day",
    featured: true,
    title: "Marrakech to Essaouira Day Trip",
    short: "Discover the charming Atlantic coastal city of Essaouira",
    intro: "A relaxed day away from Marrakech's heat and hustle, on the Atlantic coast in Essaouira's whitewashed, wind-swept medina and fishing port.",
    highlights: [
      "Essaouira's UNESCO-listed medina and ramparts",
      "The working fishing port and fresh seafood",
      "Free time to browse the souks and art galleries",
      "Round-trip private transport from Marrakech",
    ],
    itinerary: [
      { day: "Full Day", title: "Marrakech → Essaouira → Marrakech", description: "Depart Marrakech in the morning for the roughly 2.5-hour drive to Essaouira. Spend the day exploring the UNESCO-listed medina, the fishing port, and the ramparts overlooking the Atlantic, with free time for lunch and shopping in the souks, before returning to Marrakech in the evening." },
    ],
    faqs: [
      { question: "How long is the drive from Marrakech to Essaouira?", answer: "Around 2.5 hours each way on a good, direct road — comfortable enough as a day trip." },
      { question: "Is lunch included?", answer: "Lunch isn't included in the fixed price, but your driver can recommend a well-regarded seafood restaurant near the port." },
      { question: "Can I stay overnight in Essaouira instead of returning the same day?", answer: "Yes — just let us know when booking and we'll adjust it to a one-way private transfer instead of a round-trip day tour." },
    ],
  },
  {
    slug: "chefchaouen-day-trip",
    image: "/images/chefchaouen.jpg",
    gallery: ["/images/mountainRoad.jpg", "/images/medina.jpg"],
    days: "1 Day",
    featured: true,
    title: "Chefchaouen Day Trip",
    short: "Visit the Blue City from Marrakech",
    intro: "A day trip into the Rif Mountains to wander the blue-washed streets of Chefchaouen — Morocco's most photogenic city.",
    highlights: [
      "Chefchaouen's blue medina and Plaza Uta el-Hammam",
      "Rif Mountain scenery along the drive",
      "Free time for photos, cafés and local crafts",
      "Private transport both ways",
    ],
    itinerary: [
      { day: "Full Day", title: "Marrakech → Chefchaouen → Return", description: "Depart in the morning for the scenic drive to Chefchaouen. Spend several hours exploring the blue-painted medina, the Kasbah museum, and the main square, with time for lunch, before the return drive." },
    ],
    faqs: [
      { question: "How far is Chefchaouen from Marrakech?", answer: "Around 5-6 hours by road — we recommend an early departure to maximise time in the city." },
      { question: "Can I stay overnight in Chefchaouen instead?", answer: "Yes, if you'd rather not do a long round-trip in one day, we can arrange it as a one-way private transfer instead." },
    ],
  },
  {
    slug: "fes-chefchaouen-tour",
    image: "/images/fes.jpg",
    gallery: ["/images/chefchaouen.jpg", "/images/spices.jpg"],
    days: "2 Days",
    featured: true,
    title: "Fes & Chefchaouen Tour",
    short: "Discover Fes Medina and the Blue City in two days",
    intro: "Two of Morocco's most photogenic cities in one short private trip — the medieval medina of Fes and the blue streets of Chefchaouen.",
    highlights: [
      "Fes el-Bali medina, tanneries and artisan souks",
      "Bou Inania Madrasa and the historic medina gates",
      "Chefchaouen's blue medina and mountain views",
      "One overnight stay in Fes included in the route",
    ],
    itinerary: [
      { day: "Day 1", title: "Fes — Full Medina Tour", description: "A full day exploring the UNESCO-listed medina of Fes el-Bali, including the Al Quaraouiyine area, the Bou Inania Madrasa, the famous leather tanneries, and the artisan workshops." },
      { day: "Day 2", title: "Fes → Chefchaouen", description: "Drive north into the Rif Mountains to Chefchaouen. Spend the afternoon wandering the blue-washed medina and the Kasbah museum." },
    ],
    faqs: [
      { question: "How far is Fes to Chefchaouen?", answer: "Around 4 hours through the Rif Mountains, with scenic stops possible along the way." },
      { question: "Is a local guide included for the Fes medina?", answer: "Your driver can navigate the main sights, but for the medina's narrow alleys we recommend adding a licensed local guide, which we can arrange on request." },
    ],
  },
  {
    slug: "9-day-morocco-sahara-fes-chefchaouen",
    image: "/images/desertCamels.jpg",
    gallery: ["/images/aitBenHaddouKasbah.jpg", "/images/chefchaouen.jpg", "/images/fes.jpg"],
    days: "9 Days",
    featured: false,
    title: "9-Day Morocco Tour: Sahara, Fes & Chefchaouen",
    short: "Marrakech → Ait Ben Haddou → Sahara → Fes → Chefchaouen → Rabat → Casablanca",
    intro: "The complete Morocco circuit in nine days: imperial cities, a night under the stars in the Sahara, and the Blue Pearl of Chefchaouen, all in one continuous private journey from Marrakech.",
    highlights: [
      "UNESCO-listed Ait Ben Haddou kasbah",
      "Camel trek and overnight desert camp in the Sahara",
      "Fes medina, tanneries and the Blue Pearl of Chefchaouen",
      "Roman ruins at Volubilis and Rabat's imperial sites",
    ],
    itinerary: [
      { day: "Day 1", title: "Marrakech Arrival", description: "Welcome meeting, with free time to explore Jemaa el-Fnaa and the medina." },
      { day: "Day 2", title: "Marrakech to Dades Valley", description: "Cross the High Atlas via the Tizi n'Tichka Pass, stop at Ait Ben Haddou kasbah, then continue to the Dades Gorge for the night." },
      { day: "Day 3", title: "Dades to Merzouga", description: "Drive through the Todra Gorge and across the Sahara plains to Merzouga, followed by a sunset camel trek to a desert camp." },
      { day: "Day 4", title: "Sahara to Fes", description: "Watch the sunrise over the dunes, then drive north via the Ziz Valley and Midelt's cedar forests to Fes." },
      { day: "Day 5", title: "Fes Medina Tour", description: "A guided walk through the world's largest car-free medina — tanneries, madrasas and souks." },
      { day: "Day 6", title: "Fes to Chefchaouen", description: "Optional stop at the Roman ruins of Volubilis en route to the Blue City." },
      { day: "Day 7", title: "Chefchaouen Exploration", description: "A free morning to wander the blue-washed lanes, then an afternoon transfer toward Rabat." },
      { day: "Day 8", title: "Rabat & Casablanca", description: "Visit the Hassan Tower, the Royal Palace and the Kasbah of the Udayas, then continue to Casablanca for the Hassan II Mosque." },
      { day: "Day 9", title: "Departure", description: "Transfer to the Casablanca or Marrakech airport for your departure." },
    ],
    faqs: [
      { question: "Is this tour private or a small group?", answer: "Available both ways — join a small group departure or book it as a fully private tour with your own vehicle and driver." },
      { question: "Where does the tour end?", answer: "The standard finish is back in Marrakech, but an open-jaw ending in Casablanca can be arranged on request." },
      { question: "Is accommodation included?", answer: "Accommodation and the Sahara desert camp are included on group departures; for private tours we're happy to recommend riads and hotels along the route." },
    ],
  },
  {
    slug: "8-day-morocco-sahara-fes",
    image: "/images/dunes.jpg",
    gallery: ["/images/aitBenHaddouKasbah.jpg", "/images/ifraneSnow.jpg", "/images/fes.jpg"],
    days: "8 Days",
    featured: false,
    title: "8-Day Morocco Highlights: Sahara & Fes",
    short: "Marrakech → Ait Ben Haddou → Sahara → Todra Gorge → Fes → Marrakech",
    intro: "Desert, gorges and Fes in eight days — all the essential highlights without the extra Chefchaouen loop.",
    highlights: [
      "Kasbah route via Ait Ben Haddou and Ouarzazate",
      "Sahara camel trek and overnight desert camp",
      "Todra Gorge's towering cliffs",
      "Fes medina and the cedar forests of Ifrane",
    ],
    itinerary: [
      { day: "Day 1", title: "Marrakech", description: "Arrival and welcome briefing." },
      { day: "Day 2", title: "Marrakech to Ait Ben Haddou to Dades", description: "Tizi n'Tichka Pass, the Ouarzazate film studios (optional), Ait Ben Haddou kasbah, overnight in the Dades Valley." },
      { day: "Day 3", title: "Dades to Merzouga", description: "A walk through the Todra Gorge, drive to Merzouga, then a camel trek into the dunes for a desert camp overnight." },
      { day: "Day 4", title: "Sahara Sunrise to Fes", description: "Watch the sunrise over the dunes, then drive via the Ziz Valley, Midelt and the cedar forests of Ifrane to Fes." },
      { day: "Day 5", title: "Fes Medina", description: "A full guided tour of the tanneries, medersas and the ancient walled city." },
      { day: "Day 6", title: "Fes to Marrakech (via Middle Atlas)", description: "A scenic drive back across the Atlas, arriving in Marrakech in the evening." },
      { day: "Day 7", title: "Marrakech Free Day", description: "Optional: Atlas Mountain hike, hammam and spa, or Majorelle Garden." },
      { day: "Day 8", title: "Departure", description: "Transfer to the Marrakech airport." },
    ],
    faqs: [
      { question: "How is this different from the 9-day version?", answer: "Same desert and Fes highlights, without the extra Chefchaouen loop — a good fit if your schedule is one day tighter." },
      { question: "Does the tour end back in Marrakech?", answer: "Yes, this route is a loop starting and ending in Marrakech." },
    ],
  },
  {
    slug: "ait-ben-haddou-ouarzazate-day-trip",
    image: "/images/aitBenHaddouKasbah.jpg",
    gallery: ["/images/ouarzazate.jpg", "/images/road.jpg"],
    days: "1 Day",
    featured: false,
    title: "Ait Ben Haddou & Ouarzazate Day Trip",
    short: "The Hollywood of Africa and its UNESCO ksar",
    intro: "A day trip from Marrakech through the Tizi n'Tichka Pass to the UNESCO-listed Ait Ben Haddou kasbah and Ouarzazate's film studios.",
    highlights: [
      "Tizi n'Tichka High Atlas mountain pass",
      "Ait Ben Haddou UNESCO-listed kasbah",
      "Ouarzazate film studios (optional visit)",
      "Stunning Atlas mountain scenery",
    ],
    itinerary: [
      { day: "Full Day", title: "Marrakech → Ait Ben Haddou → Ouarzazate → Marrakech", description: "Cross the High Atlas via the Tizi n'Tichka Pass (2,260m), visit the iconic Ait Ben Haddou kasbah — a UNESCO World Heritage site that has served as a backdrop for countless films — then stop at the film studios in Ouarzazate before the return drive to Marrakech." },
    ],
    faqs: [
      { question: "How long is the drive over the Tizi n'Tichka Pass?", answer: "About 2.5 to 3 hours each way — a scenic mountain drive with stops for photos along the way." },
      { question: "Can I extend this into an overnight trip?", answer: "Yes — we can arrange an overnight stay in Ouarzazate or the Dades Valley to make the most of the area." },
    ],
  },
];

export function getTour(slug: string): Tour | undefined {
  return tours.find(t => t.slug === slug);
}
