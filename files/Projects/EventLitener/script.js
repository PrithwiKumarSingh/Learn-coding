const main = document.querySelector(".main");
const inp = document.querySelector(".result");
const btn = document.querySelector(".btn");
const clear = document.querySelector(".clear");
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
