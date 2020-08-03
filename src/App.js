import React from "react";
import "./App.css";
import WeatherSection from "./components/WeatherSection/WeatherSection";
import ForecastContextProvider from "./context/ForecastContext";
import Navbar from "./components/Navbar/Navbar";
import NewsSection from "./components/NewsSection/NewsSection";
import NewsContextProvider from "./context/NewsContext";
import CurrencyContextProvider from "./context/CurrencyContext";
import CurrencySection from "./components/CurrencySection/CurrencySection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <ForecastContextProvider>
        <Navbar />

        <CurrencyContextProvider>
          <CurrencySection />
        </CurrencyContextProvider>

        <WeatherSection />
      </ForecastContextProvider>

      <NewsContextProvider>
        <NewsSection />
      </NewsContextProvider>

      <Footer />
    </div>
  );
}

export default App;
