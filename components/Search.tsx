"use client";

import { useRouter, useSearchParams } from "next/navigation";

import { Search as SearchIcon } from "react-feather";
import { ChangeEvent, useEffect, useState } from "react";
import useDebounce from "@/hooks/useDebounce";
import { setFilter, setSearchWord } from "@/store/slices/countries";
import { useDispatch } from "react-redux";

export default function Search() {
  const dispatch = useDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [keyword, setKeyword] = useState("");
  const debouncedSearchWord = useDebounce(keyword, 100);

  useEffect(() => {
    dispatch(setSearchWord(debouncedSearchWord));
    dispatch(setFilter(""));
  }, [dispatch, debouncedSearchWord]);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setKeyword(value);
  };

  return (
    <div className="w-full sm:w-2/5 rounded relative m-0 flex items-center bg-transparent p-0">
      <div className="absolute left-0 top-0 mx-5 flex h-full items-center">
        <SearchIcon className="h-4" />
      </div>
      <input
        type="text"
        name="search"
        placeholder="Search for products..."
        autoComplete="off"
        defaultValue={searchParams?.get("q") || ""}
        className="w-full rounded pl-16 py-3 dark:bg-dark-blue bg-very-light-gray  text-very-dark-blue-2 dark:text-white text-sm"
        onChange={handleOnChange}
      />
    </div>
  );
}
