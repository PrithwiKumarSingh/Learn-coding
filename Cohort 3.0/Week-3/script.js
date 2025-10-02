const btn = document.querySelector('button');
const input = document.querySelector('input');
const ol = document.querySelector('ol');
const rbtn = document.querySelector('button');


btn.addEventListener("click", function add(){
    let rbtn = document.createElement('button');
    let li = document.createElement('li');
    rbtn.innerHTML = "Delete";
    rbtn.classList = ""
    li.innerHTML = input.value;
    ol.appendChild(li);
    li.appendChild(rbtn);
    input.value = null;
})

rbtn.addEventListener("click", function del(){
     
})