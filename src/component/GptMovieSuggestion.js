import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
   
  const { movieNames, movieResults} = useSelector((store) => store.gpt);
  
  if (!movieNames) return null;

  return (
    <div className='p-4 m-4 mt-[5%] bg-black text-white opacity-80'>
     {
         movieResults?.map((m, i) => (
          <MovieList key={movieNames[i] } title={movieNames[i]} movies={m}/>
         ))
     } 
    </div>
  )
}

export default GptMovieSuggestion
