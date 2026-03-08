public class Hello{
  public static void main(String[] args){

    Dog d1 = new Dog();
    d1.name = "Jerman Serferd";
    d1.Bark();
    Dog d2 = new Dog();
    d1.Bark();
  

      
  }
}

class Dog{
  String name; 
  int age ; 
  String color;

  void Bark(){
    System.out.println(name + " is Barking.........");
  }
  void Eat(){
    System.out.println(name + " is Eating........");
  }
}

class Cat{
  String name; 
  int age; 
  String color;

  void Mow(){
    System.out.println(name + " is Mow Mow ");
  }
  void Eat(){
    System.out.println(color + " is a Color ");
  }
}
