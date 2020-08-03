import React from "react";
import classes from "./News.module.css";
import newsIcon from "../../../../assets/images/defaultNews.jpg";
import { Button, createMuiTheme, MuiThemeProvider } from "@material-ui/core";

const News = ({ title, description, imageUrl, url }) => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#e8505b",
      },
      secondary: {
        main: "#f9d56e",
      },
    },
  });

  return (
    <div className={classes.News}>
      <img src={imageUrl ? imageUrl : newsIcon} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>

      <MuiThemeProvider theme={theme}>
        <Button color="secondary" variant="contained" href={url}>
          Go to the page
        </Button>
      </MuiThemeProvider>
    </div>
  );
};

export default News;
