/*Question 1 : Write a Java program to get a number from the user and print whether it is
positive or negative. */

package ConditionalStatement;
import java.util.*;
public class PositiveOrNegative {
    public static void main(String[] args){
        System.out.println("------- Positive or Negative Number Checker ----------");
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter Your Number : ");
        int num = sc.nextInt();

        String Result = num >= 0 ? "Positive" : "Negative";
        System.out.println( "Your Result : " +  Result);
    }
    
}
