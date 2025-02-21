import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'


const MovieCard = ({movie}) => {

  if (!movie?.poster_path) return null;

  return (
    <div className='w-44 pr-4 '>
    
      <img 
      alt='Movie Poster'
      src={IMG_CDN_URL + movie?.poster_path} />

    </div>
  )
}

export default MovieCard
