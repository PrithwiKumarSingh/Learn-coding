package Loop;
import java.util.*;

public class TenMultiple {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);

        
        

        do{
            System.out.print("Enter Your Number : ");
            int Num = sc.nextInt();
            if(Num%10==0){
                break;
            }
            System.out.println("Your Number is : "+Num);
        }while(true);
    }
    
}
