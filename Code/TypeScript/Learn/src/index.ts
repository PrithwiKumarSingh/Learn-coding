
let x: number | string = 1;
x = "prithwi";
console.log(x);

// Problem - 1 
function greet(name: string): string {
  return `Hello ${name}`;
}

const greeting = greet("Prithwi");
console.log(greeting);


// Problem - 2

function sum(a: number, b: number): number {
  return a + b;
}

let ans = sum(3, 5);
console.log(ans);


// Problem - 3 

function isLegal(age: number): boolean {
  if (age > 18)
    return true;
  else
    return false;
}

console.log(isLegal(42));


// Problem - 4

function delayCall(fn: () => void) {
  setTimeout(fn, 1000);
}


delayCall(function fn() {
  console.log("Hi there");
});
