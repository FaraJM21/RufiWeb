import React from "react";
import HouseCard from "../houseCard/houseCard";
import "./AboutBottom.scss";
const AboutBottomA = () => {
  return (
    <div className="apartments-bottom-cards">
      <div>
        <HouseCard />
      </div>
      <div>
        <HouseCard />
      </div>
    </div>
  );
};

export default AboutBottomA;
