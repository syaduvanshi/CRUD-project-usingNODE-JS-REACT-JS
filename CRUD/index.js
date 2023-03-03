const express = require('express');
const app =express();
const bodypareser = require('body-parser');
const router = require("./routes/user")

app.use(bodypareser.json());
app.use(express.json());
var cors = require('cors');
app.use(cors());
//app.use(cors());

app.use("/", router);

app.all('*',(req,res)=>{
    res.send("route doen't exists");
})

app.listen(5000,()=>{
    console.log("running");
})


