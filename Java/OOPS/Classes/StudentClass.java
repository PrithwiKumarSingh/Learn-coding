
public class StudentClass{

    public static class Student{

        String Name;
        int r_no; 
        double percent ;

         void display(){
            System.out.println("StudentName : "+Name+ " Roll_No : "+r_no+" percent : "+percent);
        }
    }

    public static void main(String[] args) {
        Student x = new Student();
        x.Name = "Prithwi";
        x.r_no = 1000029006;
        x.percent = 16.5;
        x.display();
        Student y = new Student();
        y.Name = "Rahul";
        y.r_no = 100004889;
        y.percent = 23.4; 
        y.display();
        Student z = new Student();
        z.Name = "Rohit"; 
        z.r_no = 299999; 
        z.percent = 12.3;
        z.display();
    }

}