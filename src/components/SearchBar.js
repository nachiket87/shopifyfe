/* eslint react/prop-types: 0 */
import React from "react";
import fetchData from "../utilities/fetchData";
import { useDebouncedCallback } from "use-debounce";

const SearchBar = ({ setMovieList }) => {
  const debounced = useDebouncedCallback((value) => {
    if (value) {
      fetchData(value, setMovieList);
    }
  }, 200);

  return (
    <input
      className="w-100 lg:w-full bg-purple-white shadow rounded border-0 p-3"
      id="search"
      type="text"
      placeholder="Type the name of a movie..."
      onChange={(e) => debounced.callback(e.target.value)}
    />
  );
};

export default SearchBar;
