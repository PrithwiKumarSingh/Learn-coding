#include <stdio.h> 
#define max 10

int queue[max];
int rear = -1, front = -1;

void enqueue(int val){
    if(rear== max-1){
        printf("queue is full");
        return;
    }else{
        if(rear == -1 && front == -1){
            rear = front = 0; 
        }else{
            rear++;
        }

        queue[rear] = val;
    }
}

void dequeue(){
    if(front == -1){
        printf("element not found");
        return; 
    }

    if(front == rear){
        front = rear = -1;
    }else{
        front++;
    }
}

void display(){
    
    if(front == -1){
        printf("Element not found");
        return;
    }
    
    for(int i=front; i<=rear; i++){
        printf("Element %d : %d\n", i, queue[i]);
    }

    printf("\n");

    
}


int main(){

    enqueue(20);
    enqueue(10);
    enqueue(5);

    dequeue();

    display();


    return 0;
}