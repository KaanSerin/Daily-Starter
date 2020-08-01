import React, { useContext } from "react";
import classes from "./CountryIcon.module.css";
import { NewsContext } from "../../../../context/NewsContext";
const CountryIcon = ({ name, src }) => {
  const { getNews } = useContext(NewsContext);

  const onClickHandler = () => {
    getNews(name);
    localStorage.setItem("country", name);
  };

  return (
    <li onClick={onClickHandler} className={classes.CountryIcon}>
      <img src={src} alt={`${name} flag`} />
      <p>{name}</p>
    </li>
  );
};

export default CountryIcon;
