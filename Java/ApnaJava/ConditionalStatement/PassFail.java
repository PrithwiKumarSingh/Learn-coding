package ConditionalStatement;
import java.util.*;

public class PassFail {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter Your Marks : ");
        int Marks = sc.nextInt();

        String Result = (Marks >= 30)? "Pass" : "Fail";
        System.out.println(Result);
    }

    
}
