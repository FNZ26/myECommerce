import { createSlice } from "@reduxjs/toolkit";

const sliceAuth = createSlice({
    name: "sliceAuth",

    initialState: {
        user: null,
        idToken: null,
    },

    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setIdToken: (state, action) => {
            state.idToken = action.payload;
        },
        clearUser: (state) => {
            (state.user = null),
                (state.idToken = null);
        },
        
    },
})

// se aclaran los set que quieras exportar
export const {setIdToken, setUser, clearUser} = sliceAuth.actions;

export default sliceAuth.reducer;