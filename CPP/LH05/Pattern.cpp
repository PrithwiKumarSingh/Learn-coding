#include <iostream>
using namespace std; 
int main(){
//     *
//    ***
//   *****
//  *******
// *********
    // int n = 5;
    // for(int i=1; i<=n; i++){
    //     //space
    //     for(int sp=1; sp<=n-i; sp++){
    //         cout<<" ";
    //     }
    //     //star
    //     for(int st=1; st<=2*i-1; st++){
    //         cout<<"*";
    //     }
    //     cout<<endl;
    // }






//     * 
//    * * 
//   * * * 
//  * * * * 
// * * * * * 
    // int total_row = 5;  
    // for(int row = 1; row<=total_row; row++){
    //     for(int sp = 1; sp<=total_row-row; sp++){
    //         cout<<" ";
    //     }
    //     for(int col=1; col<=row; col++){
    //         cout<<"* ";
    //     }
    //     cout<<endl;
    // }



// * * * * * 
//  * * * * 
//   * * * 
//    * * 
//     * 

    int total_row = 5;
        for(int row = 1; row<=total_row-1; row++){
        for(int sp = 1; sp<=total_row-row; sp++){
            cout<<" ";
        }
        for(int col=1; col<=row; col++){
            cout<<"* ";
        }
        cout<<endl;
    } 
    for(int row=1; row<=total_row; row++){
        //space
        for(int sp=1; sp<=row-1; sp++){
            cout<<" ";
        }
        for(int col=1; col<=total_row-row+1; col++){
            cout<<"* ";
        }
        cout<<endl;
    }






    return 0; 

}