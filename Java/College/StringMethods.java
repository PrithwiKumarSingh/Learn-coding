

public class StringMethods {

    public static void main(String[] args){
        // String name1 = "Prithwi Kumar";
        // String name2 = "Prithwi Kumar";
        // String name = new String("Prithwi Kumar");
        // System.out.println(name);

        // // .equals() --> compare variable inside content 
        // System.out.println(name1.equals(name2));
        // System.out.println(name2.equals(name));

        // // ==
        // System.out.println(name1 == name2);
        // System.out.println(name2 == name1);
        // System.out.println(name2 == name);
        // System.out.println(name1 == name);


        // // length
        // System.out.println(name.length());

        // // .substring
        // System.out.println(name.substring(7));
        // System.out.println(name.substring(0, 7));
        // System.out.println(name.substring(8, 13));

        // // .charAt()
        // // for(int i=0; i<name.length(); i++){
        // //     System.out.println(name.charAt(i));
        // // }
        // System.out.println(name.charAt(5));

        // //   Q1. String Reverse 
        //     String nam = "Prithwi";

        //     for(int i=nam.length()-1;i>=0 ; i--){
        //         System.out.print(nam.charAt(i));
        //     }
        //     System.out.println();
        
            
        // //  Q2. Vowel or Consonent Count

        // String name = "edUcatiOn";
        // name = name.toUpperCase();
        // int vowel = 0; 
        // int Consonent = 0;

        // for(int i=0; i<name.length(); i++){

        //    char ch = name.charAt(i);
           

        //     if(ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U' ){
        //         vowel++;
        //     }else{
        //         Consonent++;
        //     }
        // }

        // System.out.println("Vowel : "+vowel);
        // System.out.println("Consonent : "+Consonent);



        // // Q3.  count characters 

        // String Word = new String("javajavaj");
        // char ch = 'j';
        // int counter = 0; 

        // for(int i=0; i<Word.length(); i++){
        //     // char chcount = Word.charAt(i);
        //     if(Word.charAt(i) == 'j'){
        //         counter++;
        //     }
        // }
        // System.out.println(ch + " : "+counter);


        // Q4. String check Palindrom or not 

        String name = new String("maDam");
        name = name.toUpperCase();
        boolean pdom = false;
        int n = name.length();

        for(int i=0; i<n; i++){
            if(name.charAt(i) == name.charAt(n-1-i)){
                pdom = true;
            }else{
                pdom = false;
            }
        }

        if(pdom == true){
            System.out.println(name + " is palindrom.");
        }else{
            System.out.println(name+" is not palindrom");
        }

    }
    
}
