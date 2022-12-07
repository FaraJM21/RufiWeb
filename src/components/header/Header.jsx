import React, { useEffect, useState } from "react";
import "./header.scss";
import { BsHeart } from "react-icons/bs";
import Selects from "../select/Select";
import logo from "../../assets/img/userprofile.svg";
import plus from "../../assets/img/plus.svg";
import { Link } from "react-router-dom";
import Drawers from "../Drawer/Drawers";
function Header() {
  const [shadow, setShadow] = useState("");
  const [top, setTop] = useState();
  // const [isOpen, setOpen] = useState(false);
  let prevScrollpos = window.pageYOffset;

  const controlNavbar = () => {
    let currentScrollPos = window.pageYOffset;
    if (currentScrollPos === 0) {
      setShadow("");
    } else if (prevScrollpos > currentScrollPos) {
      setTop(0);
      setShadow("rgba(0, 0, 0, 0.24) 0px 3px 8px");
    } else {
      setTop(-50);
      setShadow("");
    }
    prevScrollpos = currentScrollPos;
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  });

  return (
    <header
      className="header"
      style={{
        top: `${top}%`,

        boxShadow: shadow,
      }}
    >
      <button className=""></button>
      <button className=""></button>
      <div className="container">
        <div className="nav">
          <div className="header-left">
            <Link to={"/"}>
              {" "}
              <h3 className="logo">Logo</h3>
            </Link>
            <Link className="links" to={"/apartments"}>
              Квартиры
            </Link>
            <p className="links">Участки</p>
            <p className="links">Новостройки</p>
          </div>

          <div className="header-right">
            <button className="announcement">
              <img src={plus} alt="404" />
              <p>Разместить обьявление</p>
            </button>

            <div className="language">
              <Selects />

              <span className="heart">
                <BsHeart />
              </span>
              <img src={plus} alt="404" id="plus" />
              <img src={logo} alt="404" />
              <div className="hamburger">
                {/**/}
                <Drawers />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
