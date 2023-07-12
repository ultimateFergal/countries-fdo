import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllCountries, getCountryByName } from "@/api/requests";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import InfinteGrid from "./InfinteGrid";
import { Country } from "@/types";

const CountriesList = () => {
  const { searchWord, filter } = useSelector(
    (state: RootState) => state?.countries
  );

  const [countriesList, setCountriesList] = useState([]);

  const { isLoading, error, data: countries } = useQuery({
    queryKey: ["data", searchWord],
    queryFn:
      searchWord !== ""
        ? () => getCountryByName(searchWord)
        : () => getAllCountries(),
  });

  useEffect(() => {
    if (searchWord === "") {
      setCountriesList(countries);
    }

    if (filter !== "") {
      const filteredResults = countries.filter(
        (country: Country) => country.region === filter
      );
      filteredResults && setCountriesList(filteredResults);
    } else if (filter === "") {
      setCountriesList(countries);
    }
  }, [countries, filter, searchWord]);

  if (countriesList && countriesList.length < 1) {
    return (<div>No countries found</div>)
  }

  if (error) {
    return (<div>Something wrong happened, please try again</div>)
  }

  if (isLoading) {
    return (<div>Loading...</div>)
  }

  return countriesList && <InfinteGrid countriesList={countriesList} />;
};

export default CountriesList;
