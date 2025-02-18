import { createSlice } from "@reduxjs/toolkit";
import getAllBooks from "../Api/booksApi";
import { insertBook } from "../Api/insertBook";
import { deletetBook } from "../Api/deleteBook";

const initialState = {
    books: [],
    error: null,
    isLoading:false,
    getBook:[],
    showInfo:false
}

const bookSlice = createSlice({
    name:'book',
    initialState,
    reducers:{
        getBookInfo:(state,action) => {
            state.getBook = state.books.find(item => item.id === action.payload);
            state.showInfo = true;
        }
    },
    extraReducers:(builder) => {
        //Handle getAllBooks 
        builder
        .addCase(getAllBooks.pending,(state,action) => {
            state.error = null;
            state.isLoading = true;
        })
        .addCase(getAllBooks.fulfilled,(state,action)=>{
            state.books = action.payload;
            state.isLoading = false;
            state.error = null;
        })
        .addCase(getAllBooks.rejected,(state,action) => {
            state.isLoading = false;
            state.error = action.error.message;
        });
        //Handle insertBook 
        builder 
        .addCase(insertBook.pending , (state,action) => {
            state.error = null;
        })
        .addCase(insertBook.fulfilled,(state,action)=>{
            state.books.push(action.payload);
            state.error = null;
        })
        .addCase(insertBook.rejected,(state,action) => {
            state.error = action.error.message;
        });
        //Handle deleteBook 
        builder 
        .addCase(deletetBook.pending , (state,action) => {
            state.error = null;
        })
        .addCase(deletetBook.fulfilled,(state,action)=>{
            state.books = state.books.filter((el) => el.id !== action.payload);
            state.error = null;
        })
        .addCase(deletetBook.rejected,(state,action) => {
            state.error = action.error.message;
        });
    }
})

export const {getBookInfo} = bookSlice.actions;
export default bookSlice.reducer;