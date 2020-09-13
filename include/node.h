#ifndef _NODE_H_
#define _NODE_H_

#include<stdlib.h>
#include<string.h>
#include "stack.h"

#define CALL_SIZE 5
#define NAME_SIZE 400


struct node{
    char name[NAME_SIZE];
    node* called[CALL_SIZE];
    node* prev;
    int cnt;
};

extern node* root;

void newSpan(const char *);
void childSpan(const char*);
void closeSpan();

#endif