import React from 'react'
import SearchSection from '../components/search/SearchSection'
import ProfileDetail from '../components/profileDetail/ProfileDetail.jsx'
import profile1 from '../assets/images/profile1.png'
import profile2 from '../assets/images/profile2.png'
import profile3 from '../assets/images/profile3.png'
import profile4 from '../assets/images/profile4.png'
import profile5 from '../assets/images/profile5.png'

const ProfileDetails = () => {
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

    <div>
        <SearchSection 
        title = "Personal Info"
      searchContent={<ProfileDetail profile={userProfile} images={images}  />}/>
    </div>
  )
}

export default ProfileDetails