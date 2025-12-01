public class Constructor {
    public static void main(String[] args){
        Student s1 = new Student("Prithwi");
        s1.age = 32;
        System.out.println(s1.name);
        System.out.println(s1.age);
        
    }
    
}

class Student{
    String name; 
    int age;
    void setName(String name){
        this.name = name;
    }
    String getName(){
        return this.name;
    }
    Student(String name){
        this.name = name;
    }
}