#include <iostream>
#include <vector>
using namespace std;
int main() {
  vector<int> arr(5);
  arr[0] = 2;
  arr[1] = 3;
  arr[2] = 4;
  arr[3] = 5;
  arr[4] = 6;

  arr.push_back(7);
  arr.push_back(8);
  int n = arr.size();
  for (int i = 0; i < n; i++) {
    cout << arr[i] << " ";
  }
}
