import React, { useState, createContext } from "react";
import axios from "axios";

export const ForecastContext = createContext();

const ForecastContextProvider = (props) => {
  const [forecastData, setForecastData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getForecast = (city) => {
    setIsLoading(true);
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&mode=json&units=metric&appid=ea68e365d06e5d2f65aaf446623175b1`
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

  return (
    <ForecastContext.Provider value={{ forecastData, getForecast, isLoading }}>
      {props.children}
    </ForecastContext.Provider>
  );
};

export default ForecastContextProvider;
