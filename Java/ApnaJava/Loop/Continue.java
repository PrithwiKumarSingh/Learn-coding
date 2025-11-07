import java.util.*;

public class Continue{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        do{
            System.out.print("Enter Your Number : ");
            int num = sc.nextInt();
            if(num % 10 == 0){
                continue;
            }
            System.out.println("You Number is : " + num);

        }while(true);
    }
}