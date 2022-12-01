import React from "react";
import "./home.scss";
import { Apartment, Offer, SearchBox } from "../../components/index";
import GetApartment from "../../components/getapartment/GetApartment";

function Home() {
  return (
    <div className="main">
      <div className="container">
        <div className="home">
          <SearchBox />
          <Offer />
          <Apartment />
          <GetApartment />
        </div>
      </div>
    </div>
  );
}

export default Home;
