const fs = require('fs');

const array = fs.readFileSync("../../file.txt",'utf-8').split(' ');
const CALL_SIZE = array.shift().split('"\"')[0];
console.log(array);
console.log(CALL_SIZE);

var arr = array;
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

process.send(recurse());