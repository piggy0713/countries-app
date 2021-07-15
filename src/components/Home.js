import React, { useState } from "react";
import "../App.scss";
import SearchCountry from "./SearchCountry";
import FilterCountry from "./FilterCountry";
import CountryList from "./CountryList";

const Home = ({ countries }) => {
  const [region, setRegion] = useState("");
  const [filteredCountry, setFilteredCountry] = useState("");
  const searchParam = ["capital", "name"];
  const handleChangeCountry = (e) => {
    setFilteredCountry(e.target.value);
  };

  const handleChangeReg = (e) => {
    setRegion(e.target.value);
  };

  const search = (items) =>
    items.filter((item) =>
      searchParam.some(
        (newItem) =>
          item[newItem]
            .toString()
            .toLowerCase()
            .indexOf(filteredCountry.toLowerCase()) > -1
      )
    );

  const activeCountries = search(countries).filter((country) => {
    return region === "" || country.region === region;
  });

  return (
    <div className="homeContainer">
      <div className="homeNav">
        <SearchCountry onChange={handleChangeCountry} value={filteredCountry} />
        <FilterCountry onChange={handleChangeReg} />
      </div>
      <CountryList countries={activeCountries} />
    </div>
  );
};

export default Home;
