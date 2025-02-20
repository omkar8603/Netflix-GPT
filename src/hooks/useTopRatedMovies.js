import { useEffect } from 'react';
import { API_OPTION } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { addTopRatedMovies } from '../utils/moviesSlice'



const useTopRatedMovies = () => {
   
 // fetch data from TMDB API and update store
    const dispatch = useDispatch();

  useEffect(() => {
     getTopRatedMovies();

  }, [])

  const getTopRatedMovies = async () => {
        try {  
          const data = await fetch(
            "https://api.themoviedb.org/3/movie/top_rated?page=1",
            API_OPTION
          );
          const json = await data.json();
          dispatch(addTopRatedMovies(json.results));
          
        } catch (error) {
          console.log(error) 
        }
  }
}


export default useTopRatedMovies;