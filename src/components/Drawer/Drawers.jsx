import React, { useState } from "react";
import { Drawer } from "antd";
import { Divide as Hamburger } from "hamburger-react";
import "./drawer.scss";
import { DownOutlined } from "@ant-design/icons";
const Drawers = () => {
  const [open, setOpen] = useState(false);
  const placement = "top";
  const [lang, setLang] = useState(false);
  const [first, setFirst] = useState(false);
  const [two, setTwo] = useState(false);
  const [third, setThird] = useState(false);
  const [fourth, setFourth] = useState(false);

  const handleClick = (text) => {
    if (text === "first") {
      setFirst(!first);
    } else if (text === "two") {
      setTwo(!two);
    } else if (text === "third") {
      setThird(!third);
    } else {
      setFourth(!fourth);
    }
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
            <div className="default" onClick={() => handleClick("first")}>
              {" "}
              <h3>Купить недвижимость</h3>{" "}
              <DownOutlined
                style={{
                  transform: first ? "rotate(180deg)" : "rotate(0deg)",
                }}
                id="arrows"
              />
            </div>
            <div
              className="menu-list"
              style={{ display: first ? "flex" : "none" }}
            >
              <p>Квартира</p>
              <p>Дом</p>
              <p>Участок</p>
            </div>
          </div>

          <div className="menu-dropdown">
            <div className="default" onClick={() => handleClick("two")}>
              {" "}
              <h3>Снять недвижимость</h3>{" "}
              <DownOutlined
                style={{
                  transform: two ? "rotate(180deg)" : "rotate(0deg)",
                }}
                id="arrows"
              />
            </div>
            <div
              className="menu-list"
              style={{ display: two ? "flex" : "none" }}
            >
              <p>Квартира</p>
              <p>Посуточно</p>
              <p>Комната</p>
            </div>
          </div>

          <div className="menu-dropdown">
            <div className="default" onClick={() => handleClick("third")}>
              {" "}
              <h3>Новостройки</h3>{" "}
              <DownOutlined
                style={{
                  transform: third ? "rotate(180deg)" : "rotate(0deg)",
                }}
                id="arrows"
              />
            </div>
            <div
              className="menu-list"
              style={{ display: third ? "flex" : "none" }}
            >
              <p>Квартира</p>
              <p>Дом</p>
              <p>Участок</p>
            </div>
          </div>

          <div className="menu-dropdown">
            <div className="default" onClick={() => handleClick("")}>
              {" "}
              <h3>Новостройки</h3>{" "}
              <DownOutlined
                style={{
                  transform: fourth ? "rotate(180deg)" : "rotate(0deg)",
                }}
                id="arrows"
              />
            </div>
            <div
              className="menu-list"
              style={{ display: fourth ? "flex" : "none" }}
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
