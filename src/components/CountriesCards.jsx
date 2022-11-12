import CountryCard from "./CountryCard";
const CountriesCards = ({ currentCountries }) => {
  return currentCountries?.map((country, i) => (
    <CountryCard
      key={i}
      flagImage={country.flags.svg}
      countryName={country.name.common}
      population={country.population}
      region={country.region}
      capital={country.capital}
    />
  ));
};

export default CountriesCards;
