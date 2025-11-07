package Loop;
import java.util.*;

public class ReverseNum {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter Your Number : ");
        int num = sc.nextInt();
        int reverse = 0; 

        while(0<num){
            int extract = num % 10 ;
            reverse  = (reverse*10)+extract;
            num /= 10;
        }

        System.out.println("Your Reverse Number : " + reverse);
    }
}
