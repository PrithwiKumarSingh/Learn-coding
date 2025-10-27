import {React, useState} from 'react';
import './App.css'
import Card from './components/Card'

function App() {

  const [name,setName] = useState('');


  return (
    <>
    <Card name={name} setName={setName}/>
    <p>Hello guys i'm a parent : {name}</p>
    </>
  )
}

export default App
