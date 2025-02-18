import { configureStore } from "@reduxjs/toolkit";
import booksReducer from './bookSlice';
import authReducer from './authSlice';

const store = configureStore({
    reducer:{
        'booksData':booksReducer,
        'auth':authReducer
    }
})

export default store;