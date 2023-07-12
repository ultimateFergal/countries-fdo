import { RootState } from "@/store";
import { setFilter } from "@/store/slices/countries";
import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

const Dropdown = () => {
  const dispatch = useDispatch();
  const { filter } = useSelector(
    (state: RootState) => state?.countries
  );

  const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    dispatch(setFilter(value));
  };

  return (
    <select
      className="rounded shadow-lg w-full sm:w-1/3 relative m-0 flex items-center  p-3 dark:bg-dark-blue  bg-very-light-gray  text-very-dark-blue-2 dark:text-white"
      data-te-select-init
      data-te-select-placeholder="Filter by Region"
      onChange={handleOnChange}
      value={filter}
    >
      <option defaultValue="" disabled hidden selected>
        Filter by Region
      </option>
      <option
        value="Africa"
        className=" bg-transparent p-1"
      >
        Africa
      </option>
      <option
        value="Americas"
        className=" bg-transparent p-1"
      >
        Americas
      </option>
      <option
        value="Asia"
        className="bg-transparent p-0"
      >
        Asia
      </option>
      <option
        value="Europe"
        className="bg-transparent p-0"
      >
        Europe
      </option>
      <option
        value="Oceania"
        className="bg-transparent p-0"
      >
        Oceania
      </option>
      <option
        value=""
        className="bg-transparent p-0"
      >
        All Regions
      </option>
    </select>
  );
};

export default Dropdown;
