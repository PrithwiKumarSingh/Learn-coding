import java.util.*; 


public class whileLoop{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter Number : ");
        int n = sc.nextInt();
        int counter = 0;
        while(counter<=n){
            System.out.println(counter);
            counter++;
        }

    }
}