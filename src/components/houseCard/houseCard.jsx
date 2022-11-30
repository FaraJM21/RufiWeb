import React from "react";
import "./style.scss";
import telegram from "../../asset"

const HouseCard = () => {
  return (
    <section className="houseCard">
      <div className="wrapper">
        {/*  */}
        <div className="images">
          <div className="carousel">d</div>
          <div className="small-images">
            <div className="img">1</div>
            <div className="img">2</div>
            <div className="img">3</div>
          </div>
        </div>

        <div className="content">
          <p className="title">2-комнатная квартира, 45м2</p>
          <div className="descriptiion">
            <p>4 этаж из 9</p>
            <p>Юнусабадский район, 10 кв-л</p>
            <p>Метро Туркистон 4 мин</p>
          </div>
          <p className="text">
            Высокие потолки (4,8 метра). Закрытый двор, места общего пользования
            для жителей ЖК . Прекрасный, готовый арендный бизнес!
          </p>
          <div className="icons">
            <div className="phone">Показать телефон</div>
            <div className="telegram"></div>
          </div>
        </div>
        <div className="price">3</div>
      </div>
    </section>
  );
};

export default HouseCard;
