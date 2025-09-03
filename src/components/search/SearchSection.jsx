import React from "react";
import SearchFormWrapper from "./SearchFormWrapper";
import SearchForm from "./SearchForm";
import SectionHeader from "./SectionHeader";

const SearchSection = ({ 
  title = "Who are you looking for?", 
  description = "Provide the name, age, and gender of the person you're looking for, as they might appear in the app.",
  searchContent = <SearchForm/>
}) => {
  return (
    <div className="relative w-full max-w-7xl  mx-auto mt-8 md:mt-20 rounded-t-xl md:px-4  py-12">
      <SectionHeader title={title} description={description}/>
        <SearchFormWrapper>
           <SearchForm layout="md:grid-cols-2"/>
        </SearchFormWrapper>
    </div>
  );
};

export default SearchSection;