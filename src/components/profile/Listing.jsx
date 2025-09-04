import React from 'react'
import profile1 from "../../assets/images/user1.png";
import profile2 from "../../assets/images/user2.png";
import profile3 from "../../assets/images/user3.png";
import profile4 from "../../assets/images/user4.png";
import { Link } from "react-router-dom";

const Listing = () => {
     let profiles =  [
    { src: profile1 },
    { src: profile2 },
    { src: profile3 },
    { src: profile4 },
  ]
  return (
  
      <div className="relative grid grid-cols-1  md:grid-cols-4 gap-4 p-4  md:px-6 ">
  {profiles.map((profile, index) => (
    <div
      key={index}
      className=" w-full h-64 lg:h-56 flex justify-center items-center overflow-hidden rounded-lg"
    >
      {/* Blurred Image */}
      <img
        src={profile.src}
        className="object-cover w-full h-full blur-md"
        alt={`profile-${index}`}
      />
    </div>
  ))}
  {/*Center Button/Text */}
     <div className="hidden absolute  inset-0 md:flex items-center justify-center">
          <Link
      to="/profileDetails">
        <button className="px-6 py-2 bg-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform">
  <span className="bg-[linear-gradient(to_right,#E11D48,#CC1D6B,#B81C8B,#A51CA9)] bg-clip-text text-transparent">
    Buy now to see results
  </span>
</button>
  </Link>
      </div>
</div> 
  )
}

export default Listing