const express = require('express');
const bodyParser = require('body-parser');
const {fork} = require("child_process");
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const app = express();
// app.use(express.static("./public/uploads"));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(cors());

const storage = multer.diskStorage({
    destination:'public',
    filename:(req,file,cb)=>{
        cb(null, new Date()+file.originalname);
    }
});

const upload = multer({storage:storage}).single('file');

app.get('/',(req,res)=>{
    const cp = fork('fork.js');
    cp.on('message',data=>{
        console.log(data);
        res.send(data);
    })
});

app.post('/uploadFile',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            const cp = fork("fork.js");
            cp.send(req.file.path);
            cp.on("message",data=>{
                res.send(data);
            })
        }
    })
})


app.listen(3002);