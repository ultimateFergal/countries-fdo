import Link from "next/link";
import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "./Card";
import { Country } from "@/types";

const InfinteGrid = ({ countriesList }: { countriesList: Country[]}) => {
  const [hasMoreValue, setHasMoreValue] = useState(true);
  const [scrollData, setScrollData] = useState<Country[]>([]);

  // When user is close enough to the bottom of the page, this function gonna be triggered
  // , new scrollData (data to be rendered) will be created
  const loadScrollData = async () => {
    try {
        const slicedCountriesList: Country[] = countriesList?.slice(0, scrollData?.length + 8)
      setScrollData(slicedCountriesList);
    } catch (err) {
      console.log(err);
    }
  };

  // Loader depends on it's value (show loader/ not show loader)
  const handleOnRowsScrollEnd = () => {
    if (scrollData.length < countriesList.length) {
      setHasMoreValue(true);
      loadScrollData();
    } else {
      setHasMoreValue(false);
    }
  };

  const renderCards = (countryIndex: number) => {
    return (
      <li
        key={countryIndex}
        className="relative h-full w-full transition-opacity animate-fadeIn"
      >
        <Link className="h-full w-full" href={`/${countriesList[countryIndex]?.["name"]?.["common"]}`}>
          <Card
            name={countriesList[countryIndex]?.["name"]?.["common"]}
            urlFlag={countriesList[countryIndex]?.["flags"]?.["svg"] || ""}
            population={countriesList[countryIndex]?.["population"]?.toString()}
            region={countriesList[countryIndex]?.["region"]}
            capital={countriesList[countryIndex]?.["capital"]?.toString()}
            flexDirection="flex flex-col"
            alt={countriesList[countryIndex]?.["flags"]?.["alt"]}
          />
        </Link>
      </li>
    );
  };

  return (
    <InfiniteScroll
      className="w-full"
      dataLength={scrollData.length}
      next={handleOnRowsScrollEnd}
      hasMore={hasMoreValue}
      scrollThreshold={1}
      loader={"loading..."}
      // Gets rid of second scroll bar
      style={{ overflow: "unset", width: "100%" }}
    >
      <ul className="grid grid-flow-row gap-y-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {countriesList?.length > 0 &&
          countriesList.map((country: Country, index: number) =>
            renderCards(index)
          )}
      </ul>
    </InfiniteScroll>
  );
};

export default InfinteGrid;
