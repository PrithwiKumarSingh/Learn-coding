package Practice;

import java.util.Scanner;
public class Main {
    
public static void main(String[] args) {
    
    //Digit Concept

    // int num = 4533;
    // for(int i=1; num>0; i++){
    //     int newNum = num%10;
    //     System.out.print(newNum);
    //     num = num/10;
    // }

    // Digit Count
    
    // int num = 4509803;
    // int cnt = 0;true
    // for(int i=0; num>0; i++){
    //     int lastdig = num%10;
    //     cnt+=1;
    //     num/=10;
    // }
    // System.out.println(cnt);

    // Prime Checker 
    // Scanner input = new Scanner(System.in);

    
    // System.out.print("Enter a Number : ");
    // int n = input.nextInt();

    // boolean isPrime = true;
    // for(int i=2; i<=Math.sqrt(n); i++){
    //     if(n%i == 0){
    //         isPrime = false;
    //     }
    // }
    // if(isPrime){
    //     System.out.println(n+"is a Prime Number");
    // }else{
    //     System.out.println(n+"Not a Prime Number");
    // }

    // printing prime number 1 to n;

    Scanner input = new Scanner(System.in);
    System.out.print("Please Enter A Number : ");
    int n = input.nextInt();

     for(int i = 2; i<=n; i++){
        boolean isPrime = true;

        for(int j=2; j<=Math.sqrt(i); j++){
            if(i%j == 0){
                isPrime = false;
                break;
            }
        }
        if(isPrime){
            System.out.println(i);
        }
     }




}

}
