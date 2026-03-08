#include <iostream>
using namespace std;
int main() {
  int num;
  cout << "Enter Your Number : ";
  cin >> num;

  int sum = 0;
  while (num != 0) {
    sum = sum + (num % 10);
    num /= 10;
  }
  cout << "Your Sum is : " << sum << endl;
  return 0;
}
