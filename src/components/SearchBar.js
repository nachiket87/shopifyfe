/* eslint react/prop-types: 0 */
import React from "react";
import fetchData from "../utilities/fetchData";
import { useDebouncedCallback } from "use-debounce";

const SearchBar = ({ setMovieList }) => {
  const debounced = useDebouncedCallback((value) => {
    if (value) {
      fetchData(value.trim(), setMovieList);
    }
  }, 200);

  return (
    <input
      className="rounded-full w-full py-4 px-6 border-2 border-gray-100 text-gray-700 leading-tight focus:outline-none focus:border-gray-500"
      id="search"
      type="text"
      placeholder="Type the name of a movie..."
      onChange={(e) => debounced.callback(e.target.value)}
    />
  );
};

export default SearchBar;
