import { useEffect, useState } from "react";
import { useParams } from "react-router"


export default function Github(){
    const {name} = useParams();
    const [Profile, setProfile] = useState(null);

    async function Gitfecth() {
        const response = await fetch(`https://api.github.com/users/${name}`)
        const data = await response.json();
        setProfile(data);

    }

    useEffect(()=>{
        Gitfecth();
    },[])


    return(
        <>
        <h1>I am on Github page </h1>

        <div>
            <img src={Profile?.avatar_url}/>
            <h2>{Profile?.login}</h2>
        </div>
        </>
    )
}


// https://api.github.com/users/taylorotwell