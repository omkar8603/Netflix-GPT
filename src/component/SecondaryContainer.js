import React from 'react'
 import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  
  return (
    <div className='bg-black w-screen md:pt-0 pt-[40%]'>
       <div className='-mt-40 md:pl-12 relative z-20'>
      <MovieList title="Now playing" movies={movies?.nowPlayingMovies} />
      <MovieList title="Popular" movies={movies?.popularMovies} />
      <MovieList title="Top Rated Movies" movies={movies?.topRatedMovies} />
      <MovieList title="Up Comming Movies" movies={movies?.upcomingMovies} />
       </div>
     
     {/* 
      MovieList - Popular 
         MovieCard * n
      MovieList - Now Playing
      MovieList - Trending
      MovieList - Hrror
       */}
    </div>
  )
}

export default SecondaryContainer
