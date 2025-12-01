import java.util.*;

public class TwoSum {
    public static int[] Twosum(int num[], int key){

        int result[] = new int[2];

        for(int i=0; i<num.length; i++){

            for(int j=i+1; j<num.length; j++){
                if(num[i]+num[j] == key){
                    result[0] = i;
                    result[1] = j;
                    break;
                }
            }

        }
        return result;
        
    }

    public static void main(String[] args){
        int num[] = {2,8,11,5,4};
        int key = 9;
        int arr[] = Twosum(num,key);
        for(int i=0; i<arr.length; i++){
            System.out.println(arr[i] + " ");
        }

    }
}