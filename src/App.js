import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import axios from "axios";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [forecastData, setForecastData] = useState(null);

  const getForecast = (city) => {
    setIsLoading(true);
    axios.get(
      `api.openweathermap.org/data/2.5/forecast?q=${city}&appid=ea68e365d06e5d2f65aaf446623175b1`
    );
  };

  return (
    <div className="App">
      <Navbar getForecast={getForecast} />
    </div>
  );
}

export default App;
