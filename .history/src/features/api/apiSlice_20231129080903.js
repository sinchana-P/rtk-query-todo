import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',         // default
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3500' }),
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => '/todos',        // anonymous function // '/todos' will be attached to the baseUrl
        }),
        addTodo: builder.mutation({
            query: (todo) => ({         // "todo" is specified, coz it needs a new todo.
                url: '/todos',
                method: 'POST',
                body: todo
            })
        }),
        updateTodo: builder.mutation({
            query: (todo) => ({
                url: `/todos/${todo.id}`,
                method: 'PATCH',        // to update part of the record 
                body: todo
            })
        }),
        deleteTodo: builder.mutation({
            query: ({ id }) => ({    // "({ id })": destructuring from todo
                url: `/todos/${id}`,
                method: 'DELETE',        // to update part of the record 
                body: id
            })
        })
        
    })
    
})


export const {
    useGetTodosQuery,
    useAddTodoMutation,
    useUpdateTodoMutation,
    useDeleteTodoMutation
} = apiSlice

// Here we r using, json server with our local dev environment.
// So: baseUrl: 'http://localhost:3500'

// Feature on RTK-Query:
// It creates "custom hooks" based on the methods that we provide.


// Reason No CRUD operation in working:
// 1. Results get cached 
// 2. we're not invali