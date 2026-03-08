#include <iostream>
using namespace std;
int main() {
  int marks[5] = {89, 48, 90, 97, 78};
  int a = marks[0];
  a = 5;
  for (int i = 0; i < 5; i++) {
    cout << marks[i] << endl;
  }
  return 0;
}
