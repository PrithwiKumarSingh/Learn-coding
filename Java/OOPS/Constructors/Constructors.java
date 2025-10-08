package Constructors;



    class Student{
        String name ;
        int age;

        Student(){
            this.name = "Unkonwn";
            this.age = 0;
        }


    }
    
public class Constructors {
    


    public static void main(String[] args){
        Student s1 = new Student();
        System.out.println(s1.name);
    }
}
