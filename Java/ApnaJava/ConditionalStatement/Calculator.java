package ConditionalStatement;

import java.util.Scanner;

public class Calculator {
    public static void main(String[] args){
        System.out.println("------- Calculator ------------");
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter A : ");
        float a = sc.nextFloat();
        System.out.print("Enter B : ");
        float b = sc.nextFloat();
        System.out.print("Enter Your Operator : ");
        char inpString = sc.next().charAt(0);

        switch(inpString){
            case '+' : System.out.println("Result : " + (a + b));
                    break;
            case '-' : System.out.println("Result : " + (a - b));
                    break;
            case '*' : System.out.println("Result : " + (a * b));
                    break;
            case '/' : System.out.println("Result : " + (a / b));
                    break;
            case '%' : System.out.println("Result : " + (a % b));
                    break;
            default : System.out.println("Invalid Input!");
        }
    }
    
}
