import React, { useState } from "react";
import "../App.scss";
import SearchCountry from "./SearchCountry";
import FilterCountry from "./FilterCountry";
import NumberFormat from "react-number-format";
import { Link } from "react-router-dom";

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

  return (
    <div className="homeContainer">
      <div className="homeNav">
        <SearchCountry onChange={handleChangeCountry} value={filteredCountry} />
        <FilterCountry onChange={handleChangeReg} />
      </div>
      <div className="countryList">
        {search(countries)
          .filter((country) => {
            return region === "" || country.region === region;
          })
          .map((country) => (
            <div key={country.alpha3Code} className="country">
              <div
                className="flagContainer"
                style={{ backgroundImage: `url(${country.flag})` }}
              ></div>
              <div className="countryDesc">
                <div className="countryName">
                  <Link to={`/${country.alpha3Code}`}>{country.name}</Link>
                </div>
                <div className="population">
                  <span> Population : </span>
                  <NumberFormat
                    className="numberFormat"
                    thousandSeparator={true}
                    value={country.population}
                    readOnly
                  />
                </div>
                <div className="region">
                  <span>Region : </span>
                  {country.region}
                </div>
                <div className="capital">
                  <span>Capital : </span>
                  {country.capital}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
