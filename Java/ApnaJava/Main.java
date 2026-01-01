public class Main {
    public static void Fabo(int n){
        int first = 0; 
        int second = 1;
        int curr; 
        for(int i=3; i<=13; i++){
            curr = first + second;
            first = second;
            second = curr;
            System.out.println(curr + " ");

        }
    }
    public static void Prime(int num){
        for(int i=2; i<=num; i++){
            boolean isPrime = true; 
            for(int j=2; j<=Math.sqrt(i); j++){
                if(i%j == 0){
                    isPrime = false; 
                }
            }
            if(isPrime){
                System.out.print(" "+ i);
            }
        }
    }
    public static int Linear(int arr[], int num){
        for(int i=0; i<arr.length; i++){
            if(arr[i] == num){
                return 1;
            }
        }
        return -1;
    }




    // Binary Search
    public static int Binary(int arr[], int num){
        int start = 0;
        int end = arr.length-1;
        while(start <= end){
            int mid = (start + end)/2;
            if(arr[mid] == num){
                return mid;
            }else if(arr[mid] < num){
                start = mid + 1;
            }else{
                end = mid-1;
            }
        }
        return -1;
        
    }

    public static void Str(){
        String str = "Prithwi";
        str.toLowerCase();
        int vowel = 0;
        int consonent = 0;

        for(int i=0; i<str.length(); i++){
            char ch = str.charAt(i);

            if(ch == 'a' || ch == 'e' || ch == 'i'|| ch == 'o'|| ch == 'u'){
                vowel++;
            }else{
                consonent++;
            }
        }
        System.out.println(vowel); 
        System.out.println("cons : " + consonent);
    }
    public static void main(String[] args){
        // Fabo(10);
        // Prime(100);
        Str();
        int arr[] = {35,7,8,70,9};
        int result = Binary(arr, 7);
        if(result != -1){
            System.out.println("Not Available");
        }else{
            System.out.println("Available : " + result);
        }
        









        
        // int res = Linear(arr, 70);
        // if(res == 1){
        //     System.out.println("Mil gya.");
        // }else{
        //     System.out.println("nahi mila");
        // }

    }
    
}
