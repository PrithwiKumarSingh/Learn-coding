/*Question 3: Enter cost of 3 items from the user (using float data type) - a pencil, a pen and
an eraser. You have to output the total cost of the items back to the user as their bill.
(Add on : You can also try adding 18% gst tax to the items in the bill as an advanced problem) */

import java.util.*;
public class CostCalculate {
    public static void main(String[] args){
        System.out.println("----------- Calculating Amount with GST ------------");
        Scanner sc = new Scanner(System.in);

        System.out.print("Cost of Pencil : ");
        float pencil = sc.nextFloat();

        System.out.print("Cost of Pen : ");
        float pen = sc.nextFloat();

        System.out.print("Cost of Erasser : ");
        float Erasser  = sc.nextFloat();

        float Bill = pencil + pen + Erasser ; 
        float BillwithGst = (Bill*18)/100;

        System.out.println("Your Total Amount : " + Bill);
        System.out.println("Your Total Amount with GST : " + BillwithGst);

    }
    
}
