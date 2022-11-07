import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useState } from "react";
const Search = ({ setQuery }) => {
  return (
    <div className="search-container">
      <FontAwesomeIcon icon={solid("search")} />
      <input
        type="search"
        placeholder="Search for a country..."
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

const Filter = ({ setFilterState }) => {
  const [dropdownState, setDropdownState] = useState("");
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
        <li onClick={() => setFilterState("Africa")}>Africa</li>
        <li onClick={() => setFilterState("Americas")}>America</li>
        <li onClick={() => setFilterState("Asia")}>Asia</li>
        <li onClick={() => setFilterState("Europe")}>Europe</li>
        <li onClick={() => setFilterState("Oceania")}>Oceania</li>
      </ul>
    </div>
  );
};

const ToolsBar = ({ setQuery, setFilterState }) => {
  return (
    <div className="container">
      <Search setQuery={setQuery} />
      <Filter setFilterState={setFilterState} />
    </div>
  );
};

export default ToolsBar;
