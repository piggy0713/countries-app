import React from "react";
import "../App.scss";
import NumberFormat from "react-number-format";
import { Link } from "react-router-dom";

const CountryList = ({ countries }) => {
  return (
    <div className="countryList">
      {countries.map((country) => (
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
  );
};

export default CountryList;
