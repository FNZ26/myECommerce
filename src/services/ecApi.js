import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { base_url } from "../firebase/database";

export const ecApi = createApi({
    reducerPath: "ecApi",
    baseQuery: fetchBaseQuery({
        baseUrl: base_url,
    }),

    endpoints: (builder) => ({
        //Aca  se reciben todas las querys  de la ddbb
        getCategories: builder.query({
            query: () => "categories.json",
        }),

        getProducts: builder.query({
            query: () => "products.json",
        }),


    }),




});
//primer escribir {} = ecApi y despues el useGet etc


export const { useGetCategoriesQuery, useGetProductsQuery } = ecApi;


