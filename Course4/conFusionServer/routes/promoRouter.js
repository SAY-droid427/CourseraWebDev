const express=require("express");
const bodyParser=require("body-parser");
const app = express();
const promoRouter=express.Router();
const Promotions=require("../modules/promotions");
promoRouter.route("/")

.get((req,res,next)=>{
    Promotions.find({})
    .then((promo)=>{
        res.statusCode=200;
        res.setHeader("Content-Type","application/json");
        res.json(promo);
    },(err)=>next(err))
    .catch((err)=>next(err));
})
.post((req,res)=>{
    Promotions.create((req.body)
    .then((promo)=>{
        console.log("Created the leader",promo);
        res.statusCode=200;
        res.setHeader("Content-Type","application/json");
        res.json(promo);
    },(err)=>next(err))
    .catch((err)=>next(err))
    )})
.put((req,res,next)=>{
    res.statusCode=403;
    res.end("PUT operation not supported");

})
.delete((req,res,next)=>{
     Promotions.remove({})
    .then((resp)=>{
        console.log("Deleted all the promotions");
        res.statusCode=200;
        res.setHeader("Content-Type","application/json");
        res.json(resp);
    },(err)=>next(err))
    .catch((err)=>next(err));
});

promoRouter.route("/:promoId")

.get((req,res,next)=>{
    Promotions.findById(body.params.promoId)
    .then((promo)=>{
        res.statusCode=200;
        res.setHeader("Content-Type","application/json");
        res.json(promo);
    },(err)=>next(err))
    .catch((err)=>next(err));
})
.post((req,res,next)=>{
    res.statusCode=403;
    res.end("Post operation not supported");
})
.put((req,res,next)=>{
    Promotions.findByIdAndUpdate(body.params.promoId,{
        $set:req.body
    },{new:true})
    .then((promo)=>{
        console.log("Updated ",promo);
        res.statusCode=200;
        res.setHeader("Content-Type","application/json");
        res.json(promo);
    
    },(err)=>next(err))
    .catch((err)=>next(err));

})
.delete((req,res,next)=>{
    Leaders.findByIdAndRemove(req.params.promoId)
    .then((resp)=>{
        res.statusCode=200;
        res.setHeader("Content-Type","application/json");
        res.json(resp);
    },(err)=>next(err))
    .catch((err)=>next(err))
});
module.exports=promoRouter;