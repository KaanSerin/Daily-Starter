import React, { useContext } from "react";
import { NewsContext } from "../../../context/NewsContext";
import News from "./News/News";
import uuid from "uuid/dist/v1";
import classes from "./NewsList.module.css";

const NewsList = () => {
  const { newsData } = useContext(NewsContext);

  let output = <p>Select a country</p>;
  if (newsData !== null) {
    output = newsData.map((news) => (
      <News
        key={uuid()}
        title={news.title}
        description={news.description}
        imageUrl={news.urlToImage}
        url={news.url}
      />
    ));
  }
  return <div className={classes.NewsList}>{output}</div>;
};

export default NewsList;
