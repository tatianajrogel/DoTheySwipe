import { useState } from "react";
import { Search, Menu, X, ChevronRight, Shield, Eye, Zap } from "lucide-react";
import girl from "./../../assets/images/girlImage.jfif"

const Hero = () => {
  return (
    <div className="min-h-screen mt-12  bg-gradient-to-br from-purple-50 to-indigo-100 flex items-center justify-center md:px-4 py-16">
      <div className="container max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column - Content */}
        <div className="text-center px-4 md:px-0 md:text-left">
          <h1 className="text-4xl md:text-5xl  font-bold text-slate/950 mb-6">
            <span className="text-[#E11D48]">Find out </span> if they are secretly on image Tinder
          </h1>
          
          <div className="mb-8">
            <p className="text-[26px]  text-slate-700 mb-4">
              Did you know that <span className="font-bold">42% </span>of Tinder users already have a partner?
            </p>
            <p className="text-[26px]  text-slate-700 mb-4">
              Discover the truth — we help hundreds find out if their partner is using dating apps.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
            <button className="px-8 py-4 bg-gradient-to-r from-[#E11D48] to-[#A51CA9] text-white rounded-full font-semibold flex items-center justify-center gap-2 transition-transform hover:scale-105 shadow-lg hover:shadow-xl">
              Search on Tinder <ChevronRight size={20} />
            </button>
          </div>

        </div>
        
        {/* Right Column - Image Circle */}
        <div className="relative p-6 self-end flex pt-20">
          {/* Main Circle */}
          <div className="relative w-52 h-52 md:w-80 md:h-80 mx-auto -mb-6   self-end  border border-black bg-gradient-to-br m-0 from-[#E11D48] via-[#CC1D6B] to-[#A51CA9] rounded-full flex items-center justify-center shadow-2xl">
            {/* <div className="w-full h-full rounded-full  overflow-hidden flex items-center justify-center"> */}
              {/* <div className="text-center p-6"> */}
                {/* <div className="rounded-full mx-auto mb-4 flex items-center justify-center"> */}
                  <img src={girl} className="absolute bottom-0 rounded-b-full w-full " alt="" />
                {/* </div> */}
               
              {/* </div> */}
            {/* </div> */}
          </div>
          
          {/* Small Circles Around Main Circle */}
          <div className="absolute top-30  md:top-30 md:left-10  w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">👤</span>
            </div>
          </div>
          
          <div className="absolute top-52 left-20 md:top-80 md:left-30 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">❤️</span>
            </div>
          </div>
          
          <div className="absolute top-52 right-20 md:top-80 md:right-30 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">📱</span>
            </div>
          </div>
          
          <div className="absolute top-2 right-6 md:top-2 md:right-30 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">🔍</span>
            </div>
          </div>
          
          {/* Text Cards */}
          <div className="absolute left-0 top-0 bg-white p-2 md:px-3 rounded-lg shadow-lg ">
            <p className="text-sm font-medium text-[#E11D48]">searc on Tinder</p>
            <p className="text-xs text-slate-700  ">Find out if your partner is <br/> using Tinder?</p>
          </div>
          
          <div className="absolute top-2/4 right-0 md:right-5 md:top-1/3 bg-white p-3 rounded-lg shadow-md bg-[linear-gradient(to_right,#E11D48,#CC1D6B,#B81C8B,#A51CA9)] bg-clip-text text-transparent">
            <p className="text-sm font-medium">Swipe Check</p>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Hero;