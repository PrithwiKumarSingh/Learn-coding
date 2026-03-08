#include <stdio.h>
int max = 5;
int arr[5];
int top = -1;
void printing();
void push(int n);
void pop(int n);
int main() {
  int ch;
  scanf("%d", &ch);
  switch (ch) {
  case 1: {
    printf("Element ot be Insert : ");
    int n;
    scanf("%d", &n);
    int num;
    for (int i = 0; i < n; i++) {
      printf("Enter %d : ", i);
      scanf("%d", &num);
      push(num);
    }
    pop(2);
    printing();

    break;
  }
  case 2:
    pop(1);
  }
  return 0;
}

void printing() {
  for (int i = 0; i <= top; i++) {
    printf(" %d \n", arr[i]);
  }
}
void push(int n) {
  if (top == max - 1) {
    printf("Stack is full");
  } else {
    top++;
    arr[top] = n;
  }
}

void pop(int n) {
  for (int i = 0; i < n; i++) {
    if (top == -1) {
      printf("Stack is Empty");
      break;
    } else {
      top--;
    }
  }
}
