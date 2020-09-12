#include "../include/stack.h"

stack* top = NULL;

void push(node* addr){
    stack* n = (stack*)malloc(sizeof(stack));
    n->prev = NULL;
    n->next = NULL;
    n->address = NULL;

    n->address=addr;
    if(top!=NULL){
        n->prev = top;
        top->next = n;
    }
    top=n;
}

void pop(){
    if(top==NULL)
        return;
    stack* hld = top->prev;
    free(top);
    hld->next = NULL;
    top=hld;
}