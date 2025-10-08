

    class Student{
        String name ;
        int age;
        Student(){
            this.name = "Unknown";
            this.age = 0;
            System.out.println("LOL");
        }
        Student(String name, int age){
            this.name = name; 
            this.age = age; 

        }

        void display(){
            System.out.println("Name : "+name+" Age : "+age);
        }


    }
public class Constructors {
    


    public static void main(String[] args){
        Student s1 = new Student();
        s1.display();
        
    }
}
