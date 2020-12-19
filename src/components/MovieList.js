/* eslint react/prop-types: 0 */
import React from "react";
import Movie from "./Movie";

const MovieList = ({ props, setNomineeList, nomineeList, setDisplayError }) => {
  let movieList = [];
  let displayMovies = [];
  const checkMovieInList = (movie) => {
    for (const nominee of nomineeList) {
      if (nominee.imdbID === movie.imdbID) {
        return true;
      }
    }
    return false;
  };
  if (props) {
    movieList = props.Search;
    if (movieList) {
      displayMovies = movieList.map((movie) => {
        return (
          <div
            key={movie.imdbID}
            className="flex flex-wrap-reverse items-center bg-gray-100 px-12 py-4 m-2 md:p-4"
          >
            <button
              onClick={() =>
                nomineeList.length === 5
                  ? setDisplayError(true)
                  : setNomineeList([...nomineeList, movie])
              }
              disabled={checkMovieInList(movie)}
              className={`m-2 px-1 py-1 text-xs ${
                checkMovieInList(movie)
                  ? `bg-green-200 line-through`
                  : `bg-transparent`
              } hover:bg-green-100 leading-6 text-center text-black uppercase transition border-2 border-black rounded-full ripple focus:outline-none`}
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
      <div className="grid grid-cols-1 md:grid-cols-2">{displayMovies}</div>
    </div>
  );
};

export default MovieList;
