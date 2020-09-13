#include "../include/node.h"
#include "../include/seriliaze.h"


#include<stdio.h>


void funcA1(){
    childSpan(__PRETTY_FUNCTION__);
    pop();
}

void funcA2(){
    childSpan(__PRETTY_FUNCTION__);
    pop();
}

void funcA(){
    childSpan(__PRETTY_FUNCTION__);
    funcA1();
    funcA2();
    pop();
}

void funcB1(){
    childSpan(__PRETTY_FUNCTION__);
    pop();
}

void funcB2(){
    childSpan(__PRETTY_FUNCTION__);
    pop();
}

void funcB(){
    childSpan(__PRETTY_FUNCTION__);
    funcB1();
    funcB2();
    pop();
}

int main(){
   newSpan(__PRETTY_FUNCTION__);
    funcA();
    funcB();
    pop();

    serialize(root);
    printf("%s\n",getStream());
}