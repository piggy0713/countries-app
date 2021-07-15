import React from "react";
import { HiSearch } from "react-icons/hi";

import "../App.scss";

const SearchCountry = ({ onChange, value }) => {
  return (
    <div className="searchContainer">
      <HiSearch className="icon" />
      <input
        type="text"
        placeholder="Search for a country..."
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default SearchCountry;
