package Loop;
import java.util.*;
public class Pattern1 {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter Your Number : ");
        int num = sc.nextInt();

        for(int i=1; i<=num; i++){
            for(int j=1; j<=num; j++){
                System.out.print(" * ");
            }
            System.out.println();
        }

    }
    
}
