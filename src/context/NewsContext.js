import React, { createContext, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

const NewsContextProvider = (props) => {
  const [newsData, setNewsData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getNews = (countryCode) => {
    setIsLoading(true);
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=d768583776c24e3bacf873faea8b6d8a`
      )
      .then((response) => {
        console.log(response.data);
        setNewsData(response.data.articles);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  return (
    <NewsContext.Provider value={{ newsData, setNewsData, getNews, isLoading }}>
      {props.children}
    </NewsContext.Provider>
  );
};

export default NewsContextProvider;
