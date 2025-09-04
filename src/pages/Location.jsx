import React from 'react'
import LocationForm from "../components/location/LocationForm.jsx" 
import Profiles from '../components/profile/Profiles.jsx'
import SearchSection from '../components/search/SearchSection.jsx'


const Location = () => {
  return (
    <div>
      <SearchSection 
      title = "Who are you looking for?"
      description = "Provide the name, age, and gender of the person you're looking for, as they might appear in the app."
      searchContent = {<LocationForm/>} />
    </div>
  )
}

export default Location