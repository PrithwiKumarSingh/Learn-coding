
public class MethodOverloading {
    public static void main(String[] args) {

        Calculator calcu = new Calculator();
        System.out.println(calcu.add(3,5));
        System.out.println(calcu.add(3.4,5));
        System.out.println(calcu.add(5,5.6));
        System.out.println(calcu.add(3,5,9));
        
    }
}

class Calculator{

    int add(int a, int b){
        return a + b;
    }

    int add(int a, int b, int c){
        return a + b + c;
    }
    
    Double add(Double a, Double b){
        return a + b; 
    }
    Double add(int a, Double b){
        return a + b; 
    }
    Double add(Double a, int b){
        return a + b; 
    }
}


