import React from "react";
import { useParams } from "react-router-dom";
import "../App.scss";
import NumberFormat from "react-number-format";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const CountryDetail = ({ countries }) => {
  const { countryCode } = useParams();
  const thisCountry = countries.find(
    (country) => country.alpha3Code === countryCode
  );
  if (!thisCountry) {
    return <div></div>;
  }

  const borderCountries = thisCountry.borders
    .map((countryCode) =>
      countries.find((country) => country.alpha3Code === countryCode)
    )
    .map((country) => country.name);

  borderCountries.sort();

  return (
    <div className="countryContainer">
      <Link className="linkBtn" to="/">
        <BiArrowBack className="arrow" />
        <div>Back</div>
      </Link>
      <div className="detailContainer">
        <div
          className="flag"
          style={{ backgroundImage: `url(${thisCountry.flag})` }}
        ></div>
        <div className="textContainer">
          <h1>{thisCountry.name}</h1>
          <div className="countryText">
            <div>
              <span>Native Name: </span>
              {thisCountry.altSpellings[1]}
            </div>
            <div>
              <span>Top Level Domain: </span>
              {thisCountry.topLevelDomain[0]}
            </div>
            <div>
              <span>Population: </span>
              <NumberFormat
                className="numberFormat"
                thousandSeparator={true}
                value={thisCountry.population}
                readOnly
              />
            </div>
            <div>
              <span>Currencies: </span>
              {thisCountry.currencies[0].name}
            </div>
            <div>
              <span>Region: </span>
              {thisCountry.region}
            </div>
            <div>
              <span>Languages: </span>
              {thisCountry.languages.map((lang) => lang.name).join(", ")}
            </div>
            <div>
              <span>Sub Region: </span>
              {thisCountry.subregion}
            </div>
            <div>
              <span>Capital: </span>
              {thisCountry.capital}
            </div>
          </div>
          <div className="bordersContainer">
            <span>Border Countries: </span>
            <ul>
              {borderCountries.map((border) => (
                <li key={border} className="borderCountry">
                  {border}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
