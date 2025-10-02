
const root = document.querySelector("#root");
root.style.fontFamily = "sans-serif";


// text 
const h1 = document.createElement('h1');
h1.innerText = "Simple Calculator";
Object.assign(h1.style, {
    color : "Black",
    textAlign : "Center",
    marginBottom : '20px'
})
root.appendChild(h1);

// Container
const container = document.createElement('div');
container.classList.add('container');
Object.assign(container.style, {
    height : '700px',
    width : '500px',
    padding : '50px',
    borderRadius : '50px',
    backgroundColor : 'black'
})
root.appendChild(container);


// Result Display
const res = document.createElement('div');
Object.assign(res.style, {
    height : "20%",
    width : '100%',
    backgroundColor : 'white',
    marginBottom : '10px',
    borderRadius : '20px'
})
container.appendChild(res);

// BTN GRID
const btn = document.createElement('div');
Object.assign(btn.style, {
  height: "80%",
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridTemplateRows: "repeat(5, 1fr)",
  gap: "20px"
});
container.appendChild(btn);


const buttonLabels = [
    "(", ")", "C", "=",
    "9", "8", "7", "+",
    "6", "5", "4", "-",
    "3", "2", "1", "X",
    "0", ".", "%", "/"
]

buttonLabels.forEach(text => {
    const button = document.createElement('div');
    button.classList.add('btns');
    button.innerText = text;

    Object.assign(button.style, {
        backgroundColor: "white",
        display : "flex",
        alignItems : 'Center',
        justifyContent : 'center',
        borderRadius : '50%',
        fontSize : '30px',
        // fontWeight : 'bold',
        cursor : 'pointer',
        color : 'black'
    })
    button.addEventListener("mouseenter", () => {
    button.style.boxShadow = "0 0px 5px 5px rgba(200, 200, 200, 0.5)";
  });
    button.addEventListener("mouseleave", () => {
    button.style.boxShadow = "none";
  });
    btn.appendChild(button);


})







root.appendChild(container);



