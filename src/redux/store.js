import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import sliceHome from "./slices/sliceHome";
import { ecApi } from "../services/ecApi";


export const store = configureStore({

    reducer: {
        sliceHome,
        [ecApi.reducerPath]: ecApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        // Para agregar mas apis, seria concat(ecApi.middleware, ejemploOtraApi.midleware)
        getDefaultMiddleware().concat(ecApi.middleware),

})