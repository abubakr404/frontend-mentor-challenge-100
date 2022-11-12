import CountriesCards from "../components/CountriesCards";
import Pagination from "../components/Pagination";
import ToolsBar from "../components/ToolsBar";
import { useState } from "react";

const Home = ({ setCountries, countries, allCountries }) => {
  const [currentCountries, setCurrentCountries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <section className="tools-bar">
        <ToolsBar
          setCurrentPage={setCurrentPage}
          setCountries={setCountries}
          allCountries={allCountries}
        />
      </section>
      <section className="countries">
        <div className="container">
          <CountriesCards currentCountries={currentCountries} />
        </div>
        <Pagination
          setCurrentPage={setCurrentPage}
          setCurrentCountries={setCurrentCountries}
          currentPage={currentPage}
          countriesPerPage={8}
          data={countries}
        />
      </section>
    </>
  );
};

export default Home;
