class Inheritance{
public static void main(String[] args){
  Fish shark = new Fish();
  shark.eat();
  shark.breath();
  shark.swim();
  shark.color = "red";
  shark.fins = 32; 
  shark.att();
  
}
}

// base class or Parent class
class Animals{
  String color;

  void eat(){
    System.out.println("Eating Food .....");
  } 
  void breath(){
    System.out.println("Breathing ......");
  }
}

// Derived class or Child class
class mammal extends Animals{
  int fins;

  void swim(){
    System.out.println("Swimming in Water");
  }
  
  void att(){
    System.out.println("Animal string : " + color + " Fish Fins : " + fins);
  }
}

// Deriverd class (Multi level Inheritance)
class Dog extends Mammal{
  int leg;
} 
