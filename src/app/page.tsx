import Image from "next/image";
import CounterBox from "@/components/CounterBox";
import ContactButton from "@/components/ContactButton";
import HeroAnimated from "@/components/HeroAnimated";
import { FadeInUp, StaggerGrid, StaggerItem } from "@/components/Animations";

const SERVICES = [
  { icon: "bi-briefcase", color: "#ff689b", title: "Web Apps & CRM", text: "We build custom web applications and CRM systems to streamline your workflows and boost business productivity." },
  { icon: "bi-phone", color: "#e9bf06", title: "Mobile Development", text: "We deliver high-performance iOS and Android apps with seamless user experiences across all devices and platforms." },
  { icon: "bi-globe", color: "#3fcdc7", title: "Website & SEO", text: "We design responsive websites with on-page SEO optimization to grow your online visibility and attract more clients." },
  { icon: "bi-card-checklist", color: "#41cf2e", title: "ServiceNow Apps", text: "We develop and configure ServiceNow applications to automate IT workflows and improve your service delivery efficiency." },
  { icon: "bi-cpu", color: "#94c045", title: "Artificial Intelligence", text: "We integrate AI-powered features into your products to automate tasks, extract insights and enhance user interactions." },
  { icon: "bi-cloud-arrow-up", color: "#4680ff", title: "Cloud & API Integration", text: "We build scalable APIs and cloud integrations to connect your systems, automate data flows and enable flexible modern architectures." },
];

const TEAM = [
  { img: "/assets/img/team/team-1.jpg", name: "Rachid Benkitou", role: "Software & GenAI Engineer", text: "Specializing in building web and mobile applications with AI integration, SEO-optimized websites, and ServiceNow apps.", linkedin: "https://www.linkedin.com/in/rachidbenkitou/", website: "https://www.rachidbenkitou.online/" },
  { img: "/assets/img/team/team-2.jpg", name: "Abdelkabir Elbahmadi", role: "Software & AI Engineer", text: "Specializing in developing web and mobile applications with AI integration and high-performance SEO-optimized websites.", linkedin: "https://www.linkedin.com/in/elbahmadi/", website: null },
];

const PORTFOLIO: { img: string; title: string; tech: string; link: string | null }[] = [
  { img: "/assets/img/portfolio/tour-me-morocco.jpg", title: "Tour Me Morocco", tech: "Travel & Tourism", link: "https://tourmemorocco.com/" },
  { img: "/assets/img/portfolio/via-morocco-tours.jpg", title: "Via Morocco Tours", tech: "Travel & Tourism", link: "https://www.viamoroccotours.com/" },
  { img: "/assets/img/portfolio/drive-me-morocco.jpg", title: "Drive Me Morocco", tech: "Travel & Tourism", link: "https://drivememorocco.com/" },
];

export default function HomePage() {
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
                    <CounterBox icon="bi bi-emoji-smile" end={65} label="Happy Clients" className="py-5" />
                  </StaggerItem>
                  <StaggerItem className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                    <CounterBox icon="bi bi-journal-richtext" end={85} label="Projects" className="py-5" />
                  </StaggerItem>
                  <StaggerItem className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                    <CounterBox icon="bi bi-clock" end={new Date().getFullYear() - 2021} label="Years of experience" className="pb-5 pt-0 pt-lg-5" />
                  </StaggerItem>
                  <StaggerItem className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                    <CounterBox icon="bi bi-award" end={22} label="Awards" className="pb-5 pt-0 pt-lg-5" />
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
                <p className="fst-italic">
                  Noova Technology is a team of high-quality engineers with over 5 years of hands-on experience delivering projects for large companies. That background gives us the technical depth, the best practices, and the professional standards to take your idea from concept to a fully working product — built right, built to last.
                  What sets us apart is our commitment beyond delivery — we stay close, communicate clearly, and support you at every stage, from the first line of code to long after go-live. Your success is our benchmark.
                </p>
                <p>Our services include:</p>
                <ul>
                  <li><i className="bx bx-check-double"></i> Creating applications tailored to business needs.</li>
                  <li><i className="bx bx-check-double"></i> Protecting sensitive data and ensuring smooth operations.</li>
                  <li><i className="bx bx-check-double"></i> Integrating and managing cloud solutions for flexibility and scalability.</li>
                  <li><i className="bx bx-check-double"></i> Providing strategic advice to optimize tech infrastructure and boost efficiency.</li>
                  <li><i className="bx bx-check-double"></i> Integrating AI to automate tasks and enhance your products.</li>
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
                <h3>Call To Action</h3>
                <p>Have a project in mind or need expert advice on your next digital solution? Our team is ready to turn your ideas into powerful Web, Mobile, and AI-driven applications tailored to your business goals.</p>
                <ContactButton className="cta-btn">Call To Action</ContactButton>
              </div>
            </div>
          </FadeInUp>
        </section>

        {/* Services */}
        <section id="services" className="services">
          <div className="container">

            <FadeInUp className="section-title pt-5">
              <h2>Our Services</h2>
            </FadeInUp>

            <StaggerGrid className="row">
              {SERVICES.map((s, i) => (
                <StaggerItem key={i} className="col-md-6">
                  <div className="icon-box">
                    <div className="icon"><i className={`bi ${s.icon}`} style={{ color: s.color }}></i></div>
                    <div>
                      <h4 className="title"><a href="#">{s.title}</a></h4>
                      <p className="description">{s.text}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGrid>

            <FadeInUp delay={0.1}>
              <p className="text-center fst-italic mt-2 mb-4" style={{ color: "#646c55", fontSize: "15px" }}>
                We don&apos;t just deliver — we stay by your side, from kickoff to long after go-live.
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
                  <h2>Portfolio</h2>
                  <p>Noova Technology Team specializes in developing and deploying web and mobile applications, including artificial intelligence.<br /> Our goal is to transform your ideas into real-world projects with the highest quality.</p>
                </div>
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* Portfolio */}
        <section id="portfolio" className="portfolio">
          <div className="container pt-5 pb-0">
            <StaggerGrid className="row g-4">
              {PORTFOLIO.map((item, i) => (
                <StaggerItem key={i} className="col-lg-4 col-md-6 d-flex">
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="portfolio-card w-100">
                      <div className="portfolio-card-img">
                        <Image src={item.img} alt={item.title} width={400} height={210} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                      </div>
                      <div className="portfolio-card-body">
                        <div>
                          <h4>{item.title}</h4>
                          {item.tech && <span className="portfolio-card-tech">{item.tech}</span>}
                        </div>
                        <div className="portfolio-card-arrow">
                          <i className="bi bi-arrow-up-right" style={{ color: "#fff", fontSize: "16px" }}></i>
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div className="portfolio-card w-100" style={{ opacity: 0.5, cursor: "default" }}>
                      <div className="portfolio-card-img">
                        <Image src={item.img} alt={item.title} width={400} height={210} style={{ objectFit: "cover", width: "100%", height: "100%", filter: "grayscale(70%)" }} />
                      </div>
                      <div className="portfolio-card-body">
                        <div>
                          <h4 style={{ color: "#aaa" }}>{item.title}</h4>
                        </div>
                        <div className="portfolio-card-arrow" style={{ background: "#ccc" }}>
                          <i className="bi bi-clock" style={{ color: "#fff", fontSize: "15px" }}></i>
                        </div>
                      </div>
                    </div>
                  )}
                </StaggerItem>
              ))}
            </StaggerGrid>
          </div>
        </section>

        {/* CTA 2 */}
        <section id="cta2" className="cta">
          <FadeInUp>
            <div className="container">
              <div className="text-center">
                <h3>Ready to Meet the Team?</h3>
                <p>Let&apos;s talk about your project and find the right people to bring your idea to life.</p>
              </div>
            </div>
          </FadeInUp>
        </section>

        {/* Team */}
        <section id="team" className="team section-bg">
          <div className="container pt-5 pb-0">
            <StaggerGrid className="row justify-content-center">
              {TEAM.map((m, i) => (
                <StaggerItem key={i} className="col-lg-4 col-md-6 d-flex align-items-stretch">
                  <div className="member">
                    <div className="member-img">
                      <img src={m.img} className="img-fluid" alt={m.name} />
                      <div className="social">
                        {m.linkedin && <a href={m.linkedin} target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin" /></a>}
                        {m.website && <a href={m.website} target="_blank" rel="noopener noreferrer"><i className="bi bi-globe" /></a>}
                      </div>
                    </div>
                    <div className="member-info">
                      <h4>{m.name}</h4>
                      <span>{m.role}</span>
                      <p>{m.text}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGrid>
          </div>
        </section>

      </main>
    </>
  );
}
