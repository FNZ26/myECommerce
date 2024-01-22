import { createSlice } from "@reduxjs/toolkit";

import { useGetCategoriesQuery } from "../../services/ecApi";
import { useEffect } from "react";

const sliceHome = createSlice({
    name: "home",
    initialState: {
        allCategories: [],
        allProducts: [],
        categorySelected: [],
        productsFilteredByCategory: [],
        product: []
    },
    reducers: {
        setCategory: (state, action) => {
            state.allCategories = action.payload;

        },
        setProducts: (state, action) => {
            state.allProducts = action.payload;
        },
        setCategorySelected: (state, action) => {
            state.categorySelected = action.payload;

        },
        setProductItem: (state, action) => {
            state.product = action.payload;

        },

    },

});

export const { setCategory, setProducts, setCategorySelected, setProductItem} = sliceHome.actions;

export default sliceHome.reducer;


