import java.util.*;

public class FuncMethod{

    // Print Hello World 
    public static void HelloWorld(){
        System.out.println("Hello World ! ");
        System.out.println("Hello World ! ");
        System.out.println("Hello World ! ");
    }

    // perform calculation like addition, subtraction, multiplication, division, modulo
    public static void Calculator(){
            Scanner sc = new Scanner(System.in);
            // input of A 
            System.out.print("Enter Your A : ");
            int a = sc.nextInt();
            // input of B
            System.out.print("Enter Your B : ");
            int b = sc.nextInt();
            // input of Operator 
            System.out.print("Enter Your operator : ");
            char operator = sc.next().charAt(0); 

        switch (operator) {
            case '+': System.out.println("Sum of A and B : " + (a+b));
                break;
            case '-': System.out.println("Subtraction of A and B : " + (a-b));
                break;
            case '*': System.out.println("Multiplication of A and B : " + (a*b));
                break;
            case '/': System.out.println("Division of A and B : " + (a/b));
                break;
            case '%': System.out.println("Sum of A and B : " + (a%b));
                break;
        
            default: System.out.println("Invalid Opeator ! Type ( +, -, *, /, % )");
        }
    }

    // Swapping Two Number 
    public static void Swap(){
        System.out.println("--------- Swapping Two Number ------------");
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter Your A : ");
        int a = sc.nextInt();
        System.out.print("Enter Your B : ");
        int b = sc.nextInt();
        System.out.println("---------------------------------------------");
        System.out.println("Before Swapping A : " + a);
        System.out.println("Before Swapping B : " + b);
        System.out.println("---------------------------------------------");
        

        int temp = a;
        a = b; 
        b = temp;

        System.out.println("After Swapping A : "+ a );
        System.out.println("After Swapping B : "+ b );
    }



    // Product of Two number
    public static int Product(int a, int b){
        int prod = a * b; 
        return prod; 
    }

    // Factorial of n number
    public static int Factorial(int num){
        int Factorial = 1;
        for(int i=num; i>=1; i--){
            Factorial *= i;
        }
        return Factorial;
    }

    // Binomial Coefficient 
    public static int BinomialCoefficient(int n, int r){
        int n_factorial = Factorial(n);
        int r_factorial = Factorial(r);
        int n_r_factorial = Factorial((n-r));
        int BioCoeff = n_factorial / (r_factorial * n_r_factorial);

        return BioCoeff;
    }

    public static void main(String[] args){

        // HelloWorld();
        // Calculator();
        // Swap();
        int prod = Product(4,5);
        System.out.println("Product of : " + prod);
        
        int Factorial = Factorial((7));
        System.out.println("Factorial of 7 : " + Factorial);

        int BioCoeff = BinomialCoefficient(8, 5);
        System.out.println("Binomial Coefficient : " + BioCoeff);
        
    }
}