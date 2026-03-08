import java.awt.*;
import java.awt.event.*;

public class MouseAdapterExample extends MouseAdapter {
    Frame f;
    // creating constrctor 
    MouseAdapterExample(){
         f = new Frame("Mouse Adapter Event");
         f.addWindowListener(new WindowAdapter() {
            public void windowClosing(WindowEvent e){
                f.dispose();
            }
         });

        f.addMouseMotionListener(this);

        f.setSize(500,500);
        f.setLayout(null);
        f.setVisible(true);
    }

    public void mouseDragged(MouseEvent e){
        Graphics g = f.getGraphics();
        g.setColor(Color.BLUE);
        g.fillOval(e.getX(),e.getY(), 30,30);
    }

    public static void main(String args[]){
        new MouseAdapterExample();
    }
}
