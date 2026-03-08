interface People {
  name: string;
  age: number;
  isLegal(): boolean;
}

class Manager implements People {
  name: string;
  age: number;
  city: string;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.city = "Dehradun";
  }

  isLegal(): boolean {
    return this.age >= 18;
  }
}

const m = new Manager("Prithwi", 22);
console.log(m.name);
console.log(m.city);
