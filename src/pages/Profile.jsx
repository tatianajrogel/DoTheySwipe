import SectionWrapper from '../components/search/SectionWrapper'
import Profiles from '../components/profile/Profiles'


const Profile = () => {
  return (
    <div>
        <SectionWrapper
        title = "You’re almost there!"
      description = "We found 20 profiles that matches your description!">   
         <Profiles layout="md:grid-cols-2"/>
         </SectionWrapper>
    </div>
  )
}

export default Profile