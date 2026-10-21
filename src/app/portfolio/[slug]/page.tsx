"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function PortfolioDetailPage() {
  return (
    <>
      <Breadcrumbs
        title="Portfolio Details"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        crumbs={[{ label: "Home", href: "/" }, { label: "Portfolio", href: "/portfolio" }, { label: "Portfolio Details" }]}
      />

      <section className="portfolio-details">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-8">
              <div className="portfolio-details-slider">
                <Swiper
                  modules={[Pagination]}
                  pagination={{ clickable: true }}
                  loop
                >
                  <SwiperSlide>
                    <img src="/assets/img/portfolio/portfolio-details-1.jpg" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/assets/img/portfolio/portfolio-details-2.jpg" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/assets/img/portfolio/portfolio-details-3.jpg" alt="" />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="portfolio-info">
                <h3>Project information</h3>
                <ul>
                  <li><strong>Category</strong>: Web design</li>
                  <li><strong>Client</strong>: ASU Company</li>
                  <li><strong>Project date</strong>: 01 March, 2020</li>
                  <li><strong>Project URL</strong>: <a href="#">www.example.com</a></li>
                </ul>
              </div>
              <div className="portfolio-description">
                <h2>This is an example of portfolio detail</h2>
                <p>
                  Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatibus officia architecto pariatur corporis aut.
                </p>
                <p>
                  Laborum omnis voluptates voluptas qui sit aliquam blanditiis. Sapiente minima commodi dolorum non eveniet magni quaerat nemo et.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
