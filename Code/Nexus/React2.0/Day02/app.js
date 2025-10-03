

const element = React.createElement('h1', {id:"hello", className:"World", style:{backgroundColor:"red", color:"white", fontSize:"40px", border:"2px solid black", borderRadius:"10px", textAlign:"center", padding:"10px 20px"}}, "Hello World");
const element1 = React.createElement('h2',{}, "Kaise Hai Aap Log");

const div1 = React.createElement('div',{}, [element, element1]);

const Reactroot = ReactDOM.createRoot(document.getElementById('root'));
// Reactroot.render(element);
// Reactroot.render(element1);

Reactroot.render(div1);