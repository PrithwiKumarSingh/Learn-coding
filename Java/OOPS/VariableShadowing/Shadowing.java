package VariableShadowing;
    class Student {
    String name = "Default";

    void setName() {
        String name = "Prithwi"; // local variable shadows instance variable
        System.out.println(name); // prints local variable
    }

    void showName() {
        System.out.println(name); // prints instance variable
    }
}
public class Shadowing {


    public static void main(String[] args){
        Student s = new Student();
        s.setName();
        s.showName();


    }
    
}
