import React, { createContext, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

// Thanks to GNews Api, I have to resort to this
const countryToLang = (countryCode) => {
  const langCodes = {
    tr: "tr",
    gb: "en",
    us: "en",
    de: "de",
    fr: "fr",
    gr: "el",
    hu: "hu",
    ie: "en",
    il: "iw",
    it: "it",
    es: "es",
    se: "sv",
    jp: "ja",
    ru: "ru",
    au: "en",
    ar: "es",
    be: "nl",
    bg: "bg",
    br: "pt-BR",
    pt: "pt-PT",
    ca: "en",
    cy: "en",
    za: "af",
    al: "sq",
  };

  return langCodes[countryCode];
};

const NewsContextProvider = (props) => {
  const [newsData, setNewsData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getNews = (countryCode) => {
    setIsLoading(true);
    axios
      .get(
        `https://gnews.io/api/v3/top-news?lang=${countryToLang(
          countryCode
        )}&country=${countryCode}&token=af18c2c2a6cb6504b91f2fccee89ecf2`
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
