public class Reverse {
    public static int Reverse(int x) {
        int revrse = 0;
        while(x>0){
            revrse = revrse * 10 + (x % 10); 
            x /= 10;
            
        }
        return revrse;
    }
    
    public static void main(String[] args) {
        int res = Reverse(-321);
        System.out.println(res);
    }
}
