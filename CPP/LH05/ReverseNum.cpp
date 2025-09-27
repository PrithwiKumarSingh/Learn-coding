#include <iostream>
using namespace std;
int main(){
    int Num;
    cout<<"Enter Your Number : ";
    cin>>Num;
    cout<<"Reverse Numeber : ";

    while(Num){
        int rem = Num%10;
        cout<<rem;
        Num /= 10; 
    }
    cout<<endl;
}