import java.util.*;

public class Input{
  public static void main(String[] args){
    Scanner sc = new Scanner(System.in);

    int marks[] = new int[50];
    marks[0] = sc.nextInt();
    marks[1] = sc.nextInt();
    marks[2] = sc.nextInt();

    System.out.println("Physics : " + marks[0] + "Chemistry : "+ marks[1] + "Mathematics : " + marks[2]);
  }
}
