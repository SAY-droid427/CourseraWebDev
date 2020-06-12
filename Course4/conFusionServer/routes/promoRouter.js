const express=require("express");
const bodyParser=require("body-parser");
const app = express();
const promoRouter=express.Router();
promoRouter.route("/")
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader();
    next();
})
.get((req,res,next)=>{
 res.end("Sending all the promos to you!")
})
.post((req,res)=>{
 res.end("Adding the promos"+req.body.name+" with details"+req.body.description);
})
.put((req,res,next)=>{
    res.end("PUT operation not supported");

})
.delete((req,res,next)=>{
  res.end("Deletiong the items");
});

promoRouter.route("/:promoId")
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader();
    next();

})
.get((req,res,next)=>{
   res.end("Sending the promo" +req.params.promoId+"to you!");
})
.post((req,res,next)=>{
    res.end("Post operation not supported");
})
.put((req,res,next)=>{
    res.write("Updating the "+req.params.promoId);
    res.end("Will update the "+req.body.name+"with description"+req.body.description);

})
.delete((req,res,next)=>{
   res.end("Will delete the promo"+req.params.promoId);
});
module.exports=promoRouter;