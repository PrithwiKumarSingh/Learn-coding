#include <iostream>
using namespace std;
int main(){
    long Number; 
    cout<<"Please Enter Your Number : ";
    cin>>Number;
    long count = 0; 
    long num = 10;

    // while(Number){
    //     count++;
    //     Number /= 10 ;
    // }
    // cout<<count<<endl;


    for(long i=1; i>0; i++){
        if(Number/num == 0){
            cout<<"Your Number Count : "<<count<<endl;
            return 0;
        }
            num *= 10; 
            count++;
        
    }
    return 0;
}