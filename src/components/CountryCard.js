const CountryCard = ({
  flagImage,
  countryName,
  nativeName,
  population,
  region,
  subregion,
  capital,
  topLevelDomain,
  currencies,
  languages,
}) => {
  const loopInObjects = (object, value) => {
    const values = object
      ? Object.values(object).map((key) => key[value])
      : ["loading"];
    return values;
  };

  return (
    <div className="country-card">
      <div className="country-flag">
        <img src={flagImage} alt="" />
      </div>
      <div className="country-info">
        <h3 title={countryName}>{countryName}</h3>
        <div className="country-details">
          <div className="country-main-details">
            <p>
              <span className="title">Native Name: </span>
              <span className="value">
                {loopInObjects(nativeName, "common").join(", ")}
              </span>
            </p>
            <p>
              <span className="title">Population: </span>
              <span className="value">{population}</span>
            </p>
            <p>
              <span className="title">Region: </span>
              <span className="value">{region}</span>
            </p>
            <p>
              <span className="title">Sub Region: </span>
              <span className="value">{subregion}</span>
            </p>
            <p>
              <span className="title">Capital: </span>
              <span className="value">{capital}</span>
            </p>
          </div>
          <div className="country-more-details">
            <p>
              <span className="title">Top Level Domain: </span>
              <span className="value">{topLevelDomain.join(", ")}</span>
            </p>
            <p>
              <span className="title">Currencies: </span>
              <span className="value">
                {loopInObjects(currencies, "name").join(", ")}
              </span>
            </p>
            <p>
              <span className="title">Languages: </span>
              <span className="value">
                {languages ? Object.values(languages).join(", ") : "loading"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
