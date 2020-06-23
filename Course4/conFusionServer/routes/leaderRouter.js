const express=require("express");
const bodyParser=require("body-parser");
const app = express();
const leaderRouter=express.Router();
const Leaders=require("../models/leaders");
const authenticate=require("../authenticate");
leaderRouter.use(bodyParser.json());
leaderRouter.route("/")

.get((req,res,next)=>{
Leaders.find({})
.then((leader)=>{
    res.statusCode=200;
    res.setHeader("Content-Type","application/json");
    res.json(leader);
},(err)=>next(err))
.catch((err)=>next(err));
})
.post(authenticate.verifyUser,(req,res)=>{
 Leaders.create((req.body)
 .then((leader)=>{
     console.log("Created the leader",leader);
     res.statusCode=200;
     res.setHeader("Content-Type","application/json");
     res.json(leader);
 },(err)=>next(err))
 .catch((err)=>next(err))
 )
})
.put(authenticate.verifyUser,(req,res,next)=>{
    res.statusCode=403
    res.end("PUT operation not supported");

})
.delete(authenticate.verifyUser,(req,res,next)=>{
    Leaders.remove({})
    .then((resp)=>{
        console.log("Deleted all the leaders");
        res.statusCode=200;
        res.setHeader("Content-Type","application/json");
        res.json(resp);
    },(err)=>next(err))
    .catch((err)=>next(err));
});


leaderRouter.route("/:leaderId")

.get((req,res,next)=>{
    Leaders.findById(body.params.leaderId)
    .then((leader)=>{
        res.statusCode=200;
        res.setHeader("Content-Type","application/json");
        res.json(leader);
    },(err)=>next(err))
    .catch((err)=>next(err));
})
.post(authenticate.verifyUser,(req,res,next)=>{
    res.statusCode=403;
    res.end("Post operation not supported");
})
.put(authenticate.verifyUser,(req,res,next)=>{
Leaders.findByIdAndUpdate(body.params.leaderId,{
    $set:req.body
},{new:true})
.then((leader)=>{
    console.log("Updated ",dish);
    res.statusCode=200;
    res.setHeader("Content-Type","application/json");
    res.json(leader);

},(err)=>next(err))
.catch((err)=>next(err));
})
.delete(authenticate.verifyUser,(req,res,next)=>{
  Leaders.findByIdAndRemove(req.params.leaderId)
  .then((resp)=>{
      res.statusCode=200;
      res.setHeader("Content-Type","application/json");
      res.json(resp);
  },(err)=>next(err))
  .catch((err)=>next(err))
});

module.exports=leaderRouter;