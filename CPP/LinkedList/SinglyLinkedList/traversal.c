#include <stdio.h>
#include <stdlib.h>

struct Node{
    int data; 
    struct Node *next ;
};

void displayLinkedList(struct Node *head){
    struct Node *temp = head;
    while(temp != NULL){
        printf("Node : %d \n", temp->data);
        temp = temp->next;
    }
}

int NodeCount(struct Node *head){
    int count = 0; 
    struct Node *temp = head;
    while(temp!=NULL){
        count++;
        temp = temp->next;
    }
    return count;
};

int searchElement(struct Node *head, int key){

    struct Node *temp = head;

    while(temp!=NULL){
        if(temp->data == key){
            return 1;
        }
        temp = temp->next;
    }
    return 0;
};


struct Node* insertAtBeginning(struct Node *head, int data){
    struct Node *newNode; 
    newNode = (struct Node *)malloc(sizeof(struct Node));
    newNode->data = data;
    newNode->next = head;
    head = newNode;

    return head;
}

struct Node* insertAtEnd(struct node *head, int data){
    struct Node *newNode = (struct Node*)malloc(sizeof(struct Node));
    struct Node *temp = head;

    newNode->data = data;
    newNode->next = NULL;

    if(head==NULL){ 
        return newNode;
    }

    while(temp->next!=NULL){
        temp = temp->next;
    }

    temp->next = newNode;

    return head;

}




int main(){
    struct Node *Head; 
    struct Node *Second;
    struct Node *Third;
    struct Node *Four;


    // Heap Memory allocation ( Dynamically )
    Head = (struct Node *)malloc(sizeof(struct Node));
    Second = (struct Node *)malloc(sizeof(struct Node));
    Third = (struct Node *)malloc(sizeof(struct Node));
    Four = (struct Node *)malloc(sizeof(struct Node));

    // link first and second node
    Head->data = 4; 
    Head->next = Second;

    // link second and third node
    Second->data = 5; 
    Second->next = Third;

    // link second and third node
    Third->data = 6;
    Third->next = Four;

    // link third and fourth
    Four->data = 10;
    Four->next = NULL;


    Head = insertAtBeginning(Head,40);
    displayLinkedList(Head);

    int count = NodeCount(Head);
    printf("Node Count : %d\n",count);

    int found = searchElement(Head,60);
    if(found)
        printf("Element Present in LL");
    else
        printf("Element is not found in LL");


    


    

    printf("\nConnected Successfully");



}

