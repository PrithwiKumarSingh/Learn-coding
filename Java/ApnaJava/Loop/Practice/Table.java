package Loop.Practice;
import java.util.*;

public class Table {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter Your Number : ");
        int num = sc.nextInt();

        for(int i=1; i<=10; i++){
            System.out.println(num + " * " + i + " = " + num*i );
        }

    }
    
}
