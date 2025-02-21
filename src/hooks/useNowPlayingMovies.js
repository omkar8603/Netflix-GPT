import { useEffect } from 'react';
import { API_OPTION } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { addNowPlayingMovies } from '../utils/moviesSlice'



const useNowPlayingMovies = () => {
   
 // fetch data from TMDB API and update store
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector(store => store?.movies?.nowPlayingMovies);

  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies();

  }, [])

  const getNowPlayingMovies = async () => {
        try {  
          const data = await fetch(
            'https://api.themoviedb.org/3/movie/now_playing?page=1',
            API_OPTION
          );
          const json = await data.json();
          dispatch(addNowPlayingMovies(json.results));
          
        } catch (error) {
          console.log(error) 
        }
  }
}


export default useNowPlayingMovies;