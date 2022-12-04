import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, EffectFade, Navigation } from "swiper";
import telegram from "../../assets/img/telegram.svg";
import like from "../../assets/img/like.svg";
import { flarArr } from "../../data/data";
import "./style.scss";
function SpecialSwiper() {
  return (
    <Swiper
      loop={true}
      pagination={true}
      slidesPerView={1}
      spaceBetween={30}
      modules={[Pagination]}
      className="specialSwiper"
    >
      {flarArr.map((item, index) => {
        return (
          <SwiperSlide className="slider-special" key={index}>
            <div className="slider-div">
              <div className="special-card" key={index}>
                <div className="swiper-box">
                  <Swiper
                    loop={true}
                    pagination={true}
                    navigation= {true}
                    effect={"fade"}
                    slidesPerView={1}
                    autoplay={{
                      delay: 2000,
                      disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Navigation,Pagination, EffectFade]}
                    className="myswiper"
                  >
                    {item.img.map((picture, index) => {
                      return (
                        <SwiperSlide className="myswiper-slide" key={index}>
                          <img src={picture} alt="404" />
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>

                <div className="info">
                  <div className="info-inner">
                    <h3>{item.room}</h3>
                    <p>{item.floor}</p>
                    <p>{item.address}</p>
                    <p>{item.underground}</p>
                    <p className="text">{item.text}</p>
                  </div>

                  <div className="info-wrapper">
                    <div className="wrapper-top">
                      <div>
                        <h3>{item.price}</h3>
                        <p>{item.square}</p>
                      </div>
                      <p className="date">{item.date}</p>
                    </div>
                    <div className="bottom">
                      <button>Показать телефон</button>
                      <div className="icons">
                        <img src={telegram} alt="404" />
                      </div>
                      <div className="icons">
                        <img src={like} alt="404" />
                         
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default SpecialSwiper;
