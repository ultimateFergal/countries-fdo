import React from "react";
import Image from "next/image";

type CountryCard = {
  name: string,
  urlFlag: string,
  population: string,
  region: string,
  capital: string,
  flexDirection: string,
  alt: string,
}

const Card = ({
  name,
  urlFlag,
  population,
  region,
  capital,
  flexDirection,
  alt,
}: CountryCard) => {
  return (
    <div className={`flex ${flexDirection}`}>
      <Image
        className={`relative object-cover transition duration-300 ease-in-out w-full hover:scale-105 sm:h-32`}
        alt={alt}
        src={urlFlag}
        width={40}
        height={40}
      />
      <div className="flex flex-col">
        <span className="font-bold text-lg sm:text-xl">{name}</span>
        <div className="flex">
          <h3 className="font-bold">Population: </h3>
          {population}
        </div>
        <div className="flex">
          <h3 className="font-bold">Region: </h3>
          {region}
        </div>
        <div className="flex">
          <h3 className="font-bold">Capital: </h3>
          {capital}
        </div>
      </div>
    </div>
  );
};

export default Card;
