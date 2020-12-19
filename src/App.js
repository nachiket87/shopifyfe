import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import NomineeList from "./components/NomineeList";
import ErrorMessage from "./components/ErrorMessage";

const App = () => {
  const [movieList, setMovieList] = useState();
  const [nomineeList, setNomineeList] = useState([]);
  const [displayError, setDisplayError] = useState(false);

  useEffect(() => {
    if (nomineeList.length === 5) {
      setDisplayError(true);
    }
  }, [nomineeList]);

  return (
    <div className="container">
      <ErrorMessage
        setDisplayError={setDisplayError}
        displayError={displayError}
      />
      <div
        className="prose prose-xl my-3"
        onClick={() => [
          setMovieList([]),
          setNomineeList([]),
          setDisplayError(false),
        ]}
      >
        The Shoppies
      </div>
      <SearchBar setMovieList={setMovieList} />
      <div className="flex flex-wrap justify-evenly">
        <MovieList
          props={movieList}
          setNomineeList={setNomineeList}
          nomineeList={nomineeList}
          setDisplayError={setDisplayError}
        />
        <NomineeList
          nomineelist={nomineeList}
          setNomineeList={setNomineeList}
          setDisplayError={setDisplayError}
        />
      </div>
    </div>
  );
};

export default App;
