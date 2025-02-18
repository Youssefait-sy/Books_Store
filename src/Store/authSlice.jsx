import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    isLogedIn : false,
    name:'Youssef Ait-sy',
    isSet:false
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        logInOut:(state) => {
            state.isLogedIn = !state.isLogedIn;
            state.isSet = !state.isSet;
        }
    }
});

export default authSlice.reducer;
export const {logInOut} = authSlice.actions;