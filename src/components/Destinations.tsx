import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";

const destinations = [
  {
    name: "Marrakech",
    country: "Maroc",
    img: "https://images.unsplash.com/photo-1597212618440-806262de4f6b?auto=format&fit=crop&w=900&q=85",
    href: "#contact",
  },
  {
    name: "Fès",
    country: "Maroc",
    img: "https://images.unsplash.com/photo-1527838832700-5059252407fa?auto=format&fit=crop&w=900&q=85",
    href: "#contact",
  },
  {
    name: "Désert du Sahara",
    country: "Maroc",
    img: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=900&q=85",
    href: "#contact",
  },
  {
    name: "Chefchaouen",
    country: "Maroc",
    img: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=85",
    href: "#contact",
  },
];

export function Destinations() {
  return (
    <section
      id="destinations"
      className="max-w-[1280px] mx-auto px-[4.2%] pt-3 pb-4"
      aria-labelledby="dest-heading"
    >
      {/* Eyebrow */}
      <div className="flex items-center justify-center gap-2.5 text-[#a77a2c] text-[11px] font-bold tracking-[0.4px] mb-1">
        <span className="h-px w-20 bg-[#c99b3c]" />
        NOS DESTINATIONS
        <span className="h-px w-20 bg-[#c99b3c]" />
      </div>

      {/* Heading row */}
      <div className="flex items-center justify-between px-[2.7%] my-2 gap-3">
        <div>
          <h2 id="dest-heading" className="font-serif text-[25px]/[1.15] font-semibold tracking-[-0.8px] text-ink m-0">
            Des plus belles <em className="not-italic text-[#a87627]">destinations</em>
          </h2>
          <p className="text-[11px] mt-1.5 text-[#333]">
            Explorez des lieux extraordinaires au cœur du Maroc
          </p>
        </div>
        <Link
          href="#sejours"
          className="flex-shrink-0 border border-[#c69b43] rounded-[24px] px-3.5 py-2 text-[10px] flex items-center gap-2 whitespace-nowrap text-ink hover:bg-[#f5b63f]/10 transition-colors"
        >
          Voir toutes les destinations
          <span className="text-[16px] text-[#a5792c]">→</span>
        </Link>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {destinations.map(d => (
          <Link
            key={d.name}
            href={d.href}
            className="group relative h-[176px] lg:h-[220px] rounded-[10px] overflow-hidden block bg-[#ddd] shadow-[0_2px_4px_rgba(0,0,0,.12)]"
          >
            <Image
              src={d.img}
              alt={d.name}
              fill
              className="object-cover transition-transform duration-400 group-hover:scale-[1.06]"
            />
            {/* gradient */}
            <div className="absolute inset-[40%_0_0_0] bg-gradient-to-t from-black/80 to-transparent" />
            {/* info bar */}
            <span className="absolute z-10 bottom-2.5 left-3 right-3 flex items-end justify-between text-white">
              <span>
                <b className="flex items-center gap-1 text-[14px] font-bold">
                  <MapPin size={12} className="text-gold" />
                  {d.name}
                </b>
                <small className="block text-[11px] text-white/75 mt-0.5 ml-4">{d.country}</small>
              </span>
              <span className="bg-gold text-[#183437] w-[29px] h-[29px] grid place-items-center rounded-full text-[17px] font-bold flex-shrink-0 group-hover:scale-110 transition-transform">
                →
              </span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
