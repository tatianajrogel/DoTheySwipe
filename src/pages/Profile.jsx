import React from 'react'
import SearchSection from '../components/search/SearchSection'
import SearchForm from '../components/search/SearchForm'
import Profiles from '../components/profile/Profiles'


const Profile = () => {
  return (
    <div>
        <SearchSection
        title = "You’re almost there!"
      description = "We found 20 profiles that matches your description!"
         searchContent={<Profiles layout="md:grid-cols-2"/>}/>   
    </div>
  )
}

export default Profile