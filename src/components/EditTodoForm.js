import React, { useState } from 'react'

export const EditTodoForm = ({editTodo,task}) => {
  const [value,setvalue] = useState(task.task)

  const handlesubmit = (e) => {
    e.preventDefault()
    editTodo(value ,task.id)  
    setvalue("")
  }
  return (    
    <form className='Todo-form' onSubmit={handlesubmit}> 
      <input type="text" className='todo-input'
      value={value} placeholder='What is the update' 
      onChange={(e)=>setvalue(e.target.value)}/>
      <button type='submit' className='todo-btn'>Update Task</button>

    </form>
  )
}
