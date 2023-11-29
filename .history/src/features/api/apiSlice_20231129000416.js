import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',         // default
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3500' }),
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => '/todos',        // anonymous function // '/todos' will be attached to the baseUrl
        })
    })
})


export const {
    useG
}

// Here we r using, json server with our local dev environment.
// So: baseUrl: 'http://localhost:3500'

// Feature on RTK-Query:
// It creates "custom hooks" based on the methods that we provide.