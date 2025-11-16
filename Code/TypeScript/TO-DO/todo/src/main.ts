import './style.css'

interface Todo {
  title : string, 
  isComplete:boolean,
  readonly id:string
}

const todos:Todo[] = [];

// Selecting TaskContainer
const todoContainer = document.getElementById('TodoTask') as HTMLDivElement;

// Selecting Input
const todoInput = document.getElementsByName("title")[0] as HTMLInputElement;

// Selecting Form 
const myForm = document.getElementById('myForm') as HTMLFormElement;

myForm.onsubmit = (e: SubmitEvent)=>{
  e.preventDefault;
  

}