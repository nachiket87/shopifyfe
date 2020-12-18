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
          <div key={movie.imdbID} className="flex flex-wrap items-center">
            <Movie movie={movie} />
            <button
              onClick={() => setNomineeList([...nomineeList, movie])}
              disabled={nomineeList.includes(movie) || nomineeList.length >= 5}
              className="m-2 px-1 py-1 text-xs font-small leading-6 text-center text-black uppercase transition bg-transparent border-2 border-black rounded-full ripple hover:bg-gray-100 focus:outline-none"
            >
              Nominate
            </button>
          </div>
        );
      });
    }
  }

  return (
    <div className="m-3">
      {displayMovies.length ? (
        <span className="prose prose-xl">Search Results:</span>
      ) : (
        ""
      )}
      <div>{displayMovies}</div>
    </div>
  );
};

export default MovieList;
