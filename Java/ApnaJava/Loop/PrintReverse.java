import java.util.*;

public class PrintReverse{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter Your Number : ");
        int num = sc.nextInt();
        int result = 0;

        while(num>0){
            result = num % 10;
            System.out.print(result + " ");

            num /= 10;
        }
        System.out.println();
    }
}