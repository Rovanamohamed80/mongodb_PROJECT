
import mongoose from "mongoose"

const observerSchema = mongoose.Schema({
    name:String,
    email:String,
    password:String,
    rePassword:String,
    phone:Number,
    address:String,
    id:Number,
    age:Number,
    gender:String,
    
   
})
export const observerModel = mongoose.model('observer',observerSchema)