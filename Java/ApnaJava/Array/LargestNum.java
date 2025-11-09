package Array;
import java.util.*;

public class LargestNum {
    public static int LargestNumber(int arr[]){
        int large = Integer.MIN_VALUE;  // -infinity 
        int small = Integer.MAX_VALUE;
        for(int i=0; i<arr.length; i++){
            if(arr[i] > large){
                large = arr[i];
            } 
            if(arr[i] < small){
                small = arr[i];

            }
        }
        System.out.println("Smallest Value : "+ small);
        return large;
        
    }

    public static void main(String[] args){
        int arr[] = {3,5,6,7,25,60};
        int result = LargestNumber(arr);
        System.out.println("Largest Value : "+ result);
    }
    
}
