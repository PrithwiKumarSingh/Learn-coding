import java.util.Scanner;

public class SwapTwoNumber {
    public static void main(String[] args) {
        Scanner num = new Scanner(System.in);
        System.out.print("Please Enter A : ");
        int A = num.nextInt();
        System.out.print("Please Enter B : ");
        int B = num.nextInt();
        System.out.println("Before Swap A : "+A+" B : "+B);
        int C = A;
         A = B;
         B = C;

         System.out.println("After Swap A : "+A+" B : "+B);


    }
}