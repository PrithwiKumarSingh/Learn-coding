import java.util.*; 

public class ClassesObjects{
    public static void main(String[] args){
        Pen p1 = new Pen();
        p1.setColor("blue");
        p1.setTip(9);

        Student s1 = new Student();
        s1.calPercenatage(89, 23, 90, 90);
        System.out.println(s1.percentage);

        BankAccount B1 = new BankAccount();
        B1.username = "PrithwiKumar871@gmail.com";
        B1.setPass("Prithwi@123");



    }
}



// AccessModifiers / Access Specifiers
// private, default, protected, public

class BankAccount{
    String username;
    private String password;
    void setPass(String pwd){
        password = pwd;
    }
}




 class  Pen {
    String Color ;
    int Tip ;

    void setColor(String colorChange){
        Color = colorChange;
        System.out.println("Pen Color : "+Color);
    }

    void setTip(int changeTip){
        Tip = changeTip;
        System.out.println("Pen Tip Size : " +Tip);
    }
    
}
class Student {
    String Name;
    int age; 
    float percentage;

    void calPercenatage(int phy, int chem, int math, int english){
        percentage = (phy + chem + math + english)/3;
        // System.out.println("Calculate Percentage : " + percentage);
    }
}

