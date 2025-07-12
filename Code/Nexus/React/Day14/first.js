import ReactDOM from "react-dom/client"
import React from "react"
import { Provider } from "react-redux"
import Counting from "./Counting"
import Stores from "./Store"




function App(){


    return(
        <Provider store={Stores}>
        <Counting></Counting>
        </Provider>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)