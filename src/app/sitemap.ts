import type { MetadataRoute } from "next";
import { transfers }  from "@/data/transfers";
import { tours }      from "@/data/tours";
import { excursions } from "@/data/excursions";

const BASE    = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tourmemorocco.com";
const LOCALES = ["fr", "en", "ar", "it"] as const;

function entry(path: string, priority: number, freq: MetadataRoute.Sitemap[number]["changeFrequency"]): MetadataRoute.Sitemap[number] {
  return { url: `${BASE}${path}`, lastModified: new Date(), changeFrequency: freq, priority };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const localePages = LOCALES.flatMap(l => [
    entry(`/${l}`,            1.0, "weekly"),
    entry(`/${l}/transfers`,  0.9, "weekly"),
    entry(`/${l}/excursions`, 0.9, "weekly"),
    entry(`/${l}/tours`,      0.9, "weekly"),
    entry(`/${l}/gallery`,    0.6, "monthly"),
  ]);

  const transferPages = LOCALES.flatMap(l =>
    transfers.map(t => entry(`/${l}/transfers/${t.slug}`, 0.85, "monthly"))
  );

  const excursionPages = LOCALES.flatMap(l =>
    excursions.map(e => entry(`/${l}/excursions/${e.slug}`, 0.85, "monthly"))
  );

  const tourPages = LOCALES.flatMap(l =>
    tours.map(t => entry(`/${l}/tours/${t.slug}`, 0.85, "monthly"))
  );

  return [...localePages, ...transferPages, ...excursionPages, ...tourPages];
}
