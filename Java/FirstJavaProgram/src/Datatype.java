import java.util.Scanner;
public class Datatype {
    public static void main(String[] args) {
        // int num = 29;
        // System.out.println(num);

        // float n = 12.3f;
        // System.out.println(n);

        // escape sequences 

        // System.out.println("* \n* * \n* * * \n* * * * \n* * * * *");
        // System.out.println("");
        // System.out.println("* * * * * \n* * * * \n* * * \n* * \n*");
        // System.out.println("");
        // System.out.println("         *\n       * *\n     * * *\n   * * * *\n * * * * *");


        // 1. Create a program to input name of the person and respond with "Welcome Name to KG Coding"

        // Scanner input = new Scanner(System.in);

        // System.out.print("Please Enter Your Name : ");
        // String User = input.nextLine();

        // System.out.println("Welcome "+ User + " to KG Coding ");



        // 2. Create a Program to add two numbers. 

        Scanner input = new Scanner(System.in);

        System.out.print("Please Enter Your First Number : ");
        int num1 = input.nextInt();
        System.out.print("Please Enter Your Second Number : ");
        int num2 = input.nextInt();

        int Sum = num1 + num2;
        System.out.println("Sum of "+num1+ " + "+num2+ " is : "+Sum);
        

        
        
    }
     
}