import { createAsyncThunk } from "@reduxjs/toolkit";

export const insertBook = createAsyncThunk('books/insertBook',async(booksData,thunkApi) => {

        const {rejectWithValue} = thunkApi
        try {

            const res = await fetch('http://localhost:3006/books', {
                method:'POST',
                body:JSON.stringify(booksData),
                headers:{
                    'content-type' : 'application/json; charset=UTF-8'
                }
            })
            const data = res.json();
            return data;
        } catch (err) {
            return rejectWithValue(err.message);
        }
})