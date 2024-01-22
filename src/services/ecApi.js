import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { base_url } from "../firebase/database";

export const ecApi = createApi({
    reducerPath: "ecApi",
    baseQuery: fetchBaseQuery({
        baseUrl: base_url,
    }),

    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => "categories.json",
        }),
        getProducts: builder.query({
            query: () => "products.json",
        }),
        getImage: builder.query({
            query:  ()=> "image.json"
        }),
        // method: put o post (1 sola imagen o muchos post)
        putImage: builder.mutation({
            query: (image)  => ({
                url: "image.json",
                method: "put",
                body: image,
            }),

        }),

    }),




});
//primer escribir {} = ecApi y despues el useGet etc


export const { useGetCategoriesQuery, useGetProductsQuery, usePutImageMutation, useGetImageQuery } = ecApi;


