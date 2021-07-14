import React from "react";
import "../App.scss";
import { HiSearch } from "react-icons/hi";
import NumberFormat from "react-number-format";
import { Link } from "react-router-dom";

const Home = ({ countries }) => {
  return (
    <div className="homeContainer">
      <div className="homeNav">
        <div className="searchContainer">
          <HiSearch className="icon" />
          <input type="text" placeholder="Search for a country..." />
        </div>

        <div className="filterContainer">filter</div>
      </div>
      <div className="countryList">
        {countries
          .filter((country) => {
            return country.region === "Europe";
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
