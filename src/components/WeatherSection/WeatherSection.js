import React, { useState, useContext, useEffect } from "react";
import WeatherList from "./WeatherList/WeatherList";
import { ForecastContext } from "../../context/ForecastContext";
import Spinner from "../Spinner/Spinner";
import Navbar from "../Navbar/Navbar";
import axios from "axios";

const WeatherSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { forecastData, setForecastData } = useContext(ForecastContext);

  useEffect(() => {
    const search = localStorage.getItem("search");
    if (search !== null) {
      getForecast(search);
    }
  }, []);

  const getForecast = (city) => {
    setIsLoading(true);
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${city}&mode=json&units=metric&appid=ea68e365d06e5d2f65aaf446623175b1`
      )
      .then((response) => {
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${response.data.city.coord.lat}&cnt=7&units=metric&lon=${response.data.city.coord.lon}&appid=ea68e365d06e5d2f65aaf446623175b1`
          )
          .then((response) => {
            setForecastData(formatWeatherData({ ...response.data, city }));
            setIsLoading(false);
          })
          .catch((err) => {
            console.log(err);
            setIsLoading(false);
          });
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  const formatWeatherData = (data) => {
    console.log(data);
    const result = data.daily.map((day) => ({
      city: data.city,
      day: new Date(1000 * day.dt),
      temp: {
        day: day.temp.day,
        night: day.temp.night,
      },
      humidity: day.humidity,
      weather: {
        description: day.weather[0].description,
        icon: day.weather[0].icon,
      },
    }));

    return result;
  };

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
      <Navbar getForecast={getForecast} />
      {header}
      {weatherList}
    </div>
  );
};

export default WeatherSection;