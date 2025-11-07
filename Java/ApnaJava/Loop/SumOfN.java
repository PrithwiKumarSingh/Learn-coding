package Loop;
import java.util.*;

public class SumOfN {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter Your Number : ");
        int num = sc.nextInt();
        int counter = 1; 
        int sum = 0;


        while(counter <= num){
            sum += counter;
            counter++;
        }

        System.out.println("Sum of : " + sum);

    }

    
}
