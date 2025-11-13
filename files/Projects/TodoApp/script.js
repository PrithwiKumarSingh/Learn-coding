

const input = document.getElementById('input');
const btn = document.querySelector('#add');
const card = document.querySelector('.card');
const warning = document.getElementById('warning');


 

const warn = ()=>{
    if(warning.style.display == "none"){
    warning.style.display = "block";
}
    rmwarn();
    const h2 = document.createElement('h2');
    h2.classList.add('warn');
    h2.textContent = "Invalid Input";
    warning.appendChild(h2);
}
const rmwarn = ()=>{
const h2 = document.querySelector('.warn');
    if(h2){
        h2.remove();
        warning.style.display = "none";
        }  
}

const addTask = ()=>{
    
    const value = (input.value).trim();
    rmwarn();
    if(!value){
        warning.style.display = "none";
        warn();
    }else{
        
        const div = document.createElement("div");
        const btnicon = document.createElement('div');
        div.classList.add("list");
        const p = document.createElement('p');
        p.textContent = value;

        const delbtn = document.createElement('button');
        delbtn.classList.add('delBtn');
        delbtn.textContent = "❌";
        delbtn.addEventListener("click",()=>{div.remove()})


        // edit 

        div.appendChild(p);
        div.appendChild(delbtn);
        card.appendChild(div);

        input.value = "";
    }
}

input.addEventListener('keypress', (e)=>{
    if(e.key == "Enter"){
        addTask();
    }
})

