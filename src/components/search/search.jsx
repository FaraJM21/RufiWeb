import React, { useState } from "react";
import "./style.scss";
import search from "../../assets/img/search.svg";
import arrow from "../../assets/img/arrow.svg";
import { Select } from "antd";
const Search = () => {
  const [dropdown, setDropdown] = useState(false);
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <section className="search">
      <div className="wrapper">
        <p className="regions">Районы</p>
        <div className="input">
          <input type="text" placeholder="Введите город, адресс, район" />
          <p className="input-text">Ташкент</p>
        </div>

        <Select
          defaultValue="buy"
          popupClassName="submenu"
          dropdownStyle={{ backgroundColor: "white" }}
          onChange={() => {}}
          options={[
            {
              value: "buy",
              label: "Купить",
            },
            {
              value: "rent",
              label: "Снять",
            },
          ]}
        />
        <Select
          defaultValue="oldHouse"
          popupClassName="submenu"
          dropdownStyle={{ backgroundColor: "white" }}
          onChange={() => {}}
          options={[
            {
              value: "oldHouse",
              label: "Квартира во вторичке",
            },
            {
              value: "newHouse",
              label: "Квартира в новостойке",
            },
          ]}
        />
        <Select
          defaultValue="Комнат"
          popupClassName="submenu"
          dropdownStyle={{ backgroundColor: "white" }}
          onChange={() => {}}
          options={[
            {
              value: "1",
              label: "1",
            },
            {
              value: "2",
              label: "2",
            },
            {
              value: "3",
              label: "3",
            },
            {
              value: "4",
              label: "4",
            },
          ]}
        />

        <div className="price-field" onClick={() => setDropdown(!dropdown)}>
          <span>Цена</span>
          <img src={arrow} alt="" />
          <div
            className={dropdown ? "dropdown-menu active" : "dropdown-menu"}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="min">
              <input
                type="number"
                placeholder="от"
                onKeyDown={(e) => {
                  if (e.code === "Enter") {
                    setDropdown(!dropdown);
                  }
                }}
              />
            </div>
            <div className="max">
              <input
                type="number"
                placeholder="до"
                onKeyDown={(e) => {
                  if (e.code === "Enter") {
                    setDropdown(!dropdown);
                  }
                }}
              />
            </div>
          </div>
        </div>

        <div className="search-icon">
          <img src={search} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Search;
