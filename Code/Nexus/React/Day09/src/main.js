import React, { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom/client"
import Header from "./Component/Header";
import Body from "./Component/Body";

function GithubProfile(){
// Header
// Body: 10 card show karenge

  return (
   <>
      <Header></Header>
      <Body></Body>
   </>
  )

   

}


ReactDOM.createRoot(document.getElementById('root')).render(<GithubProfile/>);



//  https://api.github.com/users?per_page=${count}
//  https://api.github.com/users/taylorotwell
//  https://api.github.com/users?since=6000&per_page=20