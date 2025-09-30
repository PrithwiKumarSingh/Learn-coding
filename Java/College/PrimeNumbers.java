

public class PrimeNumbers {

    //  Print PrimeNumbers  

    // public static void main(String[] args) {
    //     int n = 12; 

    //     for (int i = 2; i <= n; i++) {
    //         boolean isPrime = true;

    //         for (int j = 2; j <= Math.sqrt(i); j++) {
    //             if (i % j == 0) {
    //                 isPrime = false;
    //                 break;
    //             }
    //         }

    //         if (isPrime) {
    //             System.out.print(i + " ");
    //         }
    //     }
    //     System.out.println();

    public static void main(String[] args) {
        
    

    // Prime Checker  
        int num = 12;
        boolean isPrime = true;

        if (num <= 1) {
            isPrime = false; // 0 and 1 are not prime
        } else {
            for (int i = 2; i <= Math.sqrt(num); i++) {
                if (num % i == 0) {
                    isPrime = false;
                    break;
                }
            }
        }

        if (isPrime) {
            System.out.println(num + " is a Prime Number.");
        } else {
            System.out.println(num + " is NOT a Prime Number.");
        }


    }

}