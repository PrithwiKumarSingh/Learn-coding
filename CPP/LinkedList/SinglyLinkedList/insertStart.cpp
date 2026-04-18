#include <iostream> 
#include <vector>
using namespace std; 

class Node {
    public:
    int data; 
    Node *next;

    Node(int value){
        data = value;
        next = NULL;
    }

};

int main(){

    vector<int>arr = {2,3,4,5,6};

    Node *Head;
    Head = NULL;

    // Insert element in begining of the LL

    for(int i=0; i<arr.size(); i++){
        if(Head==NULL){
        Head = new Node(arr[i]);
         } 
         else{
            Node *temp;
            temp = new Node(arr[i]);
            temp->next = Head;
            Head = temp;
        }
    }

    // Print the linked list

    Node *temp = Head;

    while(temp != NULL){
        cout<< temp->data <<" ";
        temp = temp->next;
    }

   

    return 0;
}