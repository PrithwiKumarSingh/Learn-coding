package Array;
import java.util.*;

public class BinarySearch {
    public static int BinSearch(int num){
         int arr[] = {2, 3, 4, 5, 6, 7, 9 };

         int start = 0;
         int end = arr.length-1;
         

           while(start <= end){
                int mid = (start + end) / 2;
                if(arr[mid] == num){
                    return mid;
                    
                }else if(arr[mid] < num){
                        start = mid+1;
                } else{
                    end = mid-1;
                }
           }
           return -1;
        

    }

    public static void main(String[] args){
        int result = BinSearch(9);
        if(result == -1){
            System.out.println("Not Available");
        }else{
            System.out.println("Available : " + result);
        }
       
    }
    
}
