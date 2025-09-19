package Object_Class;
import java.util.*;
public class Main {
    public static void main(String[] args) {
        Pet ani = new Pet();
        ani.eat();
        ani.eats();
        ani.sleep();

    }
}


 class Animal{
    String name;
    String food;
    void eat(){
        System.out.println("Parent called");
    }
    void sleep(){
        System.out.println("Sleep in House");
    }
 }

class Pet extends Animal{

    void eats(){
        System.out.println("Child Called");
    }
}

