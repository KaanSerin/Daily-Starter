import React, { useContext, useEffect } from "react";
import { NewsContext } from "../../context/NewsContext";
import NewsList from "./NewsList/NewsList";
import Spinner from "../Spinner/Spinner";
import CountryList from "./CountryList/CountryList";
import classes from "./NewsSection.module.css";

const NewsSection = () => {
  const { isLoading, getNews } = useContext(NewsContext);
  const country = localStorage.getItem("country");

  let newsList = <NewsList />;

  if (isLoading) {
    newsList = <Spinner />;
  }

  useEffect(() => {
    if (country === null) {
      getNews("tr");
    } else {
      getNews(country);
    }
  }, [country]);

  return (
    <div className={classes.NewsSection}>
      <h1>GET TOP NEWS ACCROSS THE PLANET</h1>
      <CountryList />
      {newsList}
    </div>
  );
};

export default NewsSection;
