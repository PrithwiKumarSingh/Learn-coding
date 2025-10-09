

public class BinarySearch {

    public static int binarySearch(int arr[], int key) {
        int start = 0;
        int end = arr.length - 1;

        while (start <= end) {
            int mid = (start + end) / 2;

            if (arr[mid] == key) {
                return mid;  // key found at index mid
            }
            else if (arr[mid] < key) {
                start = mid + 1; // search right half
            } 
            else {
                end = mid - 1;   // search left half
            }
        }
        return -1; // key not found
    }

    public static void main(String[] args) {
        int arr[] = {2, 3, 5, 7, 8, 9};
        int key = 8;

        int result = binarySearch(arr, key);

        if (result == -1) {
            System.out.println("Element not found");
        } else {
            System.out.println("Element found at index: " + result);
        }
    }
}


