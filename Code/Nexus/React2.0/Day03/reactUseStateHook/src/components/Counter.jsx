import React from "react";
import { useState } from "react";
import "./Counter.css";

const Counter = () =>{
    const[count, setCount] = useState("Hello React ");  
    return (
        <div className="Card" >
            <h3>You Clicked {count} times </h3>
            <button onClick={()=> {setCount("Good Bye React")}}>Increment</button>
            <button onClick={()=> {setCount("Hello React")}}>Decrement</button>
            
        </div>
    )
}

export default Counter; 