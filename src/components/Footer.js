import React from "react";
import GoogleMapReact from "google-map-react";
import LocationPin from "./LocationPin";



function Footer({ location, zoomLevel }) {
  return (
    <div className="footer">
    <div style={{height:"40vh", width:"600px", padding:"10px"}}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
    </div>
  );
}

export default Footer;
