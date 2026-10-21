"use client";
import { useState } from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

const items = [
  { slug: "app-1", img: "/assets/img/portfolio/portfolio-1.jpg", title: "App 1", category: "app" },
  { slug: "web-1", img: "/assets/img/portfolio/portfolio-2.jpg", title: "Web 3", category: "web" },
  { slug: "app-2", img: "/assets/img/portfolio/portfolio-3.jpg", title: "App 2", category: "app" },
  { slug: "card-1", img: "/assets/img/portfolio/portfolio-4.jpg", title: "Card 2", category: "card" },
  { slug: "web-2", img: "/assets/img/portfolio/portfolio-5.jpg", title: "Web 2", category: "web" },
  { slug: "app-3", img: "/assets/img/portfolio/portfolio-6.jpg", title: "App 3", category: "app" },
  { slug: "card-2", img: "/assets/img/portfolio/portfolio-7.jpg", title: "Card 1", category: "card" },
  { slug: "card-3", img: "/assets/img/portfolio/portfolio-8.jpg", title: "Card 3", category: "card" },
  { slug: "web-3", img: "/assets/img/portfolio/portfolio-9.jpg", title: "Web 3", category: "web" },
];

const filters = [
  { key: "*", label: "All" },
  { key: "app", label: "App" },
  { key: "card", label: "Card" },
  { key: "web", label: "Web" },
];

export default function PortfolioPage() {
  const [active, setActive] = useState("*");
  const filtered = active === "*" ? items : items.filter((i) => i.category === active);

  return (
    <>
      <Breadcrumbs
        title="Portfolio"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        crumbs={[{ label: "Home", href: "/" }, { label: "Portfolio" }]}
      />

      <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="section-title">
            <h2>Portfolio</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.</p>
          </div>

          <ul id="portfolio-flters">
            {filters.map((f) => (
              <li
                key={f.key}
                className={active === f.key ? "filter-active" : ""}
                onClick={() => setActive(f.key)}
              >
                {f.label}
              </li>
            ))}
          </ul>

          <div className="row portfolio-container">
            {filtered.map((item) => (
              <div key={item.slug} className="col-lg-4 col-md-6 portfolio-item">
                <div className="portfolio-wrap">
                  <img src={item.img} className="img-fluid" alt={item.title} />
                  <div className="portfolio-info">
                    <h4>{item.title}</h4>
                    <p>{item.category}</p>
                    <div className="portfolio-links">
                      <Link href={`/portfolio/${item.slug}`} title="More Details">
                        <i className="bx bx-link" />
                      </Link>
                    </div>
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
