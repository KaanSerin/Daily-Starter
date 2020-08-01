import React from "react";
import "./App.css";
import WeatherSection from "./components/WeatherSection/WeatherSection";
import ForecastContextProvider from "./context/ForecastContext";
import Navbar from "./components/Navbar/Navbar";
import NewsSection from "./components/NewsSection/NewsSection";
import NewsContextProvider from "./context/NewsContext";

function App() {
  return (
    <div className="App">
      <ForecastContextProvider>
        <Navbar />
        <WeatherSection />
      </ForecastContextProvider>

      <NewsContextProvider>
        <NewsSection />
      </NewsContextProvider>
    </div>
  );
}

export default App;
