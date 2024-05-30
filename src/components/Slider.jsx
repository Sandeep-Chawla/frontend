import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade"; // Import fade effect
import "swiper/css/autoplay"; // Import autoplay
import { Pagination, EffectFade, Autoplay } from "swiper/modules";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Slider = ({ slides, loading }) => {
  if (loading) {
    return (
      <div className="w-full h-[60vh] flex justify-center">
        <div className="w-11/12 md:w-8/12 h-5/6 rounded-3xl relative">
          <Skeleton height="100%" borderRadius="1.5rem" />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-[60vh] flex justify-center">
      <Swiper
        pagination={{ type: "progressbar" }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop={true}
        modules={[Pagination, EffectFade, Autoplay]}
        className="mySwiper w-11/12 md:w-8/12 h-5/6 rounded-3xl"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="slider-img bg-cover bg-center w-full h-full rounded-3xl"
              style={{ backgroundImage: `url(${slide})` }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
