interface Per {
  name: string;
  age: number;
}

function addition(a: Per, b: Per): number {
  return a.age + b.age;

}

const answare = addition({
  name: "Prithwi",
  age: 21
},
  {
    name: "Harkirat",
    age: 29
  })

console.log(answare);

