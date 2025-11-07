package ConditionalStatement;
import java.util.*;

public class LargeOfThree {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter Your A : ");
        int A = sc.nextInt();
        System.out.print("Enter Your B : ");
        int B = sc.nextInt();
        System.out.print("Enter Your C : ");
        int C = sc.nextInt();
        
        if( A > B && A > C){
            System.out.println("A is Bigger....");
        } else if( B > C){
            System.out.println("B is Bigger....");
        } else{
            System.out.println("C is Bigger....");
        }
    }
    
}
