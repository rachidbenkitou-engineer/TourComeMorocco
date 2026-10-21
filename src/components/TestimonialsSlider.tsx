"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const testimonials = [
  {
    img: "/assets/img/testimonials/testimonials-1.jpg",
    name: "Saul Goodman",
    role: "Ceo & Founder",
    stars: 5,
    text: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
  },
  {
    img: "/assets/img/testimonials/testimonials-2.jpg",
    name: "Sara Wilsson",
    role: "Designer",
    stars: 5,
    text: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
  },
  {
    img: "/assets/img/testimonials/testimonials-3.jpg",
    name: "Jena Karlis",
    role: "Store Owner",
    stars: 5,
    text: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
  },
  {
    img: "/assets/img/testimonials/testimonials-4.jpg",
    name: "Matt Brandon",
    role: "Freelancer",
    stars: 5,
    text: "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim enim voluptate consequat were dollar duis enim amet aliqua.",
  },
  {
    img: "/assets/img/testimonials/testimonials-5.jpg",
    name: "John Larson",
    role: "Entrepreneur",
    stars: 5,
    text: "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",
  },
];

export default function TestimonialsSlider() {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      loop
      className="testimonials-slider"
    >
      {testimonials.map((t, i) => (
        <SwiperSlide key={i}>
          <div className="testimonial-item">
            <Image
              src={t.img}
              alt={t.name}
              width={120}
              height={120}
              className="testimonial-img"
            />
            <h3>{t.name}</h3>
            <h4>{t.role}</h4>
            <div className="stars">
              {Array.from({ length: t.stars }).map((_, j) => (
                <i key={j} className="bi bi-star-fill" />
              ))}
            </div>
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left" />
              {t.text}
              <i className="bx bxs-quote-alt-right quote-icon-right" />
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
