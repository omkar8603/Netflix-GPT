import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import moviesSlice from "./moviesSlice";
import { toggleGptSearchView } from "./gptSlice";
import gptSlice from "./gptSlice"
import configSlice from "./configslice"


const store = configureStore({
    reducer : {
        user : userSlice,
        movies : moviesSlice,
        gpt : gptSlice,
        config : configSlice
    }
})

export default store;