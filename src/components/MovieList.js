/* eslint react/prop-types: 0 */
import React from "react";
import Movie from "./Movie";

const MovieList = ({ props, setNomineeList, nomineeList, setDisplayError }) => {
  let movieList = [];
  let displayMovies = [];
  if (props) {
    movieList = props.Search;
    if (movieList) {
      displayMovies = movieList.map((movie) => {
        return (
          <div key={movie.imdbID} className="flex flex-wrap items-center">
            <button
              onClick={() =>
                nomineeList.length === 5
                  ? setDisplayError(true)
                  : setNomineeList([...nomineeList, movie])
              }
              disabled={nomineeList.includes(movie)}
              className={`m-2 px-1 py-1 text-xs font-small leading-6 text-center text-black uppercase transition bg-${
                nomineeList.includes(movie)
                  ? `green-200 line-through`
                  : `transparent`
              } border-2 border-black rounded-full ripple focus:outline-none`}
            >
              Nominate
            </button>
            <Movie movie={movie} />
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
