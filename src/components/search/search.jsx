import React from "react";
import "./style.scss";
import search from "../../assets/img/search.svg";
import arrow from "../../assets/img/arrow.svg";
const Search = () => {
  return (
    <section className="search">
      <div className="wrapper">
        <p className="regions">Районы</p>
        <div className="input">
          <input type="text" placeholder="Введите город, адресс, район" />
          <p className="input-text">Ташкент</p>
        </div>
        <select name="select" id="">
          <option value="buy">Купить</option>
          <option value="rent">Снять</option>
        </select>
        <select name="select" id="" className="big-select">
          <option value="oldHouse">Квартира во вторичке</option>
          <option value="newHouse">Квартира в новостойке</option>
        </select>
        <select name="select" id="" defaultValue={"Комнат"}>
          <option value="0">Комнат</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>

        <div className="price-field">
          <span>Цена</span>
          <img src={arrow} alt="" />
        </div>
        <div className="search-icon">
          <img src={search} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Search;
