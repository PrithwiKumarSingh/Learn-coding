package ConditionalStatement;
import java.util.*;

public class SwitchCase {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        // System.out.print("Enter Number (1, 2, 3) : ");
        // int Num = sc.nextInt();
        System.out.print("Enter Latter (s, m, e) : ");
        String ch = sc.nextLine();

        switch(ch){
            case "s" : System.out.println("Samosa Deliver Soon...");
                break; 
            case "m" : System.out.println("Momos Deliver Soon...");
                break;
            case "e" : System.out.println("Egg Roll Deliver Soon...");
                break;
            default : System.out.println("Please Enter (s, m, e) : ");
        }
    }
    
}
