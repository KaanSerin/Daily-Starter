import React, { useContext } from "react";
import Weather from "./Weather/Weather";
import { ForecastContext } from "../../../context/ForecastContext";
import classes from "./WeatherList.module.css";
import uuid from "uuid/dist/v1";

const WeatherList = () => {
  const { forecastData } = useContext(ForecastContext);

  let forecasts = null;

  if (forecastData !== null) {
    forecasts = forecastData.map((forecast) => (
      <Weather
        key={uuid()}
        day={forecast.day}
        temp={forecast.temp}
        icon={forecast.weather.icon}
      />
    ));
  }

  return (
    <div className={classes.WeatherList}>
      <ul>{forecasts}</ul>
    </div>
  );
};

export default WeatherList;
