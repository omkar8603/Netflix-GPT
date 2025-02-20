import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcommingMovies from '../hooks/useUpcomingMovies';

const Browse = () => {
   
  // fetch data from TMDB API and update store
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcommingMovies();
  

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/* 
          MainContainer
             - VideoBackground
             - VideoTitle
          SecondaryContainer
              - MovieList * n
                  - caeds * n
       */}
      
    </div>
  )
}

export default Browse
