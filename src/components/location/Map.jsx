import React from "react";
import map from "./../../assets/images/map.png";

const Map = ({className = "", height = "h-auto", hiddenOnMobile = false, }) => {
  return (
    <div className={`rounded-lg ${className}`}>
      <div
        className={`rounded-lg ${height} justify-center flex ${
          hiddenOnMobile ? "hidden md:flex" : "flex"
        }`}
      >
        <img
          src={map}
          className="object-cover w-full h-full rounded-lg"
          alt="map"
        />
      </div>
    </div>
  );
};

export default Map;