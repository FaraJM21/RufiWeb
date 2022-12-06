import React, { useState } from "react";
import { Drawer } from "antd";
import { Divide as Hamburger } from "hamburger-react";
import "./drawer.scss";
import { DownOutlined } from "@ant-design/icons";
const Drawers = () => {
  const [open, setOpen] = useState(false);
  const placement = "top";
  const [num, setNum] = useState(0);
  const [reset, setReset] = useState(false);
  const [lang, setLang] = useState(false);

  const handleClick = (num) => {
    setReset(!reset);
    reset ? setNum(num) : setNum(0);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Hamburger toggled={open} toggle={setOpen} />

      <Drawer
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
        style={{ height: "100%" }}
      >
        <div className="drawer-language">
          <button
            className="ru"
            style={{ background: lang ? "white" : "#D9D9D9" }}
            onClick={() => setLang(false)}
          >
            RU
          </button>
          <button
            className="uz"
            style={{ background: lang ? "#D9D9D9" : "white" }}
            onClick={() => setLang(true)}
          >
            UZ
          </button>
        </div>

        <div className="drawer-select">
          <div className="menu-dropdown">
            <div className="default" onClick={() => handleClick(1)}>
              {" "}
              <h3>Купить недвижимость</h3>{" "}
              <DownOutlined
                style={{
                  transform: num === 1 ? "rotate(180deg)" : "rotate(0deg)",
                }}
                id="arrows"
              />
            </div>
            <div
              className="menu-list"
              style={{ display: num === 1 ? "flex" : "none" }}
            >
              <p>Квартира</p>
              <p>Дом</p>
              <p>Участок</p>
            </div>
          </div>

          <div className="menu-dropdown">
            <div className="default" onClick={() => handleClick(2)}>
              {" "}
              <h3>Купить недвижимость</h3>{" "}
              <DownOutlined
                style={{
                  transform: num === 2 ? "rotate(180deg)" : "rotate(0deg)",
                }}
                id="arrows"
              />
            </div>
            <div
              className="menu-list"
              style={{ display: num === 2 ? "flex" : "none" }}
            >
              <p>Квартира</p>
              <p>Дом</p>
              <p>Участок</p>
            </div>
          </div>

          <div className="menu-dropdown">
            <div className="default" onClick={() => handleClick(3)}>
              {" "}
              <h3>Купить недвижимость</h3>{" "}
              <DownOutlined
                style={{
                  transform: num === 3 ? "rotate(180deg)" : "rotate(0deg)",
                }}
                id="arrows"
              />
            </div>
            <div
              className="menu-list"
              style={{ display: num === 3 ? "flex" : "none" }}
            >
              <p>Квартира</p>
              <p>Дом</p>
              <p>Участок</p>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};
export default Drawers;
