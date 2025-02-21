import { useEffect } from 'react';
import { API_OPTION } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { addPopularMovies } from '../utils/moviesSlice'



const usePopularMovies = () => {
   
 // fetch data from TMDB API and update store
    const dispatch = useDispatch();
    const popularMovies = useSelector(store => store?.movies?.popularMovies);

  useEffect(() => {
     !popularMovies && getPopularMovies();

  }, [])

  const getPopularMovies = async () => {
        try {  
          const data = await fetch(
            'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
            API_OPTION
          );
          const json = await data.json();
          dispatch(addPopularMovies(json.results));
          
        } catch (error) {
          console.log(error) 
        }
  }
}


export default usePopularMovies;