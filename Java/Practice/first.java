package Practice;
import java.util.Scanner;

public class first {
    public static void main(String[] args){
    Scanner sc = new Scanner(System.in);
    String color;
    
    do{
    System.out.print("Enter Taffic Color : ");
     color = sc.next();
    
    if(color.equalsIgnoreCase("Red")){
        System.out.println("Stop ! ");
    }else if(color.equalsIgnoreCase("Green")){
        System.out.println("Go >>>>");
    } else if(color.equalsIgnoreCase("Yellow")){
        System.out.println("Go Slow >>");
    }else if(color.equalsIgnoreCase("End")){
        System.out.println("Happy Journey ");
        break;
    }
    else {
        System.out.println("Not Found : "+color);
        System.out.println("Plese Enter (Red, Green, Yellow)");
    }
    }while(true);
    sc.close();
    }
}
