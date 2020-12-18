/* eslint react/prop-types: 0 */
import React from "react";
import Movie from "./Movie";

const NomineeList = ({ nomineelist, setNomineeList }) => {
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
            onClick={() => removeNominee(movie)}
            className="m-2 px-1 py-1 text-xs font-small leading-6 text-center text-black uppercase transition bg-transparent border-2 border-black rounded-full ripple hover:bg-gray-100 focus:outline-none"
          >
            Remove
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
