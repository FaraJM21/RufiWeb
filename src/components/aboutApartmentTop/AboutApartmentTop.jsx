import React from "react";
import ApartmentsCarousel from "../../components/aboutApartmentsImgCarousel/ApartmentsCarousel";
import telegramIcon from "../../assets/img/telegram.svg";
import likeIcon from "../../assets/img/like.svg";
import icon from "../../assets/img/rectangle.svg";
import house from "../../assets/img/house.jpg";
import "./AboutApartmentTop.scss";
const AboutApartmentTop = () => {
  return (
    <div className="img-and-info">
      <div className="left-carousel">
        <ApartmentsCarousel />
        <div className="bottom-images">
          <div
            style={{ backgroundImage: `url(${house})` }}
            className="src-images"
          ></div>
          <div
            style={{ backgroundImage: `url(${house})` }}
            className="src-images"
          ></div>
          <div
            style={{ backgroundImage: `url(${house})` }}
            className="src-images"
          ></div>
        </div>
      </div>
      <div className="right-info">
        <div className="top">
          <p className="price-text">52 523$</p>
          <span className="price-below">2 482$ за м2</span>
        </div>
        <div className="line"></div>
        <div className="center">
          <p className="apartment-size-text">2-комнатная квартира, 45м2</p>
          <span className="floor-text">3 этаж</span>
          <span className="location-text"> Юнусабадский район, 10 кв-л</span>
        </div>
        <div className="line"></div>
        <div className="bottom">
          <div>
            <div className="circle"></div>
            <p>Сергей</p>
            <img src={icon} alt="" className="okIcon"/>
          </div>
          <div>
            <button className="show-btn">Показать телефон</button>
            <div className="sendIcon">
              <img src={telegramIcon} alt="" />
            </div>
            <div className="likeIcon">
              <img src={likeIcon} alt="" />
            </div>
          </div>
        </div>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default AboutApartmentTop;
