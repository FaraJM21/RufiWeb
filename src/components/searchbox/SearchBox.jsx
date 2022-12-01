import { DownOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import SelectGroups from "../selectgroups/SelectGroups";
import search from "../../assets/img/searchwhite.svg";
import "./searchbox.scss";
function SearchBox() {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className="inner">
      <p>Более 5900 объявлений с продажей/ арендой домов, квартир</p>
      <h2>Недвижимость в Ташкенте</h2>

      <div className="search-box">
        <SelectGroups setShowDropdown={setShowDropdown} />
        <div className="dropdown">
          <div
            className="dropdown-button"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            Цена <DownOutlined id="arrow" />
          </div>
          <div
            className="dropdown-inner"
            style={{ display: showDropdown ? "flex" : "none" }}
          >
            <label>
              {" "}
              <input type="number" placeholder="От" />
              <span>$</span>
            </label>

            <label>
              <input type="number" placeholder="До" />
              <span>$</span>
            </label>
          </div>
        </div>

        <div className="search-block">
          <div className="input">
            <input type="text" placeholder="Введите город, адресс, район" />
            <p>Ташкент</p>
          </div>

          <div className="search-icon">
            <img src={search} alt="404" />
          </div>
        </div>
      </div>
      <div className="rectangels one"></div>
      <div className="rectangels two"></div>
      <div className="rectangels three"></div>
      <div className="rectangels four"></div>
    </div>
  );
}

export default SearchBox;
