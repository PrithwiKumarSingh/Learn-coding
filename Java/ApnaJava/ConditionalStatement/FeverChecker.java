package ConditionalStatement;
import java.util.*;

public class FeverChecker {
    public static void main(String[] args){
        System.out.println("-------- Fever Checker ----------");
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter Your Temprature : ");
        float Temp = sc.nextFloat();

        String fever = Temp > 100 ? "Fever Hai " : "Fever Nahi hai" ;
        System.out.println("Your Health Status : " + fever);
    }
    
}
