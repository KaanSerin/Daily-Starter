import React from "react";
import classes from "./News.module.css";
import { Paper } from "@material-ui/core";

const News = ({ title, description, imageUrl, url }) => {
  return (
    <div className={classes.News}>
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={url}>Go to the page</a>
    </div>
  );
};

export default News;
