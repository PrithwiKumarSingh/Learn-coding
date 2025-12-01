

public class GetterSetter {
    public static void main(String[] args){
        Pen p1 = new Pen();
        p1.setColor("Red");
        p1.setTip(3);
        System.out.println(p1.getColor());
        System.out.println(p1.getTip());
    }
}

class Pen{
    String color; 
    int tip; 

    // Setter :- Set the value of variable;
    void setColor(String Color){
        this.color = Color;
    }
    void setTip(int Tip){
        this.tip = Tip;
    }

    // Getter :- Get the value of variable;
    String getColor(){
        return this.color;
    }
    int getTip(){
        return this.tip;
    }


}

