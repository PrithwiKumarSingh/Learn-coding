const main = document.querySelector(".main");
const inp = document.querySelector(".result");
const btn = document.querySelector(".btn");
const clear = document.querySelector(".clear");
const mode  = document.querySelector('#mode');
mode.addEventListener("click",()=>{
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")){
        mode.textContent = "Light";
    }else{
        mode.textContent = "Dark";
    }
})
clear.addEventListener("click",()=>{
    inp.value = "";
})
main.addEventListener("click", (e)=>{
    if(inp.vaule !== ""){
        inp.value == ""};
    const res = e.target.innerText;
    inp.value += res;
    btn.addEventListener("click",()=>{
        const result = eval(inp.value);
        inp.value = result;
    })
})
