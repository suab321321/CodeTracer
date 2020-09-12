#include "../include/node.h"

node* root = NULL;

void newSpan(const char* name){
    root = (node*)malloc(sizeof(node));
    strcpy(root->name, name);
}

void childSpan(const char* name, node* parentSpan){
    node* nnode = (node*)malloc(sizeof(node));
    nnode->prev = NULL;
    nnode->cnt=0;
    nnode->prev = parentSpan;
    strcpy(nnode->name, name);
    parentSpan->called[parentSpan->cnt++] = nnode;
}