import React from "react";
import { Search } from "../../components";
import HouseCard from "../../components/houseCard/houseCard";
import "./style.scss";
function Apartment() {
  return (
    <div className="main">
      <div className="container">
        <Search />
        <HouseCard />
      </div>
    </div>
  );
}

export default Apartment;
