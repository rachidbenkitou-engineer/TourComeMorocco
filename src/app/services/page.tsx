import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = { title: "Services — Serenity" };

const services = [
  { icon: "bi-activity", color: "#ff689b", title: "Lorem Ipsum", text: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident" },
  { icon: "bi-broadcast", color: "#e9bf06", title: "Dolor Sitema", text: "Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata" },
  { icon: "bi-easel", color: "#3fcdc7", title: "Sed perspiciatis", text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur" },
  { icon: "bi-bounding-box-circles", color: "#41cf2e", title: "Magni Dolores", text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" },
  { icon: "bi-calendar4-week", color: "#d6ff22", title: "Nemo Enim", text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque" },
  { icon: "bi-chat-square-text", color: "#4680ff", title: "Eiusmod Tempor", text: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis eligendi optio" },
];

const features = [
  { img: "/assets/img/features-1.jpg", title: "Voluptatum deleniti atque corrupti", text: "Ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque consequatur necessitatibus itaque sint possimus quasi." },
  { img: "/assets/img/features-2.jpg", title: "Corporis dolorem excepturi sint", text: "Ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque consequatur necessitatibus itaque sint possimus quasi." },
  { img: "/assets/img/features-3.jpg", title: "Sunt consequatur ad ut est nulla", text: "Ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque consequatur necessitatibus itaque sint possimus quasi." },
  { img: "/assets/img/features-4.jpg", title: "Quis excepturi porro totam rem", text: "Ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque consequatur necessitatibus itaque sint possimus quasi." },
];

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs
        title="Services"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      <section id="services" className="services">
        <div className="container">
          <div className="section-title">
            <h2>Services</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.</p>
          </div>
          <div className="row">
            {services.map((s, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <div className="icon-box">
                  <div className="icon"><i className={`bi ${s.icon}`} style={{ color: s.color }} /></div>
                  <h4 className="title"><a href="#">{s.title}</a></h4>
                  <p className="description">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="features">
        <div className="container">
          <div className="section-title">
            <h2>Features</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit.</p>
          </div>
          <div className="row">
            {features.map((f, i) => (
              <div key={i} className="col-lg-3 col-md-6">
                <div className="card" style={{ backgroundImage: `url(${f.img})` }}>
                  <div className="card-body">
                    <h5 className="card-title"><a href="#">{f.title}</a></h5>
                    <p className="card-text">{f.text}</p>
                    <div className="read-more"><a href="#">Read More</a></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
