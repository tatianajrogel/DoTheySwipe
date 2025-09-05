import React from 'react'
import SectionWrapper from '../components/search/SectionWrapper'
import SearchForm from '../components/search/SearchForm'

const About = () => {
  
  return (
    <div>
       <SectionWrapper 
      title = "Who are you looking for?"
      description = "Provide the name, age, and gender of the person you're looking for, as they might appear in the app.">
     <SearchForm layout = "md:grid-cols-2" />
     </SectionWrapper>
   
    </div>
  )
}

export default About