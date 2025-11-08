package FunctionMethod;

import java.util.Scanner;

public class PrimeCheck {
    public static boolean PrimeCheck(int num){
        boolean isPrime = true; 

        if(num<2){
            isPrime = false;
        }
        else if(num == 2){
            isPrime = true;
        }else{
            for(int i=2; i<=Math.sqrt(num); i++){
            if(num % i == 0){
                isPrime = false; 
            }
        }
     }

    //  if(isPrime == true){
    //     System.out.println(num + " Is a Prime Number.");
    //  }else{
    //     System.out.println(num + " Is Not a Prime Number.");
    //  }

     return isPrime;
    }

    public static void PrimeRange(int num){
        for(int i = 2; i<=num; i++){
            if(PrimeCheck(i)){
                System.out.print(i + " ");
            }
            
        }
        System.out.println();
    }

    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter Your Number : ");
        int num = sc.nextInt();

        PrimeRange(num);
    }
    
}
