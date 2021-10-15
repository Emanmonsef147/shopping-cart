 const mongoose = require('mongoose');
 const ProductSchema = mongoose.Schema({
     imgpath:{
         type:String,
         required:true
     },
     productName:{
        type:String,
        required:true
     },
     Information:{
         type:{
            Size:Number,
            Color:String,
            RAM:Number,
            numberofSIM: String
         } ,
         required:true
     },
     Price:{
         type:Number,
         required:true
     }
 })


 module.exports=mongoose.model('product',ProductSchema);