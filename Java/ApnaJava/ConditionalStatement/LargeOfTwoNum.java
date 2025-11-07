package ConditionalStatement;
import java.util.*;

public class LargeOfTwoNum {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter Your A : ");
        int a = sc.nextInt();
        System.out.print("Enter Your B : ");
        int b = sc.nextInt();

        if(a>b){
            System.out.println("A is Larger than B");
        }else if(a==b){
            System.out.println("Both are Equal A & B");
        }
         else {
            System.out.println("B is larger than A");
        }
    }
    
}
