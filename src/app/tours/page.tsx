import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
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

export default function ToursPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#fff8f0]">

        {/* ── Hero ── */}
        <div className="bg-[#062f35]" style={{ paddingTop: "78px" }}>
          <div className="max-w-[1280px] mx-auto px-[clamp(16px,4.5vw,56px)] py-14">
            <p
              className="font-script text-[#f5b63f] mb-2"
              style={{ fontSize: "clamp(22px,2.8vw,34px)", transform: "rotate(-1.5deg)" }}
            >
              Depuis Marrakech
            </p>
            <h1
              className="font-serif font-semibold text-white mb-4 leading-tight"
              style={{ fontSize: "clamp(28px,4vw,52px)" }}
            >
              Private Tours from Marrakech
            </h1>
            <p className="text-white/65 max-w-[500px] leading-relaxed" style={{ fontSize: "clamp(13px,1.15vw,15px)" }}>
              Chauffeur-driven private tours across Morocco — day trips, multi-day circuits, and everything in between.
            </p>
          </div>
        </div>

        {/* ── Grid ── */}
        <div className="max-w-[1280px] mx-auto px-[clamp(16px,4.5vw,56px)] py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tours.map(tour => (
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

                  {/* Days badge */}
                  <span className="absolute top-3 left-3 flex items-center gap-1.5 bg-[#062f35]/85 backdrop-blur-sm text-[#f5b63f] text-[10px] font-bold px-2.5 py-1 rounded-full">
                    <IconClock /> {tour.days}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5">
                  <h2 className="font-serif text-[16px] font-semibold text-[#062f35] leading-tight mb-2">
                    {tour.title}
                  </h2>
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
        </div>

        {/* ── CTA ── */}
        <div className="bg-[#062f35]">
          <div className="max-w-[1280px] mx-auto px-[clamp(16px,4.5vw,56px)] py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <p
                className="font-script text-[#f5b63f] mb-1"
                style={{ fontSize: "clamp(20px,2.2vw,28px)", transform: "rotate(-1deg)" }}
              >
                Sur mesure
              </p>
              <p className="text-white/65 text-[13.5px] max-w-[420px]">
                Can't find what you're looking for? Every tour can be customised — contact us for a personalised itinerary.
              </p>
            </div>
            <a
              href="https://wa.me/212600000000?text=Hello%2C%20I%27d%20like%20to%20enquire%20about%20a%20private%20tour"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-full transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_12px_28px_rgba(245,182,63,.4)] whitespace-nowrap flex-shrink-0"
              style={{
                background: "linear-gradient(135deg,#f5c842 0%,#e8921e 100%)",
                fontSize: "11px", letterSpacing: "0.12em", fontWeight: 700,
                padding: "13px 14px 13px 26px", color: "#1c2e2e", textTransform: "uppercase",
              }}
            >
              Contact Us on WhatsApp
              <span className="w-7 h-7 rounded-full bg-[#1c2e2e]/15 flex items-center justify-center text-[15px]">→</span>
            </a>
          </div>
        </div>

      </main>

      <Footer />
    </>
  );
}
