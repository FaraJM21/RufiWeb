import React from "react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./style.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import house from "../../assets/img/house.jpg";
const HouseCardCarousel = () => {
  return (
    <Swiper
      className="mySwiper"
      slidesPerView={1}
      // navigation={true}
      pagination={{ dynamicBullets: true, clickable: true }}
      mousewheel={true}
      autoplay={{ delay: 1000 }}
      speed={600}
      modules={[Navigation, Pagination, Autoplay, EffectFade]}
    >
      <SwiperSlide
        style={{ backgroundImage: `url(${house})` }}
        className="slide"
      ></SwiperSlide>
      <SwiperSlide
        style={{ backgroundImage: `url(${house})` }}
        className="slide"
      ></SwiperSlide>
      <SwiperSlide
        style={{ backgroundImage: `url(${house})` }}
        className="slide"
      ></SwiperSlide>
      <SwiperSlide
        style={{ backgroundImage: `url(${house})` }}
        className="slide"
      ></SwiperSlide>
      <SwiperSlide
        style={{ backgroundImage: `url(${house})` }}
        className="slide"
      ></SwiperSlide>
      <SwiperSlide
        style={{ backgroundImage: `url(${house})` }}
        className="slide"
      ></SwiperSlide>
      <SwiperSlide
        style={{ backgroundImage: `url(${house})` }}
        className="slide"
      ></SwiperSlide>
    </Swiper>
  );
};

export default HouseCardCarousel;
