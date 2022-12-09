import React, { useEffect, useState } from "react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./style.scss";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import house from "../../assets/img/house.jpg";
const HouseCardCarousel = () => {
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    if (width < 588) {
      setOpen(true);
    } else {
      setOpen(false);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);
  return (
    <Swiper
      className="mySwiper"
      slidesPerView={1}
      // navigation={true}
      pagination={{ clickable: true }}
      mousewheel={true}
      navigation={open}
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
