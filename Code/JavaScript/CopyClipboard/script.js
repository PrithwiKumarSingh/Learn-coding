const copyText = document.getElementById('copyText');
const button = document.querySelector('button');

button.addEventListener('click', ()=>{
        navigator.clipboard.writeText(copyText.value);
        alert("Text Copeid !");
})
