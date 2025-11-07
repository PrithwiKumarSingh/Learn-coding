import java.util.*;
public class Ifelse {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter Your Age : ");
        int age = sc.nextInt();

        if(age > 18){
            System.out.println("Give Votes & Drive");
        }else{
            System.out.println("Not Adult!");
        }
    }
}
