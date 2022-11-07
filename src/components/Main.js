import CountriesCards from "./CountriesCards";
import Pagination from "./Pagination";
import ToolsBar from "./ToolsBar";
import { useState, useEffect } from "react";
import axios from "axios";

const Main = () => {
  const [allCountries, setAllCountries] = useState([]);
  const [countries, setCountries] = useState([]);
  const [filterState, setFilterState] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 8;

  useEffect(
    () => async () => {
      const countriesResponse = await axios.get(
        "https://restcountries.com/v3.1/all"
      );
      setAllCountries(countriesResponse.data);
      const filterCountries = (filter) =>
        setCountries(
          allCountries.filter(
            (country) => country.region === filter || filter === "All"
          )
        );
      filterCountries(filterState);
    },
    [allCountries, filterState]
  );

  const lastCountryIndex = currentPage * countriesPerPage;
  const firstCountryIndex = lastCountryIndex - countriesPerPage;
  const currentCountriesCards = countries.slice(
    firstCountryIndex,
    lastCountryIndex
  );
  return (
    <main>
      <section className="tools-bar">
        <ToolsBar setFilterState={setFilterState} />
      </section>
      <section className="countries">
        <div className="container">
          <CountriesCards countries={currentCountriesCards} />
        </div>
        <Pagination
          totalCountries={countries.length}
          countriesPerPage={countriesPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </section>
    </main>
  );
};

export default Main;
