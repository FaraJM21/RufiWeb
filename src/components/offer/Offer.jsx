import React, { useState } from "react";
import { data } from "../../data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination,Autoplay } from "swiper";
import "./offer.scss";

import { Col, Row } from "antd";
function Offer() {
  const arr = data;
  const half = arr.slice(0, 4);
  const [show, setShow] = useState(false);
  return (
    <div className="offer">
      <div className="offer-title">
        <h3>Выгодные предложения </h3>
        <p>
          Мы делаем выборку из 34 тысяч объявлений и предлагаем вам самые
          выгодные!{" "}
        </p>
      </div>

      <Swiper
        loop={true}
        pagination={true}
        slidesPerView={1}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay,Pagination]}
        className="offerSwiper"
      >
        {arr.map((item, index) => {
          return (
            <SwiperSlide key={index} className="offerSwiper-slide">
              <div className="card">
                <img src={item.img} alt="404" />

                <div className="info">
                  <h4>{item.price}</h4>
                  <div className="about">
                    <p className="price">{item.room}</p>
                    <p>{item.square}</p>
                  </div>
                  <p className="address">{item.address}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <Row id="row">
        {show
          ? arr.map((item, index) => {
              return (
                <Col sm={24} md={12} lg={7} xl={6} key={index} id="col">
                  <div className="card">
                    <img src={item.img} alt="404" />

                    <div className="info">
                      <h4>{item.price}</h4>
                      <div className="about">
                        <p className="price">{item.room}</p>
                        <p>{item.square}</p>
                      </div>
                      <p className="address">{item.address}</p>
                    </div>
                  </div>
                </Col>
              );
            })
          : half.map((item, index) => {
              return (
                <Col sm={24} md={12} lg={7} xl={6} key={index} id="col">
                  <div className="card">
                    <img src={item.img} alt="404" />

                    <div className="info">
                      <h4>{item.price}</h4>
                      <div className="about">
                        <p>{item.room}</p>
                        <p>{item.square}</p>
                      </div>
                      <p>{item.address}</p>
                    </div>
                  </div>
                </Col>
              );
            })}

        <div className="show">
          <button onClick={() => setShow(!show)}>
            {" "}
            {show ? "Скрыт" : "Смотреть все"}
          </button>
        </div>
      </Row>
    </div>
  );
}

export default Offer;
