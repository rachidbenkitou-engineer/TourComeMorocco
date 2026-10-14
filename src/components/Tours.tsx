import Image from "next/image";
import Link from "next/link";
import { tours } from "@/data/tours";

function IconClock() {
  return (
    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>
    </svg>
  );
}
function IconArrow() {
  return (
    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  );
}

const featured = tours.filter(t => t.featured);

export function Tours() {
  return (
    <section id="tours" className="-mt-20 pt-0 pb-16 bg-[#fff8f0]">
      <div className="max-w-[1280px] mx-auto px-[clamp(16px,4.5vw,56px)]">

        {/* Header */}
        <div className="mb-10">
          <p
            className="font-script text-[#f5b63f] mb-1"
            style={{ fontSize: "clamp(20px,2.2vw,28px)", transform: "rotate(-1.5deg)" }}
          >
            Private Tours
          </p>
          <h2
            className="font-serif font-semibold text-[#062f35] leading-tight"
            style={{ fontSize: "clamp(26px,3.2vw,42px)" }}
          >
            Our Best Tours
          </h2>
          <p className="text-[#5a7578] text-[13.5px] mt-2 max-w-[460px] leading-relaxed">
            Chauffeur-driven private day trips and multi-day circuits — fixed prices, no surprises.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map(tour => (
            <Link
              key={tour.slug}
              href={`/tours/${tour.slug}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(6,47,53,.08)] hover:shadow-[0_12px_36px_rgba(6,47,53,.16)] transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-[220px] overflow-hidden flex-shrink-0">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#031e22]/80 via-[#031e22]/20 to-transparent" />

                <span className="absolute top-3 left-3 flex items-center gap-1.5 bg-[#062f35]/85 backdrop-blur-sm text-[#f5b63f] text-[10px] font-bold px-2.5 py-1 rounded-full">
                  <IconClock /> {tour.days}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5">
                <h3 className="font-serif text-[16px] font-semibold text-[#062f35] leading-tight mb-2">
                  {tour.title}
                </h3>
                <p className="text-[12.5px] text-[#5a7578] leading-relaxed flex-1 mb-4">
                  {tour.short}
                </p>

                <div className="flex items-center justify-between border-t border-[#f0ebe3] pt-4 mt-auto">
                  <span className="text-[10.5px] font-semibold text-[#a87627] uppercase tracking-[0.08em]">
                    Private Tour
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-[#062f35] group-hover:bg-[#0a3d45] text-white text-[10.5px] font-semibold px-3.5 py-2 rounded-full transition-colors">
                    View Tour <IconArrow />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* See all */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/tours"
            className="flex items-center gap-2 text-[12px] font-bold text-[#062f35] border-2 border-[#062f35] px-8 py-3 rounded-full hover:bg-[#062f35] hover:text-white transition-all duration-200"
          >
            See all tours <IconArrow />
          </Link>
        </div>

      </div>
    </section>
  );
}
