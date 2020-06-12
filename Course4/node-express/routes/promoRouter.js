const express=require("express");
const bodyParser=require("body-parser");
const promoRouter=express.Router();
promoRouter.use(bodyParser.json());

promoRouter.route("/")
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/css');
    next();
})

.get((req,res,next)=>{
    res.end("Will send all the dishes to you!")
})

.post((req,res,next)=>{
    res.end("Will add the dish:"+req.body.name+" with details:"+req.body.description)
})

.put((req,res,next)=>{
    res.statusCode=403;
    res.end("PUT operation not supported");
})

.delete((req,res,next)=>{
    res.end("deleting all the dishes");
})

promoRouter.route("/:promoId")
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next();
})

.get((req,res,next)=>{
    res.end("Will send" +req.params.promoId+" to you!")
})

.post((req,res,next)=>{
    res.write('Updating the promo' + req.params.promoId);
	res.end('\nWill update the promo: ' + req.body.name + 
            ' with details: ' + req.body.description);
})

.put((req,res,next)=>{
    res.statusCode=403;
    res.end("PUT operation not supported");
})

.delete((req,res,next)=>{
    res.end("deleting the promotion "+req.params.promoId);
})

module.exports=promoRouter;