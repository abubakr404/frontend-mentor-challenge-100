import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import CountryDetailsCard from "../components/CountryDetailsCard";

const SingleCountry = ({ countryInfo, countryBorder }) => {
  return (
    <section className="country">
      <div className="container">
        <Link to="/frontend-mentor-challenge-100" className="link btn">
          <FontAwesomeIcon icon={solid("long-arrow-left")} />
          <span>Back</span>
        </Link>
        <CountryDetailsCard
          flagImage={countryInfo.flags.svg}
          countryName={countryInfo.name.common}
          nativeName={countryInfo.name.nativeName}
          population={countryInfo.population}
          region={countryInfo.region}
          subregion={countryInfo.subregion}
          capital={countryInfo.capital}
          topLevelDomain={countryInfo.tld ? countryInfo.tld.join(", ") : "Not Defined"}
          currencies={countryInfo.currencies}
          languages={countryInfo.languages}
          borders={countryBorder}
        />
      </div>
    </section>
  );
};

export default SingleCountry;
