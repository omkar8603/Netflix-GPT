import { useEffect } from 'react';
import { API_OPTION } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { addUpcomingMovies } from '../utils/moviesSlice'



const useUpcommingMovies = () => {
   
 // fetch data from TMDB API and update store
    const dispatch = useDispatch();

    const upcomingMovies = useSelector((store) => store?.movies?.upcomingMovies);

  useEffect(() => {
    !upcomingMovies && getUpcommingMovies();

  }, [])

  const getUpcommingMovies = async () => {
        try {  
          const data = await fetch(
            'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
            API_OPTION
          );
          const json = await data.json();
          dispatch(addUpcomingMovies(json.results));
          
        } catch (error) {
          console.log(error) 
        }
  }
}


export default useUpcommingMovies;