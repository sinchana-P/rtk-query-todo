//  add imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faUpload } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const TodoList = () => {

    const [newTodo, setNewTodo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // addTodo
        setNewTodo('')
    }

    const newItemSection = 
        <form onSubmit={handleSubmit}>
            <label html>Enter a new todo item</label>

        </form>


  return (
    <div>TodoList</div>
  )
}

export default TodoList

