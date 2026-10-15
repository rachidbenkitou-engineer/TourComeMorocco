import { Hero }               from "@/components/Hero";
import { SearchBar }          from "@/components/SearchBar";
import { Stats }              from "@/components/Stats";
import { PopularTransfers }   from "@/components/PopularTransfers";
import { Tours }              from "@/components/Tours";
import { Excursions }         from "@/components/Excursions";
import { Destinations }       from "@/components/Destinations";
import { About }              from "@/components/About";
import { Testimonials }       from "@/components/Testimonials";
import { CTABanner }          from "@/components/CTABanner";

export default function Home() {
  return (
    <main>
        <Hero />

        {/* SearchBar — juste sous les points du hero */}
        <div className="relative z-50 px-[4%] pt-0 pb-0 mt-0 bg-[#062f35]">
          <div className="max-w-[960px] mx-auto">
            <SearchBar />
          </div>
        </div>

        <Stats />
        <PopularTransfers />
        <Tours />
        <Excursions />
        <Destinations />
        <About />
        <Testimonials />
        <CTABanner />
      </main>
  );
}
