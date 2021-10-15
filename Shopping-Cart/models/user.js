const mongoose =require('mongoose');
const bcyrpt =require('bcrypt');


const UserSchema =mongoose.Schema({
    email:{
        type:String ,
        required:true
    } ,
    password:{
        type:String ,
        required:true
    },
})
  
UserSchema.methods.hashPassword=function(password){
    return bcyrpt.hashSync(password,bcyrpt.genSaltSync(5),null)
}

module.exports=mongoose.model('user',UserSchema);