import React from "react";
import { Ads, HouseCard, Pagination, Search } from "../../components";
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
        <Pagination/>
      </div>
    </div>
  );
}

export default Apartment;
