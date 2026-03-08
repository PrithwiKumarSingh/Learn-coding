import React from 'react'

const App = () => {
  const [todos, setTodos] = React.useState([{
    task : "Go to Gym", 
    discription: 'Go to Heavy lifting', 
    status : false
  }])

  function addTodos(): void{
    let newArray = [];
    for(let i=0; i<todos.length; i++){
      newArray.push(todos[i]);
      console.log(todos[i]);
      }
      newArray.push({
          task : document.getElementById('task')?.value,
          discription : document.getElementById('discription')?.value, 
          status : document.getElementById('status').value
        })
        setTodos(newArray);
      
    }

  return (
    <div>
      <input type="text" id='task' placeholder='task....' />
      <input type="text" id='discription' placeholder='Discription....' />
      
      <input id='status' name='status' type="radio"  />
      <label for="status" >true</label>
      <input id='status' name='status' type="radio" />
      <label for="status" >false</label>
      <br />
      <button onClick={addTodos}> click me</button> 
      {JSON.stringify(todos)}
    </div>
  )
}

export default App