import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date();

  return (
    <footer className={classes.Footer}>
      <small>&copy; Copyright {currentYear.getFullYear()}, Kaan Serin</small>
    </footer>
  );
};

export default Footer;
