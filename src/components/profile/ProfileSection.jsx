import React from "react";
import SearchFormWrapper from "../search/SearchFormWrapper";
import Profiles from "./Profiles"
import SectionHeader from "../search/SectionHeader";
import ProfileDetail from "../profileDetail/profileDetail";
import profile1 from '../../assets/images/profile1.png'
import profile2 from '../../assets/images/profile2.png'
import profile3 from '../../assets/images/profile3.png'
import profile4 from '../../assets/images/profile4.png'
import profile5 from '../../assets/images/profile5.png'


const ProfileSection = ({ title = "You're almost There", description = "We found 20 profiles that matches your description!",searchContent = <Profiles/>
}) => {
const userProfile = {
  name: "Alex Johnson",
  gender: "Male",
  age: 28,
  location: "San Francisco, CA",
  job: "Software Engineer at TechNova",
  interests: ["✈️ Traveling", "📸 Photography", "🎮 Gaming", "🎵 Live Music"],
  about:
    "Hey there! 👋 I'm Alex, a software engineer by day and an adventure seeker by the weekend. When I’m not coding, you’ll find me exploring hiking trails or sipping coffee at a cozy café."
};

const images = [
  profile1,
  profile2,
  profile3,
  profile5,
  profile4,
]
  return (
    <div className="relative w-full max-w-7xl  mx-auto mt-8 md:mt-20 rounded-t-xl md:px-4 pt-12 md:py-12">
      <SectionHeader title={title} description={description}/>
        <SearchFormWrapper>
           <Profiles /> 
            <div className="p-6">
              {/* <ProfileDetail profile={userProfile} images={images} /> */}
    </div>   



        </SearchFormWrapper>
    </div>
  );
};

export default ProfileSection;