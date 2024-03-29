import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "../apartment/apartment.scss";
import { Autoplay, Pagination, EffectFade } from "swiper";
import arrow from "../../assets/img/arrow.svg";
import location from "../../assets/img/location.svg";
import { flat } from "../../data/data";
import { HeartOutlined } from "@ant-design/icons";
import MainSwiper from "../mainswiper/MainSwiper";
import { Link } from "react-router-dom";
function GetApartment() {
  return (
    <div className="apartment" style={{marginTop:'10%'}}>
      <div className="apartment-title">
        <div className="left">
          <h3>Снять квартиру</h3>
          <img src={arrow} alt="404" />
        </div>
      </div>

      <div className="apartment-box">
        {flat.map((item, index) => {
          return (
            <div className="flat-card" key={index}>
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
                className="apartmentSwiper"
              >
                {item.img.map((picture, index) => {
                  return (
                    <SwiperSlide key={index} className="apartmentSwiper-slide">
                      <img src={picture} alt="404" />
                      <HeartOutlined />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
              <div className="info">
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
          );
        })}
      </div>

      <MainSwiper />
    </div>
  );
}

export default GetApartment;
