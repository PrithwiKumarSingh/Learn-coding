import { useState, useEffect } from "react";

function Clock(){

    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [show, setShow] = useState(true);

    useEffect(()=>{
        if(!show)
            return;

        const IntervalID = setInterval(()=>{
            setTime(new Date().toLocaleTimeString());
            console.log("HELLO");
        },1000)

        return()=>{
            clearInterval(IntervalID);
        }


    },[show]);


    return(

        
        <>
        <button className="bg-white text-2xl m-10 hover:bg-amber-100 px-7 rounded " onClick={()=>setShow(!show)}>{show? "hide" : "show"}</button>
        {
            show&&<h1 className="text-5xl m-10"> Current Time : {time} </h1>
        }
        
        </>
    )

}

export default Clock;