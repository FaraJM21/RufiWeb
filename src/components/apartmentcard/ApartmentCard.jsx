import React from "react";
import "./style.scss";
function ApartmentCard() {
  return (
    <div className="apartmentCard">
      <div className="cards">
        <div className="cards-title">
          <h3>Квартиры</h3>
        </div>
        <div className="card-inner">
          <div className="rooms">
            <ul>
              <li>1-комнатные</li>
              <li>2-комнатные</li>
              <li>3-комнатные</li>
            </ul>
            <ul>
              <li>287</li>
              <li>302</li>
              <li>175</li>
            </ul>
          </div>

          <div className="rooms">
            <ul>
              <li>4-комнатные</li>
              <li>без посредников</li>
            </ul>
            <ul>
              <li>105</li>
              <li>45</li>
            </ul>
          </div>
          <div className="btn-apartment">
            <button>Разместить объявление</button>
          </div>
        </div>
      </div>

      <div className="cards">
        <div className="cards-title">
          <h3>Новостройки</h3>
        </div>
        <div className="card-inner">
          <div className="rooms">
            <ul>
              <li>с чистовой отделкой</li>
              <li>Премиум класс</li>
              <li>Эконом класс</li>
            </ul>
            <ul>
              <li>69</li>
              <li>34</li>
              <li>45</li>
            </ul>
          </div>
          <div className="rooms">
            <ul>
              <li>Рядом с метро</li>
              <li>С парковкой</li>
            </ul>
            <ul>
              <li>12</li>
              <li>53</li>
            </ul>
          </div>
          <div className="btn-apartment">
            <button>Разместить объявление</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApartmentCard;
