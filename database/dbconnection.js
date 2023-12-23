import mongoose from "mongoose";
export const dbconnection=()=>{
    mongoose.set('strictQuery',true)
mongoose.connect('mongodb+srv://rovana:rovana123@cluster0.nvo9r1n.mongodb.net/eye')
.then(conn => console.log(`database connected on ${process.env.DB_CONNECTION}`)
).catch((err)=>{
    console.log("database did not connect")
})
}
