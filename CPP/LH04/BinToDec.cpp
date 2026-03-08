#include <iostream>
using namespace std;
int main() {
  long long n;
  cout << "Enter Your Binary : ";
  cin >> n;
  int mul = 1;
  int ans = 0;
  while (n != 0) {
    int rem = n % 10;
    n /= 10;
    ans = ans + rem * mul;
    mul *= 2;
  }
  cout << "Your Deciemal : " << ans << endl;
  return 0;
}
