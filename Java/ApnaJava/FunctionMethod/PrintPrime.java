package FunctionMethod;
import java.util.*;

public class PrintPrime {
    public static void Prime(int num){
        
        if(num < 2){
            System.out.println("Invalid Prime Number ! ");

        }else{
            for(int i=2; i<=num; i++){
                boolean isPrime = true;

            for(int j=2; j<=Math.sqrt(i); j++){
                if(i%j == 0){
                    isPrime = false;
                    break;
                }
            }
            if(isPrime){
                System.out.print(i + " ");
            }
        }
        System.out.println();
        }
        
    }

    public static void main(String[] args){
        System.out.println("------ Prime Number Printer ------------");
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter Your Number : ");
        int num = sc.nextInt();

        Prime(num);
    }
    
}
