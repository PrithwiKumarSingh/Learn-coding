#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node * next;
};

struct Node* insertAtEnd(struct Node *head, int data){
    struct Node * newNode = (struct Node * )malloc(sizeof(struct Node));

    if(!newNode){
        printf("Memory Not Allocated");
        return head;
    }
    
    newNode->data = data;
    newNode->next = NULL;

    if(head == NULL){
        return newNode;
    }
    
    struct Node *ptr = head;
    while(ptr->next != NULL){
        ptr = ptr->next;
    }

    ptr->next = newNode;

    return head;

}

void printing(struct Node * head){
    struct Node * temp = head;

    while(temp != NULL){
        printf("%d -> ", temp->data);
        temp = temp->next;
    }

    printf("NULL\n");

}

struct Node* createSL(struct Node *head, int n){
    struct Node *ptr = NULL;

    for(int i=0; i<n; i++){
        
        struct Node * newNode = (struct Node*)malloc(sizeof(struct Node));

        if(!newNode){
            printf("Memory Not allocated");
            return NULL;
        }
        int x;
        printf("Enter Your Number : ");
        scanf("%d",&x);

        newNode->data = x;
        newNode->next = NULL;

        if(head == NULL){
            head = newNode;
            ptr = head;
        }else{
            ptr->next = newNode;
            ptr = newNode;
        }
        
    }

    return head;
}

struct Node * insertAtStart(struct Node*head, int data){

    struct Node *newNode = (struct Node*)malloc(sizeof(struct Node));
    if(!newNode){
        printf("Memory Not Allocated");
        return head;
    }

    newNode->data = data;
    newNode->next = head;
    head = newNode;

    return head;
}

struct Node * insertAtIndex(struct Node*head, int data, int index){
    struct Node * newNode = (struct Node*)malloc(sizeof(struct Node));
    if(!newNode){
        printf("Memory Not allocated");
        return head;
    }

    if(index == 0){
        return insertAtStart(head, data);
        
    }

    newNode->data = data;

    struct Node *ptr = head;
    int count = 0;

    while(ptr != NULL && count < index-1 ){
        ptr = ptr->next;
        count++;
    }

    if(ptr==NULL){
        printf("Index Out of Bound");
        free(newNode);
        return head;
    }

    newNode->next = ptr->next;
    ptr->next = newNode;

    return head;
}

struct Node * deleteAtStart(struct Node*head){
    struct Node *ptr = head;
    head = head->next;
    free(ptr);

    return head;

}

struct Node * deleteAtEnd(struct Node * head)
{
    struct = newNode
};


int main(){

    struct Node *head = NULL;

    int n ;
    scanf("%d",&n);

    head = createSL(head,n);
    
    head = insertAtStart(head, 300);
    head = insertAtStart(head, 100);
    head = insertAtEnd(head,8);

    head = insertAtIndex(head,78, 6);
    head = deleteAtStart(head);

    printing(head);

    return 0;
}