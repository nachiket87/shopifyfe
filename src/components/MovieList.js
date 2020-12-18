/* eslint react/prop-types: 0 */
import React from "react";
import Movie from "./Movie";

const MovieList = ({ props, setNomineeList, nomineeList }) => {
  let movieList = [];
  let displayMovies = [];
  if (props) {
    movieList = props.Search;
    if (movieList) {
      displayMovies = movieList.map((movie) => {
        return (
          <div key={movie.imdbID}>
            <Movie movie={movie} />
            <button
              onClick={() => setNomineeList([...nomineeList, movie])}
              disabled={nomineeList.includes(movie)}
            >
              {" "}
              Click me{" "}
            </button>
          </div>
        );
      });
    }
  }

  return (
    <div className="flex">
      <div>{displayMovies}</div>
    </div>
  );
};

export default MovieList;
