import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getAllBooks = createAsyncThunk('book/getBooks',async(_,thunkApi) => {
        const {rejectWithValue} = thunkApi;
        try{
            const res = await axios.get('http://localhost:3006/books');
            return res.data;
        }catch(err) {
            return rejectWithValue(err.message);
        }

})

export default getAllBooks;