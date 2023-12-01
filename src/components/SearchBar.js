import React from "react";

const SearchBar = ({ searchQuery, handleSearch }) => {
  return (
    <input
      type="text"
      placeholder="Enter Value..."
      value={searchQuery}
      onChange={handleSearch}
      className="search-input"
    />
  );
};

export default SearchBar;
