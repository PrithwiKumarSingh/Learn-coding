package ConditionalStatement;
import java.util.*;

public class OddEven {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter Your Number : ");
        int Num = sc.nextInt();
        // if(Num % 2 == 0){
        //     System.out.println(Num + " is a Even Number");
        // } else{
        //     System.out.println(Num + " is a Odd Number");
        // }

        String Result =  (Num % 2 == 0)? "Even" : "Odd";
        System.out.println(Result);

    }
    
}
