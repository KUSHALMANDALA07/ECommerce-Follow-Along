const mongoose = require("mongoose");
const { use } = require("../controller/userRouter");

const schema = mongoose.Schema({
    title:{type:String,required:true,trim:true},
    description:{type:String,requied:true,trim:true},
    price:{type:Number,required:true},
    images:{type:[String],required:true},
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},
    createdAt:{type:Date,default:Date.now}
},{timestamps:true});

const productModel = mongoose.model("products",schema);

module.exports = productModel;