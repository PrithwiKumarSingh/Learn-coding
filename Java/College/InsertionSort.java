class InsertionSort{
  public static void main(String[] args){
     int arr[] = {5,7,8,4,3};
     int n = arr.length;
    for(int i=0; i<n; i++){
    for(int j=i; j>0; j--){
      if(arr[j] < arr[j-1]){
        int temp = arr[j]; 
        arr[j] = arr[j-1];
        arr[j-1] = temp;
      }
    }
    }

    for(int i=0; i<n; i++){
      System.out.print(" "+ arr[i]);
    }
    System.out.println();
  }
}
