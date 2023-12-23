import express from 'express'
import { signUp,signIn,patient,hospital, observer} from './user.controller.js'

const userRouter = express.Router()
userRouter.post('/signUp',signUp)
userRouter.post('/signIn',signIn)
userRouter.post('/patient',patient)
userRouter.post('/hospital',hospital)
userRouter.post('/observer',observer)
export default userRouter