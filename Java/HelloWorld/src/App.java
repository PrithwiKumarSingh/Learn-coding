import java.util.Scanner;
public class App {
    public static void main(String[] args) throws Exception {

        Scanner sc = new Scanner(System.in);
        int num;
        do{
        System.out.print("Please Enter a Number : ");
         num = sc.nextInt();

        switch(num){
            case 1 -> System.out.println("Sunday");
            case 2 -> System.out.println("Monday");
            case 3 -> System.out.println("Tuesday");
            case 4 -> System.out.println("Wednesday");
            case 5 -> System.out.println("Thursday");
            case 6 -> System.out.println("Friday");
            case 7 -> System.out.println("Saturday");
            default -> System.out.println("Please Enter Between (1-7) ");
        }
    }while(num>0);


    }
}
