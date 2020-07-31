import React, { useContext } from "react";
import WeatherList from "./WeatherList/WeatherList";
import { ForecastContext } from "../../context/ForecastContext";
import Spinner from "../Spinner/Spinner";

const WeatherSection = ({ isLoading }) => {
  const { forecastData } = useContext(ForecastContext);

  let weatherList = null;

  if (forecastData !== null) {
    weatherList = <WeatherList />;
  }

  if (isLoading) {
    weatherList = <Spinner />;
  }

  let header = null;
  if (forecastData !== null) {
    header = <h1>WEATHER FORECAST FOR {forecastData[0].city.toUpperCase()}</h1>;
  }

  return (
    <div className="">
      {header}
      {weatherList}
    </div>
  );
};

export default WeatherSection;
