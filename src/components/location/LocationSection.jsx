import React from "react";
import SearchFormWrapper from "../search/SearchFormWrapper";
import LocationForm from "./LocationForm";
import LocationForm2 from "./LocationForm";
import SectionHeader from "../search/SectionHeader";


const LocationSection = ({ 
  title = "Who are you looking for?", 
  description = "Provide the name, age, and gender of the person you're looking for, as they might appear in the app.",
  searchContent = <LocationForm/>
}) => {
  return (
    <div className="relative w-full max-w-7xl  mx-auto mt-8 md:mt-20 rounded-t-xl md:px-4 pt-12 md:py-12">
      <SectionHeader title={title} description={description}/>
        <SearchFormWrapper>
           {/* <LocationForm2 layout="md:grid-cols-2"/> */}
           <LocationForm />
           

        </SearchFormWrapper>
    </div>
  );
};

export default LocationSection;