class Main{
    public static void BubbleSort(int arr[]){
        int n = arr.length;
        for(int i=0; i<n-1; i++){
            for(int j=0; j<n-1-i; j++){
                if(arr[j] > arr[j+1]){
                    int temp = arr[j]; 
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }

        for(int i=0; i<n; i++){
            System.out.print(" " + arr[i]);
        }
    }

    public static void Selection(int arr[] ){
        int n = arr.length;
        for(int i=0; i<n-1; i++){
            int index = i; 
            for(int j=i+1; j<n; j++){
                if(arr[j] < arr[index]){
                    index = j;
                }
            }
        int temp = arr[i]; 
            arr[i] = arr[index];
            arr[index] = temp;
        }


        for(int i=0; i<n; i++){
            System.out.print(" " + arr[i]);
        }
        System.out.println();

    }



    public static void main(String[] args){
        int arr[] = {4,7,3,2,6};
       // BubbleSort(arr);
        Selection(arr);
        
    }
}
