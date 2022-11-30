import React from "react";
import { HouseCard, Search } from "../../components";
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
