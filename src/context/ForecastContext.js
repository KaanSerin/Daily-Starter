import React, { useState, createContext } from "react";

export const ForecastContext = createContext();

const ForecastContextProvider = (props) => {
  const [forecastData, setForecastData] = useState(null);
  return (
    <ForecastContext.Provider value={{ forecastData, setForecastData }}>
      {props.children}
    </ForecastContext.Provider>
  );
};

export default ForecastContextProvider;
