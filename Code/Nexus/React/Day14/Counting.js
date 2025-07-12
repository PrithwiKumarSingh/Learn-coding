import { useSelector,useDispatch } from "react-redux"
import { Decrement, Increment, Reset } from "./Slicer1";


export default function Counting(){

    const count = useSelector((state)=>state.slice1.count);
    const dispatch = useDispatch();

    return(
        <>
        <h1>Counter : {count}</h1>
        <button onClick={()=>dispatch(Increment())}>Increment</button>
        <button onClick={()=> dispatch(Decrement())}>Decrement</button>
        <button onClick={()=> dispatch(Reset())}>Reset</button>
        </>
    )
}