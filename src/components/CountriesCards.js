import CountryCard from "./CountryCard";

const CountriesCards = ({ visableCountries }) => {
  return visableCountries?.map((country, i) => (
    <CountryCard
      key={i}
      flagImage={country.flags.svg}
      countryName={country.name.common}
      nativeName={country.name.nativeName}
      population={country.population}
      region={country.region}
      subregion={country.subregion}
      capital={country.capital}
      topLevelDomain={country.tld}
      currencies={country.currencies}
      languages={country.languages}
    />
  ));
};

export default CountriesCards;
