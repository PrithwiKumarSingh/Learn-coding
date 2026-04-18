#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node *next;
};

void displayCirLinkedList(struct Node *head){
    struct Node *ptr = head;
    do{
        printf("Node : %d\n",ptr->data);
        ptr = ptr->next;
    }
    while(ptr!=head);
    
};



int main(){

    struct Node *Head = NULL;
    struct Node *ptr = NULL;

    int arr[] = {3,5,6,7,9};

    for(int i=0; i<5; i++){
        struct Node *newNode = (struct Node *)malloc(sizeof(struct Node));
        newNode->data = arr[i];
        if(Head==NULL){
            Head = newNode;
            Head->next = Head;
            ptr = Head;
        } else{
            newNode->next = Head;
            ptr->next = newNode;
            ptr = newNode;
        }
    }

    displayCirLinkedList(Head);

    return 0;

    
}