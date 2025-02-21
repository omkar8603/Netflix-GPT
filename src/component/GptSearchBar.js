import React from 'react'
import lang from '../utils/languageConstant'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
  const langKey = useSelector(store => store.config.lang);

  return (
    <div className='pt-[10%] flex justify-center'>
       <form className="w-1/2 p-1 bg-black grid grid-cols-12 ">
                <input 
                className="m-2 p-3 col-span-9"
                type="text"  placeholder={lang[langKey].gptSearchPlaceholder } />
                <button className="m-2 p-3 bg-red-600 col-span-3 rounded-lg text-white " 
                >{lang[langKey].search}</button>
                </form>
    </div>
  )  
}

export default GptSearchBar
