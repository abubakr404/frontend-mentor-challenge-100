const CountryDetailsCard = ({
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
  borders,
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
        <div className="country-name">
          <h3 className="card-title" title={countryName}>
            {countryName}
          </h3>
        </div>
        <div className="country-details">
          <div className="col-details">
            <div className="info">
              <span className="title">Native Name: </span>
              <span className="value">
                {loopInObjects(nativeName, "common").join(", ")}
              </span>
            </div>
            <div className="info">
              <span className="title">Population: </span>
              <span className="value">{population.toLocaleString()}</span>
            </div>
            <div className="info">
              <span className="title">Region: </span>
              <span className="value">{region}</span>
            </div>
            <div className="info">
              <span className="title">Sub Region: </span>
              <span className="value">{subregion}</span>
            </div>
            <div className="info">
              <span className="title">Capital: </span>
              <span className="value">{capital}</span>
            </div>
          </div>
          <div className="col-details">
            <div className="info">
              <span className="title">Top Level Domain: </span>
              <span className="value">{topLevelDomain}</span>
            </div>
            <div className="info">
              <span className="title">Currencies: </span>
              <span className="value">
                {loopInObjects(currencies, "name").join(", ")}
              </span>
            </div>
            <div className="info">
              <span className="title">Languages: </span>
              <span className="value">
                {languages ? Object.values(languages).join(", ") : "loading"}
              </span>
            </div>
          </div>
        </div>
        <div className="country-borders">
          <span className="title">Border Countries: </span>
          <div className="borders">
            {borders.map((border, i) => (
              <span className="border btn" key={i}>
                {border.name.common}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CountryDetailsCard;
