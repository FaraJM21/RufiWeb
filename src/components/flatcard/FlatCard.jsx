import React from "react";
function FlatCard() {
  return (
    <div className="apartmentCard" style={{ marginTop: "100px" }}>
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
          <div className="rooms one" style={{justifyContent:'space-between', width:'60%'}}>
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

      <div className="simple-card">
        <div className="cards-title">
          <h3>Квартиры</h3>
        </div>

        <div className="card-links">
          <div className="card-rooms">
            <p> 1-комнатные</p>
            <p> 2-комнатные</p>
            <p>3-комнатные</p>
            <p>4-комнатные</p>
            <p> без посредников</p>
          </div>
          <div className="card-numbers">
            <p> 287 </p>
            <p> 302 </p>
            <p> 175 </p>
            <p> 105 </p>
            <p> 45</p>
          </div>
        </div>

        <button>Разместить объявление</button>
      </div>

      <div className="simple-card">
        <div className="cards-title">
          <h3>Новостройки</h3>
        </div>

        <div className="card-links">
          <div className="card-rooms">
            <p> Юнусабадский </p>
            <p> Яшнабадский </p>
            <p> Чиланзарский</p>
            <p>Мирзо-Улугбекский</p>
            <p>Мирабадский</p>
          </div>
          <div className="card-numbers">
            <p>69</p>
            <p>34</p>
            <p>45</p>
            <p>12</p>
            <p>53</p>
          </div>
        </div>

        <button>Разместить объявление</button>
      </div>
    </div>
  );
}

export default FlatCard;
