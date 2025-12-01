import javax.security.auth.SubjectDomainCombiner;

public class Constructor {
    public static void main(String[] args){
        Student s1 = new Student();
        Student s2 =new Student("Prithwi");
        System.out.println(s2.name);
        Student s3 = new Student(21);
        Student s4 = new Student("Aman", 43);
        System.out.println(s4.name+s4.age);

    }
}

class Student{
    String name ; 
    int age; 

    Student(){
        System.out.println("Constructor has been runed...");
    }
    Student(String name){
        this.name = name;
    }

    Student(int age){
        this.age = age;
    }

    Student(String name, int age){
        this.name = name;
        this.age = age;
    }
} 
