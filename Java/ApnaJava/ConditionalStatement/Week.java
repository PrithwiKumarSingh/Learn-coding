/*Question 3 : Write a Java program to input week number(1-7) and print day of week name
using switch case */

import java.util.*;

public class Week{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter Your Number (1-7) : ");
        int Day = sc.nextInt();

        switch(Day){
            case 1 : System.out.println("Monday");
                break;
            case 2 : System.out.println("Tuesday");
                break;
            case 3 : System.out.println("Wednesday");
                break;
            case 4 : System.out.println("Thursday");
                break;
            case 5 : System.out.println("Friday");
                break;
            case 6 : System.out.println("Saturday");
                break;
            case 7 : System.out.println("Sunday");
                    break;
            default : System.out.println("Invaid Number! press b/w (1-7)");
        }

    }
}