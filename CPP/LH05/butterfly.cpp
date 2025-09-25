#include <iostream>
using namespace std; 
int main(){
    int total_row = 10; 

    for(int row=1; row<=total_row; row++){
        //  star
        for(int sp=1; sp<=row ; sp++){
            cout<<"*";
        }
        //  space
        for(int col=1; col<= 2*total_row-2*row; col++){
            cout<<" ";
        }
        //star
        for(int st = 1 ; st<=row; st++){
            cout<<"*";
        }
        cout<<endl;
    }

    for(int row =1; row<=total_row-1; row++){
        //  star
        for(int st=1; st<=total_row-row; st++){
            cout<<"*";
        }
        //space 
        for(int sp=1; sp<=2*row; sp++){
            cout<<" ";
        }
        //star
        for(int col=1; col<=total_row-row; col++){
            cout<<"*";
        }
        cout<<endl;
    }
    return 0;
}