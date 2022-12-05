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
            <p onClick={() => handleChange(1)}>Описание</p>
            <p onClick={() => handleChange(2)}>Характеристика</p>
            <p onClick={() => handleChange(3)}>Расположение</p>
          </div>
          <div className="bottom-line"></div>
          <Info infoNum={infoNum} />
          <Characteristcs infoNum={infoNum} />
          <Location infoNum={infoNum} />
        </div>
      </div>
      <div className="right-QrCode"></div>
    </div>
  );
};

export default AboutCenter;
