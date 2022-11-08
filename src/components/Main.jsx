import CountriesCards from "./CountriesCards";
import Pagination from "./Pagination";
import ToolsBar from "./ToolsBar";
import { useState, useEffect } from "react";
import axios from "axios";

const Main = () => {
  const [allCountries, setAllCountries] = useState([]);
  const [countries, setCountries] = useState([]);
  const [filterState, setFilterState] = useState("All");
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 8;

  useEffect(
    () => async () => {
      const countriesResponse = await axios.get(
        "https://restcountries.com/v3.1/all"
      );
      setAllCountries(countriesResponse.data);
      const filterCountries = (filter) => {
        if (query === "") {
          setCountries(
            allCountries.filter(
              (country) => country.region === filter || filter === "All"
            )
          );
        } else {
          const filterKeys = ["capital", "name", "region", "translations"];
          setCountries(
            allCountries.filter((country) =>
              filterKeys.some(
                (key) =>
                  country[key] &&
                  JSON.stringify(country[key])
                    .toLocaleLowerCase()
                    .includes(query.toLocaleLowerCase())
              )
            )
          );
        }
      };
      filterCountries(filterState);
    },
    [allCountries, filterState, query]
  );

  const IndexOfLastCountry = currentPage * countriesPerPage;
  const IndexOfFirstCountry = IndexOfLastCountry - countriesPerPage;
  const visableCountries = countries.slice(
    IndexOfFirstCountry,
    IndexOfLastCountry
  );
  let pages = [];
  for (let i = 1; i <= Math.ceil(countries.length / countriesPerPage); i++)
    pages.push(i);
  return (
    <main>
      <section className="tools-bar">
        <ToolsBar
          setCurrentPage={setCurrentPage}
          setQuery={setQuery}
          setFilterState={setFilterState}
        />
      </section>
      <section className="countries">
        <div className="container">
          <CountriesCards
            visableCountries={visableCountries}
            allCountries={allCountries}
          />
        </div>
        <Pagination
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </section>
    </main>
  );
};

export default Main;
