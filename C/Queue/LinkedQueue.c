#include <stdio.h>
#include <stdlib.h>

struct Node *front = NULL, *rear = NULL;

struct Node{
    int data;
    struct Node *next;
};

void enqueue(int val){
    struct Node *newNode = (struct Node*)malloc(sizeof(struct Node));

    if(newNode == NULL){
        printf("Memory is not allocated");
        return;
    }

    newNode->data = val;
    newNode->next = NULL;

    if(front == NULL){
        front = rear = newNode;
    }else{
        rear->next = newNode;
        rear = newNode;
    }

}

void display(){
    if(front==NULL){
        printf("queue is empty");
        return;
    }

    struct Node *temp = front;

    while(temp != NULL){
        printf("%d  ", temp->data);
        temp = temp->next;
    }

}


void dequeue(){

    if(front == NULL){
        printf("queue is empty");
        return;
    }

    struct Node *temp = front;

    if(front == rear){
        front = rear = NULL;
    }

    front = front->next;

    free(temp);
    
}

int main(){

    enqueue(10);
    enqueue(20);
    enqueue(90);
    enqueue(30);

    dequeue();

    display();

    return 0;
}
