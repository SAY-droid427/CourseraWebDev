const express=require("express");
const bodyParser=require("body-parser");
const app = express();
const leaderRouter=express.Router();
leaderRouter.use(bodyParser.json());
leaderRouter.route("/")
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader();
    next();
})
.get((req,res,next)=>{
 res.end("Sending all the leaders to you!")
})
.post((req,res)=>{
 res.end("Adding the promo"+req.body.name+" with details"+req.body.description);
})
.put((req,res,next)=>{
    res.end("PUT operation not supported");

})
.delete((req,res,next)=>{
  res.end("Deletiong the items");
});

leaderRouter.route("/:leaderId")
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader();
    next();

})
.get((req,res,next)=>{
   res.end("Sending the leader" +req.params.leaderId+"to you!");
})
.post((req,res,next)=>{
    res.end("Post operation not supported");
})
.put((req,res,next)=>{
    res.write("Updating the "+req.params.leaderId);
    res.end("Will update the "+req.body.name+"with description"+req.body.description);

})
.delete((req,res,next)=>{
   res.end("Will delete the leader"+req.params.leaderId);
});

module.exports=leaderRouter;