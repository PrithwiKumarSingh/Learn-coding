#include <iostream> 
#include <vector>
using namespace std; 

class Node {
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


    for(int i=0; i<arr.size(); i++){
        if(Head == NULL){
            Head = new Node(arr[i]);
        }
        else{
            Node *temp;
            temp = new Node(arr[i]);
            temp->n
        }
    }

}