const express= require("express");
const bodyParser=require("body-parser");
const http=require("http");
const app=express();
const dishRouter=require("./routes/dishRouter");
const promoRouter=require("./routes/promoRouter");
const leaderRouter=require("./routes/leaderRouter");

app.use("/dishes",dishRouter);
app.use("/leaders",leaderRouter);
app.use("/promotions",promoRouter);
app.use(bodyParser.urlencoded({extended:true}));
 
app.use(express.static("public"));





app.listen(3000,()=>{console.log("Server running successfully at port 3000")});