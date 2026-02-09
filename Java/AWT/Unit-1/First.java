import java.awt.*;

class First extends Frame{
  First(){
    Button b1 = new Button("Click Me");
    b1.setBounds(80,100,100,30);

    add(b1); // adding button into frame
    setSize(500,500); // Frame size 300 width, 300 height
    setLayout(null); //no layout manager
    setVisible(true); // now frame will be visible, by default not visible
  }

  public static void main(String args[]){
    new First();

  }
}























