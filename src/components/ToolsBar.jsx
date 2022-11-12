import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useState, useEffect } from "react";
const Search = ({ setCountries, setCurrentPage, allCountries }) => {
  const [query, setQuery] = useState("");
  useEffect(() => {
    const filterKeys = ["capital", "name", "region", "translations"];
    setCountries(
      allCountries.filter(
        (country) =>
          filterKeys.some(
            (key) =>
              country[key] &&
              JSON.stringify(country[key])
                .toLocaleLowerCase()
                .includes(query.toLocaleLowerCase())
          ) || !query
      )
    );
  }, [allCountries, query, setCountries]);
  return (
    <div className="search-container">
      <FontAwesomeIcon icon={solid("search")} />
      <input
        type="search"
        placeholder="Search for a country..."
        onChange={(e) => {
          setCurrentPage(1);
          setQuery(e.target.value);
        }}
      />
    </div>
  );
};

const Filter = ({ setCountries, setCurrentPage, allCountries }) => {
  const [dropdownState, setDropdownState] = useState("");
  const [filter, setFilter] = useState("");
  const filterOptions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  useEffect(() => {
    filter &&
      setCountries(allCountries.filter((country) => country.region === filter));
  }, [allCountries, filter, setCountries]);

  return (
    <div className={`filter-dropdown ${dropdownState}`}>
      <div
        className="selected-filter"
        onClick={() => setDropdownState((prev) => (prev === "" ? " open" : ""))}
      >
        <span>{"Filter by Region"}</span>
        <FontAwesomeIcon icon={solid("chevron-down")} />
      </div>
      <ul className="filter-menu">
        {filterOptions.map((option, i) => (
          <li
            key={i}
            onClick={() => {
              setCurrentPage(1);
              setFilter(option);
            }}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

const ToolsBar = ({ setCurrentPage, setCountries, allCountries }) => {
  return (
    <div className="container">
      <Search
        setCurrentPage={setCurrentPage}
        setCountries={setCountries}
        allCountries={allCountries}
      />
      <Filter
        setCountries={setCountries}
        setCurrentPage={setCurrentPage}
        allCountries={allCountries}
      />
    </div>
  );
};

export default ToolsBar;
