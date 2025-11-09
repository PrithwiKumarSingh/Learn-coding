package Array;
import java.util.*;

public class LinearSearch {
    public static int LinSearch(int num){
            int arr[] = {2, 4, 6, 8, 10, 12, 14};
            for(int i=0; i<arr.length; i++){
            if(arr[i]==num){
                return 1;
            }
        }

        return -1;
        
    }
    public static void main(String[] args){
        int num = 1;
        int result = LinSearch(num);
        if(result == 1){
            System.out.println("Available" );
        }else{
            System.out.println("Not Available!");
        }

            
    }
    
}
