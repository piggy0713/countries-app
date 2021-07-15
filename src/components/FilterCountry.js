import React from "react";
import "../App.scss";

const FilterCountry = ({ onChange }) => {
  return (
    <div className="filterContainer">
      <select className="regionSelector" onChange={onChange}>
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default FilterCountry;
