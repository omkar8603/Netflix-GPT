import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className="absolute w-screen aspect-video  pt-[10%] px-24 text-white bg-gradient-to-r from-black">
       <h1 className='font-bold text-5xl'>{title}</h1>
       <p className='py-6 text-lg w-1/3'>{overview}</p>
       
       <div className=''>
       <button className='p-4 text-black font-bold bg-white w-36 text-xl hover:bg-opacity-80 rounded-lg '>▶️ Play</button>
       <button className='p-4 mx-2 font-bold bg-gray-500 w-36 text-xl text-white rounded-lg bg-opacity-50'>More Info</button>
       </div>

    </div> 
  )
}

export default VideoTitle
