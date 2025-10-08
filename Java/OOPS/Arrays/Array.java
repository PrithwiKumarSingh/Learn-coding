

public class Array {
    public static void main(String[] args) {
        int arr[] = {1,3,4};
        int arr1[] = new int[4];
        arr1[0] = 4; 
        arr1[3] = 5; 
        int sum = 0;

        for(int i=0; i<=arr.length-1; i++){
            sum += arr[i];
        }

        double avg = (double)sum/arr.length;
        System.out.println(avg);
        // int [] arr = {4,7,53,3,5};
        // System.out.println(arr[2]);
    }
}
