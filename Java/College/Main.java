class Student {

    String name; 
    int age; 

    Student(){
        this("unknown",21);
        System.out.println("Fist Constructor");
    }

    Student(String name, int age){
        this.name = name;
        this.age = age;
        System.out.println("2nd Constructor");
    }
   void show(){
        System.out.println(name+" - "+ age);
    }

}

public class Main {
    public static void main(String[] args) {
            Student sc = new Student();
            Student sc1 = new Student("Ram", 21);
            sc1.show();
    }


}
