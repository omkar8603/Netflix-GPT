import  {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTION } from '../utils/constant'
import { addTrailerVideo } from '../utils/moviesSlice';





const useMovieVideo = (movieId) => {
    
  const trailerVideo = useSelector((store) => store?.movies?.trailerVideo);

    const dispatch = useDispatch();
    useEffect(() => {
        !trailerVideo && getMovieVidios();
    }, [])
    
    const getMovieVidios = async () => {
        const data = await fetch(
                  `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
                  API_OPTION
        )
        const json = await data.json();
        
        const filterVideos = json.results.filter((video) => video?.type === "Trailer")
        const trailer = filterVideos.length ? filterVideos[0] : json.results[0];
        dispatch(addTrailerVideo(trailer));
     }
}

export default useMovieVideo
