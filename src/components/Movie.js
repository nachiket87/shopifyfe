/* eslint react/prop-types: 0 */
import React from "react";

const Movie = ({ movie }) => {
  const { Title, Year } = movie;
  return (
    <div>
      {Title} ({Year})
    </div>
  );
};

export default Movie;
