import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = { title: "Team — Serenity" };

const members = [
  { img: "/assets/img/team/team-1.jpg", name: "Walter White", role: "Chief Executive Officer", text: "Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat." },
  { img: "/assets/img/team/team-2.jpg", name: "Sarah Jhinson", role: "Product Manager", text: "Reprehenderit fugiat elit in do ea culpa sunt qui laboris ad quis nostrud sed." },
  { img: "/assets/img/team/team-3.jpg", name: "William Anderson", role: "CTO", text: "Voluptatibus commodi nostrum asperiores vel blanditiis labore aliquam quaerat mollitia laborum occaecati." },
  { img: "/assets/img/team/team-4.jpg", name: "Amanda Jepson", role: "Accountant", text: "Rerum officiis unde molestiae pariatur natus sint atque consectetur optio cumque a reiciendis nostrum." },
  { img: "/assets/img/team/team-5.jpg", name: "Brian Doe", role: "Marketing", text: "Illo non quis distinctio at consequatur quaerat donec facilis aut voluptas accusantium vero." },
  { img: "/assets/img/team/team-6.jpg", name: "Josepha Palas", role: "Designer", text: "Fuga in quo voluptatem eligendi quae sed ut perspiciatis architecto sed vel non ratione." },
];

export default function TeamPage() {
  return (
    <>
      <Breadcrumbs
        title="Team"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        crumbs={[{ label: "Home", href: "/" }, { label: "Team" }]}
      />

      <section id="team" className="team section-bg">
        <div className="container">
          <div className="section-title">
            <h2>Team</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit.</p>
          </div>
          <div className="row">
            {members.map((m, i) => (
              <div key={i} className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="member">
                  <div className="member-img">
                    <img src={m.img} className="img-fluid" alt={m.name} />
                    <div className="social">
                      <a href="#"><i className="bi bi-twitter" /></a>
                      <a href="#"><i className="bi bi-facebook" /></a>
                      <a href="#"><i className="bi bi-instagram" /></a>
                      <a href="#"><i className="bi bi-linkedin" /></a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>{m.name}</h4>
                    <span>{m.role}</span>
                    <p>{m.text}</p>
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
