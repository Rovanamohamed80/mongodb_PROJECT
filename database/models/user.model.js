import mongoose from "mongoose"
const userSchema = mongoose.Schema({
    name:String,
    email:String,
    password:String,
    rePassword:String,
    phone:Number,
    address:String,
    id:Number,
 
})

export const userModel = mongoose.model('user',userSchema)