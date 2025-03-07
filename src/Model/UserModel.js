const mongoose = require("mongoose")

const Schema  = mongoose.Schema

const UserSchema  = new Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    fullname:{
        type:String,
        required:true,
    },
    phonenumber:{
        type:Number,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    profilePic:{
        type:String,
        required:true,
        default:""
    }
   },
   {
    timestamps:true
   }

)

const User = mongoose.model("Users" , UserSchema)


module.exports = {
    User
} 
