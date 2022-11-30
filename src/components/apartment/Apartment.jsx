import React from "react";
import "./apartment.scss";
import arrow from "../../assets/img/arrow.svg";
import map from "../../assets/img/map.svg";
import arrowleft from "../../assets/img/arrowleft.svg";
function Apartment() {
  return (
    <div className="apartment">
      <div className="apartment-title">
        <div className="left">
          <h3>Купить квартиру</h3>
          <img src={arrow} alt="404" />
        </div>

        <div className="right">
          <img src={map} alt="404" />
          <p>Показать на карте</p>
          <p>Смотреть все</p>
          <img src={arrowleft} alt="404" />
        </div>
      </div>
       
       <div className="apartment-box">
        
       </div>

    </div>
  );
}

export default Apartment;
