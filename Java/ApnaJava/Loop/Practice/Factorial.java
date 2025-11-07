package Loop.Practice;
import java.util.*;


public class Factorial {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter Your Number : ");
        int num = sc.nextInt();
        int Factorial = 1;


        for(int i=num; i>=1; i--){
            Factorial *= i;
            
        }

        System.out.println( "Your Factorial : " + Factorial);

        
    }
    
}
