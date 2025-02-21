import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";
import { BACKGROUND_URL } from "../utils/constant";

const GptSearch = () => {


    return (
         <div >

        <div className="fixed -z-10">
          <img 
              className="w-screen h-screen"
              alt="Gpt Background"
               src={BACKGROUND_URL}
             />
              </div> 
            <GptSearchBar />
            <GptMovieSuggestion />
             </div>
    );
};

export default GptSearch;



