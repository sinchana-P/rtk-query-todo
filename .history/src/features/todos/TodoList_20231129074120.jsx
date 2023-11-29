//  --- add imports ---
import {
    useGetTodosQuery,
    useAddTodoMutation,
    useUpdateTodoMutation,
    useDeleteTodoMutation
} from '../api/apiSlice'
//  --- add imports ---

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faUpload } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const TodoList = () => {

    const [newTodo, setNewTodo] = useState('');

    // --- start ---- destructuring content from "useGetTodosQuery"
    const {
        data: todos,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetTodosQuery()    
    // -- end ---- destructuring content from "useGetTodosQuery"

    console.log(useGetTodosQuery());
    // o/p:
    // data: Array(200)
    // endpointName:  "getTodos"
    // fulfilledTimeStamp: 1701222421416
    // isError: false
    // isFetching: false
    // isLoading: false
    // isSuccess: true
    // isUninitialized: false
    // console.log(useGetTodosQuery.data);
    
    // we r getting only the functions from these hooks:
    const [addTodo] = useAddTodoMutation()
    const [update]


    const handleSubmit = (e) => {
        e.preventDefault();
        // addTodo
        setNewTodo('')
    }

    const newItemSection = 
        <form onSubmit={handleSubmit}>
            <label htmlFor='new-todo'>Enter a new todo item</label>
            <div className='new-todo'>
                <input 
                    type='text'
                    id='new-todo'
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder='Enter new todo'
                />    
            </div>
            <button className='submit'>
                <FontAwesomeIcon icon={faUpload} />
            </button>
        </form>

    let content;
    // --- Define conditional content ---
    if (isLoading) {
        content = <p>Loading...</p>
    } else if (isSuccess) {
        content = JSON.stringify(todos)
    } else if (isError) {
        content = <p>{ error }</p>
    }
    // --- Define conditional content ---

  return (
    <main>
          <h1>Todo List</h1>
          {newItemSection}
          {content}
    </main>
  )
}

export default TodoList

