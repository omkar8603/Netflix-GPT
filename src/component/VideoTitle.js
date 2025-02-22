import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className="absolute w-screen aspect-video pt-[40%] md:pt-[10%] md:px-24  px-4 text-white md:bg-gradient-to-r from-black">
       <h1 className='font-bold text-2xl pt-16 md:pt-0 md:text-5xl'>{title}</h1>
       <p className='hidden md:inline-block py-6 text-sm md:text-lg md:w-1/3'>{overview}</p>
       
       <div className='mt-2  md:mt-0'>
       <button className=' px-2 py-2 md:p-4 text-black font-bold bg-white md:w-36 text-xl hover:bg-opacity-80 rounded-lg '>▶️ Play</button>
       <button className=' hidden md:inline-block p-4 mx-2 font-bold bg-gray-500 w-36 text-xl text-white rounded-lg bg-opacity-50'>More Info</button>
       </div>

    </div> 
  )
}

export default VideoTitle
