import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api/auth/apiSlice"
import authSlice from "../api/auth/googleSlice"
export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer
        , google: authSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware)
})