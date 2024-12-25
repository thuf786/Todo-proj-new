import React, { useState } from 'react'
import { uploadTodo } from '../services/allAPI';

function Addtodo({setUploadTodoStatus}) {
  const [todoValue , setToDoValue] = useState({
    todoName : "",
    todoDescription : ""
  })
  console.log("===todo value===");
  console.log(todoValue);
  const handleAddTodo = async ()=>{
    const response = await uploadTodo(todoValue)
    setUploadTodoStatus(response.data)
    setToDoValue({
      todoName:"",
      todoDescription: ""
    })
    alert("Successfully inserted the Task")
  }
  return (
    <>
    
       
    <div>
        <div className='mt-3'>
        <input value={todoValue.todoName}
        onChange={(e)=> setToDoValue({ ...todoValue, todoName: e.target.value})} 
        type="text" className='form-control border border-primary' placeholder='Task Name' />
        </div>
        <div className='mt-3'>
        <textarea value={todoValue.todoDescription}
        onChange={(e)=>setToDoValue({ ...todoValue , todoDescription:e.target.value})} 
        name="review" id="review" cols="30" rows="2" className='form-control border border-primary' placeholder='Task Description'></textarea>
        </div>
        <button className='btn btn-primary w-100 mt-3' onClick={handleAddTodo}>Add Todo</button>
        </div>

    
    </>
  )
}

export default Addtodo