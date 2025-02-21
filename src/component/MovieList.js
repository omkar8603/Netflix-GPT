import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title , movies}) => {

  return (
    <div className='px-8'>
         <h1 className='text-xl md:text-3xl py-4 text-white'>{title}</h1>
        
        <div className='flex overflow-x-scroll'>
       
        <div className='flex '>
        {
            movies?.map((movie) => (  <MovieCard movie={movie} key={movie?.id}/> ))
          }
          </div>
        </div>
      
    </div>
  )
}

export default MovieList
