#include <iostream>
using namespace std;
int main() {
  int counter = 0;
  int n;
  cout << "Enter Your Number : ";
  cin >> n;
  int a = n;
  int b = n;
  while (a != 0) {
    a /= 10;
    counter++;
  }

  int sum = 0;
  while (b != 0) {
    int rem = b % 10;
    int mul = 1;
    for (int i = 0; i < counter; i++) {
      mul = mul * rem;
    }
    sum += mul;
    b /= 10;
  }

  if (sum == n) {
    cout << n << " Number is Armstrong . " << endl;
  } else {
    cout << n << " Number is Not Armstrong . " << endl;
  }
  return 0;
}
