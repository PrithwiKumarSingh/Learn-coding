import { useState, useEffect } from "react";

function App(){
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(10);


  useEffect(()=>{
    async function GithubProfile(){
    const response = await fetch(`https://api.github.com/users?per_page=${count}`);<h1 className="text-5xl m-10"> Current Time : {time} </h1>
    const data = await response.json();
    setUsers(data);
    console.log("Hello");
  }

  GithubProfile();
  },[count]);

  return(
    <div className="bg-[#547792] relative">
    <h1 className=" bg-[#213448] text-5xl font-bold text-[#EAE0CF] text-center p-20">Github Profile Viwer</h1>
      <input type="number" className=" bg-white text-2xl absolute right-10 top-40 rounded-sm " onChange={(e)=>{setCount(e.target.value)}} />
    <ul className=" h-full flex flex-wrap gap-10 m-10">

      {
        users.map(user=>(
          <li key={user.id} className="bg-white p-4">
             <img src={user.avatar_url} height={"100px"} width={"100px"} />
             <span>{user.login}</span>
             <span>{user.followers_url}</span>

          </li>
        ))
      }
    </ul>
    </div>
  )

}

export default App;