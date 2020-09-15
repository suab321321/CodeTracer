const fs = require('fs');

// const array = fs.readFileSync("../../file.txt",'utf-8').split(' ');
// const CALL_SIZE = array.shift().split('"\"')[0];
// console.log(array);
// console.log(CALL_SIZE);

var CALL_SIZE = 0;
var arr = [];
var index = 0;



function recurse(){
    debugger
    if(arr[index] === "null"){
        ++index;
        return null;
    }
    let obj = {name:"",children:[]};
    const key = arr[index++];
    obj["name"] = key;
    for(var i=0;i<CALL_SIZE;i++){
        if(index >= arr.length)
            break;
        const val = recurse();
        if(val !== null)
            obj["children"].push(val);
    }
    return obj;
}

process.on("message",data=>{
    console.log(data);
    const array = fs.readFileSync(data,'utf-8').split(' ');
    CALL_SIZE = array.shift().split('"\"')[0];
    arr = array;
    process.send(recurse());
})

// process.send(recurse());