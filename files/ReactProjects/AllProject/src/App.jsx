import BackgroundChanger from "./components/BackgroundChanger";
import Quotes from "./components/Quotes";
import Home from "./components/Home";
import Projects from "./components/Projects";
import { BrowserRouter, Routes, Route } from 'react-router'

function App(){
    return (
        <BrowserRouter>
            
            <Routes>
                <Route path="/home" element={<Home></Home>}></Route>
                <Route path="/projects" element={<Projects></Projects>}></Route>
                <Route path="/quotes" element={<Quotes></Quotes>}></Route>
            </Routes>
        </BrowserRouter>
    )

}

export default App;