import React, { useEffect, useState } from "react";
import "./header.scss";
import { BsHeart } from "react-icons/bs";
import Selects from "../select/Select";
import logo from "../../assets/img/userprofile.svg";
import plus from "../../assets/img/plus.svg";
function Header() {
  const [color, setColor] = useState("");

  const [scroll, setScroll] = useState("");

  const controlNavbar = () => {
    if (window.scrollY > 10) {
      setScroll("rgba(0, 0, 0, 0.24) 0px 3px 8px");
      setColor(" hsla(0, 0%, 97%, 0.949)");
    } else if (window.scrollY === 0) {
      setScroll("");
      setColor("");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <header
      style={{ boxShadow: scroll, transition: "0.1s", background: color }}
    >
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
              <img src={plus} alt="404" />
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
