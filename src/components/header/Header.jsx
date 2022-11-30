import React from "react";
import "./header.scss";
import { AiFillPlusCircle } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";
import Selects from "../select/Select";
import logo from "../../assets/Vector.svg";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="nav">
          <div className="header-left">
            <h3 className="logo">Logo</h3>
            <p>Квартиры</p>
            <p>Участки</p>
            <p>Новостройки</p>
          </div>

          <div className="header-right">
            <div className="announcement">
              <span>
                <AiFillPlusCircle />
              </span>
              <p>Разместить обьявление</p>
            </div>

            <div className="language">
              <Selects />

              <span className="heart">
                <BsHeart />
              </span>
              <img src={logo} alt="404" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
