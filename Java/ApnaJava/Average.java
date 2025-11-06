/* Question 1 : In a program, input 3 numbers : A, B and C. You have to output the average of
these 3 numbers. */

import java.util.*;
public class Average {
    public static void main(String[] agrs){
        System.out.println("------- Calculating Average of Three Number ---------");
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter Your First Number : ");
        float Fnum = sc.nextFloat();
        System.out.print("Enter Your Second Number : ");
        float Snum = sc.nextFloat();
        System.out.print("Enter Your Third Number : ");
        float Tnum = sc.nextFloat();

        float Average = ( Fnum + Snum + Tnum) / 3;
        System.out.println("Your Avarage : " + Average);

    }
    
}
