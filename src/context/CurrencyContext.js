import React, { createContext, useState } from "react";
import axios from "axios";

export const CurrencyContext = createContext();

const CurrencyContextProvider = (props) => {
  const [baseCurrency, setBaseCurrency] = useState("EUR");
  const [currencyData, setCurrencyData] = useState(null);

  const getCurrencyData = (currency) => {
    setBaseCurrency(currency);
    axios
      .get(`https://api.exchangeratesapi.io/latest?base=${currency}`)
      .then((response) => {
        // If the currency is euro add the Euro: 1 to the object
        if (currency === "EUR") {
          setCurrencyData({ ...response.data.rates, EUR: 1 });
        } else {
          setCurrencyData(response.data.rates);
        }
        localStorage.setItem("baseCurrency", currency);
      })
      .catch((err) => console.log(err));
  };

  return (
    <CurrencyContext.Provider
      value={{ baseCurrency, currencyData, getCurrencyData }}
    >
      {props.children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyContextProvider;
