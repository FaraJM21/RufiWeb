import React from "react";
import "./home.scss";
import {
  Apartment,
  ApartmentCard,
  Offer,
  SearchBox,
  GetApartment,
  SpecialOffer,
  FlatCard,
} from "../../components/index";

function Home() {
  return (
    <div className="main">
      <div className="container">
        <div className="home">
          <SearchBox />
          <Offer />
          <Apartment />
          <GetApartment />
          <ApartmentCard />
          <SpecialOffer />
          <FlatCard />
        </div>
      </div>
    </div>
  );
}

export default Home;
