import React, { useState } from "react";
import classes from "./CountryList.module.css";
import CountryIcon from "./CountryIcon/CountryIcon";

const CountryList = (props) => {
  const [countries, setCountries] = useState([
    "ae",
    "ar",
    "at",
    "au",
    "be",
    "bg",
    "br",
    "ca",
    "ch",
    "cn",
    "co",
    "cu",
    "cz",
    "de",
    "eg",
    "fr",
    "gb",
    "gr",
    "hk",
    "hu",
    "id",
    "ie",
    "il",
    "in",
    "it",
    "jp",
    "kr",
    "lt",
    "lv",
    "ma",
    "mx",
    "my",
    "ng",
    "nl",
    "no",
    "nz",
    "ph",
    "pl",
    "pt",
    "ro",
    "rs",
    "ru",
    "sa",
    "se",
    "sg",
    "si",
    "sk",
    "th",
    "tr",
    "tw",
    "ua",
    "us",
    "ve",
    "za",
  ]);

  return (
    <div className={classes.CountryList}>
      <ul>
        {countries.map((country) => (
          <CountryIcon
            key={country}
            name={country}
            src={`https://www.countryflags.io/${country}/shiny/64.png`}
          />
        ))}
      </ul>
    </div>
  );
};

export default CountryList;
