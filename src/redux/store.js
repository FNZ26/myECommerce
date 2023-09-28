import { configureStore } from "@reduxjs/toolkit";
import sliceHome from "./slices/sliceHome";
export const store = configureStore ({
    reducer: {sliceHome},

})