#include <iostream>
#include<cmath>
using namespace std; 
int main(){
    int num; 
    cout<<"Enter a Num : ";
    cin>>num;
    

    for(int i=2; i<=num; i++){
        bool isPrime = true;

        for(int j=2; j<sqrt(i); j++){
            if(i%j==0){
                isPrime = false;
                break;
            }
        }
        if(isPrime==1){
            cout<<i<<" ";
        }
    }
    cout<<endl;




    return 0;
}