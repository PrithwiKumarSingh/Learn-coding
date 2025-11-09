import java.util.*;

public class Input{
  public static void main(String[] args){
    Scanner sc = new Scanner(System.in);
    
    /*
    int subjects[] = new int[50];
    System.out.print("Enter Your Physics subjects : ");
    subjects[0] = sc.nextInt();
    System.out.print("Enter Your Chemistry subjects : ");
    subjects[1] = sc.nextInt();
    System.out.print("Enter Your Mathematics subjects : ");
    subjects[2] = sc.nextInt();
    */ 


    String subjects[] = {"Physics", "Chemistry", "Mathematics"};
    int marks[] = new int[50]; 
    for(int i=0; i<=subjects.length-1; i++){
          System.out.print("Enter Your "+ subjects[i] + " : ");
          marks[i] = sc.nextInt();
    }

    System.out.println("Physics : " + marks[0] + " Chemistry : "+ marks[1] + " Mathematics : " + marks[2]);
  }
}
