package ConditionalStatement;
import java.util.*; 

public class IncomeTax {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter Your Income : ");
        int Income = sc.nextInt();
        int tax; 

        if(Income < 500000){
            tax = Income * 0;
        }else if((Income >= 500000) && (Income <= 1000000)){
            tax = (int) (Income * 0.2);
        } else{
            tax = (int) (Income * 0.3);
        }

        System.out.println("Tax is : " + tax);
    }
    
}
