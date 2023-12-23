import express from 'express'
import { dbconnection } from './database/dbconnection.js';
import userRouter from './src/modules/user/user.router.js';
import cors from "cors"
import dotenv from "dotenv"

const app = express()
const port = 3000
dotenv.config()
app.use(cors())
app.use(express.json())
app.use(userRouter)
dbconnection()
app.listen(process.env.PORT || port, () => console.log(`Example app listening on port ${port}!`))
