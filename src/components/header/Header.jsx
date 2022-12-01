import React, { useEffect, useState } from "react";
import "./header.scss";
import { BsHeart } from "react-icons/bs";
import Selects from "../select/Select";
import logo from "../../assets/img/userprofile.svg";
import plus from "../../assets/img/plus.svg";
import { Link } from "react-router-dom";
function Header() {
  const [color, setColor] = useState("");
  const [size, setSize] = useState("0%,100%");
  const [scroll, setScroll] = useState("");
  const controlNavbar = () => {
    if (window.scrollY > 10) {
      setScroll("rgba(0, 0, 0, 0.24) 0px 3px 8px");
      setColor("left");
      setSize("100%, 100%");
    } else if (window.scrollY === 0) {
      setScroll("");
      setColor("");
      setSize("0%, 100%");
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
      style={{
        boxShadow: scroll,
        transition: "0.2s",
        backgroundPositionX: color,
        backgroundSize: size,
      }}
    >
      <div className="container">
        <div className="nav">
          <div className="header-left">
            <Link to={"/"}>
              {" "}
              <h3 className="logo">Logo</h3>
            </Link>
            <Link to={"/apartments"}>Квартиры</Link>
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
