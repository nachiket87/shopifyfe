import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import NomineeList from "./components/NomineeList";

const App = () => {
  const [movieList, setMovieList] = useState();
  const [nomineeList, setNomineeList] = useState([]);
  return (
    <div className="container mt-5">
      <SearchBar setMovieList={setMovieList} />
      <div className="flex flex-wrap">
        <MovieList
          props={movieList}
          setNomineeList={setNomineeList}
          nomineeList={nomineeList}
        />
        <NomineeList
          nomineelist={nomineeList}
          setNomineeList={setNomineeList}
        />
      </div>
    </div>
  );
};

export default App;
