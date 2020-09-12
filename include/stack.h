
#ifndef __STACK_H
#define _STACK_H_   

#include<stdlib.h>

#include "node.h"

typedef struct stack stack;

struct stack{
    node* address;
    stack* prev;
    stack* next;
    int test;
};

extern stack* top;

void push(node*);
void pop();

#endif