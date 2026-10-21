"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

const clients = [
  "/assets/img/clients/client-1.png",
  "/assets/img/clients/client-2.png",
  "/assets/img/clients/client-3.png",
  "/assets/img/clients/client-4.png",
  "/assets/img/clients/client-5.png",
  "/assets/img/clients/client-6.png",
  "/assets/img/clients/client-7.png",
  "/assets/img/clients/client-8.png",
];

export default function ClientsSlider() {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 1, disableOnInteraction: false }}
      speed={3000}
      loop
      slidesPerView={2}
      spaceBetween={15}
      breakpoints={{
        480: { slidesPerView: 3 },
        640: { slidesPerView: 4 },
        992: { slidesPerView: 6 },
      }}
    >
      {clients.map((src, i) => (
        <SwiperSlide key={i}>
          <Image src={src} alt={`Client ${i + 1}`} width={160} height={60} style={{ objectFit: "contain" }} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
