#include <iostream>
using namespace std; 
int main(){
    int num = 8; 
    int rem = 0; 
    
    while(num){
        int r = num%2; 
        rem = rem*10+r;
        num = num/2; 
    }
    cout<<rem<<endl;
}