
import React, { useState } from 'react'

const Todo = () => {
  const [input, setInput] = useState("");


  const [todo, setTodo ] = useState([])

const addItemTodo = ()=>{

  if(input.trim() ==="") return ;
  const todos = {
      id : todo.length + 1,
      task : input.trim(),
      status : false
  }
  setTodo(prev => [...prev, todos]);
  setInput("");
}

const deleteTodo = (id)=>{
  setTodo(prev => prev.filter(item => item.id != id));
}

const toggleCompleted = (id)=>{
  setTodo(todo.map(item=> 
        item.id === id 
        ? {...item, status : !item.status}
         : item
      
));
}

  return (
    <div className='h-screen flex items-center justify-center'>
        <div className=' min-w-200   text-center pt-10 w-fit h-[90%] border rounded-2xl p-10'>
          <h1 className='text-4xl font-bold '>Todo App </h1>
          <input value={input} onChange={(e)=> setInput(e.target.value)} className='px-2 py-1 outline mt-4 text-xl rounded ' type="text" placeholder='write task here .........' />
          <button onClick={addItemTodo} className='outline rounded px-4 py-1.5 hover:bg-gray-300  ml-2'>AddTodo</button>
          <ul className='text-center'>
            {
              todo.map((item)=>(
              <div key={item.id} className='flex gap-2 my-3 w-full mx-auto '>
                <input checked={item.status} onChange={()=> toggleCompleted(item.id)} className='w-5 bg-black cursor-pointer' type='checkbox' />
                  <li className={ !item.status  ? 'text-xl font-normal' : 'line-through text-xl font-normal'}>{item.task}</li>
                  <button type='submit' onClick={()=>{deleteTodo(item.id)}} className='outline px-2 rounded cursor-pointer text-xl font-sm '>delete</button>
              </div>
            ))
            }
          </ul>
          </div> 
    </div>
  )
}

export default Todo