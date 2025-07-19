
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import stores from "./stores";
import { Provider } from "react-redux";
import CoinCreate from "./CoinCreate"


function App(){
    return (
        <Provider store={stores}>
            <CoinCreate></CoinCreate>

        </Provider>
        
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);

// function Fetchuser(){
//     useEffect(async ()=>{
//         dispatch(LoadingData(true));
//         try{        
//             const response = await fetch('Github user info');
//             const data = await response.json();
//             dispatch(UpdateData(data));
//         } 
//         catch(error){
//             dispatch(ErrorData("Error Occured"));
//         }

//     })

// }

// Object : {type: 'slice/LoadingData', payload:true}
// Object : {type : 'slice/UpdateData', payload:data}
// Object : {type : 'slice/ErrorData', payload:"Error Occured"}

// Ek aur koi component ho, usko bhi fetch request:
// Ek aur componnet bana diya 