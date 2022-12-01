import React from "react";
function FlatCard() {
  return (
    <div className="apartmentCard">
      <div className="cards">
        <div className="cards-title">
          <h3>Аренда квартир</h3>
        </div>
        <div className="card-inner">
          <div className="rooms">
            <ul>
              <li>1-комнатные</li>
              <li>2-комнатные</li>
              <li>3-комнатные</li>
            </ul>
            <ul>
              <li> 60 </li>
              <li> 65 </li>
              <li> 46</li>
            </ul>
          </div>

          <div className="rooms">
            <ul>
              <li>4-комнатные</li>
              <li>Рядом с метров</li>
            </ul>
            <ul>
              <li>12</li>
              <li>71</li>
            </ul>
          </div>
          <div className="btn-apartment">
            <button>Разместить объявление</button>
          </div>
        </div>
      </div>

      <div className="cards">
        <div className="cards-title">
          <h3>Квартиры в районах</h3>
        </div>
        <div className="card-inner">
          <div className="rooms one">
            <ul>
              <li> Юнусабадский </li>
              <li> Яшнабадский </li>
              <li> Чиланзарский</li>
            </ul>
            <ul>
              <li>Мирзо-Улугбекский</li>
              <li>Мирабадский</li>
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

export default FlatCard;
