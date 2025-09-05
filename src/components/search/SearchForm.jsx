import React from "react";
import searchImage from "./../../assets/images/searchImage.png"
import { Link } from "react-router-dom";
const SearchForm = ({layout}) => {
  return (
    <div className="md:relative md:-mt-36 md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 mx-auto md:mx-0 w-full  lg:max-w-5xl bg-white md:rounded-2xl md:shadow-sm ">
    <div className={`grid grid-cols-1 ${layout} px-auto px-8  md:pl-8  gap-8`}>
        {/* Left Side - Contact Info */}
      <div className="space-y-6 py-8  md:py-4 lg:py-8">
        <div className="mb-8 md:mb-4 lg:mb-8">
          <h2 className="text-2xl font-bold text-gray-800">
            Search <span className="text-[#E11D48]" > for a Person</span>
          </h2>
          <p className="text-sm lg:text-slate-600 mt-2">
            Find the individual you're looking for by entering specific details,
            such as their name, age, and gender.
          </p>
        </div>

         <form className=" flex flex-col gap-4">
            {/* First Name */}
              <div className="flex flex-col ">
                <label htmlFor="firstName"  className="blocktext-md lg:text-lg font-medium text-gray-700 mb-2">
                  First name<span className="bg-[linear-gradient(to_right,#E11D48,#CC1D6B,#B81C8B,#A51CA9)] bg-clip-text text-transparent">*</span> 
                </label>
                <input

                  type="text"
                  id="firstName"
                  required
                  placeholder="First Name"
                  className="w-full px-4 py-2 lg:py-2.5 border border-gray-300 rounded-lg focus:ring focus:ring-[#E11D48] focus:outline-none"
                />
              </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col ">
                <label htmlFor="age"  className="blocktext-md lg:text-lg font-medium text-gray-700 mb-2">
                  Age<span className="bg-[linear-gradient(to_right,#E11D48,#CC1D6B,#B81C8B,#A51CA9)] bg-clip-text text-transparent">*</span> 
                </label>
                <input

                  type="Number"
                  id="age"
                  required
                  placeholder="Enter age"
                  className="w-full px-4 py-2 lg:py-2.5 border border-gray-300 rounded-lg focus:ring focus:ring-[#E11D48] focus:outline-none"
                />
              </div>

             <div className="flex flex-col mb-2">
                <label htmlFor="gender"  className="block text-md lg:text-lg font-medium text-gray-700 mb-2">
                  Gender<span className="bg-[linear-gradient(to_right,#E11D48,#CC1D6B,#B81C8B,#A51CA9)] bg-clip-text text-transparent">*</span> 
                </label>
              <select 
              required
              id="gender"
                  className="w-full px-4 py-2 lg:py-2.5 border border-gray-300 rounded-lg focus:ring focus:ring-[#E11D48] focus:outline-none"
              >
                <option value="">Choose</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          {/* Submit button  */}
              <Link
      to="/location" // 👈 directly page ka path
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
        </form>

       
       
     
      </div>
      {/* right Side - Contact Info */}
      <div
        className="flex flex-col order-1 md:order-2 self-end text-white">
        <div className="" >
          <img
            src={searchImage}
            alt=""
            className="object-cover w-full  lg:h-auto"/>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SearchForm;
