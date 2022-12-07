import React from "react";

const Location = (props) => {
  return (
    <div
      className="apartment-location"
      style={{ display: props.infoNum === 3 ? "flex" : "none" }}
    >
      <div className="map">
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
    </div>
  );
};

export default Location;
