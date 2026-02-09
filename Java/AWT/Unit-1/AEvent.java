import java.awt.*;
import java.util.*;
import java.awt.event.*;

class AEvent extends Frame{
    TextField tf;
    AEvent(){
         tf = new TextField();
         tf.setBounds(150,100,150,20);

         Button b1 = new Button("Click Me");
         b1.setBounds(150,150,100,30);
        //  b1.addActionListener(this);  Event handling within a class
         b1.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e){
                System.out.println("Buttton was Clicked ..");
                tf.setText("Hello");
            }
         });

         add(b1);
         add(tf);
         setSize(300,300);
         setLayout(null);
         setVisible(true);
    }
    // public void actionPerformed(ActionEvent e){
    //     System.out.println("Button Is Clicked !!");
    //     tf.setText("Welcome");
    // }
    public static void main(String args[]){
        new AEvent();
    }

}