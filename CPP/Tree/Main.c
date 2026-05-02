#include <stdio.h> 
#include <stdlib.h>

struct Node {
    int data;
    struct Node *left, *right;
    
};

struct Node * create(){
    int val;
    scanf("%d", &val);
    
    if(val==-1){
        return NULL;
    }
    else{
        struct Node *temp = (struct Node*)malloc(sizeof(struct Node));
        temp->data = val;
        temp->left = create();
        temp->right = create();
        
        return temp;
    }
}

void PreOrder(struct Node *root){
    if(root == NULL){
        return;
    }
        printf("%d",root->data);
        PreOrder(root->left);
        PreOrder(root->right);
    
}
void InOrder(struct Node *root){
    if(root == NULL){
        return;
    }
        InOrder(root->left);
        printf("%d",root->data);
        InOrder(root->right);
    
}
void PostOrder(struct Node *root){
    if(root == NULL){
        return;
    }
        PostOrder(root->left);
        PostOrder(root->right);
        printf("%d",root->data);
    
}

int main(){
    printf("Enter values (-1 for NULL):\n");
    
    struct Node *root = create();
    
    printf("Here is The PreOrder : \n");
    PreOrder(root);
    printf("Here is The PostOrder : \n");
    PostOrder(root);
    printf("Here is The InOrder : \n");
    InOrder(root);
    
    
}