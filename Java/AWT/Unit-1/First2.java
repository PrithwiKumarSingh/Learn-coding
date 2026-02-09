import java.awt.*;

class First2{
  First2(){
    Frame f = new Frame();
    Button b1 = new Button("Click Me");
    b1.setBounds(30,100,100,50);

    f.add(b1);
    f.setSize(500,500);
    f.setLayout(null);
    f.setVisible(true);
  } 

  public static void main(String args[]){
    new First2();
  }
}
