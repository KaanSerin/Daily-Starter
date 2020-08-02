import React from "react";
import classes from "./News.module.css";
import newsIcon from "../../../../assets/images/defaultNews.jpg";

const News = ({ title, description, imageUrl, url }) => {
  return (
    <div className={classes.News}>
      <img src={imageUrl ? imageUrl : newsIcon} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={url}>Go to the page</a>
    </div>
  );
};

export default News;
