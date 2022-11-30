import React from "react";
import "./home.scss";
import { Apartment, Offer, SearchBox } from "../../components/index";

function Home() {
  return (
    <div className="main">
      <div className="container">
        <div className="home">
          <SearchBox />
          <Offer />
          <Apartment />
        </div>
      </div>
    </div>
  );
}

export default Home;
