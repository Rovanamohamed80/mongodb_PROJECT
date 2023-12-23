import { patientModel } from "../../../database/models/patient.model.js";
import { userModel } from "../../../database/models/user.model.js";
import { hospitalModel } from "../../../database/models/hospital.model.js";
import { observerModel } from "../../../database/models/observer.model.js";
import bcrypt from "bcrypt";
let userData={}

const signUp =  async (req, res) =>{
    const {name,email,phone,address, rePassword, password}=req.body
    
    const user = await userModel.findOne({email})
    if(user){
        return res.json({
            message: "email already exists"
        })
    }else{
        const hash = bcrypt.hashSync(password, 8);

        await userModel.insertMany({name,email,phone,address,rePassword:hash, password:hash})
        res.json({message:"succeess"})
        
          userData={
                userName:name,
                userEmail:email,
                userPhone:phone,
                userAddress:address,
                userPassword:password,
                userRepassword:rePassword
            
        }
    } 
   }
  
   const signIn =  async (req, res) =>{
    const{email,password}=req.body
    let user = await userModel.findOne({email})
    if(user && bcrypt.compareSync(password, user.password)){
    
            res.json({message:"email with token"})
    } else{
        res.json({message:"user not found or password is incorrect"})
    }
   }

   const patient =  async (req, res) =>{
    const {age,gender,height,weight,chronicDiseases,id}=req.body
        await patientModel.insertMany({id,age,gender,height,weight,chronicDiseases,name:userData.userName,email:userData.userEmail,address:userData.userAddress,password:userData.userPassword,rePassword:userData.userRepassword,phone:userData.userPhone})

       
        res.json({message:"succeess"})
     
   }
   const hospital =  async (req, res) =>{
    const {doctorName,doctorId,doctorGender}=req.body
        await hospitalModel.insertMany({doctorName,doctorId,doctorGender, name:userData.userName,email:userData.userEmail,address:userData.userAddress,password:userData.userPassword,rePassword:userData.userRepassword,phone:userData.userPhone})

       
        res.json({message:"succeess"})
     
   }

   const observer =  async (req, res) =>{
    const {age,gender,id}=req.body
        await observerModel.insertMany({id,age,gender,name:userData.userName,email:userData.userEmail,address:userData.userAddress,password:userData.userPassword,rePassword:userData.userRepassword,phone:userData.userPhone})

       
        res.json({message:"succeess"})
     
   }

export {
    signUp,
    signIn,
    patient,
    hospital,
    observer
}