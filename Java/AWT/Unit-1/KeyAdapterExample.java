import java.awt.*;
import java.awt.event.*;

public class KeyAdapterExample extends KeyAdapter{
    Label l;
    TextArea area;
    Frame f;
    KeyAdapterExample(){
        f = new Frame("Type Counter");
        f.addWindowListener(new WindowAdapter() {
            public void windowClosing(WindowEvent e){
                f.dispose();
                System.out.println("Thank You for Visting..");
            }
        });
        l = new Label();
        l.setBounds(10,10, 200, 50 );
        area = new TextArea();
        area.setBounds(100,150,300,300);
        area.addKeyListener(this);

        f.add(l);
        f.add(area);


        f.setSize(800,800);
        f.setLayout(null);
        f.setVisible(true);

    }

    public void keyReleased(KeyEvent e){
        String text = area.getText().trim();
        int wordCount = text.isEmpty() ? 0 : text.split("\\s").length;
        int charCount = text.length();
        l.setText("Words : " + wordCount + "Charcters : " + charCount);
    }

    public static void main(String pri[]){
        new KeyAdapterExample();
    }



}
