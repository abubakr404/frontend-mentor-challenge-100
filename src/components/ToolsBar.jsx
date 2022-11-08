import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useState } from "react";
const Search = ({ setQuery, setCurrentPage }) => {
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

const Filter = ({ setFilterState }) => {
  const [dropdownState, setDropdownState] = useState("");
  const filterOptions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  return (
    <div className={"filter-dropdown" + dropdownState}>
      <div
        className="selected-filter"
        onClick={() => setDropdownState(dropdownState === "" ? " open" : "")}
      >
        <span>{"Filter by Region"}</span>
        <FontAwesomeIcon icon={solid("chevron-down")} />
      </div>
      <ul className="filter-menu">
        {filterOptions.map((option, i) => (
          <li key={i} onClick={() => setFilterState(option)}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

const ToolsBar = ({ setQuery, setFilterState, setCurrentPage }) => {
  return (
    <div className="container">
      <Search setCurrentPage={setCurrentPage} setQuery={setQuery} />
      <Filter setFilterState={setFilterState} />
    </div>
  );
};

export default ToolsBar;
