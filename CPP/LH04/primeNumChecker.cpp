#include <iostream> 
using namespace std; 
int main(){
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