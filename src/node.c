#include "../include/node.h"

node* root = NULL;

void updateStack(node* n,short i){
    if(i)
        push(n);
    else
        pop();
}

void newSpan(const char* name){
    root = (node*)malloc(sizeof(node));
    strcpy(root->name, name);
    updateStack(root,1);
}

void childSpan(const char* name){
    node* nnode = (node*)malloc(sizeof(node));
    nnode->prev = NULL;
    nnode->cnt=0;
    nnode->prev = top->address;
    strcpy(nnode->name, name);
    top->address->called[top->address->cnt++] = nnode;
    updateStack(nnode,1);
}

void closeSpan(){
    updateStack(NULL,0);
}