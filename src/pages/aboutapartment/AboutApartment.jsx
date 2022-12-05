import React from "react";
import AboutApartmentTop from "../../components/aboutApartmentTop/AboutApartmentTop";
import AboutCenter from "../../components/AboutCenterApartment/AboutCenter";
import "./AboutApartments.scss";

function AboutApartment() {
  return (
    <div className="main">
      <div className="container">
        <div className="aboutapartment">
          <AboutApartmentTop />
          <AboutCenter />
        </div>
      </div>
    </div>
  );
}

export default AboutApartment;
