
import mongoose from "mongoose"

const patientSchema = mongoose.Schema({
    name:String,
    email:String,
    password:String,
    rePassword:String,
    phone:Number,
    address:String,
    id:Number,
    age:Number,
    gender:String,
    height:Number,
    weight:Number,
    chronicDiseases:String
   
})
export const patientModel = mongoose.model('patient',patientSchema)