#include <iostream> 
using namespace std; 
int main() {
    int num ;
    cout<<"Enter Your Number : ";
    cin>>num;

    int first_number = 0;
    int second_number = 1;
    int current_number;


        if (num >= 1) cout << first_number << " ";
        if (num >= 2) cout << second_number << " ";
    
        for(int i=3; i<=num; i++){
            current_number = first_number + second_number;
            first_number = second_number;
            second_number = current_number;
            cout<<current_number<<" ";
        }
        cout<<endl;



    return 0;

}

//    0   1    1    2    3     5     8     13    21  -- Fabonacci
//    1   2    3    4    5     6     7     8     9   -- index