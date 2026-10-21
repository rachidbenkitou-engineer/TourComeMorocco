"use client";
import Image from "next/image";
import CounterBox from "@/components/CounterBox";
import ContactButton from "@/components/ContactButton";
import HeroAnimated from "@/components/HeroAnimated";
import { FadeInUp, StaggerGrid, StaggerItem } from "@/components/Animations";
import { useLanguage } from "@/context/LanguageContext";

const SERVICE_META = [
  { icon: "bi-briefcase", color: "#ff689b" },
  { icon: "bi-phone", color: "#e9bf06" },
  { icon: "bi-globe", color: "#3fcdc7" },
  { icon: "bi-card-checklist", color: "#41cf2e" },
  { icon: "bi-cpu", color: "#94c045" },
  { icon: "bi-cloud-arrow-up", color: "#4680ff" },
];

const TEAM = [
  { img: "/assets/img/team/team-1.jpg", name: "Rachid Benkitou", role: "Software & GenAI Engineer", text: "Specializing in building web and mobile applications with AI integration, SEO-optimized websites, and ServiceNow apps.", linkedin: "https://www.linkedin.com/in/rachidbenkitou/", website: "https://www.rachidbenkitou.online/" },
  { img: "/assets/img/team/team-2.jpg", name: "Abdelkabir Elbahmadi", role: "Software & AI Engineer", text: "Specializing in developing web and mobile applications with AI integration and high-performance SEO-optimized websites.", linkedin: "https://www.linkedin.com/in/elbahmadi/", website: null },
  { img: "/assets/img/team/team-3.jpg", name: "Fatima Ezzahrae Benkitou", role: "Frontend Developer", text: "Specializing in building modern, responsive frontend applications with clean UI/UX and seamless user experiences across web platforms.", linkedin: null, website: null },
];

const PORTFOLIO: { img: string; title: string; tech: "travel" | "techIT"; link: string | null }[] = [
  { img: "/assets/img/portfolio/tour-me-morocco.jpg", title: "Tour Me Morocco", tech: "travel", link: "https://tourmemorocco.com/" },
  { img: "/assets/img/portfolio/via-morocco-tours.jpg", title: "Via Morocco Tours", tech: "travel", link: "https://www.viamoroccotours.com/" },
  { img: "/assets/img/portfolio/drive-me-morocco.jpg", title: "Drive Me Morocco", tech: "travel", link: "https://drivememorocco.com/" },
  { img: "/assets/img/portfolio/morocco-vip-shuttle.jpg", title: "Morocco VIP Shuttle", tech: "travel", link: "https://moroccovipshuttle.com/en" },
  { img: "/assets/img/portfolio/private-transfers-morocco.jpg", title: "Private Transfers Morocco", tech: "travel", link: "https://privatetransfersmorocco.com/en" },
  { img: "/assets/img/portfolio/noova-technology.jpg", title: "Noova Technology", tech: "techIT", link: "https://noovatechnology.com/" },
];

export default function HomePage() {
  const { tr } = useLanguage();
  return (
    <>
      {/* Hero */}
      <section id="hero">
        <div className="hero-container">
          <HeroAnimated />
        </div>
      </section>

      <main id="main">

        {/* About */}
        <section id="about" className="about">
          <div className="container">

            <StaggerGrid className="row justify-content-end">
              <div className="col-lg-11">
                <div className="row justify-content-end">
                  <StaggerItem className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                    <CounterBox icon="bi bi-emoji-smile" end={65} label={tr.about.happyClients} className="py-5" />
                  </StaggerItem>
                  <StaggerItem className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                    <CounterBox icon="bi bi-journal-richtext" end={85} label={tr.about.projects} className="py-5" />
                  </StaggerItem>
                  <StaggerItem className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                    <CounterBox icon="bi bi-clock" end={new Date().getFullYear() - 2021} label={tr.about.experience} className="pb-5 pt-0 pt-lg-5" />
                  </StaggerItem>
                  <StaggerItem className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                    <CounterBox icon="bi bi-award" end={22} label={tr.about.awards} className="pb-5 pt-0 pt-lg-5" />
                  </StaggerItem>
                </div>
              </div>
            </StaggerGrid>

            <div className="row">

              <FadeInUp className="col-lg-6 video-box align-self-baseline position-relative">
                <Image src="/assets/img/about.jpg" className="img-fluid" alt="About Noova Technology" width={600} height={450} />
                <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="glightbox play-btn mb-4" target="_blank" rel="noopener noreferrer"></a>
              </FadeInUp>

              <FadeInUp delay={0.15} className="col-lg-6 pt-3 pt-lg-0 content">
                <p className="fst-italic">{tr.about.paragraph}</p>
                <p>{tr.about.servicesInclude}</p>
                <ul>
                  {tr.about.items.map((item, i) => (
                    <li key={i}><i className="bx bx-check-double"></i> {item}</li>
                  ))}
                </ul>
              </FadeInUp>

            </div>

          </div>
        </section>

        {/* CTA */}
        <section id="cta" className="cta">
          <FadeInUp>
            <div className="container">
              <div className="text-center">
                <h3>{tr.cta.title}</h3>
                <p>{tr.cta.description}</p>
                <ContactButton className="cta-btn">{tr.cta.button}</ContactButton>
              </div>
            </div>
          </FadeInUp>
        </section>

        {/* Services */}
        <section id="services" className="services">
          <div className="container">

            <FadeInUp className="section-title pt-5">
              <h2>{tr.services.title}</h2>
            </FadeInUp>

            <StaggerGrid className="row">
              {SERVICE_META.map((s, i) => (
                <StaggerItem key={i} className="col-md-6">
                  <div className="icon-box">
                    <div className="icon"><i className={`bi ${s.icon}`} style={{ color: s.color }}></i></div>
                    <div>
                      <h4 className="title"><a href="#">{tr.services.items[i].title}</a></h4>
                      <p className="description">{tr.services.items[i].text}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGrid>

            <FadeInUp delay={0.1}>
              <p className="text-center fst-italic mt-2 mb-4" style={{ color: "#646c55", fontSize: "15px" }}>
                {tr.services.tagline}
              </p>
            </FadeInUp>

          </div>
        </section>

        {/* Portfolio Breadcrumbs */}
        <section id="breadcrumbs" className="breadcrumbs">
          <div className="breadcrumb-hero">
            <FadeInUp>
              <div className="container">
                <div className="breadcrumb-hero">
                  <h2>{tr.portfolio.title}</h2>
                  <p>{tr.portfolio.description}</p>
                </div>
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* Portfolio */}
        <section id="portfolio" className="portfolio">
          <div className="container pt-5 pb-0">
            <StaggerGrid className="row g-4">
              {PORTFOLIO.map((item, i) => {
                const domain = item.link ? (() => {
                  let d = item.link.replace("https://", "").replace("http://", "").replace(/\/en\/?$/, "").replace(/\/$/, "");
                  if (!d.startsWith("www.")) d = "www." + d;
                  return d;
                })() : "";
                const inner = (
                  <div style={{
                    borderRadius: "16px", overflow: "hidden", width: "100%",
                    boxShadow: "0 4px 24px rgba(60,65,51,0.09)",
                    border: "1px solid #eef1e8", background: "#fff",
                    transition: "transform 0.2s, box-shadow 0.2s",
                  }}>
                    {/* Browser mockup header */}
                    <div style={{ background: "#f4f6ef", padding: "10px 14px", display: "flex", alignItems: "center", gap: "8px", borderBottom: "1px solid #e8eddf" }}>
                      <div style={{ display: "flex", gap: "5px" }}>
                        <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ff5f57", display: "inline-block" }} />
                        <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ffbd2e", display: "inline-block" }} />
                        <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#28c840", display: "inline-block" }} />
                      </div>
                      <div style={{
                        flex: 1, background: "#fff", borderRadius: "6px", padding: "4px 10px",
                        fontSize: "11px", color: "#888", border: "1px solid #e0e5d8",
                        overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                      }}>
                        {domain || "coming soon"}
                      </div>
                    </div>
                    {/* Visual area */}
                    <div style={{
                      height: "110px", background: "linear-gradient(135deg, #2e3127 0%, #4a5040 100%)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      position: "relative", overflow: "hidden",
                    }}>
                      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(148,192,69,0.15) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                      <span style={{ fontSize: "36px", fontWeight: 900, color: "rgba(148,192,69,0.25)", letterSpacing: "4px", userSelect: "none", zIndex: 1 }}>
                        {item.title.split(" ").map((w) => w[0]).join("").slice(0, 3).toUpperCase()}
                      </span>
                    </div>
                    {/* Card footer */}
                    <div style={{ padding: "14px 18px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <div>
                        <div style={{ fontSize: "15px", fontWeight: 700, color: "#3c4133" }}>{item.title}</div>
                        {item.tech && <div style={{ fontSize: "11px", color: "#94c045", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.7px", marginTop: "2px" }}>{tr.portfolio.categories[item.tech]}</div>}
                      </div>
                      <div style={{
                        width: "34px", height: "34px", borderRadius: "50%", flexShrink: 0,
                        background: item.link ? "#94c045" : "#ddd",
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}>
                        <i className={`bi ${item.link ? "bi-arrow-up-right" : "bi-clock"}`} style={{ color: "#fff", fontSize: "15px" }} />
                      </div>
                    </div>
                  </div>
                );
                return (
                  <StaggerItem key={i} className="col-lg-4 col-md-6 d-flex">
                    {item.link
                      ? <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ width: "100%", textDecoration: "none" }}>{inner}</a>
                      : <div style={{ width: "100%" }}>{inner}</div>}
                  </StaggerItem>
                );
              })}
            </StaggerGrid>
          </div>
        </section>

        {/* CTA 2 */}
        <section id="cta2" className="cta">
          <FadeInUp>
            <div className="container">
              <div className="text-center">
                <h3>{tr.cta2.title}</h3>
                <p>{tr.cta2.description}</p>
              </div>
            </div>
          </FadeInUp>
        </section>

        {/* Team */}
        <section id="team" className="team section-bg">
          <div className="container pt-5 pb-5">
            <StaggerGrid className="row justify-content-center g-4">
              {TEAM.map((m, i) => {
                const initials = m.name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();
                return (
                  <StaggerItem key={i} className="col-lg-4 col-md-6 d-flex">
                    <div style={{
                      background: "#fff", borderRadius: "20px", width: "100%",
                      boxShadow: "0 4px 24px rgba(60,65,51,0.08)",
                      overflow: "hidden", display: "flex", flexDirection: "column",
                    }}>
                      {/* Colored header strip */}
                      <div style={{
                        background: "linear-gradient(135deg, #3c4133 0%, #5a6350 100%)",
                        padding: "28px 24px 20px", display: "flex", alignItems: "center", gap: "16px",
                      }}>
                        {/* Avatar initials */}
                        <div style={{
                          width: "58px", height: "58px", borderRadius: "50%", flexShrink: 0,
                          background: "rgba(148,192,69,0.18)", border: "2.5px solid #94c045",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          fontSize: "20px", fontWeight: 800, color: "#94c045", letterSpacing: "1px",
                        }}>
                          {initials}
                        </div>
                        <div>
                          <h4 style={{ color: "#fff", fontSize: "16px", fontWeight: 700, margin: 0 }}>{m.name}</h4>
                          <span style={{ fontSize: "12px", color: "#94c045", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.8px" }}>{tr.team.members[i].role}</span>
                        </div>
                      </div>
                      {/* Body */}
                      <div style={{ padding: "20px 24px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                        <p style={{ fontSize: "14px", color: "#646c55", lineHeight: "1.7", margin: 0 }}>{tr.team.members[i].text}</p>
                        {(m.linkedin || m.website) && (
                          <div style={{ display: "flex", gap: "8px", marginTop: "18px" }}>
                            {m.linkedin && (
                              <a href={m.linkedin} target="_blank" rel="noopener noreferrer" style={{
                                display: "flex", alignItems: "center", gap: "6px",
                                padding: "7px 14px", borderRadius: "50px",
                                background: "rgba(148,192,69,0.1)", border: "1.5px solid rgba(148,192,69,0.3)",
                                color: "#94c045", fontSize: "13px", fontWeight: 600, textDecoration: "none",
                              }}>
                                <i className="bi bi-linkedin" style={{ fontSize: "14px" }} /> LinkedIn
                              </a>
                            )}
                            {m.website && (
                              <a href={m.website} target="_blank" rel="noopener noreferrer" style={{
                                display: "flex", alignItems: "center", gap: "6px",
                                padding: "7px 14px", borderRadius: "50px",
                                background: "rgba(148,192,69,0.1)", border: "1.5px solid rgba(148,192,69,0.3)",
                                color: "#94c045", fontSize: "13px", fontWeight: 600, textDecoration: "none",
                              }}>
                                <i className="bi bi-globe" style={{ fontSize: "14px" }} /> Website
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerGrid>
          </div>
        </section>

      </main>
    </>
  );
}
