import java.awt.*;
import java.awt.event.*;
public class AdapterExample {
    // creating consutructor 
    AdapterExample(){
        Frame  f = new Frame("Window Closer");
        f.addWindowListener(new WindowAdapter(){
            public void windowClosing(WindowEvent e){
                f.dispose();
                System.out.println("Window Closed !!");
            }
        });

        f.setSize(500,500);
        f.setVisible(true);
    }

    public static void main(String args[]){
        new AdapterExample();
    }
}
