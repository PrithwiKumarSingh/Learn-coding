import { Link } from "react-router"
export default function About(){

    return(
        <>
        <nav>
            <Link to="/" >Home</Link>
            <Link to="/Dashbord" >Dashbord</Link>
            <Link to="/Contact" >Contact</Link>
            <Link to="/About" >About</Link>
            <Link to="/Details">Details</Link>
        </nav>
        <h1>I am About page </h1>
        </>
    )
}