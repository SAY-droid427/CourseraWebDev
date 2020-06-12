const express=require("express");
const bodyParser=require("body-parser");
const app = express();
const dishRouter=express.Router();
dishRouter.use(bodyParser.json());
dishRouter.route("/")
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader();
    next();
})
.get((req,res,next)=>{
 res.end("Sending all the dishes to you!")
})
.post((req,res)=>{
 res.end("Adding the dish"+req.body.name+" with details"+req.body.description);
})
.put((req,res,next)=>{
    res.end("PUT operation not supported");

})
.delete((req,res,next)=>{
  res.end("Deletiong the items");
});

dishRouter.route("/:dishId")
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader();
    next();

})
.get((req,res,next)=>{
   res.end("Sending the dish" +req.params.dishId+"to you!");
})
.post((req,res,next)=>{
    res.end("Post operation not supported");
})
.put((req,res,next)=>{
    res.write("Updating the "+req.params.dishId);
    res.end("Will update the "+req.body.name+"with description"+req.body.description);

})
.delete((req,res,next)=>{
   res.end("Will delete the dish"+req.params.dishId);
});

module.exports=dishRouter;