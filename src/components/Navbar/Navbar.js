import React, { useState, useContext } from "react";
import classes from "./Navbar.module.css";
import logoImg from "../../assets/images/logo.png";
import searchIcon from "../../assets/images/search.png";
import { ForecastContext } from "../../context/ForecastContext";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const { getForecast } = useContext(ForecastContext);

  const searchForecast = () => {
    getForecast(search);
    localStorage.setItem("search", search);
    setSearch("");
  };

  const onKeyDown = (event) => {
    if (event.keyCode === 13) {
      searchForecast();
    }
  };

  return (
    <nav className={classes.Navbar}>
      <a href="/">
        {/* <img src={logoImg} alt="The Daily Starter Logo" /> */}
        Daily Starter
      </a>
      <div className={classes.searchbox}>
        <input
          type="text"
          value={search}
          placeholder="Search for your city / country"
          onChange={(event) => setSearch(event.target.value)}
          onKeyDown={onKeyDown}
        />
        <img src={searchIcon} onClick={searchForecast} alt="search button" />
      </div>
    </nav>
  );
};

export default Navbar;
