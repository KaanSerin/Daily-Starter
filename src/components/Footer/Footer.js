import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date();

  return (
    <footer className={classes.Footer}>
      <small>
        &copy; Copyright {currentYear.getFullYear()}, Kaan Serin |{" "}
        <a href="https://github.com/KaanSerin">Github</a> |{" "}
        <a href="https://twitter.com/KaanSerin20">Twitter</a>
      </small>
    </footer>
  );
};

export default Footer;
