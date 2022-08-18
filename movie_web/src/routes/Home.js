import { API_KEY, BASE_PATH } from "../api";
import { useEffect, useState } from "react";
import axios from "axios";

function Home(){
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const nowPlayingGetMovies = async () => {
		try {
			const res = await axios.get(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`);
			setMovies(res.data.results);
			setLoading(false);
		} catch (err) {
			console.log(err);
		}
	};
  useEffect(()=> {
    nowPlayingGetMovies();
  },[]);
  return <div>
    {loading? <h1>Loading...</h1> : <div><Home movies={movies} /></div>}
  </div>;
}
export default Home;