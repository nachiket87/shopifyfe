/* eslint react/prop-types: 0 */
import React from "react";

const Movie = ({ movie }) => {
  const { Title, Year } = movie;
  return (
    <div>
      <p>{Title}</p>
      <p>({Year})</p>
    </div>
  );
};

export default Movie;
