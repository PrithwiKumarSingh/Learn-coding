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

void NodeCount(struct Node *head){
    int count = 0; 
    struct Node *temp = head;
    while(temp!=NULL){
        count++;
        temp = temp->next;
    }
    printf("Node Count : %d",count) ;
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

    return newNode;
}

struct Node* insertAtEnd(struct Node *head, int data){
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

struct Node* insertAtIndex(struct Node* head, int index, int data){
    struct Node *newNode = (struct Node*)malloc(sizeof(struct Node));
    struct Node *p = head;
    int count = 0;
    while(count != index-1){
        p = p->next;
        count++;
    }

    newNode->data = data;
    newNode->next = p->next;
    p->next = newNode;

    return head;
}

struct Node* deleteAtStart(struct Node *Head){
    struct Node *phead = Head;
    Head = Head->next;
    free(phead);
    return Head;
}

struct Node* deleteAtEnd(struct Node *Head){
    struct Node *p = Head;
    struct Node *q = Head->next;
    while(q->next != NULL){
        p = p->next;
        q = q->next;
    }
    p->next = NULL;
    free(q);
    return Head;
}

struct Node* deleteAtIndex(struct Node *head, int index){
    struct Node *p = head;
    struct Node *q = head->next;

    int count = 0;

    while(count != index-1 ){
        p = p->next;
        q = q->next;
        count++;
    }

    p->next =  q->next;
    free(q);
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

    if(Head == NULL){
        printf("Memroy is Not allocated");
        return 0;
    }

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


    Head = insertAtIndex(Head,2, 45);
    Head = insertAtEnd(Head,56);
    // Head = deleteAtStart(Head);
    // Head = deleteAtEnd(Head);
    Head = deleteAtIndex(Head,2);
    displayLinkedList(Head);
    NodeCount(Head);




    


    

    printf("\nConnected Successfully");



}

