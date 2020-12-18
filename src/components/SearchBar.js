/* eslint react/prop-types: 0 */
import React from "react";
import fetchData from "../utilities/fetchData";
import { useDebouncedCallback } from "use-debounce";

const SearchBar = ({ setMovieList }) => {
  const debounced = useDebouncedCallback((value) => {
    if (value) {
      fetchData(value, setMovieList);
    } else {
      setMovieList([]);
    }
  }, 1000);

  return (
    <input
      className="w-full border-2 border-grey-500 rounded-full py-4 px-6 text-gray-700 focus:outline-none"
      id="search"
      type="text"
      placeholder="Search"
      onChange={(e) => debounced.callback(e.target.value)}
    />
  );
};

export default SearchBar;
