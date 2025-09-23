#include <iostream>
using namespace std; 
int main(){
    /*
1 2 3 4 5 
1 2 3 4 5 
1 2 3 4 5 
1 2 3 4 5
1 2 3 4 5
*/
    // int n = 5; 
    // for(int i=1; i<=n; i++){
    //     for(int j=1; j<=n; j++){
    //         cout<<j<<" ";
    //     }
    //     cout<<endl;
    // }





/*
5 4 3 2 1 
5 4 3 2 1 
5 4 3 2 1 
5 4 3 2 1 
5 4 3 2 1 
*/

    //first Method to print this Pattern 
    int n = 5; 
    for(int row = 1; row<=n; row++){
        for(int col=1; col<=n; col++){
            cout<<n-col+1<<" ";
        }
        cout<<endl;
    }

    //second method to print this Pattern 
    // int n = 5;
    // for(int row = 5; row>=1; row-- ){
    //         for(int col = 5; col>=1; col--){
    //             cout<<col<<" ";
    //         }
    //         cout<<endl;
    // }


    return 0; 
}