import React from "react";
import { Ads, HouseCard, Search } from "../../components";
import "./style.scss";
function Apartment() {
  return (
    <div className="main">
      <div className="container">
        <Search />
        <Ads />
        <HouseCard />
        <HouseCard />
        <HouseCard />
      </div>
    </div>
  );
}

export default Apartment;
