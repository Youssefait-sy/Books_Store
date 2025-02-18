import { createAsyncThunk } from "@reduxjs/toolkit";

export const deletetBook = createAsyncThunk('books/deleteBook',async(id,thunkApi) => {

        const {rejectWithValue} = thunkApi
        try {
            await fetch(`http://localhost:3006/books/${id}`, {
                method:'DELETE',
                headers:{
                    'content-type' : 'application/json; charset=UTF-8'
                }
            })
            return id;
        } catch (err) {
            return rejectWithValue(err.message);
        }
})