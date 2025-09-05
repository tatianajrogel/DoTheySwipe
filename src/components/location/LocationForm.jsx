import React from "react";
import searchImage from "./../../assets/images/searchImage.png"
import Map from "./Map";
import gps from '../../assets/images/gps.png'
import Location from '../../pages/Location'
import { Link } from "react-router-dom";


const LocationForm = ({layout}) => {
  return (
    <div className="md:relative md:-mt-36 md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 mx-auto md:mx-0 w-full  lg:max-w-5xl bg-white md:rounded-2xl md:shadow-sm ">
    <div className={`grid grid-cols-1 px-8 gap-8 px-auto`}>
        {/* Left Side */}
         <div className="space-y-6">
      {/* <div className="space-y-6 py-8  md:py-4 lg:py-8"> */}
      <div className="mb-8 md:mb-4 lg:mb-8">
        <h1 className="text-2xl lg:text-3xl mt-8 font-bold text-gray-800 mb-4">
          Where <span className="text-[#E11D48]"> might they use it? </span>
        </h1>
        <p className="text-gray-600">
          Try to put as accurate a location as possible where the person may
          have used Tinder. Preferably an address, or a neighborhood.
        </p>
      </div>
         <form className=" flex flex-col gap-4">
           <div className="flex flex-col ">
            <label htmlFor="location"  className="blocktext-md lg:text-lg font-medium text-gray-700 mb-2">
                  Location name<span className="bg-[linear-gradient(to_right,#E11D48,#CC1D6B,#B81C8B,#A51CA9)] bg-clip-text text-transparent">*</span> 
                </label>
                <div className="flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-rose-500 focus-within:border-transparent">
          <input
            type="Search"
            placeholder="Search for a place or an address......"
            className="flex-1 outline-none bg-transparent"
            id="location"
          />
          {/* <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg> */}
          <img src={gps} alt="" />
        </div>
           </div>
        
      </form>
    </div>
      {/* right Side*/}
     <Map height="md:h-80"/>
     
        {/* Continue Button */}
        <div className="md:pb-12">
         <Link
  to="/profile"
  className="w-[300px] mx-auto bg-gradient-to-r from-rose-600 to-purple-600 text-white py-2 md:py-3.5 px-6 rounded-full font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
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
    </div>
   
  );
};

export default LocationForm;
