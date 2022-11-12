import { Link } from "react-router-dom";

const CountryCard = ({ flagImage, countryName, population, region, capital }) => {
  return (
    <div className="country-card">
      <Link
        to={`countries/${countryName.toLocaleLowerCase().split(" ").join("-")}`}
        className="country-flag"
      >
        <img src={flagImage} alt="" />
      </Link>
      <div className="country-info">
        <Link
          to={`countries/${countryName.toLocaleLowerCase().split(" ").join("-")}`}
          className="country-name"
        >
          <h3 className="card-title" title={countryName}>
            {countryName}
          </h3>
        </Link>
        <div className="country-details">
          <div className="info">
            <span className="title">Population: </span>
            <span className="value">{population.toLocaleString()}</span>
          </div>
          <div className="info">
            <span className="title">Region: </span>
            <span className="value">{region}</span>
          </div>
          <div className="info">
            <span className="title">Capital: </span>
            <span className="value">{capital}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
