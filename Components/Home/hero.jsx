'use client'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function HeroSection() {
  const slides = [
    {
      title: "Find Your Perfect",
      highlight: "Furry Companion",
      desc: "Adopt loving dogs, cats, birds, and more from trusted owners and shelters near you. Give them a forever home today.",
      img: "https://images.unsplash.com/photo-1517849845537-4d257902454a",
    },
    {
      title: "Give Love, Get Love with",
      highlight: "Pet Adoption",
      desc: "Every pet deserves a caring home. Browse verified pets, check health details, and start your adoption journey easily.",
      img: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d",
    },
  ];

  return (
    <div className="w-full bg-base-100">
      <Swiper
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        modules={[Navigation, Pagination, Autoplay]}
        className="h-full"
      >
        {slides.map((s, i) => (
          <SwiperSlide key={i}>
            <div className="min-h-[90vh] flex flex-col lg:flex-row items-center justify-center px-4 sm:px-8 lg:px-16 py-10 gap-10">

              {/* LEFT SIDE */}
              <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
                  {s.title}{" "}
                  <span className="text-amber-400">{s.highlight}</span>
                </h1>

                <p className="text-gray-500 dark:text-white text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
                  {s.desc}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button className="btn bg-amber-400 text-white px-6">
                    Adopt Now
                  </button>
                  <button className="btn btn-outline">
                    Browse Pets
                  </button>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="w-full lg:w-1/2 flex justify-center relative">

                <div className="rounded-3xl overflow-hidden shadow-2xl w-full sm:w-[80%] lg:w-[85%]">
                  <img
                    src={s.img}
                    alt="pet adoption"
                    className="w-full h-[250px] sm:h-[350px] lg:h-[420px] object-cover"
                  />
                </div>

                {/* Floating Badge */}
                <div className="hidden sm:flex absolute bottom-6 left-6 bg-white shadow-lg rounded-xl px-4 py-3 items-center gap-3">
                  <div className="flex -space-x-2">
                    <img className="w-8 h-8 rounded-full border" src="https://i.pravatar.cc/40?img=5" />
                    <img className="w-8 h-8 rounded-full border" src="https://i.pravatar.cc/40?img=6" />
                    <img className="w-8 h-8 rounded-full border" src="https://i.pravatar.cc/40?img=7" />
                  </div>
                  <div className="text-xs">
                    <p className="font-semibold">Happy Adoptions</p>
                    <p className="text-gray-400">100+ pets adopted this week</p>
                  </div>
                </div>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}