import React, { useState } from "react";
import { Link } from "react-router-dom";
import Map from "../location/Map";
import mapIcon from "../../assets/images/mapIcon.png";
import listingIcon from "../../assets/images/listingIcon.svg";
import Listing from "./Listing";

const Profiles = () => {
  const [showMap, setShowMap] = useState(false);

  return (
    <div className="grid grid-col-1 gap-4">
      {/* Desktop Layout */}
      <div className="hidden md:grid md:grid-cols-1 gap-4">
        {/*Map*/}
        <Map height="h-64" />


        {/* Listing */}
        <Listing />
      </div>

      {/* Mobile Layout (Toggle Between Map & Listing) */}
     <div className="block md:hidden">
  {showMap ? (
    <div className="transition-all duration-500 ease-in-out transform opacity-100 scale-100">
      <Map height="h-[100vh]" />
    </div>
  ) : (
    <div className="transition-all duration-500 ease-in-out transform opacity-100 scale-100">
      <Listing />
    </div>
  )}
</div>

      {/* Mobile Sticky Section */}
      <div className="fixed bottom-0 right-0 left-0 flex items-center justify-between gap-4 w-full border-t border-gray-200 px-4 py-4 bg-white shadow-lg md:hidden z-50">
        {/* Toggle Icon */}
        <button
          onClick={() => setShowMap(!showMap)}
          className="text-gray-700 hover:text-rose-600 w-10 h-10 p-1.5 flex justify-center bg-white rounded-full border border-[#E11D48] transition-colors"
        >
          {showMap ? (
            <img src={listingIcon} alt="Listing" className="" />
          ) : (
            <img src={mapIcon} alt="Map" className="" />
          )}
        </button>

        {/* Continue Button */}
        <Link
          to="/profileDetails"
          className="w-full bg-gradient-to-r from-rose-600 to-purple-600 text-white py-2 px-6 rounded-full font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
        >
          Continue
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Profiles;
