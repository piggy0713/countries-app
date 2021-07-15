import React, { useState } from "react";
import "../App.scss";
import { HiSearch } from "react-icons/hi";
import NumberFormat from "react-number-format";
import { Link } from "react-router-dom";

const Home = ({ countries }) => {
  const [region, setRegion] = useState("");
  const [filteredCountry, setFilteredCountry] = useState("");
  const [searchParam] = useState(["capital", "name"]);
  const handleChangeReg = (e) => {
    setRegion(e.target.value);
  };
  const handleChangeCountry = (e) => {
    setFilteredCountry(e.target.value);
  };

  const search = (items) => {
    return items.filter((item) => {
      return searchParam.some((newItem) => {
        return (
          item[newItem]
            .toString()
            .toLowerCase()
            .indexOf(filteredCountry.toLowerCase()) > -1
        );
      });
    });
  };

  return (
    <div className="homeContainer">
      <div className="homeNav">
        <div className="searchContainer">
          <HiSearch className="icon" />
          <input
            type="text"
            placeholder="Search for a country..."
            onChange={handleChangeCountry}
            value={filteredCountry}
          />
        </div>

        <div className="filterContainer">
          <select className="regionSelector" onChange={handleChangeReg}>
            <option value="">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
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
