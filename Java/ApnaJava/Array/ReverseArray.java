package Array;
import java.util.*;

public class ReverseArray {
    public static void ReverseArr(){
        int arr[] = {3, 5, 7, 6, 7, 8};
        int first = 0;
        int last = arr.length-1;

        for(int i=0; i<arr.length; i++){
            System.out.print(arr[i] + " ");
        }
        System.out.println();
        while(first < last){
            int temp = arr[first]; 
            arr[first] = arr[last];
            arr[last] = temp;
            first++;
            last--;
        }

        for(int i=0; i<arr.length; i++){
            System.out.print(arr[i] + " ");
        }
        System.out.println();
        // int reverse[] = new int[arr.length+1];

        // for(int i=arr.length-1; i>=0; i--){
        //     System.out.print(arr[i] + " ");
        // }
        // System.out.println();
    }

    public static void main(String[] args) {
        ReverseArr();
    }
    
}
