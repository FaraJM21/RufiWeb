import React, { useEffect } from "react";
import AboutApartmentTop from "../../components/aboutApartmentTop/AboutApartmentTop";
import AboutBottomA from "../../components/aboutBottomApartment/AboutBottomA";
import AboutCenter from "../../components/AboutCenterApartment/AboutCenter";
import "./AboutApartments.scss";

function AboutApartment() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="main">
      <div className="container">
        <div className="aboutapartment">
          <AboutApartmentTop />
          <AboutCenter />
          <div className="arrow-line"></div>
          <AboutBottomA />
        </div>
      </div>
    </div>
  );
}

export default AboutApartment;
