import React, { useContext, useEffect } from "react";
import WeatherList from "./WeatherList/WeatherList";
import { ForecastContext } from "../../context/ForecastContext";
import Spinner from "../Spinner/Spinner";

const WeatherSection = () => {
  const { forecastData, isLoading, getForecast } = useContext(ForecastContext);
  const search = localStorage.getItem("search");

  useEffect(() => {
    if (search !== null) {
      getForecast(search);
    } else {
      getForecast("Istanbul");
    }
  }, [search]);

  let weatherList = null;

  if (forecastData !== null) {
    weatherList = <WeatherList />;
  }

  if (isLoading) {
    weatherList = <Spinner />;
  }

  let header = null;
  if (forecastData !== null) {
    header = <h1>WEEKLY FORECAST FOR {forecastData[0].city.toUpperCase()}</h1>;
  }

  return (
    <div className="">
      {header}
      {weatherList}
    </div>
  );
};

export default WeatherSection;
