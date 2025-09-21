#include <iostream>
using namespace std;
int main(){

    // int cout = 10; 
    // std::cout<<cout;

    // char ch = 'K';

    // if(ch == 'a' || ch == 'A')
    // cout<<"Vowel"<<endl;
    // else if(ch == 'e' || ch == 'E')
    // cout<<"Vowel"<<endl;
    // else if(ch == 'i' || ch == 'I')
    // cout<<"Vowel"<<endl;
    // else if(ch == 'o' || ch == 'O')
    // cout<<"Vowel"<<endl;
    // else if(ch == 'u' || ch == 'U')
    // cout<<"Vowel"<<endl;
    // else
    // cout<<"Consonent"<<endl;



    // int num = 15;

    // if(num%3 == 0 && num%5 == 0){
    //     cout<<" Divisible "<<endl;
    // }else{
    //     cout<<" Not Divisible "<<endl;
    // }



    // int num = 73;


    // if(num%7 == 0 || num%11 == 1)
    // cout<<"Perfect"<<endl;
    // else
    // cout<<" Not Perfect "<<endl;




    // int num1, num2;
    // cout<<" Enter Num1 : ";
    // cin>>num1;
    // cout<<" Enter Num2 : ";
    // cin>>num2;

    // int Sum = num1 + num2;
    // cout<<" Sum of : "<<Sum<<endl;

    // int Sub = num1 - num2;
    // cout<<" Sub of : "<<Sub<<endl;

    // int Multiply = num1 * num2;
    // cout<<" Multiply of : "<<Multiply<<endl;

    // float Divide = float(num1) / float(num2);
    // cout<<" Divide of : "<<Divide<<endl;


    // Leap Year Questions 
    
    // int year; 
    // cout<<"Enter a Year : ";
    // cin>>year;

    // if((year%400==0) || ((year%4==0) && (year%100 != 0))){
    //     cout<<year<< " is a Leap Year "<< endl;
    // }else{ 
    //     cout<<year<< " is not a Leap Year "<<endl;
    // }

    // if(year%400 == 0){
    //     cout<<year<< " is a Leap Year "<< endl;
    // }else if(year%4==0 && year%100 != 0){
    //     cout<<year<< " is a Leap Year "<< endl;
    // }else{
    //     cout<<year<< " is not a Leap Year "<< endl;
    // }

    //Print all even number between 2 to 100

    for(int i = 1; i<=100; i++){
        if(i%2==0){
            cout<<i<<endl;
        }
    }
    



    return 0;

}