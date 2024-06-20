import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../feature/todo/todoSlice'
const AddTodo = () => {
    const [input, setInput] = useState('')
    const dispatch= useDispatch()

    const addTodoHandler = (e) =>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

  return (
    <div>
      <form onSubmit={addTodoHandler} className='space-x-3 mt-12 flex justify-center '>
      <div className="flex items-center mb-4 ">
             <input
                 className="flex-1   mr-2 bg-gray-100  dark:bg-gray-700  dark:text-gray-100 w-80 rounded-md p-2"
                 placeholder="Add a new task"
                 type="text"
                 value={input}
                 onChange={(e)=> setInput(e.target.value)}
               />
               <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-6 py-2">Add Task</button>
             </div>


      </form>
    </div>
  )
}

export default AddTodo
