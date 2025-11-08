package FunctionMethod;
import java.util.*;

public class DecimalToBinary {
    public static int DecToBin(int num){
        int dig = 0;
        int pow = 0; 

        while(num > 0){
            int rem = num % 2;
            dig = dig + (rem * (int)Math.pow(10, pow));
            pow++;
            num /= 2;
        }
        return dig;
    }
    public static void main(String[] args){
        System.out.println(DecToBin(4));
        
    }
    
}
