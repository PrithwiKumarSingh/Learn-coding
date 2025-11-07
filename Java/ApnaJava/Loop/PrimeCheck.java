package Loop;
import java.util.*;

public class PrimeCheck {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter Your Number : ");
        int num = sc.nextInt();
        boolean isPrime = true;
        
        if(num<2){
            isPrime = false;
        }
        else if(num == 2){
            isPrime = true;
        }else{
            for(int i=2; i<=Math.sqrt(num); i++){
            if(num%i == 0){
                isPrime = false;
            }
        }
        }
        
        if(isPrime){
            System.out.println(num + " is a Prime Number.");
        }else{
            System.out.println(num+" is Not a Prime Number.");
        }
    }
    
}
