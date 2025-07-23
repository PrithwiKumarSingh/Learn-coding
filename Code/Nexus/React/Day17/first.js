import React, { useState } from 'react';
import ReactDOM from 'react-dom/client'
import Add from './Add'

 function App(){
    const [language, setLanguage] = useState(['TypeScript', 'JavaScript', 'C++', 'Java', 'Python'])

    function addLanguage(){
        setLanguage(["Rust",...language]);
    }

    return(
        <div style={{display:'flex', justifyContent:'center', gap:'20px', marginTop:'50px'}}>
           { language.map((value,index)=><Add value={value} key={value}></Add>)}
           <button onClick={addLanguage}>Add language</button>

        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)