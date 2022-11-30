
import React, { useState } from "react";
import "./home.scss";
import arrow from '../../assets/img/arrow.svg'
function Home() {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className="main">
      <div className="container">
        <div className="home">
          <div className="inner">
            <p>Более 5900 объявлений с продажей/ арендой домов, квартир</p>
            <h2>Недвижимость в Ташкенте</h2>

            <div className="search-box">
              <div className="dropdown">
                <div
                  className="dropdown-button"
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  <p>Купить</p>
                  <img src={arrow} alt="" style={{ transform: showDropdown ?  " rotate(180deg)": "rotate(0deg)" }}/>
                  {/* <DownOutlined  /> */}
                </div>
                <div
                  className="dropdown-inner"
                  style={{ display: showDropdown ? "flex" : "none" }}
                >
                  <p>Продать</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
