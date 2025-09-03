import React from "react";

const SearchFormWrapper = ({ children }) => {
  return (
    <div className="md:relative md:-mt-36 md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 mx-auto md:mx-0 w-full  lg:max-w-5xl bg-white md:rounded-2xl md:shadow-sm ">
      {children}
    </div>
  );
};

export default SearchFormWrapper;