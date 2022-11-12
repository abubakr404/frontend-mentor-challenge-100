import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import CheckCountry from "./pages/CheckCountry";
import NotFound from "./pages/NotFound";

function App() {
  const [theme, setTheme] = useState("");

  const [allCountries, setAllCountries] = useState([]);
  const [countries, setCountries] = useState([]);

  useEffect(
    () => async () => {
      const countriesResponse = await axios.get("https://restcountries.com/v3.1/all");
      setAllCountries(countriesResponse.data);
      setCountries(countriesResponse.data);
    },
    []
  );

  return (
    <div className={`app${theme}`}>
      <header>
        <Header setTheme={setTheme} theme={theme} />
      </header>
      <main>
        <Routes>
          <Route
            path="frontend-mentor-challenge-100"
            element={
              <Home setCountries={setCountries} countries={countries} allCountries={allCountries} />
            }
          />
          <Route
            path="frontend-mentor-challenge-100/countries/:countryName"
            element={<CheckCountry allCountries={allCountries} />}
          />
          <Route path="frontend-mentor-challenge-100/*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
