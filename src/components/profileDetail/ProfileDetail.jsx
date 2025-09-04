import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import location from "../../assets/images/location.svg"
import capIcon from "../../assets/images/cap-icon.svg"
import arrowLeft from "../../assets/images/arrowLeft.png"

const ProfileDetail = ({ profile, images }) => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
     <section className="grid grid-cols-1  md:grid-cols-2  gap-8 py-8 md:py-14 p-6 bg-white rounded-2xl ">
      {/* Left Side: Profile Info */}
      <div className="flex flex-col  space-y-4">
        <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-sm"><img src={arrowLeft}  alt="" /></span>
        <h2 className="text-2xl font-bold">{profile.name}</h2>
        <p className="flex items-center gap-2 text-[#11181E]">
          <span className="flex gap-1 items-center">♂ {profile.gender}  {profile.age}</span>
           <span className="flex gap-1 items-center"><img src={location} className="w-[12px] h-[16px]" alt="" /> {profile.location}</span>
        </p>
        <p className="text-[#11181E] ">
          <span className="flex gap-1 items-center"><img src={capIcon} className="w-[16px] h-[16px]" alt="" />{profile.job} </span>
          </p>

        {/* Interests */}
        <div className="flex flex-wrap gap-2">
          {profile.interests.map((interest, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-700  text-sm rounded-full"
            >
              {interest}
            </span>
          ))}
        </div>

        {/* About */}
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-[#11181E] text-lg ">About</h3>
          <p className="text-slate-600 leading-relaxed ">{profile.about}</p>
        </div>
      </div>

      {/* Right Side: Image Slider */}
      <div className="relative flex items-center self-center lg:self-end justify-center  h-72">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-18 lg:left-30 z-30 p-1.5 bg-slate-200 opacity-70 rounded-full shadow hover:bg-gray-100"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Images */}
        <div className="flex items-center justify-center  relative w-full ">
          {images.map((img, index) => {
            let position = "hidden"; // Default hidden

            

             if (index === current) {
              // Center image
              position =
               "absolute w-60 h-80 rounded-xl shadow-lg object-cover transition-all duration-500 border-2 border-white scale-100 z-20";
           } else if (index === (current - 1 + images.length) % images.length) {
              // Left 1
              position =
                "absolute w-44 h-80 rounded-xl shadow-md object-cover transition-all duration-500 -translate-x-12 scale-90 z-10 opacity-70 rotate-[-5deg]";
            } else if (index === (current - 2 + images.length) % images.length) {
              // Left 2
              position =
               "absolute w-44 h-80 rounded-xl shadow-md object-cover transition-all duration-500 -translate-x-14 scale-90 z-5 opacity-70 rotate-[-12deg]";
            } else if (index === (current + 1) % images.length) {
              // Right 1
              position =
               "absolute w-44 h-80 rounded-xl shadow-md object-cover transition-all duration-500 translate-x-12 scale-90 z-10 opacity-70 rotate-[5deg]";
            } else if (index === (current + 2) % images.length) {
              // Right 2
              position =
               "absolute w-44 h-80 rounded-xl shadow-md object-cover transition-all duration-500 translate-x-14 scale-90 z-5 opacity-70 rotate-[12deg]";
            }

            return (
              <img
                key={index}
                src={img}
                alt=""
                className={position}
              />
            );
          })}
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-18 lg:right-30 z-20 p-1.5 bg-slate-200 opacity-70 rounded-full shadow hover:bg-gray-100"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default ProfileDetail;
