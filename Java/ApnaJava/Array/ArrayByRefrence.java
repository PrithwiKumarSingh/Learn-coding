package Array;
import java.util.*;

public class ArrayByRefrence {
    public static void update(int arr[]){
        for(int i=0; i<arr.length; i++){
            arr[i] = arr[i] + i;
        }
    }
    public static void main(String[] args){
        int arr[] = {45, 65, 67};
        update(arr);
        for(int i=0; i<arr.length; i++){
            System.out.println("Marks : " + arr[i]);
        }


    }
    
}
