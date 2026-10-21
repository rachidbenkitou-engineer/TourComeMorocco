import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = { title: "Pricing — Serenity" };

const plans = [
  {
    name: "Free",
    price: 0,
    period: "/month",
    features: [
      { text: "Aida dere", available: true },
      { text: "Nec feugiat nisl", available: true },
      { text: "Nulla at volutpat dola", available: true },
      { text: "Pharetra massa", available: false },
      { text: "Massa ultricies mi", available: false },
    ],
    featured: false,
    badge: null,
  },
  {
    name: "Business",
    price: 19,
    period: "/month",
    features: [
      { text: "Aida dere", available: true },
      { text: "Nec feugiat nisl", available: true },
      { text: "Nulla at volutpat dola", available: true },
      { text: "Pharetra massa", available: true },
      { text: "Massa ultricies mi", available: false },
    ],
    featured: false,
    badge: null,
  },
  {
    name: "Developer",
    price: 29,
    period: "/month",
    features: [
      { text: "Aida dere", available: true },
      { text: "Nec feugiat nisl", available: true },
      { text: "Nulla at volutpat dola", available: true },
      { text: "Pharetra massa", available: true },
      { text: "Massa ultricies mi", available: true },
    ],
    featured: true,
    badge: "POPULAR",
  },
  {
    name: "Ultimate",
    price: 49,
    period: "/month",
    features: [
      { text: "Aida dere", available: true },
      { text: "Nec feugiat nisl", available: true },
      { text: "Nulla at volutpat dola", available: true },
      { text: "Pharetra massa", available: true },
      { text: "Massa ultricies mi", available: true },
    ],
    featured: false,
    badge: null,
  },
];

const faqs = [
  { q: "Non consectetur a erat nam at lectus urna duis?", a: "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non." },
  { q: "Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?", a: "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices." },
  { q: "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi?", a: "Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit." },
  { q: "Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla posuere?", a: "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Faucibus purus in massa tempor. Quis vel eros donec ac odio tempor orci dapibus ultrices." },
  { q: "Tempus quam pellentesque nec nam aliquam sem et tortor consequat?", a: "Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas." },
];

export default function PricingPage() {
  return (
    <>
      <Breadcrumbs
        title="Pricing"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        crumbs={[{ label: "Home", href: "/" }, { label: "Pricing" }]}
      />

      <section id="pricing" className="pricing">
        <div className="container">
          <div className="section-title">
            <h2>Pricing</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit.</p>
          </div>
          <div className="row">
            {plans.map((plan, i) => (
              <div key={i} className="col-lg-3 col-md-6">
                <div className={`box${plan.featured ? " featured" : ""}`}>
                  {plan.badge && <span className="advanced">{plan.badge}</span>}
                  <h3>{plan.name}</h3>
                  <h4>
                    <sup>$</sup>{plan.price}<span>{plan.period}</span>
                  </h4>
                  <ul>
                    {plan.features.map((f, j) => (
                      <li key={j} className={f.available ? "" : "na"}>
                        {f.available
                          ? <i className="bi bi-check" />
                          : <i className="bi bi-x" />}
                        {f.text}
                      </li>
                    ))}
                  </ul>
                  <div className="btn-wrap">
                    <a href="#" className="btn-buy">Buy Now</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="faq section-bg">
        <div className="container">
          <div className="section-title">
            <h2>Frequently Asked Questions</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.</p>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-10">
              {faqs.map((faq, i) => (
                <div key={i} className="faq-item">
                  <i className="bi bi-question-circle" />
                  <h4>{faq.q}</h4>
                  <p>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
