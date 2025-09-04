import React from "react";
import SearchFormWrapper from "./SearchFormWrapper";
import SearchForm from "./SearchForm";
import SectionHeader from "./SectionHeader";

const SearchSection = ({ 
  title = '', 
  description = '',
  searchContent =''
}) => {
  return (
    <div className="relative w-full max-w-7xl  mx-auto mt-8 md:mt-20 rounded-t-xl md:px-4  py-12">
      <SectionHeader title={title} description={description}/>
        <SearchFormWrapper>
          {searchContent}
        </SearchFormWrapper>
    </div>
  );
};

export default SearchSection;