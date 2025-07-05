import React,{useEffect, useState, useCallback,useMemo} from 'react';
import ReactDOM from 'react-dom/client';

function Counter(){
    const [count,setCount] = useState(0);
    const [number, setNumber] = useState("");
    // const [result, setResult] = useState(null);
    
    const Fibbonnaci = useCallback((n)=>{
        if(n<=1)
            return n;

        return Fibbonnaci(n-1) + Fibbonnaci(n-2);
    },[])

    const result = useMemo(()=>Fibbonnaci(number),[number]);

    // useEffect last me execute hota hai 
    // useEffect(()=>{
    //     setResult(Fibbonnaci(number))
    // },[number]);

    return(
        <>
        <div className='header'>
        <h1>Counter: {count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        </div>
        <div className='footer'>
            <h2>Fabbonnaci number is : {result}</h2>
            <input type='number' value={number} onChange={(e)=>setNumber(e.target.value)} />

        </div>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<Counter/>)