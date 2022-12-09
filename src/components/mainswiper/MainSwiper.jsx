import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import "./style.scss";
import { Autoplay, Pagination, EffectFade } from "swiper";
import { flat } from "../../data/data";
import { HeartOutlined } from "@ant-design/icons";
import location from "../../assets/img/location.svg";
import { Link } from "react-router-dom";

function MainSwiper() {
  return (
    <Swiper
    loop={true}
    pagination={true}
    slidesPerView={1}
    modules={[Pagination]}
    className="mainSwiper"
  >
    {flat.map((item, index) => {
      return (
        <SwiperSlide className="mainSwiper-slide" key={index}>
          <div className="profile-card">
            <Swiper
              loop={true}
              pagination={true}
              effect={"fade"}
              slidesPerView={1}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Pagination, EffectFade]}
              className="innerSwiper"
            >
              {item.img.map((picture, index) => {
                return (
                  <SwiperSlide key={index} className="innerSwiper-slide">
                    <img src={picture} alt="404" />
                    <HeartOutlined />
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className="inner-info">
              <div className="info-top">
                <div className="location">
                  <img src={location} alt="404" />
                  <p>{item.address}</p>
                </div>
                <p className="underground">{item.underground}</p>
              </div>

              <div className="about">
                <p>
                  {item.rooms} <br />
                  комнаты
                </p>
                <p>
                  {item.floor} <br /> этаж
                </p>
                <p>
                  {item.square} <br /> м2
                </p>
              </div>

              <div className="enroll">
              <Link to={'/aboutapartment/1'}> <button>Смотреть</button></Link>
                <p className="price">{item.price}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      );
    })}
  </Swiper>
  )
}

export default MainSwiper