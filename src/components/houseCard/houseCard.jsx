import React from "react";
import "./style.scss";
import telegram from "../../assets/img/telegram.svg";
import like from "../../assets/img/like.svg";
import HouseCardCarousel from "../houseCardCarousel/houseCardCarousel";
import house from "../../assets/img/house.jpg";
import { useNavigate } from "react-router-dom";
const HouseCard = () => {
  const navigate = useNavigate();
  return (
    <section className="houseCard">
      <div
        className="wrapper"
        onClick={() => {
          navigate("/aboutApartment/id");
          window.scrollTo(0, 0);
        }}
      >
        <div className="images">
          <div className="big-image">
            <HouseCardCarousel />
          </div>
          <div className="small-images">
            <div
              style={{ backgroundImage: `url(${house})` }}
              className="img"
            ></div>
            <div
              style={{ backgroundImage: `url(${house})` }}
              className="img"
            ></div>
            <div
              style={{ backgroundImage: `url(${house})` }}
              className="img"
            ></div>
          </div>
        </div>
        <div className="content">
          <p className="title">2-комнатная квартира, 45м2</p>
          <div className="description">
            <p>4 этаж из 9</p>
            <p>Юнусабадский район, 10 кв-л</p>
            <p>Метро Туркистон 4 мин</p>
          </div>
          <p className="text">
            Высокие потолки (4,8 метра). Закрытый двор, места общего пользования
            для жителей ЖК . Прекрасный, готовый арендный бизнес!
          </p>
          <div className="icons">
            <div className="icon phone">Показать телефон</div>
            <div className="icon telegram">
              <img src={telegram} alt="" />
            </div>
            <div className="icon like">
              <img src={like} alt="" />
            </div>
          </div>
          <div className="divider"></div>
        </div>

        <div className="price">
          <div className="top">
            <p className="title">52 482$</p>
            <p className="square">2 482$ за м2</p>
          </div>
          <div className="bottom">10 июня 2022</div>
        </div>
      </div>
    </section>
  );
};

export default HouseCard;
