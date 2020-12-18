import axios from "axios";

const fetchData = (searchTerm, setMovieList) => {
  const getData = async () => {
    const data = await axios.get(
      `http://www.omdbapi.com/?s=${searchTerm}&apikey=4fc56eab`
    );
    setMovieList(data.data);
    return data;
  };
  getData();
};

export default fetchData;
