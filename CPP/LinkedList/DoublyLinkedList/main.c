#include <stdio.h>
#include <stdlib.h>

struct Node{
    int data; 
    struct Node *prev;
    struct Node *next;
};

void displayDLinkedList(struct Node *head){
    struct Node *ptr = head;
    while(ptr != NULL){
        printf("Node : %d \n", ptr->data);
        ptr = ptr->next ;
    }

}

int main(){
    struct Node *Head = NULL;
    struct Node *ptr = NULL;

    int arr[] = {3,4,5,6,79,55};

    for(int i=0; i<6; i++){
        struct Node *newNode = (struct Node*)malloc(sizeof(struct Node));
        newNode->data = arr[i];
        if(Head==NULL){
            Head = newNode;
            Head->next = NULL;
            Head->prev = NULL;
            ptr = Head;
        }
        else{
            newNode->prev = ptr;
            newNode->next = NULL;
            ptr->next = newNode;
            ptr = newNode;
        }
    }

    displayDLinkedList(Head);


    return 0;


}