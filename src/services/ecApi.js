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

        //se hace la conexion con la bd y despues  se exporta para poder usarla
        getImage: builder.query({
            query:  ()=> "image.json"
        }),
        // method: put o post (1 sola imagen o muchos post)
        putImage: builder.mutation({
            query: (image)  => ({
                // direccion donde se  guarda?
                url: "image.json",
                method: "put",
                body: image,
            }),

        }),


    }),




});
//primer escribir {} = ecApi y despues el useGet etc


export const { useGetCategoriesQuery, useGetProductsQuery, usePutImageMutation, useGetImageQuery } = ecApi;


