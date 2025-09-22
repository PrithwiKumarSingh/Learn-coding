#include <iostream>
using namespace std;
int main(){

    // Table Printing 
    // int num ; 
    // cout<<"Enter a Number : ";
    // cin>>num;

    // for(int i=1; i<=10; i++){
    //     cout<<i*num<<" ";
    // }
    // cout<<endl;


    int num ; 
    cout<<"Enter a Number : ";
    cin>>num;
    bool isPrime = true; 

    if(num < 2){
        cout<<num<< " is not a Prime Number."<<endl;
        return 0;
    }

    for(int i=2; i<num-1; i++){
        if(num%i == 0){
            cout<<num<< " is not a Prime Number."<<endl;
        }
    }
    cout<<num<< " is a Prime Number."<<endl;






    return 0;
}
