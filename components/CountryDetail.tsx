import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "react-feather";
import { Country } from "@/types";

type CountryDetailProps = {
  country: Country[]
}

const Card = ({ country }: CountryDetailProps) => {
  const {
    name,
    subregion,
    region,
    population,
    capital,
    currencies,
    languages,
    flags,
  } = country[0];

  return (
    <>
      <Link
        href="/"
        className="shadow-md flex items-center justify-start dark:bg-dark-blue bg-very-light-gray w-2/5 md:w-1/4 lg:w-1/6 h-10 mb-16"
      >
        <ArrowLeft className="h-4 mx-5" />
        <div className="w-full h-full flex items-center self-center">Back</div>
      </Link>

      <div className="grid grid-cols-1 sm:grid-cols-2">
        <Image
          className="relative object-cover transition duration-300 ease-in-out w-full h-full"
          alt={flags.alt}
          src={flags.svg}
          width={40}
          height={40}
        />
        <div className="flex flex-col justify-between py-6 sm:py-2 md:py-4 sm:pl-5 md:pl-10 lg:pl-10 text-sm sm:text-[0.65rem] md:text-xs lg:text-sm">
          <h2 className="mb-8 sm:mb-3 md:mb-8 text-lg sm:text-xl lg:text-2xl font-bold">
            {name.common}
          </h2>
          <div className="flex flex-col sm:flex-row justify-between mb-10 sm:mb-0">
            <div className="flex flex-col mb-10 sm:mb-0">
              <div className="flex items-center">
                <h3 className="font-bold mr-2">Native Name: </h3>
                {(name as any).nativeName[Object.keys(name.nativeName)[0]].common}
              </div>
              <div className="flex items-center">
                <h3 className="font-bold mr-2">Population: </h3>
                {population}
              </div>
              <div className="flex items-center">
                <h3 className="font-bold mr-2">Region: </h3>
                {region}
              </div>
              <div className="flex items-center">
                <h3 className="font-bold mr-2">Sub Region: </h3>
                {subregion}
              </div>
              <div className="flex items-center">
                <h3 className="font-bold mr-2">Capital: </h3>
                {capital}
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center">
                <h3 className="font-bold mr-2">Top Level Domain: </h3>
                {population}
              </div>
              <div className="flex items-center">
                <h3 className="font-bold mr-2">Currencies: </h3>
                {(currencies as any)[Object.keys(currencies)[0]].name}
              </div>
              <div className="flex items-center">
                <h3 className="font-bold mr-2">Languages: </h3>
                {(languages as any)[Object.keys(languages)[0]]}
              </div>
            </div>
          </div>
          <div>Border Countries</div>
        </div>
      </div>
    </>
  );
};

export default Card;
