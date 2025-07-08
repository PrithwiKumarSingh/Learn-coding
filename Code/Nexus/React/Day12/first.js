import React from "react"
import ReactDOM from "react-dom/client"
import {BrowserRouter, Routes, Route, Link} from "react-router"
import Home from "./src/Home"
import Dashbord from "./src/Dashbord"
import Contact from "./src/Contact"
import About from "./src/About"
import Hii from "./src/Hii"
import Details from "./src/Details"
import Hello from "./src/Hello"
import Zero from "./src/Zero"

function App(){

    return(
        <BrowserRouter>

        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/Dashbord" element={<Dashbord></Dashbord>}></Route>
            <Route path="/About" element={<About></About>}></Route>
            <Route path="/Contact" element={<Contact></Contact>}></Route>
            <Route path="/Details" element={<Details/>}>
            <Route index element={<Zero></Zero>}></Route>
            <Route path="Hii" element={<Hii/>}></Route>
            <Route path="Hello" element={<Hello></Hello>}></Route>

            </Route>
        </Routes>
        </BrowserRouter>
        
    )

}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);
