

public class Array {
    public static void main(String[] args) {

        // 1 D --> Array
        // int arr[] = {1,3,4};
        // int arr1[] = new int[4];
        // arr1[0] = 4; 
        // arr1[3] = 5; 
        // int sum = 0;

        // for(int i=0; i<=arr.length-1; i++){
        //     sum += arr[i];
        // }

        // double avg = (double)sum/arr.length;
        // System.out.println(avg);
        // int [] arr = {4,7,53,3,5};
        // System.out.println(arr[2]);



        // 2D --> Array 
        // int arr[][]  = {
        //                     {7,5},
        //                     {45,6}
        //                 };
        // System.out.println(arr[0][1]);


        // int matrix [][] = new int[2][3];
        // matrix[0][0] = 1;
        // matrix[0][1] = 2;
        // matrix[0][2] = 3;
        // matrix[1][0] = 4;
        // matrix[1][1] = 5;
        // matrix[1][2] = 6;

        // for(int i=0; i<matrix.length; i++){
        //     for(int j=0; j< matrix[i].length; j++){
        //         System.out.println(matrix[i][j]);
        //     }
        // }


        // find the element of array 
        int arr [] = {3,5,7,8,40};
        int n = 25324;
        for(int i=0; i<arr.length; i++){
            if(arr[i] < n){
                n = arr[i];
            }
        }
        System.out.println(n);
        
    }
}
