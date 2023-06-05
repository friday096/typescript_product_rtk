import { configureStore } from "@reduxjs/toolkit";
import BlogReducer from "./slices/BlogSlices";

const store = configureStore({
    reducer:{
        items:BlogReducer
    }
})

export default store