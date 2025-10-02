

//method overloading

// class Calculator{

//     public int sum(int a, int b){
//         return a + b;
//     }

//     int sum (int a, int b, int c){
//         return a + b+ c; 
//     }
//     String sum(){
//         String abouse = "Kuchh likh le Bsdk";
//         return abouse;
        
//     }

//     int sub(int a, int b){
//         return a-b;
//     }

// }


// class Main{
//     public static void main(String[] args) {

//         Calculator calc = new Calculator();
//         System.out.println(calc.sum(3,4));
//         System.out.println(calc.sum(2,4,6));
//         System.out.println(calc.sub(4,1));
        
//     }
// }


// Constructor Overloading 
public class Main{
    public static void main(String[] args) {
        Person p = new Person("Riam", 32);
        p.display();

    }
}

 class Person{
    String name = "Ram"; 
    int age; 

    public Person(String  n, int a){
            String name = "prithwi";
            int age = 5;
            name = this.name;
            age = a ; 
    }
    public Person(int a, String n){
        name = n;
        age = a;
    }

    public Person(String n){
        name = n;
        age = 0;
    }
   void display(){
        System.out.println("Name : "+name+ "Age : "+age);
    }
}

