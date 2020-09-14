const express = require('express');
const bodyParser = require('body-parser');
const {fork} = require("child_process");
const cors = require('cors');

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(cors());

app.get('/',(req,res)=>{
    const cp = fork('fork.js');
    cp.on('message',data=>{
        console.log(data);
        res.send(data);
    })
})


app.listen(3002);