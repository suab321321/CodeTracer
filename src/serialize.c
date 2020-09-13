#include "../include/seriliaze.h"

char stream[100000]={'\0'};

void serialize(node* root){
    strcat(stream ," ");
    if(root == NULL){
        strcat(stream, "null");
    }
    else{
        char name[400] = {'\0'};
        strcat(stream, root->name);
        for(int i=0;i<CALL_SIZE;i++)
            serialize(root->called[i]);
    }
}

char* getStream(){
    FILE* ptr;
    ptr = fopen("file.txt","w");
    if(ptr == NULL){
        printf("Error happened opening file\n");
        return NULL;
    }
    fprintf(ptr,"%d\n",CALL_SIZE);
    fprintf(ptr,"%s",stream);
    fclose(ptr);
    return stream;
}