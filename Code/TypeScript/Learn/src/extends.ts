class Shape {
  area(): void {
    console.log("i'm area");
  }
}

class Rectangle extends Shape {

  height: number;
  width: number;
  constructor(height: number, width: number) {
    super(); // first call the parent class
    this.height = height;
    this.width = width;
  }
}

const rect = new Rectangle(20, 12);
console.log(rect.width);
rect.area();
