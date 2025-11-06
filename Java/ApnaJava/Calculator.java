import java.util.*;
public class Calculator {
    public static void main(String[] args){
        System.out.println("------ Calculator------");
        Scanner sc = new Scanner(System.in);

        // Input First Number 
        System.out.print("Enter Your First Number : ");
        int firstNum = sc.nextInt();

        // Input Second Number
        System.out.print("Enter Your Second Number : ");
        int secondNum = sc.nextInt();

        // Input Operator 
        System.out.print("Enter Your Operator : ");
        String  operator = sc.next();

        if(operator.equals("+")){
             System.out.println("Result : " + (firstNum + secondNum));
        }else if(operator.equals("-")){
            System.out.println("Result : " + (firstNum - secondNum));
        }else if(operator.equals("*")){
            System.out.println("Result : " + (firstNum * secondNum));
        } else if(operator.equals("/")){
            System.out.println("Result : " + (firstNum / secondNum));
        }else if(operator.equals("%")){
            System.out.println("Result : " + (firstNum % secondNum));
        } else{
            System.out.println("Invalid Operator! use (+, -, *, /, %)");
        }
    }
    
}
