import React from "react";
import { flarArr } from "../../data/data";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./style.scss";
import telegram from "../../assets/img/telegram.svg";
import like from "../../assets/img/like.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper";
import SpecialSwiper from "../specialswiper/SpecialSwiper";
function SpecialOffer() {
  const arr = flarArr;
  return (
    <div className="special-offer">
      <h3 className="offer-title">Специальные предложения</h3>

      <div className="cards-container">
        {arr.slice(0, 2).map((item, index) => {
          return (
            <div className="offer-card" key={index}>
              <div className="swiper-box">
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
                  className="myswiper"
                >
                  {item.img.map((picture, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <img src={picture} alt="404" />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>

              <div className="info">
                <div className="info-inner">
                  <div className="top">
                    <h3>{item.room}</h3>
                    <p>{item.floor}</p>
                    <p>{item.address}</p>
                    <p>{item.underground}</p>
                  </div>
                  <p className="text">{item.text}</p>

                  <div className="bottom">
                    <button>Показать телефон</button>
                    <div className="icons">
                      <img src={telegram} alt="404" />
                    </div>
                    <div className="icons">
                      <img src={like} alt="" />
                    </div>
                  </div>
                </div>
                <div className="info-wrapper">
                  <div className="wrapper-top">
                    <h3>{item.price}</h3>
                    <p>{item.square}</p>
                  </div>

                  <p className="date">{item.date}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <SpecialSwiper />
    </div>
  );
}

export default SpecialOffer;
