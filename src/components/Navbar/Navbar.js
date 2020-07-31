import React, { useState } from "react";
import classes from "./Navbar.module.css";
import logoImg from "../../assets/images/logo.png";
import searchIcon from "../../assets/images/search.png";

const Navbar = ({ getForecast }) => {
  const [search, setSearch] = useState("");

  const searchForecast = () => {
    getForecast(search);
    setSearch("");
  };

  return (
    <nav className={classes.Navbar}>
      <a href="/">
        <img src={logoImg} alt="The Daily Starter Logo" />
      </a>
      <div className={classes.searchbox}>
        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <img src={searchIcon} onClick={searchForecast} alt="search button" />
      </div>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
