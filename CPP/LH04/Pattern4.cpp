#include <iostream>
using namespace std; 
int main(){

    /*

    1 2 3 4 5
      2 3 4 5 
        3 4 5
          4 5
            5
    
    */
    int n = 5; 
    for(int row = 1; row<=n; row++){
        for(int sp=2; sp<=row; sp++ ){
            cout<<"  ";
        }
        for(int col=row; col<=n; col++){
            cout<<col<<" ";
        }
        cout<<endl;
    }



    return 0;
}