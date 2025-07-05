import React,{useRef,useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';


function StopWatch(){
    const [timer, setTimer] = useState(0);
    const [isRunning, setIsrunning] = useState(false)
    const intervalRef = useRef(null);

    function start(){
        if(!isRunning){
        intervalRef.current = setInterval(()=>{
            setTimer(preTime => preTime+1);
        },1000)
        setIsrunning(true);
    }
    }

    function stop(){
        if(isRunning){
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setIsrunning(false);
        }

    }

    function reset(){
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setTimer(0);

    }


    return(
        <div className='main'>
            <h1>StopWatch timer : {timer}</h1>
            <div className='btn'>
                <button onClick={start}>Start</button>
                <button onClick={stop}> Stop</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<StopWatch/>)