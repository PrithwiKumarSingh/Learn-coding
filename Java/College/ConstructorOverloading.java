

class Students {

    String name; 
    int age; 

    Students(){
        name = "Unknows";
        age = 0;
    }

    Students(String n){
        name = n;
        age = 0; 
    }

    Students(String n, int a){
        name = n;
        age = a;
    }

    void display(){
        System.out.println("Name : "+name+" Age : "+age);
    }

}



public class ConstructorOverloading {
    public static void main(String[] args) {
        
        Students s1 = new Students();
        Students s2 = new Students("Prithwi");
        Students s3 = new Students("Alice", 21);

        s1.display();
        s2.display();
        s3.display();
    }
}
