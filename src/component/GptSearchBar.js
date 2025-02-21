import React, { useRef } from 'react'
import lang from '../utils/languageConstant'
import { useDispatch, useSelector } from 'react-redux'
import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_KEY, API_OPTION } from '../utils/constant';
import { addGptMovieResult } from "../utils/gptSlice"

const GptSearchBar = () => {
  const dispatch = useDispatch(); 
  const langKey = useSelector(store => store.config.lang);
  const searchText = useRef(null);

  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const searchMovieTMDB = async (movie) => {
        const data = await fetch (
          "https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1",
           API_OPTION)
        const json = await data.json();
        return json.results;
  }
 
  const handleGPTSearchClick = async () => {

    if (!searchText.current || !searchText.current.value) {
      console.warn("Please enter a search query.");
      return;
    }

    const query = searchText.current.value;  // Get value inside function
    const prompt = `Recommend 5 ${query}. Only provide names in a JSON format like this:
                   {"movies": ["Hera Pheri", "Dhamaal", "Chupke Chupke", "Golmaal", "Bhool Bhulaiyaa"]}`;
    try {
      const result = await model.generateContent(prompt);
      const response = await result.response.text();  

      // Convert text response into a JSON object
      const moviesObject = JSON.parse(response); 
      const gptMovies = moviesObject.movies;
      
      // For each move i will search TMDB API
    const promiseArray = gptMovies?.map((m) => searchMovieTMDB(m))
    const tmdbResult = await Promise.all(promiseArray)
    console.log(tmdbResult);
    dispatch(addGptMovieResult({
       movieNames : gptMovies,
       movieResults : tmdbResult
    }));
 
    } catch (error) {
      console.error("Error fetching movies:", error);

      if (error.message.includes("Candidate was blocked due to SAFETY")) {
        alert("Movie search is restricted due to content safety policies. Try a different search.");
    } else {
        alert("An error occurred while fetching movies. Please try again later.");
    }
    }

    searchText.current.value = "";

  };


  return (
    <div className='pt-[10%] flex justify-center'>
       <form onSubmit={(e) => e.preventDefault()}
       className="w-1/2 p-1 bg-black grid grid-cols-12 ">
                <input 
                ref={searchText}
                className="m-2 p-3 col-span-9"
                type="text"  placeholder={lang[langKey].gptSearchPlaceholder } />
                <button className="m-2 p-3 bg-red-600 col-span-3 rounded-lg text-white " 
                onClick={handleGPTSearchClick}
                >{lang[langKey].search}</button>
                </form>
    </div>
  )  
}

export default GptSearchBar
