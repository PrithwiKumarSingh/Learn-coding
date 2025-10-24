import './App.css'
import Resturant from './components/Resturant'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from "react-router"
import ResturantMenu from "./components/ResturantMenu"


function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home></Home>} ></Route>
      <Route path='/restaurant' element={<Resturant></Resturant>} ></Route>
      <Route path='/city/delhi/:id' element={<ResturantMenu></ResturantMenu>}></Route>
    </Routes>

    </BrowserRouter>
  )
}

export default App
