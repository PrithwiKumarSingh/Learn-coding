/*
  Question 2: In a program, input the side of a square. You have to output the area of the
square.
 */

import java.util.Scanner;

public class SideSqure {
    public static void main(String[] args){
        System.out.println("--------- Calculating Side of Squre -----------");
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter Your Side : ");
        float side = sc.nextFloat();

        float squre = side * side;
        System.out.println("Your Side of Squre : " + squre);
    }
    
}
