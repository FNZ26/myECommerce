import { createSlice } from "@reduxjs/toolkit";
import { tabCategories } from "../../data/tabCategories";
import { products } from "../../data/tabProductos";

const sliceHome = createSlice({
    name: "home",
    initialState: {
        allCategories: tabCategories,
        allProducts: products,
        categorySelected: "",
        productsFilteredByCategory: [],
    },
    reducers: {
        setCategory: (state, action) => {
            state.categorySelected = action.payload;
            // buscador
            //state.productsFilteredByCategory = state.allProducts.filter((el)=>el.category === state.categorySelected)


        },



    },

});

export const { setCategory } = sliceHome.actions;

export default sliceHome.reducer;
