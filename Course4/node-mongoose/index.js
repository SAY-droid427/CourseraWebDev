const mongoose=require("mongoose");
const Dishes=require("./models/dishes.js");

const connect=mongoose.connect("mongodb://localhost:27017/conFusion",{useNewUrlParser:true,useUnifiedTopology:true});

connect.then((db)=>{
    console.log("Connected correctly to the server");
   Dishes.create({
       name:"Uthapizza",
       description:"Test"
   })
    .then((dish)=>{
        console.log(dish);
        return Dishes.find({}).exec();
    })
    .then((dishes)=>{
        console.log(dishes);
        return Dishes.remove({});
    })
    .then(()=>{
        return mongoose.connection.close();
    })
    .catch((err)=>{
        console.log(err);
    });
})