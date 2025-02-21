import { useEffect } from 'react';
import { API_OPTION } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { addTopRatedMovies } from '../utils/moviesSlice'



const useTopRatedMovies = () => {
   
 // fetch data from TMDB API and update store
    const dispatch = useDispatch();
    const topRatedMovies = useSelector((store) => store?.movies?.topRatedMovies)

  useEffect(() => {
     !topRatedMovies && getTopRatedMovies();

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