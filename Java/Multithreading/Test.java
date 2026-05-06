package Multithreading;

class MyNumber implements Runnable {
     public void run(){
        for(int i=0; i<10; i++){
            System.out.print(" "+i);
            try{
                Thread.sleep(100);
            }catch(Exception e){
                System.out.println("Error : "+ e);
            }
            
        }
    }
}

class MyString extends Thread {
     public void run(){
        for(char ch = 'A'; ch<='G'; ch++){

            try{
                Thread.sleep(200);
            }catch(Exception e){
                System.out.println("Error : "+e);
            }
            System.out.print(" "+ch);
        }
    }
}

public class Test{
    public static void main(String[] args) {
    MyNumber number = new MyNumber();
    MyString str = new MyString();
    str.start();
    number.run();
}
}


