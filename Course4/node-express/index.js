const express= require("express");
const bodyParser=require("body-parser");
const http=require("http");
const app=express();

app.use(bodyParser.urlencoded({extended:true}));


app.listen(3000,()=>{console.log("Server running successfully at port 3000")});