package FunctionMethod;
import java.util.*;

public class PracticeQs {

    // Average of Three Number 
    public static void Average(){
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter Your A : ");
        int a = sc.nextInt();
        System.out.print("Enter Your B : ");
        int b = sc.nextInt();
        System.out.print("Enter Your C : ");
        int c = sc.nextInt();

        int Average = (a+b+c)/3;
        System.out.println("Average : " + Average);
        
    }

    // Palindrome 
    public static void Palindrome(){
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter Your A : ");
        int num = sc.nextInt();
        int numCopy = num;
        int reverse = 0;

        while(num > 0){
            int lastdig = num % 10;
            reverse = (reverse * 10) + lastdig;
            num /= 10;
        }
        if(numCopy == reverse){
            System.out.println(numCopy + " Is a Palindrome Number.");
        }else{
            System.out.println(numCopy + " Is Not a Palindrome Number.");
        }
    }

    // Sum of Digits 
    public static void SumDig(){
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter Your A : ");
        int num = sc.nextInt();
        int sumDig = 0;

        while(num > 0){
            int lastdig = num % 10;
            sumDig += lastdig;
            num /= 10;
        }

        System.out.println("Sum of Digits : " + sumDig);
    }
    public static void main(String[] args){
        // Average();
        // Palindrome();
        SumDig();

    }
    
}
