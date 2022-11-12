import NotFound from "./NotFound";
import Loader from "../components/Loader";
import SingleCountry from "./SingleCountry";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const CheckCountry = ({ allCountries }) => {
  const { countryName } = useParams();
  const [queryState, setQueryState] = useState(<Loader />);

  useEffect(() => {
    const countryInfo = allCountries?.filter(
      (ele) => ele.name.common.toLocaleLowerCase().split(" ").join("-") === countryName
    );
    let countryBorder = countryInfo[0].borders
      ? allCountries.filter((coun) => JSON.stringify(countryInfo[0].borders).includes(coun.cca3))
      : [{ name: { common: "Island" } }];
    if (countryInfo.length > 0) {
      setQueryState(<SingleCountry countryInfo={countryInfo[0]} countryBorder={countryBorder} />);
    } else if (countryInfo.length === 0 && allCountries.length > 0) {
      setQueryState(<NotFound />);
    }
  }, [allCountries, countryName]);
  return queryState;
};

export default CheckCountry;
