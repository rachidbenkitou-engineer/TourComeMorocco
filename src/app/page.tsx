import { Navbar }             from "@/components/Navbar";
import { Hero }               from "@/components/Hero";
import { SearchBar }          from "@/components/SearchBar";
import { Stats }              from "@/components/Stats";
import { PopularTransfers }   from "@/components/PopularTransfers";
import { Tours }              from "@/components/Tours";
import { Destinations }       from "@/components/Destinations";
import { About }              from "@/components/About";
import { Testimonials }       from "@/components/Testimonials";
import { CTABanner }          from "@/components/CTABanner";
import { Footer }             from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        {/* SearchBar — juste sous les points du hero */}
        <div className="relative z-10 px-[4%] pt-4 pb-0 -mt-32">
          <div className="max-w-[960px] mx-auto">
            <SearchBar />
          </div>
        </div>

        <Stats />
        <PopularTransfers />
        <Tours />
        <Destinations />
        <About />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
