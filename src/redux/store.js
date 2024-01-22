import { configureStore } from "@reduxjs/toolkit";
import sliceHome from "./slices/sliceHome";
import { ecApi } from "../services/ecApi";
import sliceAuth from "./slices/sliceAuth";
import sliceSearch from "./slices/sliceSearch";

export const store = configureStore({

    reducer: {
        sliceHome,
        [ecApi.reducerPath]: ecApi.reducer,
        sliceAuth,
        sliceSearch
       

    },
    middleware: (getDefaultMiddleware) =>
        // Para agregar mas apis, seria concat(ecApi.middleware, ejemploOtraApi.midleware)
        getDefaultMiddleware().concat(ecApi.middleware),

})