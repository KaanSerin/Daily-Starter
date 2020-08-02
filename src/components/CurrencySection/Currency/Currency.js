import React from "react";
import currencySymbolMap from "currency-symbol-map";
import classes from "./Currency.module.css";

const Currency = ({ name, value }) => {
  return (
    <span className={classes.Currency}>
      <strong>{currencySymbolMap(name)}</strong>:{" "}
      {value ? value.toFixed(2) : null}
    </span>
  );
};

export default Currency;
