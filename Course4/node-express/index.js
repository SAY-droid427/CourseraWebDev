const express= require("express");
const bodyParser=require("body-parser");
const http=require("http");
const app=express();
const dishRouter=require("./routes/dishRouter");

app.use("/dishes",dishRouter);
app.use(bodyParser.urlencoded({extended:true}));
 
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.send("<h1>Hello!</h1>");
})



app.all("/dishes/:dishId",(req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/css');
    next();
})

app.get("/dishes/:dishId",(req,res)=>{
    res.end("Will send all the dish"+req.params.dishId+" to you!")
})

app.post("/dishes/:dishId",(req,res)=>{
    res.end("POST operation not supported on /dishes/id" )
})

app.put("/dishes/:dishId",(req,res)=>{
    res.write("Updating the dish: "+req.body.name+" with details "+req.body.description);
})

app.delete("/dishes/:dishId",(req,res)=>{
    res.end("deleting all the dishes");
})
app.listen(3000,()=>{console.log("Server running successfully at port 3000")});