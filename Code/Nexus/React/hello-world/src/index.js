import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const user = {
  Name : "Prithwi Kumar",
  Branch : "MCA",
  Sap : 1000029006,
  Session : '2025-2027'
}

const Card = ()=>{
  return(
    <>
    <div style={{height:"400px",textAlign:'center' , width:'300px', backgroundColor:'whitesmoke', margin:'50px', padding:'10px' }}>
      <div style={{}}>
        <img style={{height:'150px',width:'150px',borderRadius:"50%"}} src={'https://imgs.search.brave.com/4ogKG96hjB3Br_3S8oy5fWImOHw0F-Zr375iDprwKV8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mdW5r/eWxpZmUuaW4vd3At/Y29udGVudC91cGxv/YWRzLzIwMjMvMDQv/d2hhdHNhcHAtZHAt/NjcxLmpwZw'}/>
      </div>

      <div style={{fontSize:'15px' }}>
      <h1>{user.Name}</h1>
      <h2> {user.Sap}</h2>
      <h2>{user.Branch}</h2>
      <h2>{user.Session}</h2>
      </div>

    </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Card/>
    <Card/>
    <Card/>
  </React.StrictMode>
);


