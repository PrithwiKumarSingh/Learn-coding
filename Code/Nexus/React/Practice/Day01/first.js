// const { createElement } = require("react");




// const header1 = document.createElement('h1');
// header1.innerText = "Hello Bhai log ";
// header1.style.backgroundColor = "Pink";
// header1.style.fontSize = "30px";
// header1.style.color = "white";

// const header2 = document.createElement('h1');
// header2.innerText = "Kaise ho aap sab log";
// header2.style.backgroundColor = "blue";
// header2.style.fontSize = "30px";
// header2.style.color = "white";

const root = document.getElementById('root');
// root.appendChild(header1);
// root.appendChild(header2);

const React = {
    prithwiElement: (tag,styles,children)=>{

    const element = document.createElement(tag);
    //key = fontsize, color, backgroundColor
    //

    for(let key in styles){
        element.style[key] = styles[key];
    }
    element.innerText = children;

    return element;
}
    
}
const header1 = React.prithwiElement("h1",{fontSize:"30px",color:'white',backgroundColor:"orange"},"Hello World");
const header2 = React.prithwiElement("h1",{fontSize:"30px",color:'white',backgroundColor:"pink"},"Kaise Hai Bhai Log");
const header3 = React.prithwiElement("h1",{fontSize:"30px",color:'white',backgroundColor:"green"},"Sab Badhiya apna bata");
root.appendChild(header1);
root.appendChild(header2);
root.appendChild(header3);