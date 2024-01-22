import { createSlice } from "@reduxjs/toolkit";

const sliceSearch = createSlice({
    name: "sliceSearch",

    initialState: {
        textSearch: null,
        modalSearch: false,
    },

    reducers: {
        setTextSearch: (state, action) => {
            state.textSearch = action.payload;
        },
        clearTextSearch: (state) => {
            (state.textSearch = null)
        },
        openModalSearch: (state) => {
            (state.modalSearch = true)
        },
        closeModalSearch: (state) => {
            (state.modalSearch = false)
        },
    },
})

// se aclaran los set que quieras exportar
export const { clearTextSearch, setTextSearch, openModalSearch, closeModalSearch } = sliceSearch.actions;

export default sliceSearch.reducer;