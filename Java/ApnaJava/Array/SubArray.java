package Array;
import java.util.*;


public class SubArray {
    public static void SubArr(int number[]){
        int currSum = 0;
        int max = Integer.MIN_VALUE;  // - infinity
        int min = Integer.MAX_VALUE;  // + infinity 

        for(int i=0; i<number.length; i++){
            int start = i;
            for(int j=i; j<number.length; j++){
                int end = j;
                     currSum = 0; 
                    
                for(int k=start; k<=end; k++){
                     currSum += number[k];
                    // System.out.print(number[k]+ " ");
                }
                System.out.println(currSum);
                if(currSum > max){
                        max = currSum;
                     } if(currSum < min){
                        min = currSum;
                    }
            }
            System.out.println();
        }

        System.out.println("Maximum Sum in Subarray : " + max);
        System.out.println("Minimum Sum in Subarray : " + min);
    }
    public static void main(String[] args){
        int number[] = {2, 4, 6, 8, 10};
        SubArr(number);

    }
    
}
