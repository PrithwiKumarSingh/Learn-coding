
const h1 = React.createElement('h1', {}, "Hello World");
// ReactDOM.render(h1, document.getElementById('root'));

const Reactroot = ReactDOM.createRoot(document.getElementById('root'));
Reactroot.render(h1);