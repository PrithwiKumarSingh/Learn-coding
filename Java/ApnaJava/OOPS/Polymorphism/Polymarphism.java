class Polymorphism{
  public static void main(String[] args){
    Calculator calc = new Calculator();
      System.out.println(calc.sum(3,4));
    System.out.println(calc.sum((float)2.5,(float) 3.3));

    Deer D1 = new Deer();
    D1.eat();

  }
}

// Compile-time Polymorphism ( method overloading)
class Calculator{
  int sum(int a, int b){
    return a + b;
  }
  
  float sum(float a, float b){
    return a + b;
  }

  int sum(int a, int b, int c){
    return a + b + c;
  }
}

// Run-time Polymorphism (Method Overriding)
class Animal{
  void eat(){
    System.out.println("Eating anything");
  }
}

class Deer extends Animal{
  void eat(){
    System.out.println("Eating Grass..");
  }
}

