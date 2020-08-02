import React, { useContext, useEffect } from "react";
import { currencyList } from "./CurrencyList";
import { CurrencyContext } from "../../context/CurrencyContext";
import Currency from "./Currency/Currency";
import classes from "./CurrencySection.module.css";
const CurrencySection = () => {
  const { baseCurrency, currencyData, getCurrencyData } = useContext(
    CurrencyContext
  );

  useEffect(() => {
    if (currencyData === null) {
      getCurrencyData(baseCurrency);
    }
  }, [currencyData]);

  let currencies = (
    <React.Fragment>
      <Currency name="EUR" value={1} />
      <Currency name="USD" />
      <Currency name="GBP" />
      <Currency name="RUB" />
    </React.Fragment>
  );

  if (currencyData) {
    currencies = (
      <React.Fragment>
        <Currency name="EUR" value={currencyData["EUR"]} />
        <Currency name="USD" value={currencyData["USD"]} />
        <Currency name="GBP" value={currencyData["GBP"]} />
        <Currency name="RUB" value={currencyData["RUB"]} />
      </React.Fragment>
    );
  }

  return (
    <div className={classes.CurrencySection}>
      <select
        name="baseCurrency"
        id="baseCurrency"
        onChange={(event) => getCurrencyData(event.target.value)}
      >
        {currencyList.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>

      {currencies}
    </div>
  );
};

export default CurrencySection;
