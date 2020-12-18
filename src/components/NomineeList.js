/* eslint react/prop-types: 0 */
import React from "react";
import Movie from "./Movie";

const NomineeList = ({ nomineelist, setNomineeList, setDisplayError }) => {
  let nominatedMovies = [];
  const removeNominee = (movie) => {
    let newList = nomineelist.filter((nominee) => {
      return nominee != movie;
    });
    setNomineeList([...newList]);
  };
  if (nomineelist) {
    nominatedMovies = nomineelist.map((movie) => {
      return (
        <div key={movie.imdbID} className="flex flex-wrap items-center">
          <button
            onClick={() => [removeNominee(movie), setDisplayError(false)]}
            className="m-3 p-1 rounded-full border-2 border-black flex items-center justify-center"
          >
            X
          </button>
          <Movie movie={movie} />
        </div>
      );
    });
  }
  return (
    <div className="m-3">
      {nomineelist.length ? (
        <span className="prose prose-xl">Nominee list:</span>
      ) : (
        ""
      )}
      <div>{nominatedMovies}</div>
    </div>
  );
};

export default NomineeList;
