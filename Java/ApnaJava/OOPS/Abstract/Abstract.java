class Abstract{
  public static void main(String[] args){
 //   Horse H1 = new Horse();
  //  H1.walk();

   // Chicken c = new Chicken();
    // c.walk();
   
    Mustang m = new Mustang();
  }
}
 
abstract class Animal{
  // Constructor 
  Animal(){
    System.out.println("Animal Constructor Called ....");
  }
  // non Abastract method
  void eat(){
    System.out.println("Eating .....");
  }

  // Abastract method
  abstract void walk();
}

// subclass
class Horse extends Animal{
  //Constructor
  Horse(){
    System.out.println("Horse Constructor called ....");
  }
  void walk(){
    System.out.println("Walk on 4 legs...");
  }
}

class Mustang extends Horse{
  //Constructor
  Mustang(){
    System.out.println("Mustang COnstructor Called");
  }
}

class Chicken extends Animal{
  void walk(){
    System.out.println("Walk on 2 legs....");
  }
}

