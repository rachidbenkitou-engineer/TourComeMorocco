import Breadcrumbs from "@/components/Breadcrumbs";
import CounterBox from "@/components/CounterBox";
import SkillBar from "@/components/SkillBar";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import ClientsSlider from "@/components/ClientsSlider";

export const metadata = { title: "About — Serenity" };

const workProcess = [
  {
    img: "/assets/img/work-process-1.png",
    title: "Lorem Ipsum",
    bullets: ["Ullamco laboris nisi ut aliquip ex ea commodo consequat.", "Duis aute irure dolor in reprehenderit in voluptate velit.", "Ullamco laboris nisi ut aliquip ex ea commodo consequat."],
    text: "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    img: "/assets/img/work-process-2.png",
    title: "Repellat Nihil",
    bullets: ["Ullamco laboris nisi ut aliquip ex ea commodo consequat.", "Duis aute irure dolor in reprehenderit in voluptate velit.", "Ullamco laboris nisi ut aliquip ex ea commodo consequat."],
    text: "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    img: "/assets/img/work-process-3.png",
    title: "Ad ad velit qui",
    bullets: ["Ullamco laboris nisi ut aliquip ex ea commodo consequat.", "Duis aute irure dolor in reprehenderit in voluptate velit.", "Ullamco laboris nisi ut aliquip ex ea commodo consequat."],
    text: "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    img: "/assets/img/work-process-4.png",
    title: "Nulla omnis fugit",
    bullets: ["Ullamco laboris nisi ut aliquip ex ea commodo consequat.", "Duis aute irure dolor in reprehenderit in voluptate velit.", "Ullamco laboris nisi ut aliquip ex ea commodo consequat."],
    text: "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

const skills = [
  { label: "HTML", value: 100 },
  { label: "CSS", value: 90 },
  { label: "JavaScript", value: 75 },
  { label: "Photoshop", value: 55 },
  { label: "WordPress/CMS", value: 85 },
  { label: "Bootstrap", value: 75 },
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs
        title="About"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      {/* Stats */}
      <section id="about" className="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 order-1 order-lg-2">
              <img src="/assets/img/about.jpg" className="img-fluid" alt="About" />
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
              <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul>
                <li><i className="bi bi-check-circle" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                <li><i className="bi bi-check-circle" /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                <li><i className="bi bi-check-circle" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperd quam.</li>
              </ul>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-3 col-md-6">
              <CounterBox icon="bi bi-emoji-smile" end={232} label="Happy Clients" />
            </div>
            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
              <CounterBox icon="bi bi-journal-richtext" end={521} label="Projects" />
            </div>
            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
              <CounterBox icon="bi bi-headset" end={1463} label="Hours Of Support" />
            </div>
            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
              <CounterBox icon="bi bi-people" end={15} label="Hard Workers" />
            </div>
          </div>
        </div>
      </section>

      {/* Work Process */}
      <section id="work-process" className="work-process">
        <div className="container">
          <div className="section-title">
            <h2>Work Process</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate.</p>
          </div>
          {workProcess.map((step, i) => (
            <div key={i} className={`row content${i > 0 ? " mt-5" : ""}`}>
              <div className={`col-md-5 ${i % 2 !== 0 ? "order-1 order-md-2" : ""}`}>
                <img src={step.img} className="img-fluid" alt={step.title} />
              </div>
              <div className={`col-md-7 pt-4 ${i % 2 !== 0 ? "order-2 order-md-1" : ""}`}>
                <h3>{step.title}</h3>
                <p className="fst-italic">{step.text}</p>
                <ul>
                  {step.bullets.map((b, j) => (
                    <li key={j}><i className="bi bi-check" /> {b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="skills section-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex align-items-center">
              <img src="/assets/img/skills-img.jpg" className="img-fluid" alt="Skills" />
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 content">
              <h3>Necessitatibus eius consequatur ex aliquid fuga</h3>
              <p className="fst-italic">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              {skills.map((s, i) => (
                <SkillBar key={i} label={s.label} value={s.value} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="testimonials section-bg">
        <div className="container">
          <div className="section-title">
            <h2>Testimonials</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.</p>
          </div>
          <TestimonialsSlider />
        </div>
      </section>

      {/* Clients */}
      <section id="clients" className="clients section-bg">
        <div className="container">
          <div className="section-title">
            <h2>Clients</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid.</p>
          </div>
          <ClientsSlider />
        </div>
      </section>
    </>
  );
}
