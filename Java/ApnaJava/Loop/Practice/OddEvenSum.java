package Loop.Practice;
import java.util.*;

public class OddEvenSum {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter Your Number : ");
        int num = sc.nextInt();
        int oddSum = 0;
        int evenSum = 0;

        for(int i=1; i<=num; i++){
            if(i%2==0){
                evenSum += i;
            }else{
                oddSum += i;
            }
        }
        System.out.println("Sum of Odd Number : " + oddSum);
        System.out.println("Sum of Even Number : " + evenSum);
    }
    
}
