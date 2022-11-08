import CountryCard from "./CountryCard";
const CountriesCards = ({ visableCountries, allCountries }) => {
  return visableCountries?.map((country, i) => {
    let countryBorder = country.borders
      ? allCountries?.filter((coun) =>
          JSON.stringify(country.borders).includes(coun.cca3)
        )
      : [{ name: { common: "No borders" } }];
    return (
      <CountryCard
        key={i}
        flagImage={country.flags.svg}
        countryName={country.name.common}
        nativeName={country.name.nativeName}
        population={country.population}
        region={country.region}
        subregion={country.subregion}
        capital={country.capital}
        topLevelDomain={country.tld ? country.tld.join(", ") : "Not Defined"}
        currencies={country.currencies}
        languages={country.languages}
        borders={countryBorder}
      />
    );
  });
};

export default CountriesCards;
