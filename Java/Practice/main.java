package Practice;
import java.util.Scanner;

class main {

    public static void main(String[] args) {



        // byte a = 120;
        // byte b = 150;
        // System.out.println(a+b);
        
        // String name = new String("Prithwi Kumar Maurya");
        // System.out.println(name);
        
        // String name1 = "Ram is a very cleaver Men in Ramayana";
        // System.out.println(name1.replace('a','b'));
        // System.out.println(name1.length());
        // // String name2 = "Sita is a Ram's wife in Ramayana";
        // if(name1.charAt(0) == 'R' ){
        // for(int i = 0; i<=name1.length(); i++){
        // System.out.println(name1.charAt(i));
        // }
        // }
        
        // System.out.println(name1 + "and"+name2);
        
        
        // String name = "Prithwi Kumar Maurya";
        // System.out.println(name.substring(0,8));
        
        
        
        // int [][] marks = {{50, 23, 55, 24, 22, 11},{12,34,45,67,23,21}};
        // // Arrays.sort(marks);
        // for(int i=0; i<=(marks[0].length-1); i++){
        //     System.out.println(marks[0][i] + " --->>  "+ marks[1][i]);
        // }
        // System.out.println(Arrays.sort(marks));
        // Scanner sc = new Scanner(System.in);
        // int num = sc.nextInt();
        // System.out.println(marks[num]);
        
        
        //Implicit Casting 
        // int a = 10;
        // double b = a + 1.5;
        // System.out.println(b);
        
        //Explicit Casting
        // double a = 10;
        // int b = (int)a + (int)10.44;
        // System.out.println(b);
        
        
        //Constant
        // final float PI = 3.14F;
        // // PI = 34;
        // System.out.println(PI);
        
        
        // int a = 10, b = 20, c = 200, d = 400;
        
        // //Assignment Operator
        // System.out.println(a+b);
        // System.out.println(a-b);
        // System.out.println(a*b);
        // System.out.println(a/b);
        // System.out.println(3%6);
        
        
        //Unary Operator
        // System.out.println(+a);
        // System.out.println(-a);
        // System.out.println(++a);
        // System.out.println(a++);
        // System.out.println(a=b);
        
        
        // System.out.println(Math.min(a,b));
        // System.out.println(Math.max(a,b));
        
        // for(int i=0; i<=5; i++)
        // System.out.println((int)(Math.random()*100));
        
        // Scanner sc = new Scanner(System.in);
        // System.out.print("Please Enter Your Name : ");
        // String name = sc.nextLine();
        // System.out.print("Your Name is : "+name);
    
    // Scanner sc = new Scanner(System.in);
    // System.out.print("Enter Your Money : ");
    // int money = sc.nextInt();
    
    // if(money<10){
    //     System.out.println("You Need More Money");
    // }else{
    //     if(money>10 && money<60){
    //         System.out.println("You get one items");
    //     }else{
    //         System.out.println("You get anything you want !");
    //     }
    // }




        Scanner sc = new Scanner(System.in);
        String color;

        do {
            System.out.print("Enter Traffic Color: ");
            color = sc.next();

            if (color.equalsIgnoreCase("Red")) {
                System.out.println("Stop!");
            } else if (color.equalsIgnoreCase("Green")) {
                System.out.println("Go >>>>");
            } else if (color.equalsIgnoreCase("Yellow")) {
                System.out.println("Go Slow >>");
            } else if (color.equalsIgnoreCase("End")) {
                System.out.println("Happy Journey!");
                break; // Exit loop
            } else {
                System.out.println("Not Found: " + color);
                System.out.println("Please Enter (Red, Green, Yellow)");
            }
        } while (true);

        sc.close();
    }
}
