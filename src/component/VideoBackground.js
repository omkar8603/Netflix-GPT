import React from 'react'
import { useSelector } from 'react-redux'
import useMovieVideo from '../hooks/useMovieVideo'

const VideoBackground = ( {movieId }) => {

    const trailerVideo = useSelector((store) => store?.movies?.trailerVideo)

    // Fetch the Trailer Video and updating the store with trailer video data
    useMovieVideo(movieId);
   

  return (
    <div className=''>
      <iframe 
         
         className='w-screen aspect-video'
         src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1"} 
         allow="accelerometer; autop   lay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          >

        </iframe> 
    </div>
  )
}

export default VideoBackground
