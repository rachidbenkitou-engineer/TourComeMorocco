import Image from "next/image";
import Link from "next/link";
import { Award, Home, HeadphonesIcon, CreditCard } from "lucide-react";

const points = [
  { Icon: Award,           label: "Expertise et expérience", desc: "Plus de 10 ans dans le voyage"    },
  { Icon: Home,            label: "Offres sur mesure",        desc: "Des voyages adaptés à vos envies" },
  { Icon: HeadphonesIcon,  label: "Service client dédié",     desc: "Une équipe à votre écoute"        },
  { Icon: CreditCard,      label: "Paiement sécurisé",        desc: "Voyagez en toute confiance"       },
];

export function About() {
  return (
    <section
      id="about"
      className="max-w-[1280px] mx-auto px-[4.2%] grid grid-cols-1 md:grid-cols-[1.15fr_1.1fr_.72fr] gap-7 items-center py-2 pb-7 min-h-[290px]"
    >
      {/* ── Collage ── */}
      <div className="relative h-[245px] min-w-0">
        {/* photo 1 */}
        <div className="absolute w-[34%] h-[57%] left-[2%] top-[18%] bg-white p-[7px] pb-5 shadow-[0_5px_12px_rgba(73,53,31,.17)] rotate-[-8deg]">
          <div className="relative w-full h-full">
            <Image
              src="https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?auto=format&fit=crop&w=600&q=85"
              alt="Montgolfière au Maroc"
              fill className="object-cover"
            />
          </div>
        </div>
        {/* photo 2 */}
        <div className="absolute w-[37%] h-[66%] left-[36%] top-[30%] bg-white p-[7px] pb-5 shadow-[0_5px_12px_rgba(73,53,31,.17)] rotate-[8deg]">
          <div className="relative w-full h-full">
            <Image
              src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=85"
              alt="Médina marocaine"
              fill className="object-cover"
            />
          </div>
        </div>
        {/* photo 3 */}
        <div className="absolute w-[36%] h-[59%] left-[62%] top-[38%] bg-white p-[7px] pb-5 shadow-[0_5px_12px_rgba(73,53,31,.17)] rotate-[-13deg]">
          <div className="relative w-full h-full">
            <Image
              src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=600&q=85"
              alt="Plage marocaine"
              fill className="object-cover"
            />
          </div>
        </div>
        {/* flight path */}
        <span className="absolute top-[1%] right-[2%] text-[22px] text-navy -rotate-[20deg]">
          〰 · · · · ✈
        </span>
        {/* caption */}
        <p className="absolute bottom-0 left-[24%] font-script text-[27px]/[1] -rotate-[8deg] text-[#152d2d] m-0">
          Le Maroc<br />vous attend...
        </p>
      </div>

      {/* ── Copy ── */}
      <div className="about-copy">
        <p className="text-[#a77928] font-bold text-[11px] tracking-[0.4px] m-0 mb-2.5">
          POURQUOI CHOISIR TOUR ME MOROCCO ?
        </p>
        <h2 className="font-serif text-[25px] font-semibold tracking-[-0.8px] mb-3.5">
          Une agence de voyage<br />passionnée par l'exploration
        </h2>
        <p className="text-[11px] leading-[1.6] text-[#393f3e] mb-4">
          Chez Tour Me Morocco, nous transformons vos rêves en réalité. Que vous recherchiez
          une aventure dans le Sahara, une immersion dans la médina de Fès ou une escapade
          à Chefchaouen, nous vous offrons des voyages sur mesure avec un service d'exception.
        </p>
        <Link
          href="#contact"
          className="inline-flex items-center gap-4 bg-gold text-[#182c2c] text-[11px] font-bold px-[17px] py-[10px] rounded-[30px] hover:-translate-y-[2px] hover:shadow-[0_7px_20px_rgba(0,0,0,.15)] transition-all duration-200"
        >
          En savoir plus <span className="text-[18px] leading-[10px]">→</span>
        </Link>
      </div>

      {/* ── Points ── */}
      <div className="flex flex-col gap-4">
        {points.map(({ Icon, label, desc }) => (
          <article key={label} className="flex gap-3 items-center">
            <span className="w-[43px] h-[43px] grid place-items-center flex-shrink-0 rounded-full bg-[#f8ead5] text-[#b17c2c]">
              <Icon size={20} strokeWidth={1.5} />
            </span>
            <div>
              <b className="block text-[11px] font-bold text-ink">{label}</b>
              <p className="text-[10px] text-muted mt-1 m-0">{desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
