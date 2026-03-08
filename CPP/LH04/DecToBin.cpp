#include <iostream>
using namespace std;
int main() {
  int n;
  cout << "Enter Your Number : ";
  cin >> n;
  int con = 0;
  int Bin = 1;
  while (n != 0) {
    int rem = n % 2;
    n /= 2;
    con = con + rem * Bin;
    Bin *= 10;
  }
  cout << "Your Binary : " << con << endl;
  return 0;
}
