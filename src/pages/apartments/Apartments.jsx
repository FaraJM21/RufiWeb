import React, { useEffect, useState } from "react";
import { Ads, HouseCard, Pagination, Search } from "../../components";
import "./style.scss";
function Apartment() {
  const [state, setState] = useState(true);
  const changeFunc = (childState) => {
    setState(childState);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="main">
      <div className="container">
        <Search />
        <Ads changeFunc={changeFunc} />

        {state ? (
          <>
            <HouseCard />
            <HouseCard />
            <HouseCard />
            <Pagination />
          </>
        ) : (
          <div className="map-for-aparments">
            <div class="mapouter">
              <div class="gmap_canvas">
                <iframe
                  className="gmap_iframe"
                  width="100%"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  src="https://maps.google.com/maps?width=786&amp;height=512&amp;hl=en&amp;q=tashkent&amp;t=p&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
                <a href="https://piratebay-proxys.com/">Piratebay</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Apartment;
