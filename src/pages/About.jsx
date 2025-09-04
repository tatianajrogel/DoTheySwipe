import React from 'react'
import SearchSection from '../components/search/SearchSection'
import SearchForm from '../components/search/SearchForm'

const About = () => {
  
  return (
    <div>
       <SearchSection 
      title = "Who are you looking for?"
      description = "Provide the name, age, and gender of the person you're looking for, as they might appear in the app."
      searchContent = {<SearchForm layout = "md:grid-cols-2" />} />
   
    </div>
  )
}

export default About