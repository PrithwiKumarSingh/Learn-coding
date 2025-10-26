import './App.css'
import Resturant from './components/Resturant'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from "react-router"
import ResturantMenu from "./components/ResturantMenu"
import SearchCard from './components/SearchCard'



function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home></Home>} ></Route>
      <Route path='/restaurant' element={<Resturant></Resturant>} ></Route>
      <Route path='/city/delhi/:id' element={<ResturantMenu></ResturantMenu>}></Route>
      <Route path='/city/delhi/:id/search' element={<SearchCard></SearchCard>}></Route>
    </Routes>

    </BrowserRouter>
  )
}

export default App
