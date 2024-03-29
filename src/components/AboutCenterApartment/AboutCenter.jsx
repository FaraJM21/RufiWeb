import React, { useState } from "react";
import "./AboutCenter.scss";
import "../Info-Apartment/Info.scss";
import Location from "../Info-Apartment/Location";
import Characteristcs from "../Info-Apartment/Characteristcs";
import Info from "../Info-Apartment/Info";

const AboutCenter = () => {
  const [infoNum, setInfoNum] = useState(1);

  const handleChange = (num) => {
    if (num === 1) {
      setInfoNum(1);
    }
    if (num === 2) {
      setInfoNum(2);
    }
    if (num === 3) {
      setInfoNum(3);
    }
  };
  return (
    <div className="A-centerInfo">
      <div className="left-info">
        <div className="Info-categories">
          <div className="categories">
            <p
              onClick={() => handleChange(1)}
              className={`${infoNum === 1 ? "active" : ""}`}
            >
              Описание
            </p>
            <p
              onClick={() => handleChange(2)}
              className={`${infoNum === 2 ? "active" : ""}`}
            >
              Характеристика
            </p>
            <p
              onClick={() => handleChange(3)}
              className={`${infoNum === 3 ? "active" : ""}`}
            >
              Расположение
            </p>
          </div>
          <div className="bottom-line"></div>
          <Info infoNum={infoNum} />
          <Characteristcs infoNum={infoNum} />
          <Location infoNum={infoNum} />
        </div>
      </div>
      <div className="right-QrCode">
        <div className="div">
          <p>QR CODE</p>
        </div>
        <div className="bottom-line"></div>
        <div className="QrCode-box">
          <img
            src="https://www.investopedia.com/thmb/hJrIBjjMBGfx0oa_bHAgZ9AWyn0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/qr-code-bc94057f452f4806af70fd34540f72ad.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AboutCenter;
