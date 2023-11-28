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
            <label htmlFor='new-todo'>Enter a new todo item</label>
            <div className='new-todo'>
                <input 
                    type='text'
                    id='new-do'
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder='Enter new todo'
                />    
            </div>
            <button className=''>

            </button>
        </form>


  return (
    <div>TodoList</div>
  )
}

export default TodoList

