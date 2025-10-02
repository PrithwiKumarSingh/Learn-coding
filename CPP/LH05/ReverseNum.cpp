#include <iostream>
using namespace std;
int main(){
    int Num;
    cout<<"Enter Your Number : ";
    cin>>Num;
    cout<<"Reverse Numeber : ";
    int sum = 0; 

    while(Num){
        int rem = Num%10;
        sum = sum*10+rem;
        Num /= 10; 
    }
    cout<<sum<<endl;
}