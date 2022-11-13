import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import CheckCountry from "./pages/CheckCountry";
import NotFound from "./pages/NotFound";

function App() {
  const [theme, setTheme] = useState("");

  const [allCountries, setAllCountries] = useState([]);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((result) => {
        setAllCountries(result);
        setCountries(result);
      });
  }, []);

  return (
    <div className={`app${theme}`}>
      <header>
        <Header setTheme={setTheme} theme={theme} />
      </header>
      <main>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home setCountries={setCountries} countries={countries} allCountries={allCountries} />
            }
          />
          <Route
            path="/countries/:countryName"
            element={<CheckCountry allCountries={allCountries} />}
          />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
