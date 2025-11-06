import java.util.*;
public class AreaOfCircle {
    public static void main(String[] args){
        System.out.println("------- We Are Calculating Area Of Circle ------");
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter Your Radius : ");
        float Radius = sc.nextFloat();
        float PI = 3.14F;
        float Area = PI * Radius * Radius;
        System.out.println("Your Area is : " + Area);

        
    }
    
}
