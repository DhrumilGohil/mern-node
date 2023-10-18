const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
mongoose.connect("mongodb://52.91.163.65:27017/BlogApp").then(()=>{
    console.log("connected!");
}).catch((err)=>{
    console.log(err);
    console.log("error");
})
console.log("hell");
