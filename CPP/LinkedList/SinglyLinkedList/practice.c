#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node * next;
};



void displayList(struct Node *head){
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

int countNodes(struct Node *head){
    struct Node *ptr = head;
    int count = 0;
    while(ptr != NULL){
        ptr = ptr->next;
        count++;
    }

    return count;
}

// Insert Node (start, index , end);
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

// Delete Node (start, index, end);

struct Node * deleteAtStart(struct Node*head){
    if(head == NULL)
        return NULL;

    struct Node *ptr = head;
    head = head->next;
    free(ptr);

    return head;

}

struct Node * deleteAtEnd(struct Node * head)
{
    if(head == NULL){
        return NULL;
    }

    if(head->next == NULL){
        free(head);
        return NULL;
    }


    struct Node * prev = head;
    struct Node * last = head->next;

    while(last->next != NULL){
        prev = last;
        last = last->next;
    }

    prev->next = NULL;
    free(last);
    
    return head;
};

struct Node * deleteAtIndex(struct Node*head, int index){
    if(head == NULL){
        return NULL;
    }

    if(index==0){
        return deleteAtStart(head);
    }

    struct Node * prev = head;

    for(int i=0; i<index-1; i++){
        if(prev->next == NULL){
            printf("Index is Out of Bound");
            return head;
        }

        prev = prev->next;
    }

    struct Node * curr = prev->next;

    if(curr==NULL){
        printf("Index is Out of Bound");
        return head;
    }

    prev->next = curr->next;
    free(curr);

    return head;
}

// Search Element 

int searchElement(struct Node *head, int key){
    struct Node * ptr = head;
    int count = 0;
    while(ptr!=NULL){
        count++;
        if(ptr->data == key){
            return count;
        }

        ptr = ptr->next;
    }

    return -1;
}

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
    head = deleteAtEnd(head);

    displayList(head);
    int count = countNodes(head);
    printf("Count of Nodes : %d\n",count);

    int index = searchElement(head,78);
    if(index > 0){
        printf("Found on Node : %d\n",index);
    }else{
        printf("Not Found in Nodes\n");
    }

    return 0;
}