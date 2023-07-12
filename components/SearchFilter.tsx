import React from "react";
import Search from "./Search";
import Dropdown from "./Dropdown";

const SearchFilter = () => {
  return (
    <div className="w-full flex flex-col sm:flex-row sm:justify-between mb-10 space-y-6 sm:space-y-0">
      <Search />
      <Dropdown />
    </div>
  );
};

export default SearchFilter;
