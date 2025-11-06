import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = "http://localhost:5000/api"

//here e wiill definae ad path\


export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: `${baseUrl}`,
        prepareHeaders: (headers, { getState }) => {
            const token = localStorage.getItem("token")
            if (token) {
                return headers.set("Authorization", `Bearer ${token}`)
            }
            return headers
        }

    }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (Credential) => ({
                url: "/auth/sign-in",
                method: "POST",
                body: Credential
            })
        }),
        signUp: builder.mutation({
            query: (userData) => ({
                url: "/auth/sign-up",
                method: "POST",
                body: userData
            })
        })

    })
})


export const { useLoginMutation, useSignUpMutation } = apiSlice;
