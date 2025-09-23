#include <iostream>
using namespace std;
int main(){

/*

1 2 3 4 5 
6 7 8 9 10 
11 12 13 14 15 
16 17 18 19 20 
21 22 23 24 25

*/
    // int n = 5;
    // int counter = 1; 
    // for(int row=1; row<=n; row++){
    //     for(int col=1; col<=n; col++){
    //         cout<<counter<<" ";
    //         counter += 1; 
    //     }
    //     cout<<endl;
    // }

    /*

    *
    * * 
    * * *
    * * * * 
    * * * * * 
    
    */
//    int n = 5;
//    for(int row=1; row<=n; row++){
//     for(int col=1; col<=row; col++){
//         cout<<" * ";
//     }
//     cout<<endl;
//    }

//     return 0; 

 // Pattern - 3; 

 /*

1 
1 2 
1 2 3 
1 2 3 4 
1 2 3 4 5 

*/

        // int n = 5; 
        // for(int row=1; row<=n; row++){
        //     for(int col=1; col<=row; col++){
        //         cout<<col<<" ";
        //     }
        //     cout<<endl;
        // }


    /*
    
a a a a a 
b b b b b 
c c c c c 
d d d d d 
e e e e e 

*/
        int n = 5;
        char ch = 'a';
        for(int row=1; row<=n; row++){
            for(int col=1; col<=n; col++ ){
                cout<<ch<<" ";
            }
            ch++;
            cout<<endl;
        }
    
}