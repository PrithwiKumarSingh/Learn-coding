package FunctionMethod;
import java.util.*;


public class BinaryToDecimal {
    public static int BinToDec(int num){
        int pow = 0;
        int decNum = 0;
        
        while(num > 0){
            int lastdig = num % 10;
            decNum = decNum + (lastdig * (int) Math.pow(2,pow));
            pow++;
            num /= 10;
        }
        return decNum;

    }
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter Your Number : ");
        int num = sc.nextInt();
       int result =  BinToDec(num);
       System.out.println("Result : " + result);
        
    }
    
}
