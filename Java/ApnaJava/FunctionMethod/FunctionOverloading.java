package FunctionMethod;

public class FunctionOverloading {

    public static int Multiply(int a, int b){
        return a * b;
    }
    public static float Multiply(float a, float b){
        return a * b;
    }
    public static double Multiply(double a, double b){
        return a * b;
    }
    public static void main(String[] args) {

         
        System.out.println("Product of A * B : " + Multiply(3.5,1.5));
        
    }
    
}
